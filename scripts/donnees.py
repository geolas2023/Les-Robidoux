"""Construit data/lieux.geojson et data/trajets.geojson de l'atlas « Les Robidoux ».

Le champ « categorie » porte le membre de la famille (couleur de la pastille) :
  joseph1 (Joseph Ier, v. 1720-1771), joseph2 (Joseph II, v. 1750-1809), joseph3 (Joseph III, 1783-1868),
  antoine (1794-1860), louis (1796-1868), freres (François, Michel, Isidore), jules (Jules et la descendance), famille.
"""
import json, datetime, os

BIL = "Billon, Annals of St. Louis in its Early Days (1886)"
HSR1 = "Houck, The Spanish Regime in Missouri (1909), vol. 1"
HSR2 = "Houck, The Spanish Regime in Missouri (1909), vol. 2"
HH1 = "Houck, A History of Missouri (1908), vol. 1"
HH2 = "Houck, A History of Missouri (1908), vol. 2"
HH3 = "Houck, A History of Missouri (1908), vol. 3"
TAS = "Tassé, Les Canadiens de l'Ouest (1878), t. II"
CHI1 = "Chittenden, The American Fur Trade of the Far West (1902), vol. 1"
CHI2 = "Chittenden, The American Fur Trade of the Far West (1902), vol. 2-3"
FFT = "dans Hafen (dir.), French Fur Traders and Voyageurs in the American West (1995)"
WAL = f"W. S. Wallace, « Antoine Robidoux », {FFT}"
WEB = f"D. J. Weber, « Sylvestre S. Pratte », {FFT}"
MUR = f"L. R. Murphy, « Charles Beaubien », {FFT}"
LEC = f"J. Lecompte, « Jean-Baptiste Chalifoux », {FFT}"
HAN = f"C. E. Hanson Jr., « Joseph Moncravie », {FFT}"
CRA = "Cragin, Early Far West Notebooks (1902-1923), transcription dactylographiée"
AHQ = "A. Roy, « Sur la piste de Santa Fe », dans Frenette, Rivard et St-Hilaire (dir.), La francophonie nord-américaine (2012)"

WIL = "R. J. Willoughby, The Brothers Robidoux and the Opening of the American West (2012)"
LEV = "F. Levine, « Desperately Seeking Carmel », El Palacio (été 2019)"
NPSC = "National Park Service, « Carmel Benavides » (2023)"
NPSRP = "National Park Service, « Robidoux Pass » (2025)"
UTB = "B. Bartholomew, « Old Antoine Robidoux Left His Mark in Utah », History Blazer (août 1996)"
MHS = "Missouri Historical Society, Western Travel Collection, A1734-00001 (photographie de 1968)"
OHP = "California Office of Historic Preservation, California Historical Landmarks"
WLR = "« Louis Rubidoux », Wikipédia (d'après B. M. Read, Illustrated History of New Mexico, 1912, p. 449-452)"
WJ4 = "« Joseph Robidoux IV », Wikipédia (d'après C. Rabideau et H. M. Lewis, Robidoux Chronicles, 2004)"
WMM = "« Mary Many Days Robidoux », Wikipédia"
WAM = "« Agua Mansa, California », Wikipédia (d'après Crafts et McGehee, Pioneer Days in the San Bernardino Valley, 1906)"
PAG = "Pagosa Springs History Museum, « Robidoux Hill »"
STO = "Descendants of Johannes Stollsteimer, généalogie (2025), notice d'Amanda Maria Barada"
FLC = "Fort Lewis College, Prospectus on Traditional Cultural Properties on the San Juan (Center of Southwest Studies)"
FAG = "Find a Grave, mémorial 255125946 (Martina Anaya Barada)"
NRHP = "National Register of Historic Places, n° 73001037 (Robidoux Row)"
DRO = "Collection Drouin, baptême de Joseph Marie Robidoux, La Visitation du Sault-au-Récollet (Ancestry, coll. 1091, notice 14650221)"
KEL = "C. Kelly, « Antoine Robidoux » [inscription de Westwater], Utah Historical Quarterly, vol. 6, n° 4 (oct. 1933), p. 115-116"
WEB72 = "D. J. Weber (éd.), « Louis Robidoux: Two Letters from California, 1848 », Southern California Quarterly, vol. 54, n° 2 (1972)"
CEN = "Recensements fédéraux des États-Unis (Ancestry)"
OBI = "Nécrologie d'Antoine Robidoux, St. Joseph Gazette, reprise dans le Los Angeles Star, 29 septembre 1860"

def dec(edtf):
    d = edtf.replace('~', '').replace('?', '')
    p = [int(x) for x in d.split('-')]
    if len(p) == 1:
        return round(p[0] + 0.5, 4)
    j = datetime.date(p[0], p[1], 15) if len(p) == 2 else datetime.date(*p)
    n = 366 if j.year % 4 == 0 else 365
    return round(j.year + ((j - datetime.date(j.year, 1, 1)).days + 0.5) / n, 4)


# ------------------------------------------------------------------ Photos (comme l'Atlas Aubry)
# Images de Wikimedia Commons liées par Special:FilePath (licences libres : voir la page de chaque fichier) ;
# images locales tirées du dossier ROBIDOUX_FAMILY de l'auteur (documents historiques du domaine public).
from urllib.parse import quote
def COM(fichier, legende):
    nom = fichier.replace(' ', '_')
    return {"src": f"https://commons.wikimedia.org/wiki/Special:FilePath/{quote(nom)}?width=1200",
            "lien": f"https://commons.wikimedia.org/wiki/File:{quote(nom)}", "legende": f"{legende} (Wikimedia Commons)"}
def LOC(fichier, legende):
    return {"src": f"images/photos/{fichier}", "legende": legende}
IMAGES = {
  'L01': [COM("View of St. Louis from the Illinois shore - 1842 - DPLA - e4086a5fc6aaedd147830fbedfbaa7a1.jpg", "Saint-Louis vue de la rive illinoise, 1842")],
  'L03': [COM("Old Cahokia Courthouse.JPG", "Cahokia : l'ancien palais de justice, maison à poteaux du village français, v. 1740")],
  'L10': [COM("Fort Michilimackinac.jpg", "Fort Michilimackinac reconstitué (Mackinaw City)")],
  'L14': [COM("Ft Atkinson west rampart.JPG", "Fort Atkinson (Nebraska) reconstitué : d'ici partent les convois Robidoux de 1824")],
  'L15': [COM("Bird's eye view of the city of Saint Joseph, Missouri 1868. LOC 73693489.jpg", "Vue à vol d'oiseau de Saint-Joseph, 1868, l'année de la mort de Joseph (Library of Congress)")],
  'L16': [COM("Bird's eye view of the city of Saint Joseph, Missouri 1868. LOC 73693489.jpg", "Saint-Joseph en 1868 (Library of Congress)")],
  'L17': [LOC("santa-fe-plaza-cote-est-1866.jpg", "Santa Fe, côté est de la plaza, 1866 : la rue des marchands que fréquentaient Antoine et Louis (photographie, coll. de l'auteur)"),
          COM("Santa fe nm 1846 47.jpg", "Santa Fe en 1846-1847")],
  'L18': [COM("Taos plaza la fonda.jpg", "La plaza de Taos")],
  'L22': [COM("Confluence of the Gunnison and Uncompahgre rivers.JPG", "Confluent de la Gunnison et de l'Uncompahgre, site du fort Robidoux près de Delta")],
  'L25': [COM("Cochetopa Pass, Saguache County, Colorado, USA 03.jpg", "Col de Cochetopa (comté de Saguache)")],
  'L27': [COM("Birder, Mosca Pass Trail (22324011132).jpg", "Sentier du col Mosca, l'ancien « Roubideau's Pass » (NPS)")],
  'L32': [COM("Battle of San Pasqual Staff Ride Map 4.jpg", "Carte de la bataille de San Pasqual, 6 décembre 1846 (U.S. Army)")],
  'L36': [COM("Alfred Jacob Miller - Fort Laramie - Walters 37194049.jpg", "Alfred Jacob Miller, le fort Laramie en 1837 (Walters Art Museum, domaine public)")],
  'L02': [LOC("saint-louis-maison-robidoux-elm-main.jpg", "Maison de pierre des Robidoux à Saint-Louis, angle des rues Main et Elm, datée de 1787 dans le dossier de l'auteur (photographie ancienne)")],
  'L52': [LOC("nara-1871-cabane-fort-robidoux-embouchure-uinta.jpg", "« Green River. Cabin at Fort Robidoux, about opposite the mouth of the Uinta », stéréogramme de 1871 (National Archives, 517942)")],
  'L67': [LOC("santa-fe-plaza-sud-ouest-1866.jpg", "Santa Fe, côté sud-ouest de la plaza, 1866 (photographie, dossier de l'auteur)"),
          LOC("santa-fe-1882-vue-a-vol-d-oiseau.jpg", "Bird's Eye View of the City of Santa Fé, N.M., 1882 (J. J. Stoner) : la ville de la vente de 1879")],
  'L37': [COM("Robidoux Pass.jpg", "Le col de Robidoux, à l'ouest de Scotts Bluff"),
          COM("Scotts Bluff (Nebraska) 16-9-2014 17-56-19.JPG", "Scotts Bluff, repère de la piste de l'Oregon")],
}

LIEUX, TRAJETS = [], []
def L(id, nom, lon, lat, edtf, precision, certitude, membre, description, sources, note='', images=None):
    a, b = (edtf.split('/') + [None])[:2]
    LIEUX.append({"type": "Feature", "geometry": {"type": "Point", "coordinates": [lon, lat]},
                  "properties": {"id": id, "nom": nom, "debut": dec(a), "fin": dec(b or a), "date_edtf": edtf, "precision": precision,
                                 "certitude": certitude, "categorie": membre, "description": description, "sources": sources,
                                 "note": note, "type": "lieu", "images": images or IMAGES.get(id, [])}})
