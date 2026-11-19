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
WEB71 = "D. J. Weber, The Taos Trappers: The Fur Trade in the Far Southwest, 1540-1846 (Norman, University of Oklahoma Press, 1971)"
ROT28 = "J. Rothensteiner, History of the Archdiocese of St. Louis, vol. II (Saint-Louis, Blackwell Wielandy, 1928)"
HAR15 = "J. Hardee, « \"Taos Trappers\" and the Demise of the Rocky Mountain Rendezvous », dans Proceedings of the 2015 Fur Trade Symposium: Bent's Fort and the Southern Fur Trade (La Junta, 2016)"
WEB72 = "D. J. Weber (éd.), « Louis Robidoux: Two Letters from California, 1848 », Southern California Quarterly, vol. 54, n° 2 (1972)"
CEN = "Recensements fédéraux des États-Unis (Ancestry)"
OBI = "Nécrologie d'Antoine Robidoux, St. Joseph Gazette, reprise dans le Los Angeles Star, 29 septembre 1860"
OLD = "A. Oldham, « Stollsteimer Chronik » (2000), d'après le journal de Christian F. Stollsteimer, pages photographiées dans le dossier de l'auteur"
MON = "I. Montroy, « Colonel C. T. Stollsteimer », d'après les souvenirs de Harry Stollsteimer (pages photographiées dans le dossier de l'auteur)"
ROB = "O. M. Robidoux, Memorial to the Robidoux Brothers: A History of the Robidouxs in America (Kansas City, 1924), archive.org memorialtorobido00robi"
BUC = "The History of Buchanan County, Missouri (St. Joseph, Union Historical Company, 1881)"
AND = "A. T. Andreas (éd.), History of the State of Nebraska (1882), comté de Sarpy (transcription kancoll.org)"
NPR = "DAR, Collection of Nebraska Pioneer Reminiscences (1916), archive.org collectionofnebr00daug"
TWI = "R. E. Twitchell, The Spanish Archives of New Mexico (1914), vol. I, archive.org spanisharchiveso01twituoft"
READ = "B. M. Read, Illustrated History of New Mexico (1912), archive.org illustratedhisto00readrich"
NWS = "Newspapers.com (abonnement de l'auteur)"
DALE = "H. C. Dale, The Ashley-Smith Explorations (1918), archive.org ashleysmithexplo00daleuoft"
JWK = "« Denis Julien », Wikipédia (d'après J. H. Knipmeyer, The Life and Times of Denis Julien, Fur Trader, 2018)"
KNI = "J. H. Knipmeyer, « The Denis Julien Inscriptions », Utah Historical Quarterly, vol. 64, n° 1 (1996)"
KNB = "J. H. Knipmeyer, Butch Cassidy Was Here: Historic Inscriptions of the Colorado Plateau (University of Utah Press, 2002)"
ADV = "adventr.co, « Denis Julien Inscriptions » (photographies de terrain)"
NRH = "National Register of Historic Places"

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
GIT = "J. Gitlin, The Bourgeois Frontier: French Towns, French Traders, and American Expansion (New Haven, Yale University Press, 2010)"
GIA = "C. A. Gianini, « Manuel Lisa, One of the Earliest Traders on the Missouri River », New Mexico Historical Review, vol. 2, n° 4 (octobre 1927), p. 323-333"
PET = "C. E. Peterson, Colonial St. Louis: Building a Creole Capital (Saint-Louis, Missouri Historical Society, 1949)"
HOR = "R. Hornbeck, Roubidoux's Ranch in the 70's (Riverside, Press Printing Company, 1913)"
PHG = "J. Lecompte, Pueblo, Hardscrabble, Greenhorn: The Upper Arkansas, 1832-1856 (Norman, University of Oklahoma Press, 1978)"
def LOC(fichier, legende):
    return {"src": f"images/photos/{fichier}", "legende": legende}
IMAGES = {
  'L124': [LOC("amanda-barada-stollsteimer-portrait.jpg", "Amanda Marie Barada (née à Saint-Joseph le 26 juin 1852), petite-fille adoptive d'Antoine et de Carmel ; portrait reproduit par A. Oldham, « Stollsteimer Chronik » (dossier de l'auteur)")],
  'L126': [LOC("christian-f-stollsteimer-portrait.jpg", "Christian Friedrich Stollsteimer (1842-1906), agent des Utes du Sud ; portrait reproduit par A. Oldham, « Stollsteimer Chronik » (dossier de l'auteur)")],
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
L('L20', "Village papago : le massacre du parti de Michel", -112.30, 33.38, '1826-01-28/1826-01-31', 'jour', 'approximative', 'freres',
  "Parti des mines de cuivre du Nouveau-Mexique le 2 janvier 1826, le parti « français » de trappeurs de Pratte & Cie, commandé par Michel Robidoux en l'absence de Sylvestre Pratte, atteint le 28 janvier un village papago près du confluent de la Salt et de la Gila. Malgré les avertissements du jeune James Ohio Pattie, le capitaine laisse les Indiens garder les armes et les chevaux ; à minuit, l'attaque fait un carnage. Pattie, un compagnon et le capitaine blessé, sauvé par un pistolet de poche, rejoignent le parti d'Ewing Young, qui se venge le 31 janvier en tuant cent dix Indiens et reprend les chevaux. Le gouverneur Narbona mentionne l'affaire à l'automne.",
  f"{WIL}, p. 82-86 ; {WEB}, p. 264.",
  "Pattie ne nomme pas le capitaine ; l'attribution à Michel est traditionnelle. Village placé près du confluent Salt-Gila.")
L('L21', "Taos : François Robidoux part pour le pays ute", -105.57, 36.404, '1827-03', 'mois', 'certaine', 'freres',
  "En mars 1827, François Robidoux quitte Taos pour le pays ute avec un parti de trappeurs où figurent Baptiste Chalifoux et Maurice LeDuc.",
  f"{LEC}, p. 64.")
L('L22', "Fort Uncompahgre (fort Robidoux)", -108.074, 38.749, '1828/1844', 'annee', 'approximative', 'antoine',
  "Vers 1828, Antoine Robidoux bâtit un petit fort au confluent de la Gunnison et de l'Uncompahgre, près de l'actuelle Delta (Colorado) : le seul poste de traite du bassin de la Grand River, sur la route des trappeurs du Nouveau-Mexique vers la Green, Brown's Hole et plus tard Fort Bridger. Francisco Trujillo, qui y travaille pour Robidoux, est abattu par des Utes en relevant ses pièges. Les vestiges disparaissent dans les années 1880 ; une reconstitution existe depuis 1990.",
  f"{WAL}, p. 272 ; {CHI2}, p. 506, 781-782 ; {CRA}, p. 83 ; {PHG}, p. 136-138.",
  "Selon Lecompte (1978), l'attaque a lieu fin septembre 1844, pendant la guerre déclenchée par le gouverneur Martínez : Trujillo est tué, sept Mexicains massacrés, les femmes indiennes du fort emmenées ; Calario Cortéz rejoint Taos à pied en quatorze jours. Date de fondation incertaine (milieu des années 1820 selon Wallace, 1828 selon d'autres auteurs).")
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
  "Entre deux plans d'arpenteurs, Joseph choisit celui de Frederick W. Smith, aux rues étroites de 60 pieds, nommées d'après ses enfants (Faraon, Jules, Francis, Felix, Edmond, Charles, Sylvanie, Angelique, Messanie) : « vendre ma terre en lots, non la donner en rues ». Il signe le plan le 25 juillet 1843 ; le 26, le greffier de la cour des plaids communs de Saint-Louis l'enregistre, avec l'hypothèque de 6 372,57 dollars due à Pierre Chouteau fils. Le plan couvre le quart sud-ouest fractionnaire de la section 8 (T57N, R35O), soit 154,24 acres : levée de 185 pieds, lots de 40 pieds sur 140 ; il donne le demi-bloc 31 pour la place du marché, un quart du bloc 50 pour une église publique et le bloc 38 pour une école publique et une église catholique. Il est déposé chez le recorder du comté de Buchanan le 3 août 1843.",
  f"{WIL}, p. 143-144 ; {ROB}, p. 142-145 ; {WJ4}.")
L('L45', "Robidoux's Landing : moulin, bureau de poste et entrepôts", -94.8455, 39.7745, '1840/1842-02', 'annee', 'approximative', 'joseph3',
  "Autour du comptoir, rebaptisé Robidoux's Landing, s'installent commis, médecins et artisans. En 1840, un bureau de poste ouvre aux Black Snake Hills avec Jules, le fils de Joseph, comme premier maître de poste. En 1841, Robidoux ouvre un moulin à farine sur la rive ouest du ruisseau Blacksnake ; en février 1842, la cour lui commande un entrepôt d'inspection du tabac au débarcadère, puis il en bâtit un pour le chanvre.",
  f"{WIL}, p. 139-142.")
L('L46', "Saint-Joseph : Robidoux Row", -94.8575, 39.7747, '1849/1868', 'annee', 'certaine', 'joseph3',
  "Rangée de logements bâtie par Joseph Robidoux à la fin des années 1840 dans le nord de Saint-Joseph (219-225, rue Poulin) ; il y a lui-même habité. C'est l'un des rares bâtiments subsistants des débuts de la ville, aujourd'hui musée.",
  f"{NRHP} ; « Robidoux Row », Wikipédia.")
L('L47', "Saint-Joseph : le monument de Mount Olivet", -94.810, 39.735, '1868-05-28/1914', 'jour', 'approximative', 'famille',
  "Le 28 mai 1868, Joseph est inhumé au cimetière catholique du Calvaire, sur Garfield Avenue, devant 85 voitures et 50 cavaliers ; ses petits-fils Jules, Thomas, Napoléon et Louis escortent le corbillard. Le 15 août 1908, son petit-fils Louis fait exhumer Joseph, son fils Jules et son petit-fils Napoléon, qu'il reconnaît à leurs traits, et les transfère au nouveau cimetière Mount Olivet, sur Lovers' Lane (lot 111, bloc 1). En 1914, il y élève un monument de granit gris de douze pieds. Au pied, des stèles rappellent Antoine, Michel et François, qui n'y reposent pas, et Angélique Vaudry, morte en 1857.",
  f"{ROB}, p. 151-155, 271-272 ; {WIL}, p. 211 ; {WJ4}.",
  "Coordonnées du cimetière approximatives.")

# ------------------------------------------------------------------ Antoine et Louis : Nouveau-Mexique, Utah, Missouri
L('L48', "Mine du Cerro del Oro", -106.17, 35.32, '1834', 'annee', 'hypothetique', 'antoine',
  "En 1834, Antoine Robidoux achète la mine du « Cerro del Oro », près de Santa Fe, à Dolores Jallono, Ignacio Ladrón de Guevara et Marcelino Abreu, devant l'alcalde Santiago Abreu. La région donne du cuivre ; l'or et l'argent restent incertains, et rien ne dit qu'il en ait tiré profit.",
  f"{WIL}, p. 131-132.",
  "Emplacement non précisé : placé dans les monts Ortiz, district aurifère le plus proche de Santa Fe.")
L('L49', "Santa Fe : le moulin de Louis sur la rivière", -105.9445, 35.6842, '1839-04/1841-03-20', 'mois', 'approximative', 'louis',
  "En avril 1839, Louis Robidoux obtient de l'ayuntamiento le droit d'installer un moulin à grain sur la rivière Santa Fe ; un voisin et rival, Antonio Ortiz, s'en plaint, mais le conseil juge le moulin utile. Premier alcalde jusqu'au 1er janvier 1840, Louis vend le 20 mars 1841 sa maison, son magasin et son moulin à Roque Tudesqui, devant la montée de l'hostilité envers les Américains.",
  f"{WIL}, p. 149, 153 ; M. Ebright, Land Grants and Lawsuits in Northern New Mexico (Albuquerque, University of New Mexico Press, 1994), p. 64-65 et n. 37 du ch. 3.",
  "Emplacement du moulin sur la rivière non précisé. Ebright (1994) signale aux Mexican Archives of New Mexico une « objection à une concession de terre à Luis Robidoux » (procès-verbaux législatifs, bobine 28, image 84), où le plaignant invoque les décrets des Cortes de 1812-1813 ; la date et la terre ne sont pas précisées, peut-être un autre épisode de la même rivalité.")
