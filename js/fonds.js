// Fonds de carte de l'Atlas Robidoux : Parchemin (par défaut), Plan moderne, Satellite.
//
// « Parchemin » imite une carte marine ancienne :
//   - mer bleu-vert pâle, terres couleur vélin ;
//   - côtes à l'encre, doublées côté mer de « lignes d'eau » (gravure des cartes des XVIIe-XVIIIe siècles) ;
//   - relief ombré sépia ; lignes de rhumb partant de roses des vents ;
//   - éléments modernes (routes, villes, bâtiments, frontières, noms) masqués.
// La mer est la couche d'eau OpenFreeMap ; aux petites échelles, le trait de côte et les lignes d'eau suivent
// les contours de Natural Earth 1:50M (paquet world-atlas), relayés au-delà du zoom 7 par le contour détaillé.

const PARCHEMIN = {
  terre: '#e4d3a8', mer: '#c9dcdc', riviere: '#4d7180', vegetation: ['#d2c08c', 0.35],
  encre: '#1f2f3a', lignesEau: '#3f6a7a',
  relief: { ombre: '#3e4a4c', lumiere: '#f8f1db', accent: '#5b6a66', exageration: 0.4 },
  texte: '#1f2f3a', halo: '#eff0e4'
};
const URL_TERRES = 'https://cdn.jsdelivr.net/npm/world-atlas@2/land-50m.json';
// Couches du fond moderne masquées dans le parchemin
const MASQUEES = ['transportation', 'transportation_name', 'building', 'aeroway', 'aerodrome_label', 'poi',
  'housenumber', 'place', 'mountain_peak', 'landuse', 'boundary', 'water_name', 'waterway_name'];
// Roses des vents : centres des réseaux de rhumbs (lon, lat). La première porte la grande rose dessinée.
const ROSES = [[-88, 33], [-112, 44], [-118, 30]];
const ZOOM_DETAIL = 6; // zoom où l'eau détaillée remplace les terres Natural Earth

// Lignes de rhumb : droites dans la projection de Mercator, comme sur les cartes marines.
// MapLibre relie deux sommets par un segment droit en Mercator : deux points suffisent par ligne.
function lignesRhumb() {
  const rad = Math.PI / 180, LAT_MAX = 82;
  const versY = lat => Math.log(Math.tan(Math.PI / 4 + lat * rad / 2));
  const versLat = y => (2 * Math.atan(Math.exp(y)) - Math.PI / 2) / rad;
  const yMax = versY(LAT_MAX), yMin = versY(-LAT_MAX);
  const features = [];
  ROSES.forEach(([lon0, lat0], r) => {
    const x0 = lon0 * rad, y0 = versY(lat0);
    for (let k = 0; k < 32; k++) {
      const a = k * Math.PI / 16, dx = Math.sin(a), dy = Math.cos(a);
      let t = 160 * rad; // au plus 160° de longitude
      if (dy > 1e-9) t = Math.min(t, (yMax - y0) / dy);
      if (dy < -1e-9) t = Math.min(t, (yMin - y0) / dy);
      features.push({ type: 'Feature', properties: { rang: k % 4 === 0 ? 1 : k % 2 === 0 ? 2 : 3, rose: r },
        geometry: { type: 'LineString', coordinates: [[lon0, lat0], [(x0 + dx * t) / rad, versLat(y0 + dy * t)]] } });
    }
  });
  return { type: 'FeatureCollection', features };
}

// Côtes Natural Earth en simples lignes (contours extérieurs des terres), toutes orientées dans le même sens :
// les lignes d'eau, décalées vers la droite du sens de parcours, tombent ainsi toujours du côté du large.
async function chargerCotes() {
  if (typeof topojson === 'undefined') throw new Error('topojson-client absent');
  const topo = await fetch(URL_TERRES).then(r => { if (!r.ok) throw new Error(r.status); return r.json(); });
  const terres = topojson.feature(topo, topo.objects.land);
  const aire = r => r.reduce((a, [x1, y1], i) => { const [x2, y2] = r[(i + 1) % r.length]; return a + (x1 * y2 - x2 * y1); }, 0);
  const horaire = r => aire(r) > 0 ? r.slice().reverse() : r;
  const lignes = [];
  terres.features.forEach(f => {
    const g = f.geometry;
    (g.type === 'Polygon' ? [g.coordinates] : g.coordinates).forEach(p => lignes.push(horaire(p[0])));
  });
  return { type: 'Feature', properties: {}, geometry: { type: 'MultiLineString', coordinates: lignes } };
}