def T(id, nom, coords, edtf, certitude, mode, membre, description, sources, note='', images=None):
    a, b = edtf.split('/')
    TRAJETS.append({"type": "Feature", "geometry": {"type": "LineString", "coordinates": coords},
                    "properties": {"id": id, "nom": nom, "debut": dec(a), "fin": dec(b), "date_edtf": edtf, "certitude": certitude,
                                   "mode": mode, "membre": membre, "description": description, "sources": sources, "note": note, "type": "trajet", "images": images or IMAGES.get(id, [])}})

SL = [-90.19, 38.627]; SJ = [-94.846, 39.768]; SF = [-105.938, 35.687]; TAOS = [-105.573, 36.407]
UNC = [-108.074, 38.749]; UIN = [-109.917, 40.46]

# ------------------------------------------------------------------ Joseph Ier et Joseph II à Saint-Louis
L('L01', "Saint-Louis : Joseph Robidoux, cordonnier venu de Montréal", -90.1885, 38.6255, '1770/1771-09-12', 'circa', 'approximative', 'joseph1',
  "Joseph Robidoux, cordonnier né à Montréal vers 1720, arrive à Saint-Louis avec son fils vers 1770, quand le village de Laclède n'est encore qu'un poste de traite. Il y meurt le 12 septembre 1771. Son fils Joseph (II) devient l'un des traiteurs du poste ; c'est de lui que descendent les Robidoux de l'Ouest.",
  f"{BIL}, p. 444 ; {HSR2}, p. 160.",
  "Houck date sa naissance de 1720, Billon de « vers 1720 » ; date d'arrivée approximative.")
L('L02', "Saint-Louis : Joseph II dans la milice de 1780", -90.1880, 38.6262, '1780-05-26', 'jour', 'approximative', 'joseph2',
  "Né au Canada vers 1750 et arrivé à Saint-Louis en 1770, Joseph Robidoux (II) épouse en 1782 Catherine Rollet dit Laderoute, de Cahokia. Lors de l'attaque anglaise et indienne du 26 mai 1780, il est enrôlé dans la 2e compagnie de milice, où il est inscrit comme cordonnier né au Canada. La même année, il porte plainte contre des calomnies et obtient jugement.",
  f"{HSR1}, p. 184-188 ; {BIL}, p. 175, 255 ; {WAL}, p. 270 ; {HSR2}, p. 160.",
  "La date du 26 mai 1780 est celle de l'attaque ; le rôle de milice est dressé la même année.")
L('L03', "Cahokia : mariage avec Catherine Rollet", -90.19, 38.57, '1782', 'annee', 'approximative', 'joseph2',
  "En 1782, Joseph Robidoux (II) épouse Catherine Rollet dit Laderoute, de Cahokia, sur la rive illinoise du Mississippi. Ils auront dix enfants, dont Joseph III, Antoine, Louis, François, Isidore, Michel et Jules, qui porteront le nom de Robidoux de Saint-Joseph à Santa Fe et à la Californie.",
  f"{WAL}, p. 270 ; {HSR2}, p. 160.",
  "Le lieu de la cérémonie n'est pas précisé : la famille Rollet est de Cahokia.")
L('L04', "Saint-Louis : naissance de Joseph III", -90.1856, 38.6219, '1783-08-02', 'jour', 'approximative', 'joseph3',
  "Joseph Robidoux (III), aîné de la famille et futur fondateur de Saint-Joseph, naît à Saint-Louis le 2 août 1783. Il hérite de son père la maison de l'angle des rues Main et Myrtle. À treize ans, il fait la traite avec les Indiens sous la direction de son père, puis passe plusieurs années à Michillimakinac.",
  f"{TAS}, p. 121 ; {BIL}, p. 312.",
  "Maison placée à l'angle des rues Main et Myrtle (aujourd'hui sous le parc de l'Arche) d'après Tassé ; Houck la situe entre Walnut et Elm.")
L('L05', "Saint-Louis : la Compagnie du Missouri et la milice", -90.1890, 38.6268, '1794/1800', 'annee', 'approximative', 'joseph2',
  "En 1794, Joseph Robidoux (II) est membre de la Compagnie de commerce pour la découverte des nations du haut Missouri et caution de son directeur, Jacques Clamorgan, avec qui il entre plus tard en conflit. En 1799, il est lieutenant de milice et souscrit 50 piastres en peaux de chevreuil au don patriotique. En 1800, il signe la requête des marchands contre le monopole de la Compagnie.",
  f"{HSR2}, p. 131, 149-160, 269-270, 299 ; {HH1}, p. 333-334.")
L('L06', "Florissant : naissance d'Antoine", -90.322, 38.789, '1794-09-24', 'jour', 'certaine', 'antoine',
  "Antoine Robidoux, septième des dix enfants de Joseph II et de Catherine Rollet, naît le 24 septembre 1794 dans la maison familiale de Florissant (Saint-Ferdinand), au nord de Saint-Louis. Tassé le fait naître à Saint-Louis le 29 août.",
  f"{WAL}, p. 270 ; {TAS}, p. 128.",
  "Date et lieu selon Wallace ; Tassé donne Saint-Louis, 29 août 1794.")
L('L07', "Saint-Louis : mort de Joseph II", -90.1875, 38.6258, '1809-03-17', 'jour', 'approximative', 'joseph2',
  "Aveugle et malade depuis 1807, Joseph Robidoux (II) meurt à Saint-Louis le 17 mars 1809. Auguste Chouteau, exécuteur testamentaire, dresse l'inventaire le jour même avec Charles Sanguinet et François Valois ; il compte des esclaves domestiques. En mars 1810, sa veuve Catherine rachète à la succession la maison de pierre de l'angle des rues Main et Myrtle (1 425 dollars), puis, remariée à Victor Lagoterie en 1812, la revend à son fils aîné Joseph pour 2 500 dollars. Joseph III reprend l'entreprise familiale.",
  f"{HSR2}, p. 160 ; {WAL}, p. 270 ; {WIL}, p. 32-34.")
L('L08', "Saint-Louis : la première Chambre du territoire chez Robidoux", -90.1853, 38.6225, '1812-12-07', 'jour', 'approximative', 'joseph3',
  "Le 7 décembre 1812, la première Chambre des représentants du territoire du Missouri tient sa séance d'ouverture dans la maison de Joseph Robidoux. En 1817, il loue aux missionnaires baptistes Peck et Welch une pièce derrière son magasin pour une école et le prêche du dimanche.",
  f"{HH3}, p. 2, 214 ; {TAS}, p. 121.")
L('L09', "Saint-Louis : Antoine dans l'artillerie", -90.192, 38.629, '1813-04-23/1813-05', 'jour', 'certaine', 'antoine',
  "Pendant la guerre de 1812, Antoine Robidoux s'engage le 23 avril 1813 dans une compagnie d'artillerie et reçoit son congé honorable un mois plus tard.",
  f"{WAL}, p. 270.")

# ------------------------------------------------------------------ Joseph III sur le Missouri
L('L10', "Michillimakinac : l'apprentissage de Joseph III", -84.73, 45.86, '1797/1799', 'circa', 'approximative', 'joseph3',
  "Formé à la traite dès l'âge de treize ans, Joseph Robidoux (III) passe plusieurs années à Michillimakinac, au carrefour des grands lacs, avant de faire en 1799 son premier voyage sur le Missouri.",
  f"{TAS}, p. 121.",
  "Durée et dates du séjour non précisées.")
L('L11', "Grand River (comté de Carroll) : le premier poste", -93.2, 39.38, '1800~', 'circa', 'hypothetique', 'joseph3',
  "Selon le Campbell Gazetteer cité par Tassé, Joseph Robidoux s'établit d'abord sur la Grand River, dans le comté de Carroll, à six milles d'un poste de Blondeau et de Chouteau. Houck rapporte qu'un Robidoux aurait bâti un fort à deux milles du site de Brunswick vers 1800.",
  f"{TAS}, p. 122 ; {HH3}, p. 143.",
  "Version concurrente de celle du Herald de Saint-Joseph (établissement aux Black Snake Hills en 1803).")
T('T01', "Remontée du Missouri vers les Black Snake Hills", [SL, [-90.48, 38.84], [-91.2, 38.7], [-92.2, 38.95], [-92.73, 39.0], [-93.13, 39.42],
                          [-93.8, 39.25], [-94.4, 39.12], [-94.6, 39.12], [-94.75, 39.3], [-94.9, 39.55], SJ],
  '1799/1803', 'approximative', 'fleuve', 'joseph3',
  "Joseph Robidoux fait en 1799 son premier voyage sur le Missouri. Selon le Herald de Saint-Joseph, il s'établit en 1803 au pied des collines du Serpent-Noir (Black Snake Hills) et y bâtit une cabane près de la rivière.",
  f"{TAS}, p. 121.")
L('L12', "Black Snake Hills : le comptoir de Joseph Robidoux", -94.849, 39.771, '1803/1843', 'annee', 'approximative', 'joseph3',
  "Au pied des collines du Serpent-Noir, Joseph Robidoux tient un comptoir pour les Iowas, les Otos et les Sauks. Le 24 avril 1833, le prince Maximilien de Wied remarque son poste blanchi à la chaux. Le traité d'octobre 1836 lui accorde trois sections de terre en remboursement de ses avances aux Otos, aux Missouris, aux Omahas et aux Sioux Yanktons.",
  f"{TAS}, p. 121-124 ; {CHI2}, p. 874.",
  "Date d'établissement discutée (1803 selon le Herald, vers 1826 selon Chittenden).")
L('L13', "Embouchure de la Nishnabotna", -95.65, 40.4, '1819', 'annee', 'approximative', 'joseph3',
  "En 1819, Joseph Robidoux fait la traite à l'embouchure de la Nishnabotna avec Papin et Berthold, en concurrence avec la Compagnie de fourrures du Missouri.",
  f"{CHI1}, p. 150 ; {HH2}, p. 253.")
L('L14', "Council Bluffs : rivalité avec Cabanné", -96.01, 41.45, '1823/1825', 'annee', 'approximative', 'joseph3',
  "Autour de Council Bluffs, Joseph Robidoux mène la traite pour Berthold, Chouteau et Pratte. En 1824, Sylvestre Pratte congédie des engagés en affirmant que les montagnes sont réservées à Robidoux ; Cabanné, privé d'hommes, doit acheter un tiers de l'expédition mexicaine de Joseph Robidoux.",
  f"{WEB}, p. 260.")