L('L50', "Westwater : l'inscription d'Antoine", -109.2874, 39.2763, '1837-11-13', 'jour', 'certaine', 'antoine',
  "Sur la paroi de grès de la rive ouest du ruisseau Westwater, à huit kilomètres environ à l'ouest de la frontière Utah-Colorado, Antoine grave : « Antoine Robidoux passé ici le 13 Novembre 1837 pour etablire maison traitte a la Rv. vert ou wiyte ». « Wiyte » se lit Uinta ou White ; le 7 de 1837 pourrait être un 1. L'inscription surmonte un bouclier peint préhistorique et a été criblée de balles.",
  f"{WIL}, p. 126-128 ; {KEL} ; {UTB}.",
  "Charles Kelly, qui la photographie en 1933, la situe près de l'embouchure du canyon de Westwater, au ranch Larsen (section 5, canton 18 sud, rang 24 est, comté de Grand), à 15 milles au nord-ouest de la gare de Westwater : Robidoux campait dans un abri sous roche et grava juste au sud de l'entrée. Point repris du repère de l'auteur (ROBIDOUX.kml), qui tombe dans la section 5 décrite par Kelly et par la fiche NRHP n° 82004124.",
  images=[LOC("westwater-inscription-antoine-robidoux-2001.jpg", "L'inscription d'Antoine Robidoux, ruisseau Westwater (Utah), photographiée en 2001 (dossier de l'auteur)")])
L('L51', "Willow Creek : l'inscription de Louis", -109.3998, 39.4972, '1841-05-05', 'jour', 'approximative', 'louis',
  "Au printemps 1841, Louis Robidoux monte vérifier le fort Uintah, dont il est copropriétaire avec Antoine. Dans le bassin du Willow Creek, sur le plateau Tavaputs, il grave en espagnol qu'il est passé là le 5 mai 1841. Le Missouri Historical Society conserve une photographie de l'inscription prise le 22 septembre 1968.",
  f"{WIL}, p. 154 ; {MHS} ; J. W. Nelson, Forgotten Pathfinders Along the North Branch of the Old Spanish Trail (2003), p. 31, 35, 51.",
  "Selon Nelson, l'inscription marque l'embranchement de la piste du Willow Creek vers le sommet qui domine le canyon de Westwater, près de l'entrée du Wire Fence Canyon, par où la piste descendait des Book Cliffs. Point placé au débouché du Wire Fence Canyon sur le Willow Creek (GNIS), à quelques kilomètres près ; emplacement exact non publié.")
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
  "Sur le rancho Jurupa, Louis bâtit en 1846-1847 un moulin à grain à turbine hydraulique et deux paires de meules, sans doute le premier du sud de la Californie. Seul de son espèce dans la région, il répond à un besoin pressant. Le moulin fournit une farine rare aux colons et aux troupes américaines : le 19 février 1847, le lieutenant Oman, du bataillon mormon, revient du ranch Robidoux avec « beaucoup de légumes et de vin », et le bataillon Frémont y achète 1 700 livres de farine ; une crue l'emporte en 1862. Le site est le California Historical Landmark n° 303 (5540, Molino Way), signalé par la plaque n° 51 du comté de Riverside.",
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
  "Vers 1880, Christian Stollsteimer et Amanda Barada élèvent bétail et moutons au confluent de la Piedra et du ruisseau Stollsteimer, au lieu-dit Francé, au sud-ouest de Pagosa Springs ; la famille y bâtit une petite chapelle catholique pour les prêtres de passage. Agent des Utes du Sud et des Jicarillas, Christian perd son poste en 1888 pour malversations. À l'automne 1879, il s'installe « à douze milles à l'ouest de Pagosa Springs », tient une boucherie et fournit le bœuf du nouveau fort Lewis ; le 6 juillet 1896, il dépose au bureau des terres de Durango son certificat de homestead de 160 acres. Un jour, la bande de Charles Allison, capturée par le shérif, dîne chez Amanda ; elle demande au chef pourquoi il a épargné ses juments Navajo et Mariposa : « Je savais qu'elles étaient à vous, et je n'ai jamais rien volé à une femme. »",
  f"{FLC} ; {STO} ; {OLD}, p. 52-53 ; {MON}, p. 57.",
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
L('L81', "Taos : Luisa Romero et Maria Juana", -105.574, 36.4055, '1825/1826-01-30', 'annee', 'certaine', 'freres',
  "Au printemps 1825, François Robidoux, pourtant marié à Thérèse Delisle à Saint-Louis, noue une liaison avec Luisa (Lisa) Romero, de Taos ; leur fille Maria Juana est baptisée le 30 janvier 1826 comme « fille naturelle de Francisco Rubidoux ». La même saison, l'alcalde de Taos l'accuse de vendre des fusils aux Indiens et saisit ses marchandises, que le gouverneur Baca fait rendre. Le 29 juin 1825, William Clark délivre à Antoine, Isidore et Michel un passeport pour retraverser le Territoire indien vers le Mexique.",
  f"{WIL}, p. 76, 82.")
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
# ------------------------------------------------------------------ Le Memorial de 1924 et les ouvrages d'archive.org
L('L97', "Embouchure de la Kaw : le premier campement de Joseph", -94.6105, 39.1155, '1799~', 'circa', 'hypothetique', 'joseph3',
  "Selon la tradition familiale publiée en 1924, Joseph Robidoux, remontant le Missouri, apprend à l'embouchure de la Kaw qu'une guerre sévit chez les nations de la Platte. Il plante sa tente sur la rive missourienne, chasse l'ours et le bison avec ses hommes, dresse cartes et rapports, puis repart pour Saint-Louis en laissant des représentants pour traiter : « le premier colon de Kansas City », écrit son petit-fils.",
  f"{ROB}, p. 92, 118, 236.",
  "Récit familial invérifiable ; il associe aussi Joseph à l'American Fur Company dès 1799, alors qu'Astor ne la fonde qu'en 1808.")
L('L98', "Portage des Sioux : la lettre de Pike et la mort d'Eulalie", -90.344, 38.927, '1805-08-11/1818', 'jour', 'approximative', 'joseph3',
  "Le 11 août 1805, deux jours après son départ de Saint-Louis, le lieutenant Zebulon Pike croise Joseph Robidoux et William Kettlelas (homme de confiance du général Wilkinson) qui descendent vers Saint-Louis ; il leur confie une lettre. C'est aussi à Portage des Sioux que meurt en 1818 Eulalie Robidoux, sœur de Joseph, à dix-huit ans, sans avoir été mariée.",
  f"{ROB}, p. 67, 284.",
  "Le Memorial place la rencontre sur le Missouri ; Pike remontait en réalité le Mississippi, ce qui s'accorde avec Portage des Sioux.")
L('L99', "Rivière du Loup : Lewis et Clark rencontrent un Robidoux", -95.17, 39.91, '1806-09-11/1806-09-12', 'jour', 'approximative', 'freres',
  "Le 11 septembre 1806, au retour du Pacifique, Lewis et Clark dépassent la Grande Nemaha et rencontrent un jeune traiteur Robidoux et trois hommes, qui commercent paisiblement avec les Indiens près de la rivière du Loup (Wolf River). Clark, ne reconnaissant pas la signature de la licence, menace de saisir la marchandise, puis laisse partir le jeune homme avec un avertissement.",
  f"{ROB}, p. 66-67.",
  "Le Memorial nomme François ; le journal de Clark parle de « M. Robideau ». Embouchure de la Wolf, près d'Iowa Point (Kansas).")
L('L100', "Rivière Sauterelle : la nuée de criquets", -95.535, 39.46, '1818-09', 'mois', 'hypothetique', 'freres',
  "En septembre 1818, des frères de Joseph conduisent deux chariots de marchandises jusqu'à un lieu de rencontre des nations, à un mille en aval de l'actuelle Arrington (Kansas). Quelques jours après leur arrivée, des nuées de sauterelles dévorent l'herbe des basses terres : ils baptisent le cours d'eau « Sauterelle », d'où ses noms de Grasshopper puis de Delaware River.",
  f"{ROB}, p. 102-103.")
L('L101', "Comptoir de John B. Roy : la danse de guerre de 1836", -94.88, 39.80, '1836', 'annee', 'approximative', 'joseph3',
  "En 1836, au comptoir de Jean-Baptiste Roy, à un mille et demi de Blacksnake Hills, trois cents Ioways et Otos donnent une grande danse de guerre. Dans l'excitation, Francis Tayon, commis et beau-frère de Roy, a le nez tranché. Un guerrier porte le morceau à Joseph Robidoux, qui fait cesser la danse et conseille de le rapporter aux médecins ; il se perd en chemin. Tayon, né dans le comté de Saint-Charles, meurt défiguré le 1er février 1870. En 1826, Joseph avait d'abord établi son poste à l'embouchure de ce ruisseau Roy (Roy's Branch).",
  f"{ROB}, p. 103-104 ; {BUC}.")
L('L102', "Saint-Joseph : la maison de rondins de la rue Main", -94.8522, 39.7697, '1838/1843', 'annee', 'approximative', 'joseph3',
  "La seconde maison de Joseph, à l'angle nord-est des futures rues Main et Jule, regarde le sud : un étage et demi, neuf pièces, une galerie sur toute la façade, en rondins calfeutrés de boue. En 1838, un missionnaire jésuite y dit la messe sur une table devant les Indiens. À l'automne 1838, une quarantaine de « sauteurs de terres » viennent chasser Joseph ; il les reçoit avec ses hommes et cent jeunes guerriers prêts à intervenir, et tout finit par une rasade. La cour de comté y tient ses séances jusqu'à l'été 1841 et, le 7 mai 1839, y trace les premiers chemins.",
  f"{ROB}, p. 97-99, 104, 129, 234 ; {BUC}.")
L('L103', "Robidoux Landing : le bac de la rue Francis", -94.8565, 39.7663, '1839-05-07/1840-05-07', 'jour', 'certaine', 'jules',
  "Le bac de Joseph, un simple chaland, aborde à l'endroit où la rue Francis touchait le fleuve ; le débarcadère garde trente ans le nom de Robidoux Landing. Le chemin qui en part mène au gué de l'agence sur la Platte, puis se divise vers Liberty et vers la Grand River. Le 7 mai 1839, la cour de comté délivre à Jules C. Robidoux la première licence de passeur du comté de Buchanan, pour un an.",
  f"{ROB}, p. 100, 104, 225 ; {BUC}.")
L('L104', "Ferme Spencer : la piste de l'argent volé", -94.72, 39.86, '1842-10-18/1842-11', 'jour', 'approximative', 'joseph3',
  "Dans la nuit du 18 octobre 1842, quatre caisses de mille dollars en argent disparaissent du magasin de Joseph, où dort son commis Isidore Poulin. Les fils Spencer, de la ferme de la section 19 (T58N R34W, comté d'Andrew), sont acquittés par le juge de paix. Jules Robidoux consulte le juge Atchison à Sparta ; une compagnie de soixante-quinze hommes, menée par le « général » Ashley, part de chez Joseph, s'arrête à Jamestown, arrête Scott et Davis et simule une pendaison : Scott avoue. L'argent est déterré près de la rivière 102 et de la ferme ; Joseph verse 1 300 dollars de récompense.",
  f"{ROB}, p. 106-113 ; {BUC}.",
  "Emplacement approximatif de la section 19 ; l'histoire de 1881 dit qu'il ne manqua que 27 dollars et parle d'une récompense de 500 dollars.")