// ---------- Eau animée ----------
// Miroitement de la houle : deux textures de bruit fractal (tuiles raccordables) dérivent dans des directions
// différentes ; leur produit donne des reflets clairs (crêtes) et des creux légèrement plus sombres, comme la
// surface de l'eau vue de haut. Le motif est recalculé environ 12 fois par seconde et posé sur la mer.
const TUILE = 256;
function bruitRaccordable(graine) {
  // bruit de valeur à 4 octaves, périodique sur TUILE pixels
  let s = graine;
  const alea = () => (s = (s * 16807) % 2147483647) / 2147483647;
  const champ = new Float32Array(TUILE * TUILE);
  [[4, 0.5], [8, 0.27], [16, 0.15], [32, 0.08]].forEach(([n, poids]) => {
    const grille = Array.from({ length: n * n }, alea), pas = TUILE / n;
    const lisse = t => t * t * (3 - 2 * t);
    for (let y = 0; y < TUILE; y++) for (let x = 0; x < TUILE; x++) {
      const gx = x / pas, gy = y / pas, x0 = Math.floor(gx), y0 = Math.floor(gy);
      const fx = lisse(gx - x0), fy = lisse(gy - y0), x1 = (x0 + 1) % n, y1 = (y0 + 1) % n;
      const v = grille[y0 * n + x0] * (1 - fx) * (1 - fy) + grille[y0 * n + x1] * fx * (1 - fy)
              + grille[y1 * n + x0] * (1 - fx) * fy + grille[y1 * n + x1] * fx * fy;
      champ[y * TUILE + x] += v * poids;
    }
  });
  return champ;
}
const HOULE_A = bruitRaccordable(1234567), HOULE_B = bruitRaccordable(7654321);
const imageEau = new ImageData(TUILE, TUILE);
function dessinerEau(t) {
  // décalages (en pixels) des deux houles : lents, directions croisées
  const ax = Math.round(t * 0.0045) % TUILE, ay = Math.round(t * 0.0021) % TUILE;
  const bx = Math.round(t * 0.0031) % TUILE, by = Math.round(t * 0.0049) % TUILE;
  const d = imageEau.data;
  for (let y = 0; y < TUILE; y++) {
    const ya = ((y + ay) % TUILE) * TUILE, yb = ((y - by + TUILE * 4) % TUILE) * TUILE;
    for (let x = 0; x < TUILE; x++) {
      const v = HOULE_A[ya + (x + ax) % TUILE] * HOULE_B[yb + (x - bx + TUILE * 4) % TUILE]; // ~0.05 à 0.8
      const k = (y * TUILE + x) * 4;
      if (v > 0.34) {        // crête : reflet clair
        const a = Math.min(1, (v - 0.34) / 0.22);
        d[k] = 250; d[k + 1] = 253; d[k + 2] = 250; d[k + 3] = a * a * 120;
      } else if (v < 0.17) { // creux : ombre bleu-gris
        const a = Math.min(1, (0.17 - v) / 0.12);
        d[k] = 47; d[k + 1] = 82; d[k + 2] = 98; d[k + 3] = a * 46;
      } else d[k + 3] = 0;
    }
  }
  return imageEau;
}
// Arrêt quand l'onglet est caché, hors du fond parchemin ou si l'utilisateur a demandé de réduire les animations.
function animerEau(carte) {
  const etat = { actif: true };
  if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) return etat;
  let dernier = 0;
  const tour = t => {
    requestAnimationFrame(tour);
    if (!etat.actif || document.hidden || t - dernier < 80) return;
    dernier = t;
    if (carte.hasImage('houle')) carte.updateImage('houle', dessinerEau(t));
  };
  requestAnimationFrame(tour);
  return etat;
}