L('L15', "Saint-Joseph : la ville de Joseph Robidoux", -94.846, 39.768, '1839-07-15/1851', 'jour', 'certaine', 'joseph3',
  "Le 15 juillet 1839, le premier tribunal de circuit du district siège dans la maison de Joseph Robidoux. En mai 1843, il obtient ses lettres patentes pour environ 160 acres et lotit la ville. En 1845, président du conseil des syndics, il fait incorporer le village de 600 habitants sous le nom de son patron, Saint-Joseph. La ville devient une étape majeure des émigrants vers l'Oregon et la Californie ; Robidoux y achète les fourrures des trappeurs de Taos et protège les familles de passage.",
  f"{TAS}, p. 124-126 ; {CRA}, p. 257, 305.",
  "Le témoignage d'O. P. Wiggins recueilli par Cragin est à recouper.")
L('L16', "Saint-Joseph : mort de Joseph III", -94.844, 39.766, '1868-05-27', 'jour', 'certaine', 'joseph3',
  "Joseph Robidoux meurt à Saint-Joseph le 27 mai 1868, à 84 ans. Marié en 1808 à Eugénie Delisle, puis en 1812 à Angélique Vaudry, de Cahokia, il laisse notamment Jules-César, Belavoir, Félix, Edmond, Édouard et Sylvanie. En 1866, le Historical Magazine de New York l'avait salué comme le premier Blanc à pénétrer dans le haut Missouri.",
  f"{TAS}, p. 126-127 ; {HSR2}, p. 160.")

# ------------------------------------------------------------------ Les frères au Nouveau-Mexique
T('T02', "Les convois Robidoux de Fort Atkinson à Taos", [[-96.01, 41.45], [-95.9, 41.0], [-95.4, 40.0], [-94.6, 39.1], [-95.7, 38.8], [-97.0, 38.65],
                          [-98.2, 38.4], [-99.3, 38.2], [-100.4, 37.8], [-101.5, 37.9], [-103.0, 37.6], [-104.5, 37.0], [-105.0, 36.6], TAOS],
  '1824-09-30/1825-08-30', 'hypothetique', 'terre', 'antoine',
  "Le journal de James Kennerly, à Fort Atkinson, note le départ du « parti Robidoux » pour Santa Fe le 30 septembre 1824, son retour de Taos le 30 août 1825 et un nouveau départ le 14 septembre. Les frères Robidoux font quatre voyages à Santa Fe entre 1822 et 1825.",
  f"{WAL}, p. 271 ; {AHQ}, p. 104.",
  "Le chef du convoi n'est pas nommé (Antoine est le plus probable) ; la route suit la piste de Santa Fe.")
L('L17', "Santa Fe : le magasin des frères Robidoux", -105.938, 35.688, '1823-07-16/1830', 'jour', 'certaine', 'antoine',
  "Le 16 juillet 1823, une pétition de naturalisation d'Antonio et Luis Robidoux est datée de Santa Fe. En 1828, Antoine épouse Carmel Benavides, fille d'un capitaine espagnol, et devient Don Antonio Robidoux, citoyen mexicain, pour obtenir les licences de trappe réservées aux Mexicains. En 1830, il préside la junta del ayuntamiento de Santa Fe. Les Robidoux, amis du gouverneur Armijo, y tiennent magasin.",
  f"{WAL}, p. 270-271 ; {CRA}, p. 138-141 ; {AHQ}, p. 104.")
L('L18', "Taos : naturalisation et colonie étrangère", -105.573, 36.407, '1829-06-25/1840', 'jour', 'certaine', 'louis',
  "Le 25 juin 1829, Antoine et Louis Robidoux sont naturalisés mexicains avec Charles Beaubien, Gervais Nolan et John Rowland. Louis vit entre Santa Fe et Taos ; avec Beaubien et Charles Bent, les Robidoux appartiennent à la colonie étrangère de Taos, en rivalité avec le parti du padre Martínez.",
  f"{MUR}, p. 33-34 ; {CRA}, p. 131.")
L('L19', "Taos : saisie des fourrures de François Robidoux", -105.576, 36.41, '1826-02/1826-11-12', 'mois', 'certaine', 'freres',
  "En 1826, l'alcalde de Taos saisit environ 630 livres de castor de Sylvestre Pratte et de François Robidoux, faute de citoyenneté mexicaine. À Santa Fe, ils obtiennent du gouverneur Narbona la levée de la saisie malgré la révocation de leurs licences. Cette perte décide Antoine à se faire naturaliser.",
  f"{WEB}, p. 263 ; {WAL}, p. 271.")
L('L20', "Gila : le massacre du parti de Michel Robidoux", -110.0, 33.15, '1826~', 'circa', 'hypothetique', 'freres',
  "À l'automne 1826, le gouverneur Narbona signale un parti de trappeurs conduit par Michel Robidoux et financé par Sylvestre Pratte sur la Gila. Seuls trois des vingt hommes survivent à une attaque indienne.",
  f"{WEB}, p. 264.",
  "Lieu précis inconnu sur la Gila ; le récit de James O. Pattie est la source principale.")
L('L21', "Taos : François Robidoux part pour le pays ute", -105.57, 36.404, '1827-03', 'mois', 'certaine', 'freres',
  "En mars 1827, François Robidoux quitte Taos pour le pays ute avec un parti de trappeurs où figurent Baptiste Chalifoux et Maurice LeDuc.",
  f"{LEC}, p. 64.")
L('L22', "Fort Uncompahgre (fort Robidoux)", -108.074, 38.749, '1828/1844', 'annee', 'approximative', 'antoine',
  "Vers 1828, Antoine Robidoux bâtit un petit fort au confluent de la Gunnison et de l'Uncompahgre, près de l'actuelle Delta (Colorado) : le seul poste de traite du bassin de la Grand River, sur la route des trappeurs du Nouveau-Mexique vers la Green, Brown's Hole et plus tard Fort Bridger. Francisco Trujillo, qui y travaille pour Robidoux, est abattu par des Utes en relevant ses pièges. Les vestiges disparaissent dans les années 1880 ; une reconstitution existe depuis 1990.",
  f"{WAL}, p. 272 ; {CHI2}, p. 506, 781-782 ; {CRA}, p. 83.",
  "Date de fondation incertaine (milieu des années 1820 selon Wallace, 1828 selon d'autres auteurs).")
L('L23', "Fort Uintah (fort Robidoux)", -109.917, 40.46, '1832/1844-10', 'annee', 'approximative', 'antoine',
  "Au confluent de l'Uinta et du Whiterocks, Antoine Robidoux tient un second fort, où il rachète en 1832 le poste de Reed. On y traite avec les trappeurs de la Bear, de la Green et du Colorado et avec les Snakes et les Utes : chevaux, castors et peaux contre munitions, armes, tabac et perles. Rufus Sage y admire des peaux d'une blancheur de neige achetées pour quelques charges de poudre. En septembre 1902, Cragin y dessine le plan du « Old Ft. Robidoux ».",
  f"{WAL}, p. 272 ; {CHI2}, p. 506 ; {CRA}, p. 51-55.")
L('L24', "Fort Uintah : les « pécheurs » du révérend Williams", -109.926, 40.47, '1842-07/1842-07-27', 'mois', 'certaine', 'antoine',
  "En juillet 1842, le méthodiste Joseph Williams attend Robidoux dix-huit jours au fort et s'indigne : on y achète et vend des femmes indiennes, et Robidoux emmène des femmes et des enfants indiens pour les vendre au Nouveau-Mexique. Williams prêche en vain. La caravane part le 27 juillet.",
  f"{WAL}, p. 273.",
  "Récit très hostile, mais l'un des deux seuls témoignages directs sur les forts Robidoux.")
T('T03', "Du fort Uintah à Taos avec Joseph Williams", [UIN, [-109.5, 40.1], [-109.0, 39.6], [-108.6, 39.3], [-108.55, 39.07], [-108.3, 38.95],
                          UNC, [-107.6, 38.5], [-107.0, 38.4], [-106.7, 38.16], [-106.3, 37.9], [-105.9, 37.4], [-105.7, 36.9], TAOS],
  '1842-07-27/1842-09', 'approximative', 'terre', 'antoine',
  "La caravane d'Antoine Robidoux dort sous le Pictured Rock, franchit la Grand River, s'arrête au fort Uncompahgre, où Williams prêche le 14 août, puis gagne le col de Cochetopa : Robidoux y attelle le chariot qu'il avait laissé un an plus tôt, et mocassins et couvertures gèlent. Elle descend ensuite la vallée du rio Grande jusqu'à Taos.",
  f"{WAL}, p. 274-276.")
L('L25', "Col de Cochetopa : le chariot de Robidoux", -106.7, 38.16, '1842-08-20', 'jour', 'approximative', 'antoine',
  "Entre le 19 et le 21 août 1842, au col de Cochetopa, Robidoux retrouve et attelle le chariot qu'il y avait laissé l'année précédente : la preuve que des roues passaient déjà par cette piste au début des années 1840.",
  f"{WAL}, p. 276.")
T('T04', "De Taos au fort Uintah avec Rufus Sage", [TAOS, [-106.1, 36.9], [-106.9, 37.1], [-107.6, 37.3], [-108.0, 37.45], [-108.6, 37.9],
                          [-108.9, 38.5], [-109.2, 39.2], [-109.5, 39.9], UIN],
  '1842-10-07/1842-10-19', 'hypothetique', 'terre', 'antoine',
  "Le 7 octobre 1842, Robidoux repart de Taos avec trois Français, cinq Espagnols et huit mulets chargés chacun de 250 livres ; Rufus Sage est du voyage. La caravane franchit la ligne de partage au sud des monts La Plata et atteint le fort Uintah six jours plus tard.",
  f"{WAL}, p. 276-277.",
  "Wallace suppose une seconde piste par la Dolores, sans passer par le fort Uncompahgre ; tracé reconstitué.")