L('L105', "Saint-Joseph : le premier mariage de la ville", -94.8495, 39.7712, '1843-12-14', 'jour', 'approximative', 'freres',
  "Le 14 décembre 1843, Franklin Robidoux, fils de Pierre Isidore, épouse la jeune veuve Nancy Bailey, fille de William Langston. Jules et Isidore, fils de Joseph, sont les seuls violoneux du pays. Un charivari tourne au drame : le meneur, le maçon Scott, est poignardé dans un débit de boisson. Isidore Robidoux, arrêté avec les Langston, est acquitté ; les autres le sont à Platte City. Franklin meurt le 16 janvier 1847, à vingt-cinq ans, laissant une fille, Mary, future épouse d'Edward Beauvais.",
  f"{ROB}, p. 119-121, 281.",
  "La maison de William Langston n'est pas localisée.")
L('L106', "Lac Contrary : la maison d'Isidore Barada", -94.89, 39.715, '1840/1859', 'annee', 'approximative', 'proches',
  "Au sud de Blacksnake, au bout d'un sentier forestier, Isidore Barada, ami de Joseph et beau-frère de Jules, bâtit une maison double à deux étages, tenue ensuite par les Dumford, réputés pour leurs poissons, grenouilles et poulets frits. Seuls les Barada et les Dumford fréquentaient alors les rives du lac. C'est cet Isidore Barada qui épouse Carmelete, la fille adoptive d'Antoine.",
  f"{ROB}, p. 116-117, 281.")
L('L107', "Saint-Joseph : les terrains donnés par Joseph", -94.8447, 39.7684, '1845-05-24/1853', 'jour', 'certaine', 'joseph3',
  "Le 24 mai 1845, les commissaires choisissent le bloc 48, une colline donnée par Joseph Robidoux, pour le palais de justice ; il y ajoute dix lots pour le financer (contrat de 6 000 dollars, 1846). Il donne aussi le demi-bloc du marché (rues Second, Felix et Edmond, halle de 1853), le terrain de l'église catholique de la rue Felix (pierre angulaire le 17 juin 1847), le lot méthodiste des rues Third et Felix et, le 7 août 1849, cède un lot au charpentier Joseph Girard pour la première chapelle catholique. Président du village en 1845, il est en 1859 parmi les fondateurs de la State National Bank.",
  f"{ROB}, p. 123, 126-131.")
L('L108', "Saint-Joseph : la maison du 411 rue Edmond", -94.8487, 39.7666, '1850/1866', 'annee', 'certaine', 'jules',
  "En 1850, Joseph bâtit au 411 rue Edmond trois maisons de brique reliées par l'arrière, la plus belle demeure de la ville. Ses enfants s'y installent : Jules, Sylvanie et son mari Gus Beauvais, Félix. Jules y tient au sous-sol son bureau de juge de paix et de notaire : plus de sept cents mariages en onze ans, dont 410 entre 1858 et 1866, parmi lesquels ceux d'anciens esclaves. En 1862, le 16e régiment de l'Illinois occupe deux des maisons, jusqu'à ce qu'Emily, fille de Jules, obtienne son départ.",
  f"{ROB}, p. 133-135, 229-232.")
L('L109', "Savannah : Jules, premier marchand", -94.8297, 39.9414, '1841/1843', 'annee', 'approximative', 'jules',
  "Jules ouvre d'abord un magasin à White Hall ; quand la localité est transportée à Savannah, chef-lieu du comté d'Andrew, il y déménage sa boutique et devient le premier marchand de Savannah, avant de s'établir à Saint-Joseph. Au printemps 1848, il va acheter ses marchandises à New York : trois mois de voyage par les rivières. C'est aussi à Savannah, sur renvoi, que se plaide le procès du meurtrier de son frère Charles.",
  f"{ROB}, p. 125, 225.")
L('L110', "Carondelet : Jules épouse Elizabeth Barada", -90.2585, 38.56, '1838-08-21', 'jour', 'certaine', 'jules',
  "Le 21 août 1838, à Carondelet (Saint-Louis sud), Jules C. Robidoux épouse Elizabeth dite Isabelle Barada, née au même lieu le 20 octobre 1820. Le couple remonte par bateau jusqu'à Liberty Landing, puis gagne en diligence le poste de Joseph. Ils auront huit enfants, dont Emily (1844), épouse du capitaine Joseph Thompson.",
  f"{ROB}, p. 225, 284.")
L('L111', "Athens (Albany) : la boutique de François B. Robidoux", -94.331, 40.248, '1843/1857', 'annee', 'approximative', 'famille',
  "En 1843, François Belevere Robidoux, fils de Joseph, construit la première maison de commerce d'Athens, chef-lieu du comté de Gentry (aujourd'hui Albany), et y tient un magasin général ; il est secrétaire de la loge maçonnique de 1852 à 1857, puis vend à un autre Français et rentre à Saint-Louis. Jeune homme, il avait franchi avec son oncle Antoine le col Robidoux du Huerfano.",
  f"{ROB}, p. 226 ; U.S., Newspapers.com Obituary Index (Ancestry, coll. 61843) : avis de décès de « [F]rancis B. Robidoux », résidant à Albany, Bethany Star (Bethany, Missouri), 29 mars 1860.",
  "Le Memorial le fait rentrer à Saint-Louis ; l'index des nécrologies suggère plutôt qu'il meurt vers mars 1860, toujours domicilié à Albany (texte de l'avis non consulté, réservé aux abonnés).")
L('L112', "St. Marys : Octavia, fille de Michel", -96.071, 39.194, '1839/1888', 'annee', 'approximative', 'freres',
  "Michel Robidoux et Susanne Vaudry ont deux filles, Sophia et Octavia (née en 1839), élèves en 1845 du séminaire de jeunes filles de Mrs Landis, première école privée de Saint-Joseph. Octavia devient « Madame Robidoux », religieuse du Sacré-Cœur à Saint-Joseph et à la mission de St. Marys (Kansas), puis au couvent de Chicago, où elle meurt vers 1886-1888. Sophia épouse Charles J. Kathrens.",
  f"{ROB}, p. 122, 283.")
L('L113', "Vincennes : les sœurs Vaudry", -87.528, 38.678, '1793-04-26', 'jour', 'approximative', 'proches',
  "Angélique et Susanne Vaudry, filles d'Antoine Vaudry et d'Agnès Bourassa, naissent le 26 avril 1793 dans la vieille ville française de Vincennes (Indiana). Leurs parents s'installent ensuite à Saint-Louis, où Angélique épouse Joseph (1813) et Susanne son frère Michel (1825).",
  f"{ROB}, p. 138-139, 283-284.")
L('L114', "Cahokia : Isidore épouse Julie Desjarlais", -90.188, 38.572, '1815-10-14', 'jour', 'approximative', 'freres',
  "Le 14 octobre 1815, Pierre Isidore Robidoux épouse Julie Desjarlais à Cahokia. Ils ont deux fils : Louis, baptisé à Saint-Louis le 12 août 1820, qui accompagne ses oncles à Santa Fe et finit en Californie, et Franklin (v. 1822-1847).",
  f"{ROB}, p. 277, 281.")
L('L115', "La Prairie : l'arrivée d'André Robidou", -73.499, 45.416, '1667-06-07/1721-01-07', 'jour', 'approximative', 'famille',
  "Selon le juge Joseph-Émery Robidoux de Montréal, cité dans le Memorial, tous les Robidoux d'Amérique descendent d'André, fils de Manuel Robidou de Saint-Germain (Paris) et de Catherine Allue, de Galice. Marié à Jeanne Duc, il s'établit le 7 juin 1667 à la concession Saint-Lambert de La Prairie. Son fils Guillaume épouse Marie Guern à Montréal le 11 juillet 1697 ; leur fils Joseph épouse Anne Fontenau à La Prairie le 7 janvier 1721 : ce sont les grands-parents de Joseph Marie, le père des six frères.",
  f"{ROB}, p. 276-279.",
  "Le Memorial date de 1667 l'établissement à La Prairie ; les généalogies récentes placent l'arrivée d'André en 1661 et son installation vers 1671.")
L('L116', "Bellevue : Joseph succède à Deroin", -95.886, 41.145, '1810/1816', 'annee', 'hypothetique', 'joseph3',
  "L'histoire du comté de Sarpy (1882) rapporte qu'après le traiteur Deroin, Joseph Robidoux tient le poste de Bellevue, sur le Missouri, de 1810 à 1816 environ, avant que Manuel Lisa et la Compagnie du Missouri n'y dominent.",
  f"{AND}.",
  "Dates à confirmer ; le Memorial dit seulement qu'en 1809 Joseph devient « agent indien » aux Council Bluffs.")
L('L117', "Cottonwood Springs : le premier bâtiment", -100.52, 41.05, '1858', 'annee', 'approximative', 'famille',
  "En 1858, un Robidoux et I. P. Boyer construisent le premier bâtiment de Cottonwood Springs, sur la route de l'Oregon le long de la Platte, futur site du fort McPherson.",
  f"{AND} ; {NPR}, p. 190.",
  "Le prénom de ce Robidoux n'est pas donné ; peut-être un fils de Joseph ou un neveu.")
L('L118', "Saint-Charles : le passeport de 1824", -90.4815, 38.7837, '1824', 'annee', 'certaine', 'freres',
  "Un passeport délivré à Saint-Charles en 1824 pour les marchands se rendant au Nouveau-Mexique énumère Francis Robidoux et Isidor Roubidou ; la copie en est conservée dans les archives espagnoles de Santa Fe.",
  f"{TWI}, p. 341 (doc. 1139).")
L('L119', "Santa Fe : la réclamation des marchands après Chimayó", -105.9395, 35.6872, '1837-09-07', 'jour', 'certaine', 'freres',
  "Après la révolte de Chimayó (août 1837) et la mort du gouverneur Pérez, les marchands américains de Santa Fe adressent le 7 septembre 1837 un mémoire au ministre des États-Unis à Mexico, Powhatan Ellis, réclamant réparation au gouvernement mexicain ; Isidore Robidoux le signe avec Alvarez, Waldo et d'autres. Le Memorial de 1924 en reproduit le texte.",
  f"{READ}, p. 389-395 ; {ROB}, p. 205-215.")
L('L120', "Green River : l'attaque des Arapahos", -109.5, 41.4, '1824', 'annee', 'hypothetique', 'famille',
  "Une note de l'éditeur des explorations d'Ashley et Smith signale qu'en 1824 le parti de « Joseph Rubideau » est attaqué par des Arapahos sur la Green.",
  f"{DALE}, p. 156, n. 302.",
  "Identification incertaine : peut-être un des frères (Antoine, François ou Michel) plutôt que Joseph ; emplacement symbolique.")
L('L121', "Fort Laramie : la route de Michel", -104.553, 42.208, '1835/1845', 'annee', 'hypothetique', 'freres',
  "Michel Robidoux traite surtout au fort Laramie. Ses chariots Conestoga chargés de calicots, de perles, de miroirs, de lard et de sucre suivent la route de l'Oregon le long de la Platte Nord jusqu'au rendez-vous de Laramie et au fort Platte voisin ; il redescend avec les peaux dans des chalands mackinaw construits sur place. À son retour, il raconte aux siens avoir vu « le plus joli jardin du monde », le pays du Yellowstone.",
  f"{ROB}, p. 74, 87, 175-176.")
