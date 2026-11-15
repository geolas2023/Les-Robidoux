// Visite animée : la carte suit les Robidoux étape par étape.
// - Lieu : la caméra s'envole vers le point, l'entrée du journal s'affiche, courte pause.
// - Route : un navire (en mer) ou un canot (rivières, portages) parcourt le tracé ; la ligne se dessine
//   derrière lui, la caméra le suit et la timeline avance avec lui.
// Dépend de app.js (carte, curseur, appliquerDate, afficherFiche, constantes de la timeline).

const Visite = (() => {
  let etapes = [], index = 0, enCours = false, anim = null, minuterieVisite = null, marqueur = null;
  const vitesse = () => Number(document.getElementById('vitesse')?.value || 1);

  const km = (a, b) => {
    const dx = (a[0] - b[0]) * 111.32 * Math.cos((a[1] + b[1]) / 2 * Math.PI / 180), dy = (a[1] - b[1]) * 110.57;
    return Math.hypot(dx, dy);
  };
  function positionDate(t) { // date décimale -> position du curseur
    if (t < AN_DETAIL) return Math.max(0, Math.min(NB_ANNEES - 1, Math.floor(t) - AN_DEBUT));
    return Math.min(POS_MAX - 1, NB_ANNEES + Math.floor((t - AN_DETAIL) * 12 + 1e-6));
  }
  function regler(t) { const v = positionDate(t); curseur.value = v; appliquerDate(v); }

  function preparer() {
    const { lieux, trajets } = window.DONNEES;
    const liste = [
      ...lieux.features.map(f => ({ f, type: 'lieu', debut: f.properties.debut })),
      ...trajets.features.map(f => ({ f, type: 'trajet', debut: f.properties.debut }))
    ];
    // ordre chronologique ; à date égale, le lieu avant la route qui en part
    liste.forEach((e, i) => { e.ordre = i; });
    etapes = liste.sort((a, b) => a.debut - b.debut || (a.type === b.type ? 0 : a.type === 'lieu' ? -1 : 1) || a.ordre - b.ordre);
  }

  function creerMarqueur() {
    const el = document.createElement('div');
    el.className = 'marqueur-navire';
    el.innerHTML = '<img src="images/galion.svg" alt="">';
    marqueur = new maplibregl.Marker({ element: el, anchor: 'bottom' });
  }
  function placerNavire(pos, versLaGauche, canot) {
    if (!marqueur) creerMarqueur();
    marqueur.setLngLat(pos).addTo(carte);
    const el = marqueur.getElement();
    el.classList.toggle('gauche', versLaGauche);
    el.classList.toggle('canot', !!canot);
    const img = el.querySelector('img'), src = canot === 'cheval' ? 'images/cavalier.svg' : canot ? 'images/canot.svg' : 'images/galion.svg';
    if (!img.src.endsWith(src)) img.src = src;
  }

  function initCouche() {
    if (carte.getSource('visite')) return;
    carte.addSource('visite', { type: 'geojson', data: { type: 'FeatureCollection', features: [] } });
    carte.addLayer({ id: 'visite-trace', type: 'line', source: 'visite',
      layout: { 'line-cap': 'round', 'line-join': 'round' },
      paint: { 'line-color': '#8b2a17', 'line-width': 4, 'line-opacity': 0.85 } }, 'lieux-anneau');
  }
  const tracer = coords => carte.getSource('visite').setData({ type: 'Feature', geometry: { type: 'LineString', coordinates: coords }, properties: {} });

  function jouerLieu(e) {
    const c = e.f.geometry.coordinates;
    regler(e.debut);
    afficherFiche(e.f.properties, 'Point');
    placerNavire(c, false, 'cheval');
    carte.once('moveend', () => { if (enCours) minuterieVisite = setTimeout(suivante, 3200 / vitesse()); });
    carte.flyTo({ center: c, zoom: 6.5, speed: 0.9 * vitesse(), curve: 1.5, essential: true });
  }

  function jouerTrajet(e) {
    const coords = e.f.geometry.coordinates, p = e.f.properties;
    const canot = p.mode === 'terre' ? 'cheval' : p.mode === 'fleuve';
    const cumul = [0];
    for (let i = 1; i < coords.length; i++) cumul.push(cumul[i - 1] + km(coords[i - 1], coords[i]));
    const total = cumul[cumul.length - 1] || 1;
    const duree = Math.max(3500, Math.min(14000, total * 2.2)) / vitesse(); // ms
    const zoom = total > 4000 ? 3 : total > 1500 ? 4 : total > 600 ? 5 : total > 150 ? 6.3 : 7.5;
    afficherFiche(p, 'LineString');
    regler(p.debut);
    tracer([coords[0]]);
    placerNavire(coords[0], coords[coords.length - 1][0] < coords[0][0], canot);
    carte.once('moveend', () => {
      if (!enCours) return;
      const t0 = performance.now();
      let iSeg = 1, dernier = -1;
      const pas = now => {
        if (!enCours) return;
        const frac = Math.min(1, (now - t0) / duree), d = frac * total;
        while (iSeg < cumul.length - 1 && cumul[iSeg] < d) iSeg++;
        const a = coords[iSeg - 1], b = coords[iSeg], seg = cumul[iSeg] - cumul[iSeg - 1] || 1;
        const k = Math.max(0, Math.min(1, (d - cumul[iSeg - 1]) / seg));
        const pos = [a[0] + (b[0] - a[0]) * k, a[1] + (b[1] - a[1]) * k];
        tracer([...coords.slice(0, iSeg), pos]);
        placerNavire(pos, b[0] < a[0], canot);
        carte.jumpTo({ center: pos });
        const v = positionDate(p.debut + frac * Math.max(0, p.fin - p.debut));
        if (v !== dernier) { dernier = v; curseur.value = v; appliquerDate(v); }
        if (frac < 1) anim = requestAnimationFrame(pas);
        else minuterieVisite = setTimeout(suivante, 1200 / vitesse());
      };
      anim = requestAnimationFrame(pas);
    });
    carte.flyTo({ center: coords[0], zoom, speed: 1.1 * vitesse(), essential: true });
  }

  function suivante() {
    if (!enCours) return;
    index++;
    if (index >= etapes.length) return terminer();
    jouer();
  }
  function jouer() { const e = etapes[index]; e.type === 'lieu' ? jouerLieu(e) : jouerTrajet(e); }

  function terminer() {
    arreter();
    index = 0;
    if (carte.getSource('visite')) tracer([]);
    if (marqueur) marqueur.remove();
    curseur.value = POS_MAX; appliquerDate(POS_MAX);
    carte.fitBounds(window.LIMITES_DONNEES, { padding: { top: 50, bottom: 50, left: 170, right: 270 }, duration: 2000 });
  }
  function demarrer() {
    if (!window.DONNEES) return;
    if (!etapes.length) preparer();
    initCouche();
    enCours = true;
    btnLecture.textContent = '❚❚';
    document.querySelector('.embleme')?.classList.add('tangue');
    jouer();
  }
  function arreter() {
    enCours = false;
    cancelAnimationFrame(anim); clearTimeout(minuterieVisite);
    btnLecture.textContent = '▶';
    document.querySelector('.embleme')?.classList.remove('tangue');
  }

  // l'utilisateur reprend la main sur la carte : la visite se met en pause (elle reprendra à l'étape en cours)
  ['dragstart', 'wheel'].forEach(ev => carte.on(ev, e => { if (enCours && e.originalEvent) arreter(); }));

  return { basculer() { enCours ? arreter() : demarrer(); }, actif: () => enCours, positionner(t) { regler(t); } };
})();