function installerFonds(carte, base, avant) {
  const originaux = new Map(); // valeurs d'origine, pour revenir au plan moderne
  const changer = (id, type, prop, valeur) => {
    const cle = `${id}|${type}|${prop}`;
    if (!originaux.has(cle)) originaux.set(cle, type === 'layout' ? carte.getLayoutProperty(id, prop) : carte.getPaintProperty(id, prop));
    type === 'layout' ? carte.setLayoutProperty(id, prop, valeur) : carte.setPaintProperty(id, prop, valeur);
  };
  const restaurer = () => {
    originaux.forEach((v, cle) => {
      const [id, type, prop] = cle.split('|');
      const val = v === undefined && prop === 'visibility' ? 'visible' : v;
      type === 'layout' ? carte.setLayoutProperty(id, prop, val) : carte.setPaintProperty(id, prop, val);
    });
  };

  const premierTexte = base.find(id => carte.getLayer(id)?.type === 'symbol') || avant;
  const premiereEau = base.find(id => carte.getLayer(id)?.sourceLayer === 'water') || premierTexte;
  const cache = 'visible', masque = 'none';

  // Relief ombré (AWS Terrain Tiles), sous les eaux
  carte.addSource('relief-mnt', {
    type: 'raster-dem', encoding: 'terrarium', tileSize: 256, maxzoom: 12,
    tiles: ['https://s3.amazonaws.com/elevation-tiles-prod/terrarium/{z}/{x}/{y}.png'],
    attribution: 'Relief : Mapzen, AWS Terrain Tiles'
  });
  carte.addLayer({ id: 'relief', type: 'hillshade', source: 'relief-mnt', layout: { visibility: masque },
    paint: { 'hillshade-shadow-color': PARCHEMIN.relief.ombre, 'hillshade-highlight-color': PARCHEMIN.relief.lumiere,
             'hillshade-accent-color': PARCHEMIN.relief.accent, 'hillshade-exaggeration': PARCHEMIN.relief.exageration } }, premiereEau);

  // Mer : couche d'eau OpenFreeMap (au-dessus du relief, qui ne reste visible que sur les terres).
  // Côtes Natural Earth (chargées en arrière-plan) : lignes d'eau et trait de côte aux petites échelles ;
  // aux grandes échelles, le contour détaillé de l'eau OpenFreeMap prend le relais.
  let cotesPretes = false;
  const fondu = (op) => ['interpolate', ['linear'], ['zoom'], ZOOM_DETAIL + 0.5, op, ZOOM_DETAIL + 1.5, 0];
  carte.addSource('cotes', { type: 'geojson', data: { type: 'FeatureCollection', features: [] }, buffer: 512, tolerance: 0.2 });

  // Miroitement de la houle (motif animé, voir animerEau), sur l'océan
  carte.addImage('houle', dessinerEau(0));
  const coucheOcean = base.map(id => carte.getLayer(id)).find(c => c && c.sourceLayer === 'water' && c.type === 'fill');
  if (coucheOcean) carte.addLayer({ id: 'houle-ocean', type: 'fill', source: coucheOcean.source, 'source-layer': 'water',
    filter: ['==', ['get', 'class'], 'ocean'], layout: { visibility: masque },
    paint: { 'fill-pattern': 'houle', 'fill-antialias': false } }, premierTexte);

  // lignes d'eau : traits parallèles à la côte, du côté du large
  [[3, 0.55], [7, 0.38], [12, 0.24], [18, 0.14]].forEach(([dec, op], i) => {
    carte.addLayer({ id: `lignes-eau-${i}`, type: 'line', source: 'cotes', layout: { visibility: masque, 'line-join': 'round' },
      paint: { 'line-color': PARCHEMIN.lignesEau, 'line-width': 0.8, 'line-offset': dec, 'line-opacity': fondu(op) } }, premierTexte);
  });
  carte.addLayer({ id: 'trait-cote', type: 'line', source: 'cotes', layout: { visibility: masque, 'line-join': 'round' },
    paint: { 'line-color': PARCHEMIN.encre, 'line-width': ['interpolate', ['linear'], ['zoom'], 2, 0.9, 6, 1.4], 'line-opacity': fondu(0.9) } }, premierTexte);
  chargerCotes().then(geo => { carte.getSource('cotes').setData(geo); cotesPretes = true; majOrnements(); })
    .catch(err => { console.warn('Natural Earth indisponible, côtes OpenFreeMap seules :', err); majOrnements(); });

  // Lignes de rhumb
  carte.addSource('rhumbs', { type: 'geojson', data: lignesRhumb() });
  carte.addLayer({ id: 'rhumbs', type: 'line', source: 'rhumbs', layout: { visibility: masque },
    paint: { 'line-color': ['match', ['get', 'rang'], 1, '#2c4558', 2, '#9a3322', '#4f6b3a'],
             'line-width': ['match', ['get', 'rang'], 1, 0.9, 0.6],
             'line-opacity': ['interpolate', ['linear'], ['zoom'], 2, 0.5, 6, 0.3, 9, 0.1] } }, premierTexte);

  function etiquettesAtlas(texte, halo) {
    carte.setPaintProperty('lieux-noms', 'text-color', texte);
    carte.setPaintProperty('lieux-noms', 'text-halo-color', halo);
  }
    const options = { rhumbs: true, relief: true };
  let fondCourant = 'parchemin';

  function majOrnements() {
    const p = fondCourant === 'parchemin', ne = p && cotesPretes;
    ['lignes-eau-0', 'lignes-eau-1', 'lignes-eau-2', 'lignes-eau-3', 'trait-cote'].forEach(id => carte.setLayoutProperty(id, 'visibility', ne ? cache : masque));
    if (carte.getLayer('houle-ocean')) carte.setLayoutProperty('houle-ocean', 'visibility', p ? cache : masque);
    animation.actif = p;
    carte.setLayoutProperty('relief', 'visibility', p && options.relief ? cache : masque);
    carte.setLayoutProperty('rhumbs', 'visibility', fondCourant !== 'satellite' && options.rhumbs ? cache : masque);
    // trait de côte détaillé (contour de l'eau OpenFreeMap) seulement aux grandes échelles si les côtes Natural Earth sont là
    if (p) base.forEach(id => {
      const c = carte.getLayer(id);
      if (!c || c.sourceLayer !== 'water' || c.type !== 'fill') return;
      changer(id, 'paint', 'fill-outline-color', ne
        ? ['interpolate', ['linear'], ['zoom'], ZOOM_DETAIL + 0.5, 'rgba(31,47,58,0)', ZOOM_DETAIL + 1.5, PARCHEMIN.encre]
        : PARCHEMIN.encre);
    });
    document.body.classList.toggle('fond-parchemin', p);
  }

  async function appliquerFond(nom) {
    fondCourant = nom;
    restaurer();
    carte.setLayoutProperty('satellite', 'visibility', masque);
    etiquettesAtlas(PARCHEMIN.texte, '#ffffff');
    if (nom === 'satellite') {
      carte.setLayoutProperty('satellite', 'visibility', cache);
      etiquettesAtlas('#ffffff', '#000000');
    } else if (nom === 'parchemin') {
      const t = PARCHEMIN;
      for (const id of base) {
        const couche = carte.getLayer(id);
        if (!couche) continue;
        const src = couche.sourceLayer, type = couche.type;
        // fond uni = les terres ; la mer (eau OpenFreeMap) est dessinée par-dessus le relief
        if (type === 'background') { changer(id, 'paint', 'background-color', t.terre); continue; }
        if (type === 'symbol' || MASQUEES.includes(src)) { changer(id, 'layout', 'visibility', masque); continue; }
        if (src === 'water' && type === 'fill') {
          changer(id, 'paint', 'fill-color', t.mer); changer(id, 'paint', 'fill-opacity', 1);
        } else if (src === 'waterway' && type === 'line') changer(id, 'paint', 'line-color', t.riviere);
        else if ((src === 'landcover' || src === 'park') && type === 'fill') {
          changer(id, 'paint', 'fill-color', t.vegetation[0]); changer(id, 'paint', 'fill-opacity', t.vegetation[1]);
        } else if (['fill', 'line', 'fill-extrusion', 'raster', 'hillshade'].includes(type)) changer(id, 'layout', 'visibility', masque); // dont le relief ombré Natural Earth du fond moderne
      }
      etiquettesAtlas(t.texte, t.halo);
    }
    majOrnements();
    return '';
  }
  const animation = animerEau(carte);
  appliquerFond.option = (cle, valeur) => { options[cle] = valeur; majOrnements(); };
  return appliquerFond;
}