L('L26', "Grand Junction : Marcus Whitman traverse le Colorado", -108.55, 39.07, '1842-11', 'mois', 'certaine', 'antoine',
  "Vers le 1er novembre 1842, le missionnaire Marcus Whitman, parti de Waiilatpu pour Boston, arrive au fort Uintah avec Asa Lovejoy ; un guide de Robidoux les mène vers le fort de la Gunnison. Au confluent, Whitman se jette le premier dans le Colorado en crue avec son cheval et gagne la glace de l'autre rive.",
  f"{WAL}, p. 279.")
L('L27', "Robidoux Pass (col Mosca)", -105.48, 37.73, '1848/1853', 'annee', 'approximative', 'antoine',
  "L'entrée orientale de la vallée de San Luis, aujourd'hui le col Mosca, s'appelait « Roubideau's Pass » dans le journal de l'expédition Gunnison en 1853 ; Frémont l'emprunte en 1848. Le nom rappelle la route des convois Robidoux vers les forts de l'Ouest.",
  f"{WAL}, p. 280.",
  "Toponyme francophone disparu.")
L('L28', "Fort El Pueblo : Leonora, fille d'un Robidoux", -104.61, 38.27, '1843/1844', 'annee', 'approximative', 'famille',
  "Parmi les habitants du fort El Pueblo en 1843-1844 vit Leonora, trois ou quatre ans, aux cheveux très blonds, fille d'un Robidoux (probablement « le riche ») et de Rufina García.",
  f"{CRA}, p. 82, 84.")
L('L29', "Fort Uintah : le massacre de 1844", -109.93, 40.475, '1844-10', 'mois', 'certaine', 'antoine',
  "À l'automne 1844, les Utes, exaspérés par le « Taos Lightning » et la traite des captifs, attaquent le fort, tuent les hommes et emmènent les femmes. Le 20 octobre, Andrew Sublette écrit de Taos qu'un trappeur espagnol rescapé a trouvé cinq ou six Espagnols et un Américain tués. Le fort Uncompahgre est abandonné à la même époque.",
  f"{WAL}, p. 281.")

# ------------------------------------------------------------------ Saint-Joseph, la guerre du Mexique et la Californie
L('L30', "Saint-Joseph : Antoine rejoint ses frères", -94.848, 39.77, '1845', 'annee', 'certaine', 'antoine',
  "Fin 1844 ou début 1845, Antoine Robidoux abandonne ses forts et s'installe à Saint-Joseph, la ville de son frère Joseph. Sa fille adoptive Carmelette y épouse Isadore Barada et meurt peu après la naissance d'Amanda. Tassé situe son installation près de ses frères dès 1840.",
  f"{WAL}, p. 281 ; {TAS}, p. 128-129.")
L('L31', "Saint-Joseph : Jules Robidoux", -94.85, 39.772, '1843/1875-02-26', 'annee', 'certaine', 'jules',
  "Jules Robidoux, frère de Joseph, bâtit en 1843 la deuxième maison de la future ville de Saint-Joseph. En 1849, il passe au fort Laramie comme traiteur. Il assiste en septembre 1874 à l'assemblée des pionniers du Missouri et meurt à Saint-Joseph le 26 février 1875.",
  f"{TAS}, p. 125-128 ; {CRA}, p. 224.")
T('T05', "Avec Kearny, de Santa Fe à San Pasqual", [SF, [-106.6, 35.1], [-106.8, 34.0], [-107.2, 33.0], [-108.2, 32.8], [-109.3, 32.95],
                          [-110.8, 32.9], [-112.0, 33.0], [-113.5, 32.8], [-114.6, 32.73], [-115.6, 32.8], [-116.4, 33.0], [-116.95, 33.09]],
  '1846-09-25/1846-12-06', 'approximative', 'terre', 'antoine',
  "Interprète du général Kearny pendant la guerre du Mexique, Antoine Robidoux suit l'armée de l'Ouest de Santa Fe en Californie par le rio Grande et la Gila.",
  f"{WAL}, p. 281 ; {TAS}, p. 128.",
  "Tracé reconstitué par la route de l'armée de Kearny.")
L('L32', "San Pasqual : Antoine blessé d'un coup de lance", -116.95, 33.09, '1846-12-06', 'jour', 'certaine', 'antoine',
  "À la bataille de San Pasqual, le 6 décembre 1846, Antoine Robidoux reçoit un coup de lance dans le dos. Son frère Louis possède alors de grandes terres dans ce qui deviendra les comtés de San Bernardino, d'Orange et de Riverside.",
  f"{WAL}, p. 281 ; {TAS}, p. 128.")
L('L33', "Callao : le retour par mer", -77.15, -12.05, '1847/1848', 'annee', 'approximative', 'antoine',
  "Souffrant de ses blessures, Antoine rentre par bateau « via le Pérou, la Jamaïque et d'autres lieux » jusqu'à La Nouvelle-Orléans, et en réclame le remboursement au Congrès.",
  f"{WAL}, p. 282.",
  "Escale péruvienne placée au Callao.")
T('T06', "Louis Robidoux quitte Taos pour la Californie", [TAOS, [-106.5, 36.9], [-107.9, 37.3], [-109.5, 37.7], [-111.0, 38.3], [-112.5, 38.0],
                          [-113.6, 37.3], [-114.6, 36.6], [-115.6, 35.6], [-116.8, 34.9], [-117.3, 34.4], [-117.43, 33.99]],
  '1844/1846', 'hypothetique', 'terre', 'louis',
  "Selon Rafael Chacón, Louis Robidoux quitte Taos pour la Californie ; il s'établit au rancho de Jurupa, sur le Santa Ana.",
  f"{CRA}, p. 131.",
  "Chacón date le départ de 1846 ; la route est celle de la Vieille piste espagnole, par hypothèse.")
L('L34', "Rancho de Jurupa : Louis Robidoux", -117.43, 33.99, '1846/1868', 'annee', 'approximative', 'louis',
  "Louis Robidoux, frère de Joseph et d'Antoine, ancien commerçant de Santa Fe, devient ranchero en Californie au rancho de Jurupa, aujourd'hui Riverside. Il meurt en 1868. Le mont Rubidoux, à Riverside, porte encore son nom.",
  f"{CRA}, p. 131, 141 ; {WAL}, p. 281.",
  "Le mont Rubidoux est signalé ici d'après la toponymie actuelle.")
L('L35', "Agua Mansa : la famille de Louis", -117.36, 34.04, '1846/1868', 'annee', 'approximative', 'louis',
  "La famille de Louis Robidoux vit près de l'ancienne mission espagnole d'Agua Mansa, entre Riverside et San Bernardino ; ses registres sont conservés à l'église catholique de San Bernardino.",
  f"{CRA}, p. 141.")
L('L36', "Fort Laramie : Jules Robidoux, traiteur", -104.558, 42.203, '1849', 'annee', 'certaine', 'jules',
  "Pendant l'hiver 1849, Josiah F. Smith, qui chasse pour le fort Laramie avec James Bordeaux, y voit passer Jules Robidoux, traiteur. Le fort Platte voisin est alors abandonné.",
  f"{CRA}, p. 224, 244-245.")
L('L37', "Col de Robidoux (Scotts Bluff)", -103.8515, 41.8142, '1849-07-25/1852', 'jour', 'approximative', 'famille',
  "Sur la route de l'Oregon, le col de Robidoux, à l'ouest de Scotts Bluff, porte le nom de la famille qui y tenait un poste de traite et une forge pour les émigrants. En juillet 1849, le poste de Fort Pierre que dirige Andrew Drips s'y installe d'abord, avant de descendre à huit milles au sud de Scotts Bluff (Fort John).",
  f"{HAN}, p. 233.",
  "Le membre de la famille qui tenait le poste du col n'est pas précisé dans la source utilisée.")
L('L38', "Saint-Joseph : mort d'Antoine", -94.843, 39.768, '1860-08-29', 'jour', 'certaine', 'antoine',
  "Antoine Robidoux passe ses cinq dernières années à Saint-Joseph, aidé par David Waldo pour réclamer une pension, et y meurt le 29 août 1860. La St. Joseph Gazette le croyait installé en Californie depuis des années.",
  f"{WAL}, p. 282 ; {TAS}, p. 129.",
  "Tassé donne le 29 avril 1860.")
L('L39', "Santa Fe : quatre voyages et deux maires", -105.936, 35.686, '1822/1829', 'annee', 'certaine', 'freres',
  "Antoine, Michel et François Robidoux font quatre voyages de Saint-Louis à Santa Fe entre 1822 et 1825. Devenus citoyens mexicains en 1829, deux d'entre eux sont élus à la tête de la municipalité de Santa Fe.",
  f"{AHQ}, p. 104.")

# ================================================================== AJOUTS 2026 : sources nouvelles, frères, proches et descendants
# ------------------------------------------------------------------ Joseph III et le Missouri
L('L40', "Fort Dearborn (Chicago) : un poste pour le père", -87.6246, 41.8868, '1803', 'annee', 'hypothetique', 'joseph3',
  "Selon la tradition familiale reprise par Clyde Rabideau, Joseph Robidoux (III) est envoyé en 1803 par son père organiser un poste de traite au fort Dearborn, à l'emplacement de Chicago, l'année même où il se serait établi aux Black Snake Hills selon le Herald de Saint-Joseph.",
  f"{WJ4}.",
  "Version non recoupée par Tassé ni par Houck, et difficile à concilier avec l'établissement au Missouri la même année.")
L('L41', "Fort Leavenworth : le traité de la Platte Purchase", -94.922, 39.355, '1836', 'annee', 'approximative', 'joseph3',
  "William Clark réunit les Ioways, les Missouris et les Sauks et Renards au fort Leavenworth : les nations cèdent environ deux millions d'acres, ce qui étend le Missouri jusqu'à la rivière et englobe les Black Snake Hills (comtés de Platte, Buchanan, Andrew, Nodaway, Atchison et Holt). Un témoin signe « H. Robidou, Jr. », sans doute Joseph E., le fils aîné. Le traité de 1836 avec les Otos, les Missouris, les Omahas et les Sioux Yanktons et Santees accorde à Joseph trois sections de terre pour ses crédits impayés, mais le Sénat ne ratifie pas l'article.",
  f"{WIL}, p. 134-136.",
  "Willoughby place la rencontre en septembre 1835 ; le traité de la Platte Purchase est généralement daté de 1836.")