L('L122', "Saint-Louis : la Council House de la rue Seconde", -90.1858, 38.6232, '1809-04-25/1809-06-29', 'jour', 'certaine', 'joseph3',
  "La Missouri Gazette de 1809 situe à Saint-Louis la maison de Joseph Robidoux, « connue comme la Council House », près de la taverne Webster, rue Seconde : le docteur Farrar y ouvre son cabinet (16 mai 1809), L. T. Hampton y prépare les peaux (29 juin). Les annonces parlent aussi de « la maison de feu Robidoux » et de « Madame Robidoux », la veuve. C'est là que siège en 1812 la première assemblée générale du territoire.",
  f"{ROB}, p. 114, 138.")
L('L123', "Saint-Louis : la souscription pour le collège", -90.1867, 38.6247, '1819-10-30', 'jour', 'certaine', 'freres',
  "Le 30 octobre 1819, l'évêque Dubourg réunit les chefs de famille catholiques de Saint-Louis pour fonder un collège près de la première église de brique. Auguste Chouteau, François Robidoux et Joseph Robidoux sont parmi les premiers signataires.",
  f"{ROB}, p. 115.")
# ------------------------------------------------------------------ Les Stollsteimer d'après le journal de Christian
L('L124', "Santa Fe : la demande en mariage chez Carmel", -105.9369, 35.6873, '1866-12-28/1867-04-21', 'jour', 'certaine', 'proches',
  "Le lendemain de Noël 1866, Christian Stollsteimer, commis à Conejos, part à cheval pour Santa Fe avec le père Miguel Rolly, curé de Conejos. Ils vont porter des lettres « chez Mrs. Carmel Benavides de Ribidouse, la mère adoptive de la jeune fille » : Amanda, quatorze ans, vient s'asseoir avec eux, et Christian tombe amoureux. Le prêtre, faisant office de père, porte une demande écrite selon la coutume du Nouveau-Mexique. Le jour de l'An 1867, la maison de Carmel envoie du vin et des gâteaux au vicaire, mais la réponse, tournée avec toute la cérémonie espagnole, est un refus. En février, Christian revient avec un chariot de calicots, obtient un entretien et se fiance. Le mariage est célébré à Santa Fe le 21 avril 1867, jour de Pâques, par le frère Eguillon, avec José Cena et Isabel Baca pour parrains ; l'acte dit Amanda « fille légitime de feu Isidoro Barada et de feue Marina Anaya ». Carmel accompagne les mariés jusqu'à Conejos, sous la grêle, en traversant les rivières en canot.",
  f"{OLD}, p. 48-50.",
  "Le journal de Christian est le seul témoignage direct connu d'une visite chez Carmel. Les nécrologies et les souvenirs de Harry Stollsteimer datent le mariage du 21 avril 1869.")
L('L125', "Embargo Creek : le ranch des Stollsteimer", -106.47, 37.70, '1872/1883-09-21', 'annee', 'approximative', 'proches',
  "Vers 1872, Christian et Amanda achètent quatre cents acres et leurs droits d'eau sur l'Embargo Creek, près de Del Norte (comté de Rio Grande). Christian y bâtit une maison de quatre pièces, de rondins revêtus d'adobe ; y naissent Adela (1874), Delfina (1875) et Harry (1878). Associé à Ferdinand Meyer et à Rudolph Schmieding, il est aussi maître de poste de Del Norte. Le ranch est vendu le 21 septembre 1883.",
  f"{OLD}, p. 51-52 ; {MON}, p. 57.",
  "Emplacement placé sur le cours inférieur de l'Embargo Creek.")
L('L126', "Ignacio : l'agence des Utes du Sud", -107.633, 37.117, '1885-01-13/1889', 'jour', 'certaine', 'proches',
  "Le 13 janvier 1885, le président Arthur nomme Christian Stollsteimer agent des Indiens de l'agence des Utes du Sud ; Cleveland le reconduit et lui confie aussi les Apaches jicarillas de Dulce. Il autorise les Utes affamés à chasser hors de la réserve ; en juin 1885, des cowboys massacrent une famille de la bande de Crazy Jake près de Beaver Creek, et les Utes ripostent au ranch Gentner. En 1886, Stollsteimer accompagne une délégation ute à Washington. Amanda, qui parle anglais, français et espagnol, donne naissance à Stella à Durango le 31 janvier 1886.",
  f"{OLD}, p. 51-54 ; {MON}, p. 57.",
  "Point placé à l'agence d'Ignacio ; la famille habite alors Durango.")
L('L127', "Pagosa Springs : la tombe de Christian Stollsteimer", -107.026, 37.272, '1906-04-13', 'jour', 'approximative', 'proches',
  "Christian Stollsteimer meurt à Pagosa Springs le vendredi 13 avril 1906, quelques mois après son fils Fred, emporté par la typhoïde à Durango le 27 septembre 1905 ; il est enterré au cimetière Hill Top, sous une pierre gravée à la main de son blason. Amanda part ensuite pour Pasadena, près de ses enfants. Le ruisseau Nutria a été rebaptisé Stollsteimer Creek en son honneur.",
  f"{OLD}, p. 54-55.",
  "Coordonnées du cimetière approximatives.")
# ------------------------------------------------------------------ Dossier ROBIDOUX_FAMILY
L('L128', "Saint-Louis : la licence de William Clark", -90.1873, 38.6261, '1827-07-23', 'jour', 'certaine', 'antoine',
  "Le 23 juillet 1827, à Saint-Louis, William Clark, surintendant des Affaires indiennes, accorde à « Antoine Robidoux and Company » la permission de traverser le pays indien pour aller faire la traite dans le Territoire (la formule manuscrite se lit « to pass through the Indian country to trade in the Territory »). Le même jour, Clark délivre un permis à Louis Robidoux et à trente-deux autres marchands pour retourner au Mexique ; Louis vend encore une mule à l'American Fur Company le 25 août avant de partir. C'est le passeport qui ouvre la grande période d'Antoine au Nouveau-Mexique et dans le pays ute, au moment où il prépare le fort Uncompahgre.",
  "Licence originale photographiée (dossier ROBIDOUX_FAMILY de l'auteur) ; voir aussi " + f"{WIL}, p. 76-80.",
  "Le point marque la surintendance de Clark à Saint-Louis.")

# ------------------------------------------------------------------ Compléments Willoughby (2012)
L('L129', "Fort Atkinson : le journal du vivandier Kennerly", -96.011, 41.452, '1824-02-15/1825-11', 'jour', 'certaine', 'antoine',
  "Le journal de James Kennerly, vivandier du fort Atkinson, suit les Robidoux pas à pas. Le 15 février 1824, « le jeune Robidou » (sans doute Antoine) apporte de Saint-Louis du courrier et des marchandises ; quatre jours plus tard, le colonel Leavenworth lui délivre un passeport « pour Antoine Robidoux et les autres personnes nommées » vers le Nouveau-Mexique. Le 30 septembre 1824, « le parti de Roubidoux part pour Santa Fe » ; le 30 août 1825, il revient de Taos avec au moins trente ballots de castor, partagés le lendemain avec Joseph ; le 14 septembre, Antoine, François, Louis et Michel repartent pour Taos sous l'orage. Fin novembre 1825, Joseph rentre de Saint-Louis jusqu'au ruisseau Papillion avec son bateau.",
  f"{WIL}, p. 64-65, 69, 77-78, 80.")
L('L130', "Rivière Jordan : le guet-apens de Bad Gocha", -111.93, 40.55, '1824-10', 'mois', 'hypothetique', 'antoine',
  "À l'automne 1824, le chef shoshone appelé Bad Gocha attire Étienne Provost et ses trappeurs canadiens à fumer le calumet sur la rivière Jordan, entre le lac Utah et le Grand Lac Salé, puis les fait massacrer ; Provost s'échappe. Antoine, qui accompagnait probablement Provost pour sa première saison dans les montagnes, aurait perdu huit hommes de la compagnie Provost & Le Clerc, selon le témoignage de William Gordon. La même saison, William Huddart croise « M. Rubideau » et cinq Américains sur la Green avant une attaque arapaho qui laisse le parti sans un cheval.",
  f"{WIL}, p. 66-69.",
  "Participation d'Antoine probable mais non prouvée ; lieu du guet-apens approximatif.")
L('L131', "Taos : la boutique de François et de Manuel Alvarez", -105.5735, 36.4075, '1824-11-25/1825-10', 'jour', 'certaine', 'freres',
  "Parti de Council Bluffs avec Louis, Michel, Isidore, Manuel Alvarez et Antoine Lamanche (papiers du gouverneur McNair, 3 septembre 1824, pour onze hommes), François arrive à Taos le 25 novembre 1824 ; Alvarez entre à son service. En janvier 1825, François assure à l'alcalde que ni lui ni ses hommes n'ont causé « aucun désordre ni scandale ». À l'automne 1825, l'agent du fisc Juan Bautista Vigil, envoyé par Sylvestre Pratte, saisit ses marchandises non déclarées et les enferme chez l'alcalde Severino Martínez ; François court à Santa Fe et règle cent pesos, dette d'une licence de trappe impayée.",
  f"{WIL}, p. 69-72, 79 ; {WEB71}, ch. VI.",
  "Weber donne une autre liste d'après la même lettre de McNair : François et Isidore Robidoux, Manuel Alvarez, Antonio LaMarche, José Martin, Joseph Gervais, Anastasio Lasalle, Charles Hotte, François Laroque, François Quenelle, Joseph Decary et Antoine Baucheam ; Cabanné, furieux que Joseph ait puisé dans l'entrepôt de Pratte, achète le tiers de l'entreprise, et le groupe part le 30 septembre.")
L('L132', "Embouchure de la Kansas : la licence de Michel", -94.6150, 39.1170, '1825-10-08/1826', 'jour', 'certaine', 'freres',
  "Le 8 octobre 1825, William Clark délivre à Michel Robidoux une licence d'un an pour traiter à l'embouchure de la Kansas, sur le Grand Loup et la Républicaine, aux villages poncas et à Bellevue (caution de 1 000 dollars, capital de 2 450,26 dollars). Joseph s'en sert sans doute pour défier son employeur, Bernard Pratte & Cie, qui obtient une licence pour le même lieu le 5 décembre ; Michel la lui laisse en repartant au Nouveau-Mexique en 1826.",
  f"{WIL}, p. 80-81.")
L('L133', "El Paso : les marchandises de Louis", -106.487, 31.759, '1826-05-19', 'jour', 'certaine', 'louis',
  "Le 19 mai 1826, Louis Robidoux confie des marchandises à son commis Manuel Martín, munies d'une guía (permis de commerce) de la douane de Santa Fe, à destination d'El Paso. Antoine reçoit la guía n° 22 la même année. Dans son rapport du 10 février 1826, le gouverneur Narbona recense « Francisco, Miguel et Antonio Rubidu », marchands sans passeport domiciliés à Taos.",
  f"{WIL}, p. 80-81.")
L('L134', "Santa Fe : Louis, premier alcalde", -105.9382, 35.6869, '1839-02-03/1840-01-01', 'jour', 'certaine', 'louis',
  "Premier alcalde de Santa Fe en 1839, Louis rend la justice et administre la ville : il approuve une école ecclésiastique (3 février), transmet la demande de naturalisation du trappeur Levi Keithly (9 février), poursuit les meurtriers de l'étranger Andres Dayle (août) et témoigne pour Charles Bent (18 octobre). À la mi-septembre, il reçoit chez lui le journaliste Matt Field, lui sert côtes de mouton, œufs et café, et le présente au gouverneur Armijo en servant d'interprète. Joueur de monte, il a « trois fois perdu ses biens accumulés ». Manuel Alvarez lui succède le 1er janvier 1840.",
  f"{WIL}, p. 148-152.")
