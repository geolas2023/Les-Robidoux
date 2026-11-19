"""Recensements des ménages Robidoux (relevés sur Ancestry) : produit js/recensements.js
pour l'onglet « Documents trouvés » de la salle de lecture, et fournit à donnees.py
les points de la carte (un point par ménage et par recensement).

Source : genealogie/recensements.json, liste de ménages :
  id, annee, lieu, coord [lon, lat], precision (ville | canton | adresse), membre (catégorie de la carte),
  portraits (identifiants des portraits de la salle de lecture), titre, menage [{nom, age, lien, ne, metier, cible}],
  source, note
"""
import json, os

ICI = os.path.dirname(os.path.abspath(__file__))
RACINE = os.path.dirname(ICI)
FICHIER = os.path.join(RACINE, 'genealogie', 'recensements.json')


def charger():
    if not os.path.exists(FICHIER):
        return []
    return json.load(open(FICHIER, encoding='utf-8'))


def ecrire_js(menages):
    out = []
    for m in menages:
        r = {k: m[k] for k in ('id', 'annee', 'lieu', 'portraits', 'titre', 'menage', 'source', 'note') if k in m}
        r['lieu_id'] = m.get('lieu_existant') or m['id']
        out.append(r)
    txt = ("// Recensements : ménages de la famille Robidoux (généré par scripts/recensements.py depuis genealogie/recensements.json).\n"
           "const RECENSEMENTS = " + json.dumps(out, ensure_ascii=False, indent=1) + ";\n")
    open(os.path.join(RACINE, 'js', 'recensements.js'), 'w', encoding='utf-8').write(txt)


def description(m):
    gens = []
    for p in m['menage']:
        s = p['nom']
        det = [x for x in (f"{p['age']} ans" if p.get('age') not in (None, '') else '', p.get('lien', ''), p.get('ne', ''), p.get('metier', '')) if x]
        if det:
            s += ' (' + ', '.join(det) + ')'
        gens.append(s)
    d = f"Recensement de {m['annee']}, {m['lieu']}. {m.get('titre', '')} Personnes du foyer : " + ' ; '.join(gens) + '.'
    return d.replace('  ', ' ')


def points(L):
    """Ajoute les points de la carte avec la fonction L de donnees.py."""
    menages = charger()
    for m in menages:
        if m.get('lieu_existant'):
            continue
        lon, lat = m['coord']
        L(m['id'], f"Recensement de {m['annee']} : {m['nom_carte']}", lon, lat, str(m['annee']), 'annee',
          'certaine' if m.get('precision') == 'adresse' else 'approximative', m['membre'],
          description(m), m['source'] + '.',
          (m.get('note', '') + ' ' if m.get('note') else '') + "Point placé au centre de la localité inscrite au recensement ; ménage détaillé dans la salle de lecture (onglet « Documents trouvés »).")
    ecrire_js(menages)
    return len(menages)


if __name__ == '__main__':
    ecrire_js(charger())