L('L42', "Sparta : le chef-lieu qui échappe à Robidoux", -94.80, 39.58, '1840-08/1846', 'mois', 'hypothetique', 'joseph3',
  "La cour du comté de Buchanan siège d'abord en 1839 dans le salon de Joseph Robidoux, qui sert aussi de bureau de vote. En août 1840, elle choisit pourtant un site au centre du comté, Sparta, et y vote 6 000 dollars pour un palais de justice en 1842. Peu y est bâti : trois ans après la fondation de Saint-Joseph, le comté abandonne Sparta et fait de la ville de Robidoux son chef-lieu.",
  f"{WIL}, p. 139, 142, 144.",
  "Emplacement de Sparta, village disparu, approximatif.")
L('L43', "Plattsburg : le bureau des terres", -94.448, 39.5656, '1843-05', 'mois', 'certaine', 'joseph3',
  "En mai 1843, Joseph Robidoux monte à cheval pour gagner le bureau des terres de Plattsburg et y faire inscrire sa préemption, que des habitants du comté voulaient lui contester pour vendre le terrain au profit des bâtiments publics. Le bureau lui donne raison, raconte le St. Louis Reveille : le traiteur devient en quelques semaines propriétaire d'une ville.",
  f"{WIL}, p. 142-143.")
L('L44', "Saint-Louis : l'acte de naissance de Saint-Joseph", -90.1892, 38.6275, '1843-07-25/1843-07-26', 'jour', 'certaine', 'joseph3',
  "Entre deux plans d'arpenteurs, Joseph choisit celui de Frederick W. Smith, aux rues étroites de 60 pieds, nommées d'après ses enfants (Faraon, Jules, Francis, Felix, Edmond, Charles, Sylvanie, Angelique, Messanie) : « vendre ma terre en lots, non la donner en rues ». Il signe le plan le 25 juillet 1843 ; le 26, le greffier de la cour des plaids communs de Saint-Louis l'enregistre, avec l'hypothèque de 6 372,57 dollars due à Pierre Chouteau fils.",
  f"{WIL}, p. 143-144 ; {WJ4}.")
L('L45', "Robidoux's Landing : moulin, bureau de poste et entrepôts", -94.8455, 39.7745, '1840/1842-02', 'annee', 'approximative', 'joseph3',
  "Autour du comptoir, rebaptisé Robidoux's Landing, s'installent commis, médecins et artisans. En 1840, un bureau de poste ouvre aux Black Snake Hills avec Jules, le fils de Joseph, comme premier maître de poste. En 1841, Robidoux ouvre un moulin à farine sur la rive ouest du ruisseau Blacksnake ; en février 1842, la cour lui commande un entrepôt d'inspection du tabac au débarcadère, puis il en bâtit un pour le chanvre.",
  f"{WIL}, p. 139-142.")
L('L46', "Saint-Joseph : Robidoux Row", -94.8575, 39.7747, '1849/1868', 'annee', 'certaine', 'joseph3',
  "Rangée de logements bâtie par Joseph Robidoux à la fin des années 1840 dans le nord de Saint-Joseph (219-225, rue Poulin) ; il y a lui-même habité. C'est l'un des rares bâtiments subsistants des débuts de la ville, aujourd'hui musée.",
  f"{NRHP} ; « Robidoux Row », Wikipédia.")
L('L47', "Saint-Joseph : le monument de Mount Olivet", -94.810, 39.735, '1914', 'annee', 'approximative', 'famille',
  "Enterré d'abord au cimetière catholique Calvary, Joseph est transféré au cimetière Mount Olivet, où son petit-fils Louis lui élève en 1914 un monument de douze pieds. Au pied, des stèles rappellent Antoine, Michel et François, qui n'y reposent pas, et Angélique Vaudry, morte en 1857.",
  f"{WIL}, p. 211 ; {WJ4}.",
  "Coordonnées du cimetière approximatives ; Wikipédia date la réinhumation de 1908.")

# ------------------------------------------------------------------ Antoine et Louis : Nouveau-Mexique, Utah, Missouri
L('L48', "Mine du Cerro del Oro", -106.17, 35.32, '1834', 'annee', 'hypothetique', 'antoine',
  "En 1834, Antoine Robidoux achète la mine du « Cerro del Oro », près de Santa Fe, à Dolores Jallono, Ignacio Ladrón de Guevara et Marcelino Abreu, devant l'alcalde Santiago Abreu. La région donne du cuivre ; l'or et l'argent restent incertains, et rien ne dit qu'il en ait tiré profit.",
  f"{WIL}, p. 131-132.",
  "Emplacement non précisé : placé dans les monts Ortiz, district aurifère le plus proche de Santa Fe.")
L('L49', "Santa Fe : le moulin de Louis sur la rivière", -105.9445, 35.6842, '1839-04/1841-03-20', 'mois', 'approximative', 'louis',
  "En avril 1839, Louis Robidoux obtient de l'ayuntamiento le droit d'installer un moulin à grain sur la rivière Santa Fe ; un voisin et rival, Antonio Ortiz, s'en plaint, mais le conseil juge le moulin utile. Premier alcalde jusqu'au 1er janvier 1840, Louis vend le 20 mars 1841 sa maison, son magasin et son moulin à Roque Tudesqui, devant la montée de l'hostilité envers les Américains.",
  f"{WIL}, p. 149, 153.",
  "Emplacement du moulin sur la rivière non précisé.")
L('L50', "Westwater : l'inscription d'Antoine", -109.16, 39.28, '1837-11-13', 'jour', 'approximative', 'antoine',
  "Sur la paroi de grès de la rive ouest du ruisseau Westwater, à huit kilomètres environ à l'ouest de la frontière Utah-Colorado, Antoine grave : « Antoine Robidoux passé ici le 13 Novembre 1837 pour etablire maison traitte a la Rv. vert ou wiyte ». « Wiyte » se lit Uinta ou White ; le 7 de 1837 pourrait être un 1. L'inscription surmonte un bouclier peint préhistorique et a été criblée de balles.",
  f"{WIL}, p. 126-128 ; {KEL} ; {UTB}.",
  "Charles Kelly, qui la photographie en 1933, la situe près de l'embouchure du canyon de Westwater, au ranch Larsen (section 5, canton 18 sud, rang 24 est, comté de Grand), à 15 milles au nord-ouest de la gare de Westwater : Robidoux campait dans un abri sous roche et grava juste au sud de l'entrée. Point placé en conséquence.",
  images=[LOC("westwater-inscription-antoine-robidoux-2001.jpg", "L'inscription d'Antoine Robidoux, ruisseau Westwater (Utah), photographiée en 2001 (dossier de l'auteur)")])
L('L51', "Willow Creek : l'inscription de Louis", -109.70, 39.65, '1841-05-05', 'jour', 'hypothetique', 'louis',
  "Au printemps 1841, Louis Robidoux monte vérifier le fort Uintah, dont il est copropriétaire avec Antoine. Dans le bassin du Willow Creek, sur le plateau Tavaputs, il grave en espagnol qu'il est passé là le 5 mai 1841. Le Missouri Historical Society conserve une photographie de l'inscription prise le 22 septembre 1968.",
  f"{WIL}, p. 154 ; {MHS}.",
  "Emplacement exact non publié : point placé dans le bassin du Willow Creek.")
L('L52', "Embouchure de l'Uinta : le quartier d'hiver de Kit Carson", -109.66, 40.07, '1833-10/1834', 'mois', 'approximative', 'antoine',
  "En octobre 1832 ou 1833, Kit Carson trouve « M. Robidoux » sur l'Uinta avec une vingtaine d'hommes qui trappent et commercent, puis hiverne à l'embouchure de la rivière. Un Indien de Californie du parti Robidoux s'enfuit avec six chevaux ; Robidoux demande à Carson de le poursuivre, et Carson le rattrape à 130 milles.",
  f"{WIL}, p. 129.",
  "Carson ne précise pas s'il s'agit d'Antoine ou de Louis.")
L('L53', "Saint-Louis : cinq chariots de Jackson et Sublette", -90.1878, 38.6265, '1831-10/1831-11-28', 'mois', 'certaine', 'antoine',
  "À l'automne 1831, Antoine quitte le fort de la Gunnison, passe voir son frère Joseph aux Black Snake Hills début octobre, puis règle ses comptes à Saint-Louis avec Jackson et Sublette, qui lui doivent 3 806,50 dollars. Le 28 novembre, il leur achète cinq chariots à 100 dollars pièce, signe du volume des marchandises qu'il fait passer jusqu'au versant ouest des Rocheuses.",
  f"{WIL}, p. 125-126.")
L('L54', "Weston : Antoine vante la Californie", -94.9013, 39.4111, '1840-11/1841', 'mois', 'approximative', 'antoine',
  "À la fin de l'automne 1840, Antoine passe dans le nord-ouest du Missouri. À Weston, il décrit la Californie comme un paradis au printemps perpétuel : son récit pousse John Bidwell à fonder la Western Emigration Society, d'où part en mai 1841 la première caravane de chariots vers la Californie.",
  f"{WIL}, p. 152-153 ; {UTB}.")
L('L55', "Fort Laramie : Antoine et les Sublette", -104.555, 42.205, '1845-07-04', 'jour', 'certaine', 'antoine',
  "Le 4 juillet 1845, après l'abandon de ses forts, Antoine Robidoux est au fort Laramie et y traite des affaires avec la famille Sublette.",
  f"{WIL}, p. 166.")
L('L56', "Santa Fe : Isidore et la pétition des marchands", -105.9372, 35.6866, '1835', 'annee', 'certaine', 'freres',
  "Isidore Robidoux garde sa base à Saint-Louis mais commerce sur la piste de Santa Fe, pour ses frères ou à son compte. En 1835, avec Manuel Alvarez, Josiah Gregg, P. W. Thompson et L. L. Waldo, il signe une pétition demandant au ministre américain au Mexique, Powhatan Ellis, d'intervenir dans un différend fiscal avec l'assemblée locale.",
  f"{WIL}, p. 132.")