L('L135', "Ham's Fork : Antoine perd tout au jeu", -109.97, 41.59, '1840-03', 'mois', 'approximative', 'antoine',
  "En mars 1840, Joe Meek et Robert Newell rejoignent Antoine, venu de Santa Fe avec des marchandises, près de l'embouchure de l'Uinta ; ils remontent la Green jusqu'au Ham's Fork. Selon Meek, Antoine y passe tant de temps au jeu de « hand » qu'il perd ses marchandises, ses chevaux « et même sa femme », et rentre à Santa Fe endetté. La même année, Kit Carson apporte ses fourrures au fort Uintah et y reste jusqu'en septembre.",
  f"{WIL}, p. 145, 147-148.",
  "Anecdote de Meek, peut-être enjolivée ; point à l'embouchure du Ham's Fork (Granger, Wyoming).")
L('L136', "Cottonwood Creek : le blizzard et les charrettes", -97.23, 38.47, '1841-12/1843-09-06', 'mois', 'approximative', 'antoine',
  "En décembre 1841, Antoine et Manuel Alvarez, voyageant en partis séparés avec de grands troupeaux, sont pris par un blizzard au Cottonwood Creek, près de Council Grove : Antoine perd en une nuit plus de quatre cents mules et chevaux et un ou deux hommes. Le 6 septembre 1843, le capitaine Cooke, qui escorte les caravanes, le retrouve au Cottonwood Fork « avec une douzaine de charrettes légères ; il a une maison de traite à trois cents milles au-delà de Santa Fe ».",
  f"{WIL}, p. 153, 162.",
  "Point au gué du Cottonwood sur la piste de Santa Fe.")
L('L137', "Saint-Louis : Louis vend son lot de la rue Seconde", -90.1866, 38.6259, '1841-03-20/1841-07-08', 'jour', 'certaine', 'louis',
  "Face à l'hostilité du gouverneur Armijo, Louis vend le 20 mars 1841 à Roque Tudesqui sa maison, son magasin et son moulin de Santa Fe, puis monte au fort Uintah (inscription du Willow Creek, 5 mai) et redescend à Saint-Louis, où il cède le 8 juillet 1841 un lot des rues Second et Market pour quatre cents dollars à Joseph Lavielle et George Morton. Il est de retour à Santa Fe en novembre.",
  f"{WIL}, p. 153-154.")
L('L138', "Fort Uintah : l'escale de Frémont", -109.9265, 40.4625, '1844-06-03/1844-06-05', 'jour', 'certaine', 'antoine',
  "Après avoir franchi la Lake Fork, John C. Frémont atteint le 3 juin 1844 « le fort Uintah, poste de traite appartenant à M. A. Roubideau », un peu au-dessus de la jonction des deux branches de l'Uinta ; il y mesure 40° 27′ 45″ N et 109° 56′ 42″ O. Le fort a « une garnison bigarrée d'engagés et de chasseurs canadiens et espagnols, avec le nombre habituel de femmes indiennes » ; Frémont y achète sucre, café et viande séchée et engage le voyageur Auguste Archambeau.",
  f"{WIL}, p. 154-156.",
  "Willoughby date ce passage de 1842 ; le rapport de Frémont le place en juin 1844, quatre mois avant la destruction du fort.")
L('L139', "Rivière Sevier : la traite des captifs paiutes", -112.10, 38.90, '1830/1844', 'annee', 'hypothetique', 'antoine',
  "Dans les années 1830, Nouveaux-Mexicains et Américains razzient les Paiutes (« Sand Pitch ») de la rivière Sevier et échangent avec presque toutes les nations du Grand Bassin des femmes et des enfants captifs. En juillet 1842, le missionnaire Joseph Williams voit Antoine rassembler au fort Uintah « plusieurs squaws et jeunes Indiens à emmener au Nouveau-Mexique », où les Espagnols les achètent pour épouses : la meilleure preuve de sa participation à la traite des esclaves autochtones.",
  f"{WIL}, p. 130-131, 157.",
  "Point symbolique sur la Sevier ; la participation d'Antoine aux razzias elles-mêmes n'est pas documentée.")

L('L140', "Fort Osage : les pirogues de François", -94.1867, 39.1867, '1812-06-04/1817-04-01', 'jour', 'certaine', 'freres',
  "Le 4 juin 1812, John Luttig, commis de la Compagnie de fourrures du Missouri, croise près du fort Osage plusieurs pirogues qui descendent de leurs quartiers d'hiver, dont celle de « Mess fr Robideau » (sans doute François). En 1817, Joseph poursuit Jeremiah Connors, qui lui doit 500 dollars pour le transport, par son bateau à quille, de marchandises et d'un commis de Saint-Louis jusqu'au fort Osage (plainte du 1er avril).",
  f"{WIL}, p. 35, 41.")
L('L141', "Île de Campeche (Galveston) : la commande aux frères Laffite", -94.79, 29.30, '1818-04', 'mois', 'certaine', 'joseph3',
  "Joseph Robidoux correspond avec Jean et Pierre Laffite, contrebandiers établis sur l'île de Campeche, près de Galveston. En avril 1818, il leur commande vingt esclaves mulâtres parlant français (dix hommes, dix jeunes femmes, plus des nourrissons), des miroirs, haches, couteaux, chaudrons, rubans de soie, couvertures, trois cents mousquets, poudre, balles, tabac, vermillon et sucre, pour 3 535 dollars payables à la livraison à Alexandria (Louisiane).",
  f"{WIL}, p. 41-42.",
  "On ignore si la commande fut livrée.")
L('L142', "Jurupa : un poste militaire contre les razzias", -117.415, 34.000, '1851/1854', 'annee', 'approximative', 'louis',
  "Louis Robidoux signale jusqu'à mille chevaux et bovins volés en trois mois par des pillards mojaves et autres. Il plaide pour un fort qui bloquerait le col du Cajon, à la tête de la vallée de la Santa Ana ; un poste de l'armée en adobe est bâti près de son ranch en 1851. Louis sert d'interprète au commandant lors d'une rencontre avec une bande d'Indiens de San Jacinto ; sa propre maison de Jurupa est percée de meurtrières. Selon le Memorial, le capitaine Lovell et le colonel Smith tiennent garnison sur le Jurupa de 1852 à 1854.",
  f"{WIL}, p. 198-199 ; {ROB}, p. 215.",
  "Emplacement exact du poste inconnu ; point placé sur le rancho.")

L('L143', "Saint-Joseph : le départ du Pony Express", -94.8434, 39.7556, '1860-04-03', 'jour', 'certaine', 'famille',
  "Le 3 avril 1860, au coup de canon tiré du Patee House, le premier cavalier du Pony Express part des écuries de Pikes Peak, prend les dépêches au bureau de la rue Third, entre Felix et Edmond (deux rues baptisées d'après les fils de Joseph), puis traverse le Missouri par le bac du pied de la rue Jule, l'ancien Robidoux Landing, jusqu'à Elwood. Le courrier atteint San Francisco en dix jours.",
  f"{ROB}, p. 146-147.")
L('L144', "Parc Krug : la cabane de Joseph", -94.8235, 39.7925, '1915-01', 'mois', 'hypothetique', 'joseph3',
  "En 1915, une cabane de rondins présentée comme la première maison de Saint-Joseph, bâtie pour Joseph Robidoux par des Indiens, est conservée au parc Krug. Des amis de Saint-Joseph font tailler dans l'un de ses rondins un porte-plume de chêne cerclé d'or, offert en janvier 1915 à son petit-fils Louis, à Kansas City.",
  f"{ROB}, p. 266 (Kansas City Post, 9 janvier 1915).",
  "L'authenticité de la cabane est une tradition locale ; point au parc Krug.")
L('L145', "Kansas City : Louis, le petit-fils", -94.5925, 39.0640, '1883/1923-02-06', 'annee', 'certaine', 'jules',
  "Louis Robidoux, fils de Jules et d'Elizabeth Barada, né à Saint-Joseph le 26 août 1855, débute dans les journaux de son père (Daily Commercial) puis s'installe en 1883 à Kansas City, où il fait fortune dans le commerce des vins puis l'immobilier. Avec sa femme Orral Messmore, il suit les pompiers de Kansas City à l'Exposition universelle de Paris (1900), visite La Havane (1911), Panama (1912), Riverside (1915) et Honolulu (1920). Il meurt le 6 février 1923 au 3518 Wyandotte Street et est inhumé à Morrill (Kansas) ; sa veuve publie l'année suivante le Memorial to the Robidoux Brothers.",
  f"{ROB}, p. 243-271.")

# ------------------------------------------------------------------ Denis Julien, l'homme du fort Uintah : ses inscriptions
# Julien, traiteur créole de Saint-Louis, est associé au poste des Reed sur l'Uinta, vendu à Antoine en 1832,
# et reste au fort Robidoux jusqu'en 1836. Ses inscriptions jalonnent les routes du réseau d'Antoine.
JUL = "Denis Julien, traiteur de Saint-Louis lié au poste des Reed sur l'Uinta (vendu à Antoine Robidoux en 1832), reste au fort Robidoux jusqu'en 1836."
L('L146', "Hay Canyon : « D Julien, 1830 »", -109.33, 39.42, '1830', 'annee', 'hypothetique', 'antoine',
  f"{JUL} Dans le Hay Canyon des Book Cliffs, sur la vieille piste des trappeurs qui relie la Grand Valley au bassin de l'Uinta, il grave « D Julien, 1830 » : la plus ancienne de ses inscriptions connues, sur le chemin même qu'Antoine prend en 1837 par Westwater. Signalée par Steve Allen en 2009.",
  f"{ADV} ; {KNB}.",
  "Emplacement exact non publié : point placé dans le Hay Canyon, sur la route de Westwater au Willow Creek.")
L('L147', "Rivière Uinta : « Denis Julien 1831 »", -109.90, 40.33, '1831', 'annee', 'hypothetique', 'antoine',
  f"{JUL} Sur une corniche de grès de la rive de l'Uinta, à une dizaine de milles en aval de l'ancien poste des Reed, il grave « Denis Julien 1831 ». Charles Kelly la photographie en 1931, près du confluent de l'Uinta et de la Duchesne.",
  f"{KNI} ; {JWK}.",
  "Point approximatif entre le site du fort Uintah et le confluent de la Duchesne.")
L('L148', "Hell Roaring Canyon : le bateau à voile de Julien", -109.98389, 38.56361, '1836-05-03', 'jour', 'approximative', 'antoine',
  f"{JUL} Le 3 mai 1836, au-dessus de l'embouchure du Hell Roaring Canyon (Green River), il grave « D. Julien, 1836, 3 Mai » avec le dessin d'un bateau à mât : la preuve qu'il remontait la Green à la voile, mode de transport qu'aucun autre document ne mentionne. À environ cinq milles au nord du parc de Canyonlands.",
  f"{NRH}, n° 91000617 (1991) ; {KNI} ; {ADV}.",
  "Coordonnées de la fiche NRHP, souvent arrondies pour protéger les sites.")
L('L149', "Labyrinth Canyon : « D. Julien 16 Mai 1836 »", -110.08, 38.73, '1836-05-16', 'jour', 'hypothetique', 'antoine',
  f"{JUL} Treize jours après Hell Roaring, plus en amont dans le Labyrinth Canyon, entre les canyons Hey Joe et Spring, il grave « D. Julien 16 Mai 1836 », encore bien conservée.",
  f"{ADV}.",
  "Emplacement exact non publié : point placé dans le Labyrinth Canyon, entre Hey Joe et Spring Canyon.")
L('L150', "Lower Red Lake Canyon : « Denis Julien, 1836 »", -109.92556, 38.15444, '1836', 'annee', 'approximative', 'antoine',
  f"{JUL} Sur la rive est du Colorado, sous l'embouchure du Lower Red Lake Canyon (Cataract Canyon, parc de Canyonlands), un « Denis Julien, 1836 » est taillé haut au-dessus de la rivière, sur un bloc qui porte aussi des pétroglyphes. Son authenticité est discutée.",
  f"{NRH}, n° 88001248 (1988) ; {JWK} ; {ADV}.",
  "Coordonnées NRHP, souvent arrondies. Attribution contestée.")
