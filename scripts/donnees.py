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

def dec(edtf):
    d = edtf.replace('~', '').replace('?', '')
    p = [int(x) for x in d.split('-')]
    if len(p) == 1:
        return round(p[0] + 0.5, 4)
    j = datetime.date(p[0], p[1], 15) if len(p) == 2 else datetime.date(*p)
    n = 366 if j.year % 4 == 0 else 365
    return round(j.year + ((j - datetime.date(j.year, 1, 1)).days + 0.5) / n, 4)

LIEUX, TRAJETS = [], []
def L(id, nom, lon, lat, edtf, precision, certitude, membre, description, sources, note=''):
    a, b = (edtf.split('/') + [None])[:2]
    LIEUX.append({"type": "Feature", "geometry": {"type": "Point", "coordinates": [lon, lat]},
                  "properties": {"id": id, "nom": nom, "debut": dec(a), "fin": dec(b or a), "date_edtf": edtf, "precision": precision,
                                 "certitude": certitude, "categorie": membre, "description": description, "sources": sources,
                                 "note": note, "type": "lieu"}})
def T(id, nom, coords, edtf, certitude, mode, membre, description, sources, note=''):
    a, b = edtf.split('/')
    TRAJETS.append({"type": "Feature", "geometry": {"type": "LineString", "coordinates": coords},
                    "properties": {"id": id, "nom": nom, "debut": dec(a), "fin": dec(b), "date_edtf": edtf, "certitude": certitude,
                                   "mode": mode, "membre": membre, "description": description, "sources": sources, "note": note, "type": "trajet"}})

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
L('L07', "Saint-Louis : mort de Joseph II", -90.1875, 38.6258, '1809', 'annee', 'approximative', 'joseph2',
  "Joseph Robidoux (II) meurt à Saint-Louis en 1809. Sa veuve épouse Victor Lagoterie. L'aîné, Joseph III, reprend l'entreprise familiale de traite.",
  f"{HSR2}, p. 160 ; {WAL}, p. 270.")
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
L('L37', "Col de Robidoux (Scotts Bluff)", -103.75, 41.82, '1849-07-25/1852', 'jour', 'approximative', 'famille',
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

os.makedirs('data', exist_ok=True)
for nom, feats in (('lieux', LIEUX), ('trajets', TRAJETS)):
    json.dump({"type": "FeatureCollection", "features": feats}, open(f'data/{nom}.geojson', 'w', encoding='utf-8'), ensure_ascii=False, indent=1)
print(len(LIEUX), 'lieux,', len(TRAJETS), 'trajets')