L('L57', "Col de Robidoux : le second poste de Carter Canyon", -103.80, 41.735, '1849/1851', 'annee', 'hypothetique', 'famille',
  "Le poste du col de Robidoux, avec sa forge pour les émigrants, a été fondé par Joseph ou par Antoine ; Joseph E., fils aîné du fondateur de Saint-Joseph, est le candidat le plus probable. Un second poste Robidoux se trouvait dans le Carter Canyon. Après l'ouverture du col Mitchell en 1851, les postes tombent en désuétude ; Joseph E. serait retourné dans le nord du Kansas à la fin des années 1850.",
  f"{NPSRP}.",
  "Emplacement du poste de Carter Canyon non publié.")

# ------------------------------------------------------------------ Louis en Californie
L('L58', "Rancho San Jacinto y San Gorgonio", -116.98, 33.93, '1845', 'annee', 'hypothetique', 'louis',
  "En 1845, un an après son arrivée en Californie, Louis Robidoux achète à James (Santiago) Johnson le rancho San Jacinto y San Gorgonio, à l'est de la vallée de San Bernardino.",
  f"{WLR}.",
  "Limites du rancho non cartographiées : point placé dans le col de San Gorgonio.")
L('L59', "Jurupa : la maison de Louis Rubidoux", -117.40605, 33.99682, '1846/1868', 'annee', 'certaine', 'louis',
  "Louis Robidoux achète en 1847 la part de Benjamin Wilson dans le rancho Jurupa (Wilson dit 1849). Il y devient l'un des plus riches éleveurs du sud de la Californie : clôtures, blé, vergers, vignes, chai. Alcalde dès août 1846, il est l'un des trois premiers superviseurs du comté de San Bernardino. Le site de sa maison est le California Historical Landmark n° 102 (5575, boulevard Mission, Jurupa Valley).",
  f"{WIL}, p. 163-164 ; {OHP}, n° 102 ; {WLR}.",
  images=[LOC("jurupa-maison-louis-rubidoux-v1869.jpg", "La maison de Louis Rubidoux à Jurupa, vers 1869 (California Historical Society, USC Digital Library)")])
L('L60', "Jurupa : le moulin Rubidoux", -117.40646, 33.99526, '1846/1847', 'annee', 'certaine', 'louis',
  "Sur le rancho Jurupa, Louis bâtit en 1846-1847 un moulin à grain à turbine hydraulique et deux paires de meules, sans doute le premier du sud de la Californie. Seul de son espèce dans la région, il répond à un besoin pressant. Le site est le California Historical Landmark n° 303 (5540, Molino Way).",
  f"{WIL}, p. 164 ; {OHP}, n° 303.")
L('L61', "Agua Mansa : la sépulture de Louis", -117.36389, 34.04194, '1868-09-24', 'jour', 'certaine', 'louis',
  "Louis Robidoux meurt le 24 septembre 1868 près de Colton. Il repose au cimetière pionnier d'Agua Mansa, seul vestige du village néo-mexicain fondé en 1842-1845 sur le Santa Ana et emporté par la crue de 1862 ; il en serait la plus ancienne inhumation connue. Sa veuve, Guadalupe García, meurt en 1892. Le cimetière est le California Historical Landmark n° 121.",
  f"{WLR} ; {WAM} ; {OHP}, n° 121.")
L('L62', "Mont Rubidoux", -117.3918, 33.9822, '1868/1906', 'annee', 'certaine', 'famille',
  "La colline qui domine Riverside porte le nom de Louis Rubidoux, comme la ville voisine de Rubidoux (aujourd'hui Jurupa Valley). En novembre 1869, la California Silk Center Association achète plus de 4 000 acres de l'ancien rancho : c'est le noyau de Riverside.",
  f"{WLR}.",
  images=[COM("MountRubidoux-1.JPG", "Le mont Rubidoux, Riverside"),
          COM("Panoramic view of Riverside from Mount Rubidoux, ca.1906-1910 (CHS-5362).jpg", "Riverside vue du mont Rubidoux, vers 1906-1910 (California Historical Society)")])

# ------------------------------------------------------------------ Les proches : épouses, alliés autochtones, descendants
L('L63', "Pays ioway : Mary Many Days et White Cloud", -95.297, 39.976, '1805/1884-06-29', 'annee', 'hypothetique', 'proches',
  "Mary Many Days (v. 1805-1884), fille de Joseph Robidoux (III) et d'une femme autochtone, épouse le chef ioway White Cloud. Pour l'historien Tanis Thorne, ce mariage illustre les réseaux de parenté qui lient alors les traiteurs indépendants de Saint-Louis aux familles dirigeantes autochtones : une lignée de chefs ioways en descend. Ses petits-fils James et Jefferson White Cloud deviennent chefs. Point placé sur la réserve ioway du nord-est du Kansas (White Cloud).",
  f"{WMM} ; {WJ4}.",
  "Lieu de vie non précisé par les sources consultées ; la mère est parfois dite shoshone.")
L('L64', "Black Snake Hills : naissance de Carmelete", -94.852, 39.769, '1830~', 'circa', 'hypothetique', 'proches',
  "Les registres du Missouri indiquent que Carmel Benavides donne naissance vers 1830 à une fille, Carmelete, peut-être au poste des Black Snake Hills. D'autres sources en font une orpheline adoptée à Santa Fe. On ne sait presque rien d'elle au-delà de sa naissance.",
  f"{NPSC} ; « Women and the Santa Fe Trail », Legends of America.",
  "Naissance au Missouri contestée ; le lieu exact (Saint-Joseph ou Saint-Louis) est inconnu.")
L('L65', "Washington Township : chez les Barada", -94.850, 39.780, '1850-08-18', 'jour', 'approximative', 'proches',
  "Au recensement du 18 août 1850, Carmel Benavides vit chez Isadore et « Maltine » Barada, dans le canton de Washington (comté de Buchanan), inscrite comme « A. Robidoux », 38 ans, née au Mexique. Maltine est sans doute Martina Anaya, cousine de Carmel adoptée par le couple à Santa Fe, mariée à Isidore Barada en 1847 à Saint-Joseph.",
  f"{LEV} ; {NPSC} ; {FAG} ; {CEN}, 1850, canton de Washington, comté de Buchanan (Isadore Barada, v. 1808, Missouri ; Maltine Barada, v. 1829, Mexique ; Antoine, Adolph, Julius et Mary Barada, nés au Mexique).")
L('L66', "Saint-Joseph : naissance d'Amanda Barada", -94.849, 39.766, '1852-06-26', 'jour', 'approximative', 'proches',
  "Amanda Maria Barada naît à Saint-Joseph le 26 juin 1852 ; sa mère meurt peu après. Antoine et Carmel l'élèvent et l'inscrivent dans le testament d'Antoine, qui fait de sa « bien-aimée Carmelletta » l'exécutrice de ses biens. Au recensement de 1860, Carmel vit dans le 3e quartier avec une fillette de neuf ans, « A. Barady ».",
  f"{STO} ; {LEV} ; {FAG} ; {CEN}, 1860, Saint-Joseph (A. Robidoux, femme, v. 1812, Nouveau-Mexique).",
  "La mère d'Amanda est nommée Carmelette dans la tradition familiale et Martina Anaya par Levine et Find a Grave.")
T('T07', "Carmel et Amanda retournent à Santa Fe", [SJ, [-94.6, 39.1], [-95.7, 38.8], [-96.49, 38.66], [-98.2, 38.4], [-99.9, 37.9],
                          [-101.0, 37.6], [-102.2, 37.2], [-103.4, 36.6], [-104.5, 35.9], [-105.2, 35.6], SF],
  '1860-09/1862', 'hypothetique', 'terre', 'proches',
  "Après la mort d'Antoine, Carmel reprend seule la piste de Santa Fe avec sa petite-fille Amanda. Leur caravane aurait été attaquée par des Comanches dans les plaines du Kansas ; Levine n'a pu dater ni confirmer l'épisode.",
  f"{LEV} ; {NPSC}.",
  "Date et route inconnues : tracé de la piste de Santa Fe par la route du Cimarron.")
L('L67', "Santa Fe : la maison Baca de la rue du Grenier", -105.9367, 35.6875, '1867-04-21/1879', 'jour', 'certaine', 'proches',
  "Carmel Benavides hérite de sa mère la partie ouest de la vieille propriété des Baca, rue du Grenier (Calle del Granero), à l'est du palais des gouverneurs. Le 21 avril 1867, Amanda y épouse à Santa Fe Christian Stollsteimer, immigrant wurtembergeois. En 1879, Carmel vend la maison à l'ancien gouverneur L. Bradford Prince et signe l'acte d'une croix. Au 109 East Palace, la maison sera pendant la guerre le bureau secret du projet Manhattan.",
  f"{LEV} ; {STO}.")
L('L68', "Conejos : Carmel chez les Stollsteimer", -106.0198, 37.0886, '1870-07-16', 'jour', 'certaine', 'proches',
  "Au recensement du 16 juillet 1870, Carmel, inscrite cette fois « Carmel Robidoux », 59 ans, née au Nouveau-Mexique, vit à Conejos (territoire du Colorado) chez Christian Stollsteimer, marchand, et Amanda, avec leurs deux premiers enfants. Le petit Carlos Alberto est baptisé à l'église de Guadalupe en 1868 avec Maria Carmel Roubidoux pour marraine.",
  f"{LEV} ; {STO} ; {CEN}, 1870, Conejos (Chas F. Stollsteimer, v. 1843, Wurtemberg ; Amanda, v. 1851, Missouri ; Charles Albert, 1868 ; Ferdinand, 1869).")
L('L69', "La Piedra : le ranch des Stollsteimer", -107.34, 37.13, '1880/1906', 'annee', 'approximative', 'proches',
  "Vers 1880, Christian Stollsteimer et Amanda Barada élèvent bétail et moutons au confluent de la Piedra et du ruisseau Stollsteimer, au lieu-dit Francé, au sud-ouest de Pagosa Springs ; la famille y bâtit une petite chapelle catholique pour les prêtres de passage. Agent des Utes du Sud et des Jicarillas, Christian perd son poste en 1888 pour malversations.",
  f"{FLC} ; {STO}.",
  "Emplacement du lieu-dit Francé approximatif.")