L('L151', "Bas du Cataract Canyon : l'inscription noyée", -110.25, 37.97, '1836', 'annee', 'hypothetique', 'antoine',
  f"{JUL} Une autre inscription de 1836, dans le bas du Cataract Canyon, a été retrouvée par Otis R. Marston en 1964, peu avant que le réservoir du barrage de Glen Canyon (lac Powell) ne la recouvre.",
  f"{JWK}.",
  "Aujourd'hui sous les eaux du lac Powell ; point très approximatif.")
L('L152', "Whirlpool Canyon : « DJ 1838 »", -109.01528, 40.54528, '1838', 'annee', 'approximative', 'antoine',
  f"{JUL} En 1838, deux ans après avoir quitté le fort, il laisse ses initiales et l'année, « DJ 1838 », sur la Green, quelques milles en aval d'Echo Park (Dinosaur National Monument, Colorado), près de la frontière de l'Utah.",
  f"{NRH}, n° 86003395 (1986) ; {ADV}.",
  "Coordonnées NRHP, souvent arrondies.")
L('L153', "Arches : « Denis Julien, 1844 »", -109.65, 38.82306, '1844-06-09', 'jour', 'approximative', 'antoine',
  f"{JUL} Le 9 juin 1844, l'année où Antoine perd le fort Uintah, un « Denis Julien » est gravé au pied d'une lame de grès du Devils Garden (parc des Arches), à plus de quinze milles de la rivière la plus proche. Découverte par Jim Stiles en 1977, l'inscription est discutée, mais son écriture concorde avec deux signatures de Julien sur des documents.",
  f"{NRH}, n° 88001184 (1988) ; {JWK} ; {ADV}.",
  "Coordonnées NRHP, souvent arrondies. Attribution discutée.")
L('L154', "Desolation Canyon : les initiales « DJ »", -110.05, 39.78, '1831/1844', 'annee', 'hypothetique', 'antoine',
  f"{JUL} Sur un gros bloc à l'embouchure du Chandler Creek, dans le Desolation Canyon de la Green, les initiales « DJ » lui sont attribuées, sans date.",
  f"{JWK}.",
  "Inscription non datée, attribuée sur les seules initiales ; dates encadrées par les autres inscriptions de Julien ; point approximatif.")

# ------------------------------------------------------------------ Dans les journaux (Newspapers.com)
L('L155', "Saint-Louis : Joseph vend ses maisons de la rue Main", -90.1868, 38.6262, '1845-05-21/1846-08-31', 'jour', 'approximative', 'joseph3',
  "Le 21 mai 1845, Joseph Robidoux fait paraître pour un mois dans le Missouri Republican une annonce : il vend sa propriété de l'îlot n° 5, 84 pieds sur la rue Main et 221 de profondeur, dont les bâtiments rapportent 2 200 dollars de loyer par an. Il accepte la moitié du prix en argent et le reste en marchandises de traite et en épicerie. En août 1846, il offre encore une ou deux maisons sur la rue Main ou la rue Front, entre les rues Elm et Myrtle, contre argent ou marchandises.",
  f"Missouri Republican, 21 mai 1845 et 5 août 1846 ({NWS}).",
  "L'îlot 5 est celui de l'ancienne maison familiale (Council House) ; point placé sur la rue Main.",
  images=[{"src": "images/journaux/1845-05-21-missouri-republican-annonce-propriete-joseph-robidoux.jpg", "legende": "Missouri Republican, 21 mai 1845 (Newspapers.com)"}])
L('L156', "San Timoteo : le « rancho Robidoux » à vendre", -117.205, 34.020, '1867-06-22/1867-07-27', 'jour', 'approximative', 'louis',
  "En juin et juillet 1867, Louis Robidoux met en vente dans le San Bernardino Guardian « le beau et bien connu rancho de San Timoteo, connu sous le nom de rancho Robidoux » : une lieue de terre arrosée par des sources intarissables, une belle maison d'habitation et ses dépendances, titre parfait. Les acheteurs doivent s'adresser à Louis, au rancho de Jurupa, ou à son agent A. Parks, à San Bernardino.",
  f"San Bernardino Guardian, 22 juin, 6 et 27 juillet 1867 ({NWS}).",
  "Point placé dans le canyon de San Timoteo, à l'est de Loma Linda ; emplacement exact de la maison inconnu.",
  images=[{"src": "images/journaux/1867-06-22-san-bernardino-guardian-rancho-san-timoteo-a-vendre.jpg", "legende": "San Bernardino Guardian, 22 juin 1867 (Newspapers.com)"}])
L('L157', "Platte Nord : le poste de Michel, à soixante milles de Laramie", -103.70, 41.88, '1854/1855-05', 'annee', 'hypothetique', 'freres',
  "En mai 1855, Michel Robidoux rentre à Saint-Joseph, à vingt-cinq jours de Laramie. Il annonce une grande guerre indienne : le chef de la bande de Smoke fédère les tribus contre les troupes attendues. Les Oglalas lui ont volé dix chevaux. À son poste de traite, « à soixante milles de Laramie », l'hiver a été si doux qu'il s'est passé de feu en janvier et en février. La nouvelle, publiée par le St. Joseph Cycle, est reprise par dix journaux.",
  f"Liberty Tribune, 25 mai 1855, d'après le St. Joseph Cycle ({NWS}).",
  "Emplacement hypothétique : à environ soixante milles en aval de Fort Laramie, sur la Platte Nord, près du col de Robidoux.",
  images=[{"src": "images/journaux/1855-05-25-liberty-tribune-michel-robidoux-plaines.jpg", "legende": "Liberty Tribune, 25 mai 1855 (Newspapers.com)"}])
L('L158', "Saint-Joseph : la mort de Jeffrey Deroine", -94.848, 39.769, '1859-03-31', 'jour', 'approximative', 'joseph3',
  "Jeffrey Deroine, ancien esclave de Joseph Robidoux, meurt à Saint-Joseph le 31 mars 1859. La dépêche de Saint-Louis reprise par neuf journaux raconte qu'il est devenu traiteur au service de son maître, qu'il a acheté sa liberté (en 1835, selon elle), qu'il a été interprète du gouvernement et qu'il a accompagné en Europe, en 1844, les chefs ioways, sauks et renards du colonel Melody. Il y aurait séduit une dame de haut rang et appris plusieurs langues ; Disraeli l'aurait remarqué. Il servit ensuite de guide et d'interprète aux expéditions d'exploration.",
  f"Courier-Journal (Louisville), 4 avril 1859 ({NWS}) ; {WIL}, p. 114-117.",
  "Point symbolique en ville ; lieu de décès précis inconnu.",
  images=[{"src": "images/journaux/1859-04-04-courier-journal-mort-jeffrey-deroine.jpg", "legende": "Courier-Journal, 4 avril 1859 (Newspapers.com)"}])
L('L159', "Londres : Jeffrey Deroine et la délégation ioway", -0.1372, 51.5087, '1844-07/1845-04', 'mois', 'approximative', 'famille',
  "En 1844, Jeffrey Deroine, l'ancien esclave affranchi de Joseph Robidoux, accompagne comme interprète une délégation de chefs ioways, sauks et renards conduite par le colonel Melody. À Londres, elle est présentée dans la galerie indienne de George Catlin, à l'Egyptian Hall de Piccadilly ; elle passe ensuite à Paris et à Bruxelles. Selon la presse de 1859, Deroine impressionne les cours d'Europe, retient l'attention de Disraeli et revient « chargé de présents ».",
  f"Courier-Journal (Louisville), 4 avril 1859 ({NWS}).",
  "Point placé à l'Egyptian Hall (Piccadilly), où Catlin exposait les Ioways.")
L('L160', "Pasadena : la maison d'Amanda, rue Las Lunas", -118.1155, 34.1565, '1916-06/1916-12-13', 'jour', 'approximative', 'antoine',
  "Amanda Barada Stollsteimer, petite-fille adoptive d'Antoine, vit en Californie depuis 1913 et à Pasadena depuis l'été 1916. Elle meurt chez elle, au 1710 rue Las Lunas, le 13 décembre 1916, à 64 ans. Elle laisse trois fils à Denver (C. A., Harry S. et Tony S. Stollsteimer) et trois filles (Mme Lena S. Archuleta, à San Diego ; Mme A. L. Knorr et Mme Tom Accord, à Pasadena). Les funérailles ont lieu à l'église St. Andrew, l'inhumation au cimetière Mountain View.",
  f"Pasadena Star-News, 14 décembre 1916 ({NWS}).",
  "Adresse placée approximativement sur la rue Las Lunas.",
  images=[{"src": "images/journaux/1916-12-14-pasadena-star-news-mort-amanda-stollsteimer.jpg", "legende": "Pasadena Star-News, 14 décembre 1916 (Newspapers.com)"}])
L('L161', "Morrill (Kansas) : la tombe de Louis, le petit-fils", -95.693, 39.929, '1923-02-08', 'jour', 'approximative', 'jules',
  "Louis Robidoux, petit-fils du fondateur, meurt à Kansas City le 6 février 1923, trois semaines après une attaque d'apoplexie. Après les funérailles à l'église Our Lady of Good Counsel, il est inhumé le 8 février à Morrill, dans le Kansas. Le St. Joseph News-Press rappelle que c'est lui qui avait fait transférer le corps de Joseph du vieux cimetière du Calvaire à Mount Olivet.",
  f"St. Joseph News-Press, 7 février 1923 ({NWS}) ; {ROB}, p. 270.",
  "Point placé au village ; cimetière exact non vérifié.")

