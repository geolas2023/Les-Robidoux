// Page « Les membres de la famille » : un onglet par membre, avec son récit, ses images, ses lieux sur la carte,
// ses recensements, ses actes et les récits et documents de la salle de lecture qui le concernent.
// Données : ITEMS (salle.js), DOSSIERS (dossiers.js), RECENSEMENTS (recensements.js), data/lieux.geojson.

const esc = s => String(s ?? '').replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
const COULEURS = { joseph1: '#6b5a3c', joseph2: '#3f5a2a', joseph3: '#2f4d63', antoine: '#9a3322', louis: '#7a4f1d',
                   freres: '#5b3f6b', jules: '#1f2f3a', famille: '#43606e', proches: '#8a6a12' };
const GENRES = { document: 'Document', etude: 'Étude', journal: 'Presse' };
const PORTRAITS = ITEMS.filter(i => i.type === 'portrait').sort((a, b) => a.ordre - b.ordre);
const AUTRES = ITEMS.filter(i => i.type !== 'portrait').sort((a, b) => a.ordre - b.ordre);
let LIEUX = {}, carte = null, imagesPage = [], imageCourante = 0;

const nomCourt = p => p.titre.includes('(III)') ? 'Joseph Robidoux III' : p.titre.split(/,| \(/)[0];
const paragraphes = t => String(t || '').split(/\n\s*\n/).map(x => `<p>${esc(x).replace(/\n/g, '<br>')}</p>`).join('');
const recensementsDe = p => (typeof RECENSEMENTS !== 'undefined' ? RECENSEMENTS : []).filter(r => (r.portraits || []).includes(p.id)).sort((a, b) => a.annee - b.annee);
const dossierDe = p => (typeof DOSSIERS !== 'undefined' && DOSSIERS[p.id]) || {};
const recitsDe = p => AUTRES.filter(x => (x.personnes || []).some(n => (p.personnes || []).includes(n)));

function lieuxDe(p) {
  const ids = new Set([...(p.lieux || []), ...recensementsDe(p).map(r => r.lieu_id)]);
  return [...ids].map(id => LIEUX[id]).filter(Boolean).sort((a, b) => a.properties.debut - b.properties.debut);
}
function imagesDe(p) {
  const vues = new Set(), out = [];
  const ajoute = (im, ctx) => { if (!im || !im.src || vues.has(im.src)) return; vues.add(im.src); out.push({ src: im.src, legende: im.legende || '', ctx }); };
  (p.images || []).forEach(im => ajoute(im, 'Portrait'));
  (dossierDe(p).photos || []).forEach(im => ajoute(im, 'Photographie'));
  lieuxDe(p).forEach(f => (f.properties.images || []).forEach(im => ajoute(im, f.properties.nom)));
  recitsDe(p).forEach(x => (x.images || []).forEach(im => ajoute(im, x.titre)));
  return out;
}
function anneeLisible(e) {
  const [a, b] = String(e || '').split('/');
  const y = s => (s || '').replace(/[~?]/g, '').slice(0, 4);
  return b && y(b) !== y(a) ? `${y(a)}–${y(b)}` : y(a);
}

function onglets(actif) {
  document.getElementById('onglets').innerHTML = PORTRAITS.map(p =>
    `<button type="button" role="tab" data-id="${p.id}" class="${p.id === actif ? 'actif' : ''}" aria-selected="${p.id === actif}">${esc(nomCourt(p))}<small>${esc(p.date)}</small></button>`).join('');
  document.querySelectorAll('#onglets button').forEach(b => b.addEventListener('click', () => { location.hash = b.dataset.id; }));
  const a = document.querySelector('#onglets button.actif');
  if (a) a.scrollIntoView({ block: 'nearest', inline: 'center' });
}

function tableauRecensement(r) {
  return `<div class="recens"><div class="tete"><span class="an">${r.annee}</span><span>${esc(r.lieu)}</span>
    <span class="carte">${r.lieu_id ? `<a href="index.html#lieu=${esc(r.lieu_id)}">📍 Voir sur la carte</a>` : ''}</span></div>
    ${r.titre ? `<div>${esc(r.titre)}</div>` : ''}
    <table><thead><tr><th>Personne du foyer</th><th>Âge</th><th>Lien</th><th>Naissance</th><th>Métier</th></tr></thead><tbody>
    ${(r.menage || []).map(m => `<tr class="${m.cible ? 'cible' : ''}"><td>${esc(m.nom)}</td><td>${esc(m.age ?? '')}</td><td>${esc(m.lien || '')}</td><td>${esc(m.ne || '')}</td><td>${esc(m.metier || '')}</td></tr>`).join('')}
    </tbody></table>
    ${r.note ? `<div class="src"><em>${esc(r.note)}</em></div>` : ''}
    <div class="src">Source : ${esc(r.source)}</div></div>`;
}

function afficher(id) {
  const p = PORTRAITS.find(x => x.id === id) || PORTRAITS.find(x => x.id === 'antoine') || PORTRAITS[0];
  onglets(p.id);
  document.title = `${nomCourt(p)} — Les membres de la famille · Atlas Robidoux`;
  const rec = recensementsDe(p), d = dossierDe(p), lieux = lieuxDe(p), recits = recitsDe(p);
  imagesPage = imagesDe(p);
  const portrait = (p.images || [])[0];
  const n = (k, v, lab) => v ? `<a href="#${p.id}/${k}">${lab} (${v})</a>` : '';
  document.getElementById('page').innerHTML = `
    <div class="hero">
      <div>${portrait ? `<img src="${esc(portrait.src)}" alt="${esc(portrait.legende)}" data-i="0">` : `<div class="vide"><img src="images/coureur-des-bois.svg" alt=""></div>`}</div>
      <div>
        <h2>${esc(p.titre)}</h2>
        <p class="dates">${esc(p.date)}</p>
        <p class="resume">${esc(p.resume)}</p>
        <div class="chiffres">
          <a href="#${p.id}/recit">Récit</a>
          ${n('images', imagesPage.length, 'Images')}${n('lieux', lieux.length, 'Lieux')}${n('recensements', rec.length, 'Recensements')}
          ${n('actes', (d.actes || []).length, 'Actes')}${n('documents', recits.length, 'Récits et documents')}
          <a href="salle-de-lecture.html#${p.id}">Salle de lecture →</a>
        </div>
      </div>
    </div>

    <section id="s-recit"><h3>Récit</h3><div class="recit">${paragraphes(p.texte)}</div>
      ${p.note ? `<p class="avert">${esc(p.note)}</p>` : ''}
      <p class="sources"><strong>Sources :</strong> ${esc(p.sources)}</p></section>

    ${imagesPage.length ? `<section id="s-images"><h3>Images (${imagesPage.length})</h3><div class="galerie">
      ${imagesPage.map((im, i) => `<figure><img src="${esc(im.src)}" alt="${esc(im.legende)}" data-i="${i}" loading="lazy"><figcaption>${esc(im.legende)}</figcaption></figure>`).join('')}
      </div></section>` : ''}

    ${lieux.length ? `<section id="s-lieux"><h3>Lieux sur la carte (${lieux.length})</h3>
      <div id="carte-famille" class="carte-famille"></div>
      <ul class="lieux-liste">${lieux.map(f => `<li><span class="pt" style="background:${COULEURS[f.properties.categorie] || '#1f2f3a'}"></span><span class="an">${esc(anneeLisible(f.properties.date_edtf))}</span>
        <a href="index.html#lieu=${esc(f.properties.id)}">${esc(f.properties.nom)}</a></li>`).join('')}</ul></section>` : ''}

    ${rec.length ? `<section id="s-recensements"><h3>Recensements (${rec.length})</h3>${rec.map(tableauRecensement).join('')}</section>` : ''}

    ${(d.actes || []).length ? `<section id="s-actes"><h3>Actes des registres (${d.actes.length})</h3><ul class="actes">
      ${d.actes.map(a => `<li><strong>${esc(a.date)}</strong> — ${esc(a.texte)} <span class="src">(${esc(a.source)})</span></li>`).join('')}</ul></section>` : ''}

    ${recits.length ? `<section id="s-documents"><h3>Récits et documents (${recits.length})</h3>
      ${recits.map(x => `<details class="doc"><summary><span class="t">${esc(x.titre)}</span> <span class="d">· ${esc(x.date)}</span><span class="pastille">${GENRES[x.type] || ''}</span>
        <span class="r">${esc(x.resume)}</span></summary>
        <div class="corps">
          ${(x.images || []).map(im => `<img src="${esc(im.src)}" alt="${esc(im.legende)}" data-src="${esc(im.src)}" loading="lazy">`).join('')}
          <div class="texte${x.type === 'document' ? ' document' : ''}">${x.type === 'document' ? esc(x.texte) : paragraphes(x.texte)}</div>
          ${x.note ? `<p class="avert">${esc(x.note)}</p>` : ''}
          <p class="sources"><strong>Sources :</strong> ${esc(x.sources)} · <a href="salle-de-lecture.html#${x.id}">ouvrir dans la salle de lecture</a></p>
        </div></details>`).join('')}</section>` : ''}

    <p class="avert" style="margin-top:2rem">Les photographies modernes (tombes, plaques, monuments) versées par des membres d'Ancestry restent dans l'arbre familial et ne sont pas reproduites ici, par respect du droit d'auteur ; les images anciennes du domaine public sont créditées à leur source.</p>`;

  document.querySelectorAll('.hero img[data-i], .galerie img').forEach(img => img.addEventListener('click', () => ouvrirImage(Number(img.dataset.i))));
  document.querySelectorAll('details.doc img').forEach(img => img.addEventListener('click', () => {
    const k = imagesPage.findIndex(im => im.src === img.dataset.src); ouvrirImage(k < 0 ? 0 : k);
  }));
  dessinerCarte(lieux);
}

function dessinerCarte(lieux) {
  if (carte) { carte.remove(); carte = null; }
  const el = document.getElementById('carte-famille');
  if (!el || typeof maplibregl === 'undefined' || !lieux.length) return;
  carte = new maplibregl.Map({ container: el, style: 'https://tiles.openfreemap.org/styles/positron', center: lieux[0].geometry.coordinates, zoom: 4, attributionControl: { compact: true } });
  carte.addControl(new maplibregl.NavigationControl({ showCompass: false }), 'top-left');
  carte.on('load', () => {
    const fc = { type: 'FeatureCollection', features: lieux.map(f => ({ type: 'Feature', geometry: f.geometry,
      properties: { id: f.properties.id, nom: f.properties.nom, an: anneeLisible(f.properties.date_edtf), couleur: COULEURS[f.properties.categorie] || '#1f2f3a' } })) };
    carte.addSource('l', { type: 'geojson', data: fc });
    carte.addLayer({ id: 'l', type: 'circle', source: 'l', paint: { 'circle-radius': 7, 'circle-color': ['get', 'couleur'], 'circle-stroke-color': '#fff', 'circle-stroke-width': 1.5 } });
    carte.on('click', 'l', e => {
      const q = e.features[0].properties;
      new maplibregl.Popup({ offset: 8 }).setLngLat(e.lngLat)
        .setHTML(`<strong>${esc(q.an)}</strong><br>${esc(q.nom)}<br><a href="index.html#lieu=${esc(q.id)}">Ouvrir dans l'atlas →</a>`).addTo(carte);
    });
    carte.on('mouseenter', 'l', () => carte.getCanvas().style.cursor = 'pointer');
    carte.on('mouseleave', 'l', () => carte.getCanvas().style.cursor = '');
    const b = new maplibregl.LngLatBounds(); lieux.forEach(f => b.extend(f.geometry.coordinates));
    carte.fitBounds(b, { padding: 50, maxZoom: 9, duration: 0 });
  });
}

function ouvrirImage(i) {
  if (!imagesPage.length) return;
  imageCourante = (i + imagesPage.length) % imagesPage.length;
  const im = imagesPage[imageCourante];
  document.getElementById('lb-image').src = im.src;
  document.getElementById('lb-image').alt = im.legende;
  document.getElementById('lb-legende').textContent = `${im.legende}${im.ctx && !im.legende.includes(im.ctx) ? ' — ' + im.ctx : ''} (${imageCourante + 1}/${imagesPage.length})`;
  document.getElementById('lightbox').hidden = false;
}
const fermer = () => document.getElementById('lightbox').hidden = true;
document.getElementById('lb-fermer').addEventListener('click', fermer);
document.getElementById('lb-prec').addEventListener('click', () => ouvrirImage(imageCourante - 1));
document.getElementById('lb-suiv').addEventListener('click', () => ouvrirImage(imageCourante + 1));
document.getElementById('lightbox').addEventListener('click', e => { if (e.target.id === 'lightbox') fermer(); });
document.addEventListener('keydown', e => {
  if (document.getElementById('lightbox').hidden) return;
  if (e.key === 'Escape') fermer(); if (e.key === 'ArrowLeft') ouvrirImage(imageCourante - 1); if (e.key === 'ArrowRight') ouvrirImage(imageCourante + 1);
});

function route() {
  const [id, sec] = decodeURIComponent(location.hash.slice(1)).split('/');
  const actuel = document.querySelector('#onglets button.actif');
  if (!actuel || actuel.dataset.id !== (id || 'antoine')) { afficher(id); window.scrollTo(0, 0); }
  if (sec) { const s = document.getElementById('s-' + sec); if (s) s.scrollIntoView({ behavior: 'smooth' }); }
}
fetch('data/lieux.geojson?v=8').then(r => r.json()).catch(() => ({ features: [] })).then(j => {
  j.features.forEach(f => LIEUX[f.properties.id] = f);
  route();
});
window.addEventListener('hashchange', route);