L('L70', "Pagosa Springs : la colline Robidoux", -107.0045, 37.2645, '1880/1911', 'annee', 'approximative', 'famille',
  "La colline au sud-est de Pagosa Springs s'appelait Robidoux Hill, en l'honneur d'Antoine, grand-père adoptif d'Amanda Stollsteimer, dont la famille vit dans le comté. Au début du XXe siècle, on y installe le réservoir de la ville : elle devient Reservoir Hill.",
  f"{PAG}.",
  "Toponyme francophone disparu.")
L('L71', "Durango : la tombe de Carmel Benavides", -107.8705, 37.2895, '1888-01-29', 'jour', 'approximative', 'proches',
  "Carmel Benavides meurt le 29 janvier 1888, en pionnière du comté de Conejos, et est inhumée au cimetière Greenmount de Durango, loin d'Antoine, enterré à Saint-Joseph. Ni Levine ni personne n'a retrouvé de lettre, de journal ou de déclaration d'elle : elle signait d'une croix.",
  f"{LEV}.",
  "Legends of America la fait mourir à Santa Fe ; coordonnées du cimetière approximatives.")
L('L72', "Altadena : la tombe d'Amanda Stollsteimer", -118.1325, 34.1848, '1916-12-15', 'jour', 'approximative', 'proches',
  "Amanda Stollsteimer, élevée par Antoine Robidoux, meurt d'un cancer le 15 décembre 1916 à Altadena, chez sa fille Stella, et repose au cimetière Mountain View. Le Pagosa Springs Sun salue l'une des premières pionnières du comté, mère de huit enfants. Dernière à avoir connu Antoine, elle est la personne la plus susceptible d'avoir raconté ses souvenirs au début du siècle.",
  f"{STO}.",
  "Coordonnées du cimetière approximatives.")

# ------------------------------------------------------------------ Routes nouvelles
T('T08', "D'un fort à l'autre par Westwater", [UNC, [-108.3, 38.95], [-108.55, 39.07], [-108.9, 39.12], [-109.13, 39.17], [-109.3, 39.55],
                          [-109.55, 39.95], [-109.66, 40.07], UIN],
  '1837-11/1837-12', 'hypothetique', 'terre', 'antoine',
  "Pour aller du fort de la Gunnison au fort Uintah (240 km à vol d'oiseau), Antoine descend la Gunnison jusqu'à l'actuelle Grand Junction, traverse les canyons des Book Cliffs, où il grave son nom à Westwater, puis le désert jusqu'à la White et la vallée de la Green. La route longue suit plutôt le tracé Smith de la Vieille piste espagnole.",
  f"{WIL}, p. 131 ; {UTB}.",
  "Tracé reconstitué.")
T('T09', "Louis monte au fort Uintah", [SF, [-106.3, 36.2], [-106.9, 36.8], [-108.0, 37.45], [-108.9, 38.5], [-109.55, 38.99], [-110.15, 38.99],
                          [-109.9, 39.4], [-109.70, 39.65], [-109.66, 40.07], UIN],
  '1841-03/1841-05', 'hypothetique', 'terre', 'louis',
  "Après avoir vendu ses biens de Santa Fe, Louis part au printemps 1841 vérifier les affaires du fort Uintah ; le 5 mai, il grave son passage dans le bassin du Willow Creek.",
  f"{WIL}, p. 153-154.",
  "Route reconstituée par la Vieille piste espagnole et la vallée de la Green.")

# ================================================================== AJOUTS 2026 (II) : Willoughby intégral, lettres de Louis, Kelly 1933, Drouin
# ------------------------------------------------------------------ Le père, Joseph II
L('L73', "Sault-au-Récollet : baptême de Joseph Marie Robidoux", -73.6585, 45.5640, '1750-02-12', 'jour', 'certaine', 'joseph2',
  "Joseph Marie Robidoux, le futur Joseph II, naît et est baptisé le 12 février 1750 à la Visitation-de-la-Bienheureuse-Vierge-Marie du Sault-au-Récollet, au nord de l'île de Montréal, fils de Joseph Robidoux et de Marianne Leblanc. C'est la racine montréalaise de toute la famille de l'Ouest : il part avec son père pour Saint-Louis en 1770-1771.",
  f"{DRO} ; {WIL}, p. 2-3.",
  "L'index d'Ancestry porte à tort 1736 comme date de baptême ; l'acte et la date de naissance donnent 1750.",
  images=[{"src": "images/documents/drouin-1750-02-12-bapteme-joseph-marie-robidoux.jpg", "legende": "Registre de la Visitation du Sault-au-Récollet, 1750 : en marge, « B.5 joseph marie Robidoux » (collection Drouin, image Ancestry)"}])
L('L74', "Rivière Des Moines : le poste du père", -91.43, 40.38, '1803-05', 'mois', 'hypothetique', 'joseph2',
  "En mai 1803, malade et presque aveugle, Joseph II achète une part d'un poste au confluent de la Des Moines et du Mississippi, où la famille commerce avec des fournisseurs canadiens. Le jeune Joseph III en serait parti pour sa première remontée du Missouri.",
  f"{WIL}, p. 23-25.",
  "Emplacement exact du poste inconnu.")
# ------------------------------------------------------------------ Joseph III
L('L75', "Belle Fontaine : la licence du général Wilkinson", -90.207, 38.828, '1805-08-28/1806-08', 'jour', 'certaine', 'joseph3',
  "Le 28 août 1805, le gouverneur James Wilkinson accorde une licence de traite à « Joseph Robidoux, Junior » ; il la renouvelle en août 1806. Wilkinson fait bâtir la même année le fort de Belle Fontaine, quatre milles au-dessus du confluent du Missouri et du Mississippi.",
  f"{WIL}, p. 26-27.",
  "La licence est délivrée à Saint-Louis ; le point marque le fort du gouverneur.")
T('T10', "De Michillimakinac à l'Illinois", [[-84.73, 45.86], [-86.5, 44.5], [-87.6, 43.0], [-87.62, 41.88], [-88.2, 41.4], [-89.3, 41.1], [-89.6, 40.7], [-90.1, 39.8], [-90.43, 38.97], SL],
  '1808-07-30/1808-09', 'hypothetique', 'fleuve', 'joseph3',
  "Le 30 juillet 1808, Joseph Robidoux prend le commandement d'une barge partie de Michillimakinac pour la rivière des Illinois. En septembre, il engage son frère François comme hivernant sur le Missouri.",
  f"{WIL}, p. 31.",
  "Route reconstituée par le lac Michigan, le portage de Chicago et l'Illinois.")
L('L76', "Bellevue : Roy & Robidoux contre Cabanné", -95.89, 41.137, '1826-08-16/1828-10', 'jour', 'certaine', 'joseph3',
  "Le 16 août 1826, William Clark délivre à Joseph Robidoux une licence pour Bellevue, l'embouchure de la Papillion et les villages omahas, panis et poncas. Associé à Baptiste Roy en 1827-1828, il fait une concurrence ouverte à Jean-Pierre Cabanné, de la compagnie Pratte, qui l'accuse de vendre du whisky. En octobre 1828, la compagnie rachète ses marchandises 3 500 dollars et lui verse 1 000 dollars par an pour qu'il quitte le Missouri : il se retire à Saint-Louis, où il tient une boulangerie.",
  f"{WIL}, p. 88-96, 100.")
L('L77', "Grande Nemaha : le poste près de l'agence", -95.27, 39.86, '1847-07/1849', 'mois', 'hypothetique', 'joseph3',
  "Joseph Robidoux tient un poste près de l'agence de la Grande Nemaha, à une journée à l'ouest de Saint-Joseph, où se fournissent les Ioways et les Sauks ; son commis Hardin y traite pour « Robidoux (Michel et François) » en 1847. En mai 1849, un émigrant croise le vieux Joseph près de la Big Nemaha, allant au-devant de ses mulets chargés de fourrures. Il vend le poste en 1849.",
  f"{WIL}, p. 185-187, 194.",
  "Emplacement placé à l'agence (près de l'actuelle Highland, Kansas).")
L('L78', "Saint-Joseph : la mort de Charles", -94.8492, 39.7672, '1850-09-08', 'jour', 'certaine', 'joseph3',
  "Le dimanche 8 septembre 1850, vers 23 heures, Charles, le benjamin de Joseph, rentré du collège, est tué d'une décharge de chevrotine tirée d'une fenêtre de la rue principale. Joseph accourt et accuse le propriétaire du magasin, Duncan MacDonald ; on craint un lynchage. Il ne se remet pas de ce deuil.",
  f"{WIL}, p. 195.")
L('L79', "Ruisseau Blacksnake : le mariage des eaux", -94.858, 39.776, '1859-02-22', 'jour', 'certaine', 'joseph3',
  "Le 22 février 1859, le chemin de fer Hannibal & St. Joseph est inauguré : à l'embouchure du ruisseau Blacksnake, en présence de Joseph Robidoux, les officiels versent dans le Missouri des eaux de l'Atlantique, du lac Michigan et du Mississippi. Saint-Joseph devient le terminus occidental du réseau ferré américain.",
  f"{WIL}, p. 203-204.")
# ------------------------------------------------------------------ Antoine
L('L80', "Franklin : la boutique d'Antoine", -92.73, 39.01, '1817/1829-07', 'annee', 'approximative', 'antoine',
  "À l'été 1817, Antoine quitte Saint-Louis pour le comté de Howard et ouvre une boutique à Franklin, avec des marchandises de Joseph et de François (licence de 10 dollars). En mars 1819, il y traite avec Joseph ; les frères achètent un quart de section près de la ville, perdu dans la panique de 1819. Franklin est le point de départ de la piste de Santa Fe. En juillet 1829, Isidore y signale à Pierre Chouteau l'arrivée d'une barge de marchandises.",
  f"{WIL}, p. 41, 48, 53, 96.")
L('L81', "Taos : Lisa Romero et Maria Juana", -105.574, 36.4055, '1825/1826-01-30', 'annee', 'certaine', 'antoine',
  "Au printemps 1825, Antoine noue une liaison avec Lisa Romero, de Taos ; leur fille Maria Juana est baptisée le 30 janvier 1826. Le 29 juin 1825, William Clark avait délivré à Antoine et à son frère Michel un passeport pour retraverser le Territoire indien vers le Mexique.",
  f"{WIL}, p. 76.")