# Enrichissements tirés de la presse : (texte ajouté à la description, source, image facultative)
PRESSE = {
  'L120': ("Le récit vient de William Huddart, rentré de Taos à Franklin en avril 1825. Parti de Taos le 24 août 1824 avec quatorze trappeurs, il rencontre sur le Green River « M. Rubideau » et cinq Américains. Deux jours plus tard, les Arapahos tuent un certain Nowlin et laissent « M. Rubideau et ses hommes dans les montagnes sans un cheval ni une mule ». La nouvelle est reprise par quatorze journaux en mai et juin 1825.",
           "Daily National Intelligencer, 23 mai 1825, d'après le Missouri Intelligencer",
           {"src": "images/journaux/1825-05-23-national-intelligencer-huddart-rubideau-green-river.jpg", "legende": "Daily National Intelligencer, 23 mai 1825 (Newspapers.com)"}),
  'L104': ("Le 26 octobre 1842, le Missouri Republican annonce que l'argent est retrouvé, « sauf une petite somme », après que les coupables ont été soumis au « juge Lynch » et ont avoué « après un moment d'étranglement et de fouet ». Huit journaux reprennent la nouvelle.",
           "Missouri Republican, 26 octobre 1842",
           {"src": "images/journaux/1842-10-26-missouri-republican-argent-vole-recupere.jpg", "legende": "Missouri Republican, 26 octobre 1842 (Newspapers.com)"}),
  'L29': ("La presse de l'Est annonce la nouvelle en mars 1845 : les Utes ont pris le fort d'Antoine sur la « Wintae » et tué traiteurs et engagés ; Antoine s'est réfugié à son fort de la « Campagara » [Uncompahgre]. Dix-huit journaux la reprennent. En mai, des voyageurs de Santa Fe font croire qu'Antoine a péri, faute de nouvelles depuis l'hiver ; onze journaux répètent cette fausse rumeur.",
          "Washington Union, 18 mars 1845 ; Louisville Daily Courier, 1er mai 1845",
          {"src": "images/journaux/1845-03-18-washington-union-fort-uintah.jpg", "legende": "Washington Union, 18 mars 1845, p. 3 (Newspapers.com)"}),
  'L78': ("Selon la St. Joseph Gazette, reprise par neuf journaux, Charles chahutait avec d'autres jeunes gens vers minuit. Il emportait sur l'épaule un poteau arraché devant le magasin de D. & T. D. S. MacDonald quand Duncan MacDonald tira du premier étage une charge de gros plomb. Charles mourut en quelques minutes en appelant son compagnon. MacDonald avoua, en disant n'avoir voulu blesser personne.",
          "Liberty Tribune, 20 septembre 1850, d'après la St. Joseph Gazette",
          {"src": "images/journaux/1850-09-20-liberty-tribune-mort-charles-robidoux.jpg", "legende": "Liberty Tribune, 20 septembre 1850 (Newspapers.com)"}),
  'L38': ("La notice de la St. Joseph Gazette du 30 août paraît intégralement dans le Missouri Republican du 1er septembre, puis à Keokuk, Liberty, Cleveland et Los Angeles.",
          "Missouri Republican, 1er septembre 1860",
          {"src": "images/journaux/1860-09-01-missouri-republican-mort-antoine-robidoux.jpg", "legende": "Missouri Republican, 1er septembre 1860 (Newspapers.com)"}),
  'L16': ("Les journaux de juin 1868 résument la nouvelle : il s'était couché en bonne santé apparente ; le lotissement de ses terres l'avait enrichi, mais « la plus grande partie lui avait échappé depuis des années, et il meurt relativement pauvre ».",
          "Liberty Tribune, 5 juin 1868",
          {"src": "images/journaux/1868-06-05-liberty-tribune-mort-joseph-robidoux.jpg", "legende": "Liberty Tribune, 5 juin 1868 (Newspapers.com)"}),
  'L31': ("La nécrologie de 1875 précise qu'il a étudié à l'université Saint-Louis, qu'il a ouvert le premier magasin de la ville, puis d'autres à White Hall (Jimtown) et à Savannah, qu'il a été juge de paix de 1858 à 1868 et qu'il est mort de consomption chez lui, rue Edmond, entre les rues Quatre et Cinq. Il avait eu douze enfants d'Elizabeth Barada, dont six vivaient encore.",
          "St. Louis Globe-Democrat, 1er mars 1875",
          {"src": "images/journaux/1875-03-01-st-louis-globe-democrat-mort-jules-robidoux.jpg", "legende": "St. Louis Globe-Democrat, 1er mars 1875 (Newspapers.com)"}),
  'L50': ("La première publication de l'inscription date du 23 février 1912 : le Times-Independent de Moab annonce que des éleveurs l'ont découverte « à la tête du canyon de Bitter Creek », là où passe la vieille piste ute, mais il la traduit de travers (« établir une mission et apporter une loi à la réserve »).",
          "The Times-Independent (Moab), 23 février 1912",
          {"src": "images/journaux/1912-02-23-times-independent-inscription-westwater.jpg", "legende": "The Times-Independent, 23 février 1912 (Newspapers.com)"}),
  'L145': ("Selon le St. Joseph News-Press, Louis a quitté Saint-Joseph à 27 ans pour ouvrir un saloon avenue Union, en face de l'ancienne gare de Kansas City, et il a milité chez les démocrates. Il meurt d'apoplexie le 6 février 1923 et il est inhumé à Morrill (Kansas).",
           "St. Joseph News-Press, 7 février 1923",
           {"src": "images/journaux/1923-02-07-st-joseph-news-press-mort-louis-robidoux.jpg", "legende": "St. Joseph News-Press, 7 février 1923 (Newspapers.com)"}),
  'L47': ("La nécrologie d'Elizabeth Barada (St. Joseph Gazette, 28 septembre 1904) évoque déjà le projet de réunir la famille sous un seul monument. En 1923, le St. Joseph News-Press attribue le transfert à son fils Louis.",
          "St. Joseph Gazette, 28 septembre 1904 ; St. Joseph News-Press, 7 février 1923", None),
  'L15': ("Deux échos de la presse : en février 1863, un catholique de Saint-Louis avoue à confesse avoir escroqué Joseph de 300 dollars, et le prêtre lui renvoie la somme (St. Joseph Herald, repris jusqu'au Shasta Courier). Le 2 août 1866, Joseph et John Patee, les « deux fondateurs », fêtent ensemble leurs 82 ans.",
          "Liberty Tribune, 3 avril 1863 ; Tri-Weekly Missouri Republican, 6 août 1866",
          {"src": "images/journaux/1863-04-03-liberty-tribune-cas-de-conscience.jpg", "legende": "Liberty Tribune, 3 avril 1863 : « A Case of Conscience » (Newspapers.com)"}),
  'L87': ("En août 1860, le rôle d'imposition du comté évalue les biens de Louis Robidoux à 14 000 dollars, derrière Rains & Carlisle (43 071 dollars) mais devant Abel Stearns et James W. Waters.",
          "Los Angeles Star, 4 août 1860", None),
  'L34': ("En juin 1868, le San Bernardino Guardian décrit Jurupa comme l'une des meilleures terres du comté, « en partie à Don Louis Robidoux » et gérée par son agent Arthur Parks.",
          "San Bernardino Guardian, 6 juin 1868", None),
  'L126': ("En mars 1886, l'agent Stollsteimer plaide dans la presse (Denver News, Santa Fe New Mexican) pour le transfert des Utes du Sud en Utah, où ils trouveraient de bons pâturages, « plus heureux loin des Blancs ».",
           "Santa Fe New Mexican, 15 mars 1886", None),
  'L72': ("Elle meurt chez elle, au 1710 rue Las Lunas à Pasadena, le 13 décembre 1916 ; les funérailles ont lieu à l'église St. Andrew.",
          "Pasadena Star-News, 14 décembre 1916", None),
  'L92': ("En mai 1855, Michel revient d'un poste de traite situé « à soixante milles de Laramie » et annonce une guerre indienne générale (voir le lieu de la Platte Nord).",
          "Liberty Tribune, 25 mai 1855", None),
}

L('L162', "Robidoux Creek (Kansas) : « M. Robidoux, trapper, 1841 »", -96.4265, 39.9116, '1841', 'annee', 'hypothetique', 'freres',
  "Une planche du dossier familial reproduit l'inscription « M. Robidoux trapper 1841 » et la situe sur le Robidoux Creek, « où Michel tenait un poste de traite avec les Indiens », juste en dessous du gué de Robidoux (Robidoux Crossing) qu'emprunta plus tard le Pony Express. Le Robidoux Creek (ou Vermillion) coupe la piste du Pony Express près de la station Guittard, dans le nord-est du comté de Marshall (Kansas).",
  "Planche « Robidoux inscriptions » du dossier familial (dossier de l'auteur) ; National Park Service, « Saddle Up at Guittard », panneau de la piste du Pony Express (carte : Robidoux Creek et Pony Express Trail).",
  "Attribution à Michel et emplacement donnés par la planche familiale seulement, à vérifier. Point placé à la station Guittard, où la piste du Pony Express franchit le Robidoux Creek.",
  images=[{"src": "images/documents/inscription-m-robidoux-trapper-1841.jpg", "legende": "« M. Robidoux, trapper, 1841 » (planche du dossier familial)"}])

L('L163', "Hardscrabble : les engagés de Robidoux réfugiés sur l'Arkansas (automne 1844)", -105.06, 38.36, '1844-10/1845', 'mois', 'approximative', 'antoine',
  "Après l'attaque du fort Uncompahgre, les Utes épargnent le seul Américain et l'envoient dire à Antoine Robidoux, au fort Uintah, que ses pelleteries ne risquent rien. Terrifiés, sept Mexicains du fort Uintah volent mules, fusils et équipement et s'enfuient jusqu'à Hardscrabble, où Alexander Montgomerie recueille leur récit et alerte Taos. Les autorités mexicaines accusent Robidoux d'avoir vendu des fusils aux Utes. Parmi les engagés de Robidoux qui s'établissent ensuite dans les villages de l'Arkansas : Manuel Ruis, Esquípula Salasar (« Scapoodlar »), Manuel Pais, Miguel Ruibali, un esclave paiute nommé José et Felipe Archuleta.",
  f"{PHG}, p. 137-138 et n. 26-28 (billet demandant à ces hommes de remettre les mules de Robidoux à « Mr. W. Subletz »).",
  "Position approximative de l'établissement de Hardscrabble (1844-1848), sur le ruisseau du même nom près de son confluent avec l'Arkansas.")

L('L164', "Saint-Louis : un contrat entre le jeune Manuel Lisa et « Roubidoux » (1798)", -90.1885, 38.6255, '1798', 'annee', 'hypothetique', 'joseph1',
  "Selon Charles Gianini (1927), Manuel Lisa, né à La Nouvelle-Orléans vers 1772, arrive à Saint-Louis en 1798 et passe la même année un contrat avec « Roubidoux, l'un des vieux traiteurs indiens ». Gianini ne donne ni le prénom ni l'objet du contrat ; en 1798, le Robidoux établi de longue date dans la traite est Joseph (père). Lisa deviendra ensuite le grand rival des Chouteau sur le Missouri, et Joseph fils le précédera au poste de Bellevue.",
  f"{GIA}, p. 323 (PDF du Drive de l'auteur, dossier MANUEL_LISA).",
  "Article de vulgarisation sans référence d'archives : attribution à Joseph père à vérifier dans les actes notariés de Saint-Louis (Missouri Historical Society). Point placé au vieux Saint-Louis.")

L('L165', "Saint-Louis : Joseph hypothèque ses biens pour bâtir Blacksnake Hills (1829-1834)", -90.1885, 38.6258, '1829/1834', 'annee', 'approximative', 'joseph3',
  "Écarté du Missouri par son contrat de 1828 avec la compagnie Pratte, Joseph Robidoux reparaît dès 1831 à Blacksnake Hills. Entre 1829 et 1834, avec sa femme Angélique Vaudry, il vend l'essentiel de ses biens immobiliers de Saint-Louis ; en 1834, le couple hypothèque ce qui reste à Pratte, Chouteau & Cie contre un prêt de 16 500 dollars, qui finance sans doute ses entreprises du Missouri et du Nouveau-Mexique et son poste de Blacksnake Hills. En 1833, il assure à Pierre Chouteau fils avoir « horreur » du whisky et en rejette l'usage sur son ancien associé Jean-Baptiste Roy ; un agent indien l'avait accusé en 1832 de vendre de jeunes Indiennes aux traiteurs.",
  f"{GIT}, p. 103, 107-108 (d'après Lewis, Robidoux Chronicles, et la correspondance Chouteau).",
  "Point placé au vieux Saint-Louis ; l'emplacement des biens hypothéqués n'est pas précisé.")

L('L166', "Saint-Louis : une maison de rondins pour Joseph Robidoux, cordonnier arrivé de Montréal (1771)", -90.1885, 38.6255, '1771-04', 'mois', 'certaine', 'joseph1',
  "Selon Peterson, les archives de Saint-Louis montrent qu'au printemps 1771 (l'acte est daté par erreur du 31 avril), le menuisier béarnais Jean-Baptiste Ortès s'engage à bâtir une maison pour Joseph Robidoux, cordonnier récemment arrivé de Montréal. La maison doit avoir trois pièces, en pièce sur pièce de cotonnier, de frêne ou de noyer. Le prix : cinq cents livres en castors ou en chevreuils, et trois paires de souliers.",
  f"{PET}, p. 65 (PDF du Drive de l'auteur, dossier ST_LOUIS_HISTORY), d'après les St. Louis Recorded Archives.",
  "Le père (Joseph Ier) meurt en septembre 1771 ; la maison peut avoir été destinée au père ou au fils, tous deux cordonniers. Point placé au vieux Saint-Louis.")