L('L82', "Fort Bent : avec l'armée de l'Ouest", -103.43, 38.04, '1846-07-28/1846-08-01', 'jour', 'certaine', 'antoine',
  "Interprète et guide de Kearny, Antoine arrive avec l'avant-garde au fort Bent le 28 juillet 1846. Il traduit les interrogatoires des prisonniers, puis, à Santa Fe, tous les discours de Kearny et le toast du général au banquet du 20 septembre, que note Susan Magoffin. Le 23 août, il écrit à B. F. Loan le récit de la prise de Santa Fe, publié par la Gazette de Saint-Joseph.",
  f"{WIL}, p. 168-172.")
L('L83', "Monterey : convalescence et congé", -121.894, 36.600, '1847-04/1847-11', 'mois', 'approximative', 'antoine',
  "Blessé à la colonne vertébrale à San Pasqual, Antoine gagne San Diego, puis Monterey, sans doute à bord de la frégate Congress. Il s'y lie avec l'artiste Edward Kern et reçoit son congé en avril ou mai 1847. Sans argent, il écrit à Joseph, puis embarque en novembre sur la goélette Commodore Shubrick, « par le Pérou, la Jamaïque et d'autres lieux ».",
  f"{WIL}, p. 174.")
L('L84', "Washington : la pension d'Antoine", -77.009, 38.889, '1856-02/1856-08-23', 'mois', 'certaine', 'antoine',
  "Presque aveugle, Antoine se rend à Washington au début de 1856 ; son représentant J. S. Phelps laisse un mot à Jefferson Davis. La loi H.R. 196 lui accorde une pension d'invalidité de 16,66 dollars par mois, signée par le président Pierce le 23 août 1856. Sa demande de remboursement du voyage de Californie (870 dollars) et sa terre de prime pour la guerre de 1812 n'aboutissent pas.",
  f"{WIL}, p. 204-208.")
# ------------------------------------------------------------------ Louis
L('L85', "Santa Fe : les enfants de Louis et de Guadalupe García", -105.9378, 35.6862, '1835-08-12/1837-12-20', 'jour', 'certaine', 'louis',
  "Catarina, l'aînée de Louis et de Guadalupe García, naît à Santa Fe le 12 août 1835, baptisée sous le prénom de sa grand-mère Catherine Rollet ; José Luis naît le 17 décembre 1837, baptisé par le curé José Francisco Leyba avec Dámaso et Carmelita López pour parrains. Louis sera premier alcalde de Santa Fe en 1839.",
  f"{WEB72}, p. 106, 116 (registres de baptêmes de Santa Fe).")
L('L86', "Rancho del Chino : Louis prisonnier", -117.686, 33.995, '1846-09-26/1847-01-10', 'jour', 'certaine', 'louis',
  "Le 25 septembre 1846, dix-huit étrangers se réunissent chez Louis et chez son voisin Benjamin Wilson. Le lendemain, ils se retranchent au rancho del Chino d'Isaac Williams ; le 27, deux cents Californiens mettent le feu à la maison et ils se rendent. Prisonnier du général Flores, Louis échappe à la déportation vers Mexico et n'est libéré qu'à l'entrée des Américains à Los Angeles, le 10 janvier 1847. Il raconte tout à Manuel Alvarez dans sa lettre du 1er mai 1848, portée à Santa Fe par Kit Carson.",
  f"{WEB72}, p. 107-109 ; {WIL}, p. 175-176.")
L('L87', "San Bernardino : Louis au conseil du comté", -117.2898, 34.1083, '1853/1858', 'annee', 'certaine', 'louis',
  "En 1853, Louis est élu superviseur du nouveau comté de San Bernardino et devient le premier président du conseil. Il s'entend avec les colons mormons jusqu'en 1856 et siège en 1858 au comité de construction de la nouvelle église catholique de San Bernardino.",
  f"{WIL}, p. 199-201.")
# ------------------------------------------------------------------ François, Michel, Isidore
L('L88', "Saint-Louis : les mariages des frères", -90.1888, 38.6272, '1807/1825-06-22', 'annee', 'certaine', 'freres',
  "En 1807, François épouse Thérèse Bienvenu Delisle, sœur jumelle d'Eugénie, la première femme de Joseph ; ils auront dix enfants entre 1809 et 1831. En septembre 1808, Joseph l'engage comme hivernant sur le Missouri. Le 22 juin 1825, Michel épouse Susanne Vaudry, sœur d'Angélique, la seconde femme de Joseph. En septembre 1830, Joseph, Isidore, François et leur sœur Pélagie signent la vente d'un terrain hérité du père.",
  f"{WIL}, p. 30-31, 77, 97.")
L('L89', "Ham's Fork : la brigade de Michel", -110.05, 41.75, '1830-08-23', 'jour', 'approximative', 'freres',
  "Parti de Saint-Louis avec Fontenelle et Drips pour l'American Fur Company, Michel Robidoux commande l'une des trois brigades qui se partagent les terrains de chasse depuis Ham's Fork, affluent de la Green : à lui le nord, vers les sources de la Snake.",
  f"{WIL}, p. 96-97.",
  "Warren Ferris dit seulement « M. Robidoux » ; Willoughby identifie Michel par élimination.")
L('L90', "Ogden's Hole : l'hiver de Michel", -111.85, 41.30, '1830-11/1831-03', 'mois', 'approximative', 'freres',
  "Le détachement de Michel hiverne à Ogden's Hole, vingt milles au sud de Cache Valley, entre courses de chevaux et jeux. Il engage trois trappeurs iroquois libres, dont John Gray, avec qui il travaille jusqu'en 1835 ; Jean-Baptiste Charbonneau, le fils de Sacagawea, est de la brigade.",
  f"{WIL}, p. 98.")
L('L91', "La « rivière Malade » : Michel sur la Snake", -112.85, 42.78, '1831', 'annee', 'hypothetique', 'freres',
  "Au printemps 1831, les trappeurs de Michel fouillent la Snake jusqu'à la Portneuf et aux chutes (American Falls). Maladie, soif, faim, attaques et rencontres avec la Compagnie de la Baie d'Hudson : selon J. H. Stevens, les castors de cette « Rivière Malade » rendent malades ceux qui les mangent. Michel rentre à Saint-Louis en juin 1831.",
  f"{WIL}, p. 98-99.")
L('L92', "Saint-Joseph : Michel Robidoux & Co.", -94.8478, 39.7688, '1845/1858-04', 'annee', 'certaine', 'freres',
  "En 1845, tous les frères sauf Louis vivent ou commercent à Saint-Joseph. Isidore et Michel y sont associés jusqu'à la mort d'Isidore, sans testament, à l'été 1852 ; Michel, « associé survivant de Michel Robidoux & Co. », administre la succession avec une caution de 26 000 dollars. Resté lié au major Andrew Drips et au fort Laramie, Michel meurt en avril 1858, à soixante ans.",
  f"{WIL}, p. 181, 194, 202.")
L('L93', "Les Plaines : la mort de François", -98.98, 40.64, '1856~', 'circa', 'hypothetique', 'freres',
  "Sans fortune, ayant tout cédé à Saint-Louis en 1850, François travaille sur la route de Saint-Joseph à Scotts Bluff, comme guide d'émigrants ou traiteur. Le comté de Buchanan ouvre sa succession en avril 1856 ; aucun journal ne publie sa mort et aucune tombe n'est connue. Une plaque au pied du monument de Joseph, à Mount Olivet, le dit mort sur les Grandes Plaines en 1857.",
  f"{WIL}, p. 202.",
  "Lieu de décès inconnu : point placé symboliquement sur la route de l'Oregon, près du fort Kearny.")
# ------------------------------------------------------------------ La famille sur la route de l'Oregon
L('L94', "Chimney Rock : deux « Rubidoos »", -103.348, 41.703, '1847-09', 'mois', 'approximative', 'famille',
  "En septembre 1847, des Mormons revenant du Grand Lac Salé croisent deux « Rubidoos » qui chassent et traitent le bison près de Chimney Rock : sans doute Joseph E. ou ses cousins Antoine et Sellico.",
  f"{WIL}, p. 183.")
L('L95', "Ash Hollow : le « Robidou Fort »", -102.12, 41.29, '1848', 'annee', 'approximative', 'famille',
  "En 1848, Joe Meek trouve à Ash Hollow un « Robidou Fort » tenu par un Français nommé Le Beau, sans doute un engagé de Joseph, près d'un village sioux. En juillet 1849, Joseph prend une licence de 5 000 dollars employant son frère François, son fils Joseph E. et ses neveux Antoine et Sellico ; en 1850, 12 000 dollars, avec Michel et Isidore.",
  f"{WIL}, p. 187, 194.")
L('L96', "Durango : l'ouverture de la réserve ute", -107.8801, 37.2753, '1899-05-03/1899-05-10', 'jour', 'certaine', 'proches',
  "Le 3 mai 1899, la veille de l'ouverture de la réserve ute à la colonisation, Emma et Adela Stollsteimer, filles d'Amanda, la petite-fille adoptive d'Antoine Robidoux, prennent les troisième et quatrième places dans la file du bureau des terres de Durango, avec leur frère. Le 10 mai, les Stollsteimer déposent plus de 1 200 acres de demandes dans la vallée de la San Juan : la terre ute passe aux descendants des traiteurs.",
  f"{STO} (journaux de Durango, 3 et 10 mai 1899).",
  images=[LOC("durango-1899-ouverture-ute-strip-stollsteimer.jpg", "« Waiting for the opening of the Ute Strip » : premier rang, Phil Voight, Stollsteimer et deux sœurs (photo Conner, 1899, reproduite dans un ouvrage local ; dossier de l'auteur)")])

os.makedirs('data', exist_ok=True)
for nom, feats in (('lieux', LIEUX), ('trajets', TRAJETS)):
    json.dump({"type": "FeatureCollection", "features": feats}, open(f'data/{nom}.geojson', 'w', encoding='utf-8'), ensure_ascii=False, indent=1)
print(len(LIEUX), 'lieux,', len(TRAJETS), 'trajets')