L('L167', "Saint-Louis : la boulangerie de pierre et le moulin à huit chevaux de Joseph Robidoux (1802-1809)", -90.1885, 38.6255, '1802/1809', 'annee', 'certaine', 'joseph2',
  "À la fin du régime espagnol, Joseph Robidoux (II) bâtit derrière sa grande maison de la Grande Rue Royale une boulangerie de pierre à deux étages. Il semble avoir eu des contrats de pain et de biscuits, faits avec la farine de son moulin. Ce moulin, mû par huit chevaux en 1802, était selon Peterson l'un des plus grands de son genre. L'inventaire dressé à sa mort en 1809 énumère le matériel de boulanger : pétrins, pelles de bois, balances, corbeilles et couvertures à pain.",
  f"{PET}, p. 38 et 40 (PDF du Drive de l'auteur).",
  "Point placé au vieux Saint-Louis ; lot exact sur la Grande Rue Royale à reprendre du plan des lots.")

L('L168', "Jurupa : l'évaluation fiscale de 1854 et le lotissement du rancho", -117.40646, 33.99526, '1854', 'annee', 'certaine', 'louis',
  "Selon Hornbeck, qui s'appuie sur les registres du comté de San Bernardino, Louis Robidoux est évalué en 1854 à 20 000 dollars. Le rôle compte le rancho Jurupa (environ 3 000 acres), celui de San Timoteo (640 acres), 1 200 moutons, quelque 450 bovins, une soixantaine de chevaux, sa maison et ses aménagements, ainsi qu'un billet de 3 000 dollars des évêques mormons Lyman et Rich, acheteurs du rancho San Bernardino en 1851. Les bancs de terre où s'élèvera Riverside ne sont pas évalués, jugés sans valeur. Lettré et polyglotte (il parle quatre langues), Louis est juge local et membre du premier conseil de surveillance du comté. Il est l'un des premiers en Californie à lotir son domaine pour le vendre à de petits fermiers à crédit. Un de ses hommes, Antonio Prieto, bâtit une maison au pied nord du mont Rubidoux.",
  f"{HOR}, p. 81-88 (PDF du Drive de l'auteur, dossier ROBIDOUX_FAMILY).",
  "Hornbeck écrit en 1913 d'après des souvenirs et des auteurs antérieurs ; il fait arriver Louis en Californie en 1844, alors que les autres sources situent l'achat du rancho en 1847.")

# ------------------------------------------------------------------ Weber (1971) et symposium de 2015 : compléments
L('L169', "Taos : le gouverneur Chávez, Louis Robidoux et l'affaire Ewing Young (août 1831)", -105.5735, 36.4075, '1831-08', 'mois', 'certaine', 'louis',
  "En août 1831, le gouverneur José Antonio Chávez écrit à Luis Robidoux : il s'étonne que l'alcalde de Taos n'ait pas emprisonné « l'étranger Joaquín Yon » (Ewing Young), dont « les crimes et l'impudence sont déjà insupportables », et lui demande de le faire arrêter et conduire à Santa Fe, où vivent les témoins et où la prison est plus sûre. Young ne sera jamais jugé avant de repartir pour la Californie.",
  f"{WEB71}, ch. IX.")
L('L170', "Santa Fe : Antoine regidor puis alcalde, et son magasin cambriolé (1829-1833)", -105.9378, 35.6870, '1829-12-20/1833', 'jour', 'certaine', 'antoine',
  "Citoyen mexicain depuis juillet 1829, Antoine Robidoux est élu neuvième regidor de Santa Fe le 20 décembre 1829, puis sert comme troisième alcalde en 1833. L'ancien gouverneur Vizcarra conteste son élection en faisant valoir qu'il est naturalisé ; le gouverneur Chávez le juge éligible et transmet l'affaire à Mexico. Antoine tient un magasin bien pourvu, cambriolé deux années de suite (affaires du 4 décembre 1829 et du 28 mars 1831), approvisionné par la piste du Missouri, et expédie régulièrement des marchandises à Chihuahua.",
  f"{WEB71}, ch. XI (Archivo General de la Nación, Gobernación, ramo I, n° 120 ; MANM).")
L('L171', "Embouchure de l'Uintah : Antoine perd tout au jeu de mains (printemps 1840)", -109.75, 40.07, '1840-03~', 'circa', 'approximative', 'antoine',
  "Selon Joe Meek, à l'hiver 1839-1840, près de l'embouchure de l'Uintah, lui et Robert Newell sont rejoints par Antoine Robidoux, venu de Santa Fe avec des marchandises pour la traite ; ils remontent ensemble la Green jusqu'à Ham's Fork. Passionné du jeu de mains, Robidoux aurait perdu au jeu ses marchandises, ses chevaux et même sa femme, et serait rentré à Santa Fe « plus pauvre que rien », endetté. À la même époque, tant de trappeurs se réunissent au fort Uintah qu'on parle du « rendez-vous de Robidoux ».",
  f"{HAR15}, d'après F. F. Victor, The River of the West (1870).",
  "Anecdote rapportée par Meek, sans autre source.")
L('L172', "Santa Fe : les chefs utes, le gouverneur Martínez et les trappeurs de « Portelance » (septembre 1844)", -105.9378, 35.6870, '1844-09', 'mois', 'certaine', 'antoine',
  "En 1844, des chefs utes viennent à Santa Fe demander des présents en compensation de morts causées, selon une version, par « un groupe de trappeurs espagnols sous PORTELANCE », un Français. Mécontents des cadeaux du gouverneur Mariano Martínez, ils l'attaquent ; ses gardes tuent huit Indiens. C'est en rentrant chez eux que les Utes s'en prennent au fort Uncompahgre d'Antoine Robidoux. Les autorités de Santa Fe soupçonnent d'ailleurs l'un des forts de Robidoux d'avoir fourni des armes aux Utes.",
  f"{WEB71}, ch. XIII (d'après le Missouri Democrat, 17 sept. 1845, et la thèse de W. A. Minge, 1965).")

L('L173', "Robidoux's Landing : les missionnaires jésuites, puis la première église de Saint-Joseph (1838-1847)", -94.8500, 39.7660, '1838/1847-06-17', 'annee', 'approximative', 'joseph3',
  "L'historien de l'archidiocèse décrit le site, cent ans plus tôt, comme des collines boisées avec la cabane du traiteur Joseph Robidoux (le troisième du nom) et un débarcadère ; Robidoux, qui y acquiert la terre en 1830, la fait lotir et la ville compte 20 000 habitants en 1864. Les jésuites de la mission kickapoue y passent les premiers : De Smet en mai 1838, puis Eysvogels, qui baptise en 1842 « aux Black Snake Hills (Robidoux's Landing) ». Le premier curé résident, Thomas Scanlon, arrive le 25 octobre 1845 ; De Smet, de passage le 23 novembre 1846, compte 350 maisons et une population d'Américains, de Créoles français, d'Irlandais et d'Allemands. L'église, au coin des rues Fifth et Felix, est dédiée le 17 juin 1847.",
  f"{ROT28}, chapitre « St. Joseph and the Platte Purchase ».",
  "Rothensteiner place l'achat de la terre en 1830, avant la ratification du Platte Purchase (1836) : à recouper avec les lettres patentes de 1843 (L15).")

# ------------------------------------------------------------------ Recensements (ménages relevés sur Ancestry)
import sys as _sys; _sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import recensements as _rec
_rec.points(L)

EXTRA = {
  'L128': [{"src": "images/documents/clark-1827-07-23-licence-antoine-robidoux-and-company.jpg", "legende": "Licence de William Clark à « Antoine Robidoux and Company », Saint-Louis, 23 juillet 1827 (dossier de l'auteur)"}],
  'L50': [LOC("westwater-inscription-antoine-robidoux.jpg", "« Antoine Robidoux passé ici le 13 novembre 1837 pour établire maison traitte à la rv. Vert ou Wiyte » (dossier de l'auteur)"),
          LOC("westwater-canyon-falaise.jpg", "La falaise de grès du canyon Westwater, près de l'inscription (dossier de l'auteur)"),
          LOC("westwater-inscription-et-bouclier-2017.jpg", "L'inscription et, au pied du bloc, le bouclier peint préhistorique, octobre 2017 (dossier de l'auteur)"),
          LOC("westwater-bouclier-peint-2017.jpg", "Le bouclier peint, criblé d'impacts de balles, sous l'inscription d'Antoine (dossier de l'auteur, 2017)"),
          LOC("westwater-falaise-2017.jpg", "L'abri sous roche du ruisseau Westwater où campait Robidoux, vu du fond du canyon (dossier de l'auteur, 2017)")],
  'L144': [LOC("saint-joseph-cabane-robidoux-oldest-house.jpg", "« Oldest house, St. Joseph, built by the Indians for Jos. Robidoux » : la cabane conservée au parc Krug (photographie ancienne, dossier de l'auteur)")],
  'L51': [LOC("willow-creek-inscription-louis-robidoux-1841.jpg", "« Louis Robidoux passo aqui el cuarto [?] de mayo de 1841 », Willow Creek ; photo de George E. Stewart reproduite par J. Nelson (2003), p. 35 (dossier de l'auteur)")],
  'L27': [LOC("col-robidoux-mosca-2010.jpg", "Le col Robidoux (Mosca), à 9 700 pieds ; photo de Gail Fisher, 6 décembre 2010 (dossier de l'auteur)")],
  'L34': [{"src": "images/documents/plan-rancho-jurupa.jpg", "legende": "Plan du rancho Jurupa confirmé à Louis Robidoux et al., levé pour le Surveyor General des États-Unis (années 1870) ; dossier de l'auteur"}],
  'L59': [LOC("jurupa-adobe-louis-robidoux.jpg", "L'adobe de Louis Robidoux à Jurupa (dossier de l'auteur)")],
  'L60': [LOC("jurupa-plaque-moulin-robidoux.jpg", "Plaque n° 51 du comté de Riverside : « Robidoux Grist Mill Site », California Historical Landmark n° 303 (dossier de l'auteur)"),
          LOC("jurupa-monument-moulin-robidoux.jpg", "Le monument du moulin, coiffé d'une meule (dossier de l'auteur)")],
}
# Photographies anciennes repérées dans les arbres publics d'Ancestry (domaine public ; crédit à la source d'origine quand elle est connue)
ANC = "arbre public d'un membre d'Ancestry"
for _id, _im in {
  'L12': [LOC("maison-joseph-robidoux.jpg", f"La maison de rondins de Joseph Robidoux (photographie ancienne ; {ANC})")],
  'L16': [LOC("joseph-robidoux-portrait-v1860.jpg", f"Joseph Robidoux vers 1860 (photographie ancienne ; {ANC})")],
  'L34': [LOC("louis-robidoux.jpg", f"Louis Robidoux (photographie ancienne ; {ANC})")],
  'L59': [LOC("louis-robidoux-ranch-1869.jpg", f"La maison du ranch de Louis Robidoux à Jurupa (USC Digital Library, California Historical Society ; {ANC})")],
}.items():
    EXTRA[_id] = EXTRA.get(_id, []) + _im
for f in LIEUX:
    f['properties']['images'] = f['properties']['images'] + EXTRA.get(f['properties']['id'], [])
    pr = PRESSE.get(f['properties']['id'])
    if pr:
        texte, src, img = pr
        f['properties']['description'] += " Dans la presse : " + texte
        f['properties']['sources'] = f['properties']['sources'].rstrip('.') + f" ; {src} ({NWS})."
        if img: f['properties']['images'] = f['properties']['images'] + [img]

os.makedirs('data', exist_ok=True)
for nom, feats in (('lieux', LIEUX), ('trajets', TRAJETS)):
    json.dump({"type": "FeatureCollection", "features": feats}, open(f'data/{nom}.geojson', 'w', encoding='utf-8'), ensure_ascii=False, indent=1)
print(len(LIEUX), 'lieux,', len(TRAJETS), 'trajets')
