// Recensements : ménages de la famille Robidoux (généré par scripts/recensements.py depuis genealogie/recensements.json).
const RECENSEMENTS = [
 {
  "id": "R1850-joseph",
  "annee": 1850,
  "lieu": "canton de Washington, comté de Buchanan (Missouri), logement 258",
  "portraits": [
   "joseph3"
  ],
  "titre": "Le fondateur de Saint-Joseph, 66 ans, avec sa seconde épouse.",
  "menage": [
   {
    "nom": "Joseph Robidoux",
    "age": "66",
    "lien": "chef",
    "ne": "v. 1784, Missouri",
    "cible": true
   },
   {
    "nom": "Angilique [Angélique Vaudry] Robidoux",
    "age": "50",
    "lien": "épouse",
    "ne": "v. 1800, Illinois"
   },
   {
    "nom": "Mary Lature",
    "age": "22"
   }
  ],
  "source": "1850 United States Federal Census, Ancestry (coll. 8054, notice 3651738)",
  "lieu_id": "R1850-joseph"
 },
 {
  "id": "R1850-jules",
  "annee": 1850,
  "lieu": "canton de Washington, comté de Buchanan (Missouri), logement 259",
  "portraits": [
   "jules",
   "joseph3"
  ],
  "titre": "Logement voisin de celui de Joseph : son fils Jules, marchand, sa famille, son jeune frère Charles et sa cousine Mary (fille de François) avec son mari James Brown.",
  "menage": [
   {
    "nom": "Julius C. Robidoux",
    "age": "36",
    "lien": "chef",
    "ne": "v. 1814, Missouri",
    "metier": "marchand",
    "cible": true
   },
   {
    "nom": "Elice [Elizabeth Barada] Robidoux",
    "age": "27",
    "lien": "épouse",
    "ne": "v. 1823, Missouri"
   },
   {
    "nom": "J. C. Robidoux",
    "age": "13",
    "lien": "fils",
    "ne": "v. 1837, Missouri"
   },
   {
    "nom": "Emily Robidoux",
    "age": "11",
    "lien": "fille",
    "ne": "v. 1839, Missouri"
   },
   {
    "nom": "Thomas Robidoux",
    "age": "9",
    "lien": "fils",
    "ne": "v. 1841, Missouri"
   },
   {
    "nom": "Cora Robidoux",
    "age": "4",
    "lien": "fille",
    "ne": "v. 1846, Missouri"
   },
   {
    "nom": "Martha Robidoux",
    "age": "0",
    "lien": "fille",
    "ne": "1850, Missouri"
   },
   {
    "nom": "Charles Robidoux",
    "age": "19",
    "lien": "frère de Jules",
    "ne": "v. 1831, Missouri"
   },
   {
    "nom": "James Brown",
    "age": "36"
   },
   {
    "nom": "Mary Brown",
    "age": "30",
    "lien": "née Robidoux, fille de François"
   }
  ],
  "source": "1850 United States Federal Census, Ancestry (coll. 8054, notice 3651741)",
  "note": "Charles, fils de Joseph et d'Angélique, sera tué en septembre 1850.",
  "lieu_id": "R1850-jules"
 },
 {
  "id": "R1850-francois",
  "annee": 1850,
  "lieu": "canton de Washington, comté de Buchanan (Missouri), logement 314",
  "portraits": [
   "francois"
  ],
  "titre": "François, le deuxième des six frères, à 64 ans, chez lui près de Saint-Joseph.",
  "menage": [
   {
    "nom": "Francis Robidoux",
    "age": "64",
    "lien": "chef",
    "ne": "v. 1786, Missouri",
    "cible": true
   },
   {
    "nom": "Ann Robidoux",
    "age": "50",
    "ne": "v. 1800, Kentucky"
   },
   {
    "nom": "Elvira Robidoux",
    "age": "30",
    "ne": "v. 1820, Missouri"
   },
   {
    "nom": "Napoleon Alx. Robidoux",
    "age": "1",
    "ne": "v. 1849, Missouri"
   },
   {
    "nom": "Antoine Premore",
    "age": "24"
   },
   {
    "nom": "Melinda Premore",
    "age": "17"
   },
   {
    "nom": "John J. Stidd",
    "age": "25"
   }
  ],
  "source": "1850 United States Federal Census, Ancestry (coll. 8054, notice 3652064)",
  "note": "Ce recensement montre François vivant en 1850 ; les biographies hésitaient sur sa date de mort (1856 ?).",
  "lieu_id": "R1850-francois"
 },
 {
  "id": "R1850-michel",
  "annee": 1850,
  "lieu": "canton de Washington, comté de Buchanan (Missouri), logement 215",
  "portraits": [
   "michel"
  ],
  "titre": "Michel, inscrit comme « Trader », avec sa femme Susanne Vaudry et deux filles.",
  "menage": [
   {
    "nom": "Mitchel Robideaux",
    "age": "43",
    "lien": "chef",
    "ne": "v. 1807, Missouri",
    "metier": "traiteur",
    "cible": true
   },
   {
    "nom": "Susan Robideaux",
    "age": "43",
    "lien": "épouse",
    "ne": "v. 1807, Missouri"
   },
   {
    "nom": "Sophy Robideaux",
    "age": "18",
    "lien": "fille",
    "ne": "v. 1832, Missouri"
   },
   {
    "nom": "Octavia Robideaux",
    "age": "11",
    "lien": "fille",
    "ne": "v. 1839, Missouri"
   }
  ],
  "source": "1850 United States Federal Census, Ancestry (coll. 8054, notice 3651511)",
  "note": "L'âge de Michel (43 ans) est sous-estimé : il est né en 1798. Sophy est Agnès Sophie (baptisée en 1832) ; Octavia, née vers 1839, correspond sans doute à Pélagie (baptisée en 1839).",
  "lieu_id": "R1850-michel"
 },
 {
  "id": "R1850-felix",
  "annee": 1850,
  "lieu": "canton de Washington, comté de Buchanan (Missouri), logement 445",
  "portraits": [
   "joseph3"
  ],
  "titre": "Félix, fils de Joseph et d'Angélique Vaudry, marchand, avec sa femme Jane Smith et leurs enfants.",
  "menage": [
   {
    "nom": "Felix Robideaux",
    "age": "30",
    "lien": "chef",
    "ne": "v. 1820, Missouri",
    "metier": "marchand",
    "cible": true
   },
   {
    "nom": "Jane Robideaux",
    "age": "30",
    "lien": "épouse",
    "ne": "v. 1820, Missouri"
   },
   {
    "nom": "Josaphine Robideaux",
    "age": "7",
    "lien": "fille",
    "ne": "v. 1843, Missouri"
   },
   {
    "nom": "Charles Robideaux",
    "age": "5",
    "lien": "fils",
    "ne": "v. 1845, Missouri"
   },
   {
    "nom": "George Robidoux",
    "age": "0",
    "ne": "1850, Missouri"
   },
   {
    "nom": "Maria Meccia",
    "age": "34"
   }
  ],
  "source": "1850 United States Federal Census, Ancestry (coll. 8054, notice 3652761)",
  "lieu_id": "R1850-felix"
 },
 {
  "id": "R1850-barada",
  "annee": 1850,
  "lieu": "canton de Washington, comté de Buchanan (Missouri), logement 6",
  "portraits": [
   "carmel",
   "martina",
   "antoine"
  ],
  "titre": "Carmel Benavides (« A. Robidoux », 38 ans, née au Mexique) vit chez Isidore Barada et Martina (« Maltine »), sa fille adoptive.",
  "menage": [
   {
    "nom": "Isadore Barada",
    "age": "42",
    "lien": "chef"
   },
   {
    "nom": "Maltine [Martina Anaya] Barada",
    "age": "21"
   },
   {
    "nom": "Antoine Barada",
    "age": "18"
   },
   {
    "nom": "Adolph Barada",
    "age": "13"
   },
   {
    "nom": "Julius Barada",
    "age": "11"
   },
   {
    "nom": "Mary Barada",
    "age": "9"
   },
   {
    "nom": "Ruful Willet",
    "age": "16"
   },
   {
    "nom": "Baker",
    "age": "23"
   },
   {
    "nom": "A. Robidoux [Carmel Benavides]",
    "age": "38",
    "ne": "v. 1812, Mexique",
    "cible": true
   },
   {
    "nom": "E. Barada",
    "age": "47"
   },
   {
    "nom": "Alexr Southard",
    "age": "23"
   },
   {
    "nom": "Victoria Robidoux",
    "age": "42",
    "ne": "v. 1808, New Jersey"
   }
  ],
  "source": "1850 United States Federal Census, Ancestry (coll. 8054, notice 3650108)",
  "note": "Antoine est alors en Californie (1849-1854).",
  "lieu_id": "L65"
 },
 {
  "id": "R1850-francoisb",
  "annee": 1850,
  "lieu": "canton d'Athens, comté de Gentry (Missouri), logement 219",
  "portraits": [
   "joseph3"
  ],
  "titre": "François [Belevere], fils de Joseph et d'Angélique Vaudry (baptisé en 1818), marchand dans le comté de Gentry.",
  "menage": [
   {
    "nom": "Francis B. Robidoux",
    "age": "32",
    "lien": "chef",
    "ne": "v. 1818, Missouri",
    "metier": "marchand",
    "cible": true
   },
   {
    "nom": "Rosene Robidoux",
    "age": "25",
    "lien": "épouse",
    "ne": "v. 1825, Missouri"
   },
   {
    "nom": "Felix Robidoux",
    "age": "9",
    "lien": "fils",
    "ne": "v. 1841, Missouri"
   },
   {
    "nom": "Paline [Pauline] Robidoux",
    "age": "6",
    "lien": "fille",
    "ne": "v. 1844, Missouri"
   },
   {
    "nom": "Sylvina Robidoux",
    "age": "4",
    "lien": "fille",
    "ne": "v. 1846, Missouri"
   },
   {
    "nom": "Joseph Robidoux",
    "age": "1",
    "lien": "fils",
    "ne": "v. 1849, Missouri"
   },
   {
    "nom": "Lilburn P. Camron",
    "age": "21"
   },
   {
    "nom": "Katharine Wolf Camron",
    "age": "18"
   }
  ],
  "source": "1850 United States Federal Census, Ancestry (coll. 8054, notice 3778879)",
  "lieu_id": "R1850-francoisb"
 },
 {
  "id": "R1850-louis",
  "annee": 1850,
  "lieu": "comté de Los Angeles (Californie), logement 458 [rancho de Jurupa]",
  "portraits": [
   "louis",
   "isidore"
  ],
  "titre": "Louis Robidoux, 54 ans, au rancho de Jurupa, alors dans le comté de Los Angeles, avec Guadalupe García et leurs enfants.",
  "menage": [
   {
    "nom": "Luis Robidoux",
    "age": "54",
    "lien": "chef",
    "ne": "Missouri",
    "cible": true
   },
   {
    "nom": "Guadaloupe Robidoux",
    "age": "38",
    "lien": "épouse",
    "ne": "v. 1812, Nouveau-Mexique"
   },
   {
    "nom": "Catalina Robidoux",
    "age": "15",
    "lien": "fille",
    "ne": "v. 1835, Nouveau-Mexique"
   },
   {
    "nom": "Luis Robidoux",
    "age": "12",
    "lien": "fils",
    "ne": "v. 1838, Nouveau-Mexique"
   },
   {
    "nom": "Pascual Robidoux",
    "age": "10",
    "lien": "fils",
    "ne": "v. 1840, Nouveau-Mexique"
   },
   {
    "nom": "Carmel Robidoux",
    "age": "8",
    "lien": "fille",
    "ne": "v. 1842, Mexique"
   },
   {
    "nom": "Adelaida Robidoux",
    "age": "6",
    "lien": "fille",
    "ne": "v. 1844, Californie"
   },
   {
    "nom": "Benina [Benigno] Robidoux",
    "age": "0",
    "lien": "fils",
    "ne": "1850, Californie"
   },
   {
    "nom": "Luis F. Robidoux",
    "age": "31",
    "ne": "v. 1819, Missouri",
    "metier": "cultivateur"
   },
   {
    "nom": "Incamacion Garcia",
    "age": "49"
   },
   {
    "nom": "Jesus Ramis",
    "age": "35"
   },
   {
    "nom": "Jose Antonio",
    "age": "10"
   }
  ],
  "source": "1850 United States Federal Census, Ancestry (coll. 8054, notice 19660660)",
  "note": "Luis F. Robidoux, né au Missouri vers 1819, est sans doute Louis, fils d'Isidore, baptisé à Saint-Louis en 1820 : le neveu travaille au ranch de son oncle.",
  "lieu_id": "R1850-louis"
 },
 {
  "id": "R1860-jules",
  "annee": 1860,
  "lieu": "Saint-Joseph, comté de Buchanan (Missouri), logement 2146",
  "portraits": [
   "jules"
  ],
  "titre": "Jules, juge de paix (« J P »), 10 000 $ de biens fonciers, avec Elizabeth et dix enfants.",
  "menage": [
   {
    "nom": "J. C. Robidoux",
    "age": "44",
    "lien": "chef",
    "ne": "v. 1816, Missouri",
    "metier": "juge de paix",
    "cible": true
   },
   {
    "nom": "E. [Elizabeth] Robidoux",
    "age": "38",
    "lien": "épouse",
    "ne": "v. 1822, Missouri"
   },
   {
    "nom": "J. C. Robidoux",
    "age": "21",
    "lien": "fils",
    "ne": "v. 1839"
   },
   {
    "nom": "E. Robidoux",
    "age": "19",
    "lien": "fille",
    "ne": "v. 1841"
   },
   {
    "nom": "M. Robidoux",
    "age": "15"
   },
   {
    "nom": "T. [Thomas] Robidoux",
    "age": "14",
    "lien": "fils"
   },
   {
    "nom": "C. Robidoux",
    "age": "12"
   },
   {
    "nom": "P. Robidoux",
    "age": "7"
   },
   {
    "nom": "L. Robidoux",
    "age": "5"
   },
   {
    "nom": "L. Robidoux",
    "age": "3"
   },
   {
    "nom": "L. Robidoux",
    "age": "1"
   }
  ],
  "source": "1860 United States Federal Census, Ancestry (coll. 7667, notice 41025491)",
  "lieu_id": "R1860-jules"
 },
 {
  "id": "R1860-carmel",
  "annee": 1860,
  "lieu": "Saint-Joseph, comté de Buchanan (Missouri), logement 1836",
  "portraits": [
   "carmel",
   "antoine",
   "amanda"
  ],
  "titre": "Carmel (« A. Robidoux », 48 ans, née au Nouveau-Mexique), voisine de la famille de François [Belevere] ; Antoine n'est pas inscrit au foyer.",
  "menage": [
   {
    "nom": "A. Robidoux [Carmel Benavides]",
    "age": "48",
    "ne": "v. 1812, Nouveau-Mexique",
    "cible": true
   }
  ],
  "source": "1860 United States Federal Census, Ancestry (coll. 7667, notice 41023971)",
  "note": "Selon Levine, la fillette Amanda Barada (« A. Barady », 9 ans) et une jeune Allemande vivent avec elle.",
  "lieu_id": "R1860-carmel"
 },
 {
  "id": "R1860-francoisb",
  "annee": 1860,
  "lieu": "Saint-Joseph, comté de Buchanan (Missouri), logement 1837",
  "portraits": [
   "joseph3"
  ],
  "titre": "Le ménage voisin de Carmel : P. Robidoux, 37 ans, et les enfants de François [Belevere], recensés en 1850 dans le comté de Gentry.",
  "menage": [
   {
    "nom": "P. Robidoux",
    "age": "37",
    "ne": "v. 1823, Missouri",
    "cible": true
   },
   {
    "nom": "F. [Felix] Robidoux",
    "age": "20",
    "ne": "v. 1840"
   },
   {
    "nom": "P. [Pauline] Robidoux",
    "age": "17",
    "ne": "v. 1843"
   },
   {
    "nom": "O. Robidoux",
    "age": "14",
    "ne": "v. 1846"
   },
   {
    "nom": "J. [Joseph] Robidoux",
    "age": "12",
    "ne": "v. 1848"
   },
   {
    "nom": "N. Robidoux",
    "age": "8",
    "ne": "v. 1852"
   },
   {
    "nom": "A. Robidoux",
    "age": "5",
    "ne": "v. 1855"
   },
   {
    "nom": "C. Robidoux",
    "age": "1",
    "ne": "v. 1859"
   }
  ],
  "source": "1860 United States Federal Census, Ancestry (coll. 7667, notice 41024010)",
  "note": "Identification par les âges des enfants (Felix, Pauline, Joseph), à confirmer ; François n'apparaît pas.",
  "lieu_id": "R1860-francoisb"
 },
 {
  "id": "R1860-sylvanie",
  "annee": 1860,
  "lieu": "Saint-Joseph, comté de Buchanan (Missouri), logement 1631",
  "portraits": [
   "joseph3"
  ],
  "titre": "Sylvanie, fille de Joseph et d'Angélique Vaudry, mariée en 1847 à Francis August Beauvais.",
  "menage": [
   {
    "nom": "F. A. Beamoais [Beauvais]",
    "age": "36",
    "lien": "chef"
   },
   {
    "nom": "S. Beamoais [Sylvanie Robidoux]",
    "age": "33",
    "lien": "épouse",
    "ne": "v. 1827, Missouri",
    "cible": true
   },
   {
    "nom": "J. C. Beauvais",
    "age": "12"
   },
   {
    "nom": "C. L. Beauvais",
    "age": "10"
   },
   {
    "nom": "A. Beauvais",
    "age": "8"
   },
   {
    "nom": "C. Beauvais",
    "age": "6"
   },
   {
    "nom": "L. B. Beauvais",
    "age": "4"
   },
   {
    "nom": "A. Beauvais",
    "age": "1"
   }
  ],
  "source": "1860 United States Federal Census, Ancestry (coll. 7667, notice 41023060)",
  "lieu_id": "R1860-sylvanie"
 },
 {
  "id": "R1860-susan",
  "annee": 1860,
  "lieu": "Saint-Joseph, comté de Buchanan (Missouri), logement 725",
  "portraits": [
   "michel"
  ],
  "titre": "Susan Robidoux, 53 ans, née en Illinois : Susanne Vaudry, veuve de Michel (mort en 1858).",
  "menage": [
   {
    "nom": "Susan Robidoux",
    "age": "53",
    "ne": "v. 1807, Illinois",
    "cible": true
   }
  ],
  "source": "1860 United States Federal Census, Ancestry (coll. 7667, notice 41018385)",
  "lieu_id": "R1860-susan"
 },
 {
  "id": "R1860-felix",
  "annee": 1860,
  "lieu": "canton de Washington, comté de Buchanan (Missouri), logement 249",
  "portraits": [
   "joseph3"
  ],
  "titre": "Félix, propriétaire d'une ferme, avec sa famille.",
  "menage": [
   {
    "nom": "Felix Robidoux",
    "age": "38",
    "lien": "chef",
    "ne": "v. 1822",
    "metier": "propriétaire agricole",
    "cible": true
   },
   {
    "nom": "Jane Robidoux",
    "age": "40",
    "lien": "épouse",
    "ne": "v. 1820"
   },
   {
    "nom": "Josephene Robidoux",
    "age": "16",
    "lien": "fille",
    "ne": "v. 1844"
   },
   {
    "nom": "Mary J. Robidoux",
    "age": "15",
    "lien": "fille",
    "ne": "v. 1845"
   },
   {
    "nom": "Chas E. Robidoux",
    "age": "14",
    "lien": "fils",
    "ne": "v. 1846"
   },
   {
    "nom": "Ella Robidoux",
    "age": "7",
    "lien": "fille",
    "ne": "v. 1853"
   }
  ],
  "source": "1860 United States Federal Census, Ancestry (coll. 7667, notice 41016134)",
  "lieu_id": "R1860-felix"
 },
 {
  "id": "R1860-louis",
  "annee": 1860,
  "lieu": "canton de San Bernardino, comté de San Bernardino (Californie), logement 253 [Jurupa]",
  "portraits": [
   "louis"
  ],
  "titre": "Louis, 65 ans, cultivateur, et Guadalupe García avec leurs enfants (deux notices pour le même logement).",
  "menage": [
   {
    "nom": "Louis Robidoux",
    "age": "65",
    "lien": "chef",
    "ne": "v. 1795",
    "metier": "cultivateur",
    "cible": true
   },
   {
    "nom": "Guadalupa G. Robidoux",
    "age": "45",
    "lien": "épouse",
    "ne": "v. 1815"
   },
   {
    "nom": "Pascal Robidoux",
    "age": "20",
    "lien": "fils",
    "ne": "v. 1840"
   },
   {
    "nom": "Louis Robidoux",
    "age": "22",
    "lien": "fils",
    "ne": "v. 1838"
   },
   {
    "nom": "Carmel H. Robidoux",
    "age": "15",
    "lien": "fille",
    "ne": "v. 1845"
   },
   {
    "nom": "Alice Robidoux",
    "age": "13",
    "lien": "fille",
    "ne": "v. 1847"
   },
   {
    "nom": "Benigno Robidoux",
    "age": "11",
    "lien": "fils",
    "ne": "v. 1849"
   },
   {
    "nom": "Abundo Robidoux",
    "age": "9",
    "lien": "fils",
    "ne": "v. 1851"
   }
  ],
  "source": "1860 United States Federal Census, Ancestry (coll. 7667, notice 2673696)",
  "lieu_id": "R1860-louis"
 },
 {
  "id": "R1860-pascual",
  "annee": 1860,
  "lieu": "canton de San Bernardino, comté de San Bernardino (Californie), logement 560",
  "portraits": [
   "louis"
  ],
  "titre": "Pascual, 21 ans, cultivateur, et sa jeune épouse Maria Marcelina.",
  "menage": [
   {
    "nom": "Pascal Robidoux",
    "age": "21",
    "lien": "chef",
    "ne": "v. 1839",
    "metier": "cultivateur",
    "cible": true
   },
   {
    "nom": "Maria M. Robidoux",
    "age": "16",
    "lien": "épouse",
    "ne": "v. 1844"
   },
   {
    "nom": "Alfreds Robidoux",
    "age": "2 mois",
    "lien": "fils",
    "ne": "1859"
   }
  ],
  "source": "1860 United States Federal Census, Ancestry (coll. 7667, notice 2675085)",
  "lieu_id": "R1860-pascual"
 },
 {
  "id": "R1870-jules",
  "annee": 1870,
  "lieu": "Saint-Joseph, quartier 3, comté de Buchanan (Missouri), logement 244",
  "portraits": [
   "jules"
  ],
  "titre": "Dernier recensement de Jules (mort en 1875), avec Elizabeth, leurs enfants, une fille mariée (Mollie Lemon) et deux personnes âgées.",
  "menage": [
   {
    "nom": "Julius C. Robidoux",
    "age": "55",
    "lien": "chef",
    "cible": true
   },
   {
    "nom": "Elizabeth Robidoux",
    "age": "49",
    "lien": "épouse"
   },
   {
    "nom": "Julius C. Robidoux",
    "age": "31",
    "lien": "fils"
   },
   {
    "nom": "Thomas Robidoux",
    "age": "25",
    "lien": "fils"
   },
   {
    "nom": "Napoleon Robidoux",
    "age": "17",
    "lien": "fils",
    "ne": "v. 1853, Missouri"
   },
   {
    "nom": "Louis Robidoux",
    "age": "15",
    "lien": "fils"
   },
   {
    "nom": "Sylvania Robidoux",
    "age": "13",
    "lien": "fille"
   },
   {
    "nom": "Louis Robidoux",
    "age": "11"
   },
   {
    "nom": "Kate Robidoux",
    "age": "6",
    "lien": "fille"
   },
   {
    "nom": "Mollie Lemon",
    "age": "25"
   },
   {
    "nom": "John Lemon",
    "age": "2"
   },
   {
    "nom": "Elige Sancier",
    "age": "69"
   },
   {
    "nom": "Victoria Roberts",
    "age": "66"
   }
  ],
  "source": "1870 United States Federal Census, Ancestry (coll. 7163, notice 1874309)",
  "lieu_id": "R1870-jules"
 },
 {
  "id": "R1870-edmond",
  "annee": 1870,
  "lieu": "Saint-Joseph, quartier 2, comté de Buchanan (Missouri), logement 348",
  "portraits": [
   "joseph3"
  ],
  "titre": "Edmond Valentin, fils de Joseph et d'Angélique Vaudry (baptisé en 1825), avec sa femme Martha et leurs enfants.",
  "menage": [
   {
    "nom": "Edmund Robidoux",
    "age": "45",
    "lien": "chef",
    "cible": true
   },
   {
    "nom": "Martha Robidoux",
    "age": "35",
    "lien": "épouse",
    "ne": "v. 1835, Kentucky"
   },
   {
    "nom": "Jennie E. Robidoux",
    "age": "18",
    "lien": "fille"
   },
   {
    "nom": "Benjamin Robidoux",
    "age": "12",
    "lien": "fils"
   }
  ],
  "source": "1870 United States Federal Census, Ancestry (coll. 7163, notice 1871322)",
  "lieu_id": "R1870-edmond"
 },
 {
  "id": "R1870-felix",
  "annee": 1870,
  "lieu": "Saint-Joseph, quartier 4, comté de Buchanan (Missouri), logement 428",
  "portraits": [
   "joseph3"
  ],
  "titre": "Félix, 50 ans, sa femme (inscrite Catherine), son fils Charles E., teneur de livres, et sa famille.",
  "menage": [
   {
    "nom": "Felix Robidoux",
    "age": "50",
    "lien": "chef",
    "ne": "v. 1820, Missouri",
    "cible": true
   },
   {
    "nom": "Catheine Robidoux",
    "age": "50",
    "lien": "épouse"
   },
   {
    "nom": "Chares E. Robidoux",
    "age": "25",
    "lien": "fils",
    "ne": "v. 1845, Missouri",
    "metier": "teneur de livres"
   },
   {
    "nom": "Anena Z. Robidoux",
    "age": "21",
    "lien": "bru"
   },
   {
    "nom": "Ella A. Robidoux",
    "age": "17",
    "lien": "fille"
   },
   {
    "nom": "Maria T. Robidoux",
    "age": "2 mois",
    "lien": "petite-fille"
   },
   {
    "nom": "Maggie Burns",
    "age": "11"
   }
  ],
  "source": "1870 United States Federal Census, Ancestry (coll. 7163, notice 7437873)",
  "lieu_id": "R1870-felix"
 },
 {
  "id": "R1870-conejos",
  "annee": 1870,
  "lieu": "Conejos (territoire du Colorado), logement 178",
  "portraits": [
   "carmel",
   "amanda",
   "antoine"
  ],
  "titre": "Carmel, 59 ans, vit chez sa petite-fille Amanda et Christian Stollsteimer.",
  "menage": [
   {
    "nom": "Chas F. Stollsteimer",
    "age": "27",
    "lien": "chef"
   },
   {
    "nom": "Amanda Stollsteimer",
    "age": "19",
    "lien": "épouse"
   },
   {
    "nom": "Charles Albert Stollsteimer",
    "age": "2",
    "lien": "fils"
   },
   {
    "nom": "Ferdinand Stollsteimer",
    "age": "bébé",
    "lien": "fils"
   },
   {
    "nom": "Carmel Robideaux",
    "age": "59",
    "ne": "v. 1811, Nouveau-Mexique",
    "cible": true
   },
   {
    "nom": "Candelaria Sarda",
    "age": "16"
   }
  ],
  "source": "1870 United States Federal Census, Ancestry (coll. 7163, notice 13837400)",
  "lieu_id": "L68"
 },
 {
  "id": "R1870-guadalupe",
  "annee": 1870,
  "lieu": "San Salvador [Agua Mansa], comté de San Bernardino (Californie), logement 89",
  "portraits": [
   "louis"
  ],
  "titre": "Deux ans après la mort de Louis, sa veuve (« Gaud », 60 ans) vit à San Salvador avec deux enfants.",
  "menage": [
   {
    "nom": "Gaud [Guadalupe] Rubidoux",
    "age": "60",
    "lien": "chef",
    "cible": true
   },
   {
    "nom": "Memena Rubidoux",
    "age": "19",
    "lien": "fille",
    "ne": "v. 1851, Californie"
   },
   {
    "nom": "Abonda [Abundio] Rubidoux",
    "age": "18",
    "lien": "fils",
    "ne": "v. 1852, Californie"
   }
  ],
  "source": "1870 United States Federal Census, Ancestry (coll. 7163, notice 12456743)",
  "lieu_id": "R1870-guadalupe"
 },
 {
  "id": "R1870-pascual",
  "annee": 1870,
  "lieu": "canton de San Bernardino (Californie), logement 147",
  "portraits": [
   "louis"
  ],
  "titre": "Pascual, fils de Louis, avec Maria Marcelina et leurs cinq enfants.",
  "menage": [
   {
    "nom": "Pasqual Robidoux",
    "age": "28",
    "lien": "chef",
    "cible": true
   },
   {
    "nom": "Marcellina Robidoux",
    "age": "24",
    "lien": "épouse",
    "ne": "v. 1846, Mexique"
   },
   {
    "nom": "Frederick Robidoux",
    "age": "9",
    "lien": "fils",
    "ne": "v. 1861, Californie"
   },
   {
    "nom": "Florida Robidoux",
    "age": "7",
    "lien": "fille",
    "ne": "v. 1863, Californie"
   },
   {
    "nom": "Flora Robidoux",
    "age": "6",
    "lien": "fille",
    "ne": "v. 1864, Californie"
   },
   {
    "nom": "Adella Robidoux",
    "age": "4",
    "lien": "fille",
    "ne": "v. 1866, Californie"
   },
   {
    "nom": "Jose Robidoux",
    "age": "2",
    "lien": "fils",
    "ne": "v. 1868, Californie"
   }
  ],
  "source": "1870 United States Federal Census, Ancestry (coll. 7163, notice 12458992)",
  "lieu_id": "R1870-pascual"
 },
 {
  "id": "R1880-elizabeth",
  "annee": 1880,
  "lieu": "Saint-Joseph, comté de Buchanan (Missouri), logement 251",
  "portraits": [
   "jules"
  ],
  "titre": "Elizabeth, veuve de Jules, avec son fils Jules, peintre, et sa fille.",
  "menage": [
   {
    "nom": "Elizabeth Robidoux",
    "age": "59",
    "lien": "chef",
    "cible": true
   },
   {
    "nom": "Jule Robidoux",
    "age": "40",
    "lien": "fils",
    "ne": "v. 1840, Missouri",
    "metier": "peintre"
   },
   {
    "nom": "Finett Robidoux",
    "age": "20",
    "lien": "fille",
    "ne": "v. 1860, Missouri"
   }
  ],
  "source": "1880 United States Federal Census, Ancestry (coll. 6742, notice 24832354)",
  "lieu_id": "R1880-elizabeth"
 },
 {
  "id": "R1880-thompson",
  "annee": 1880,
  "lieu": "Saint-Joseph, comté de Buchanan (Missouri), logement 176",
  "portraits": [
   "jules"
  ],
  "titre": "Emma, fille de Jules, épouse de Joseph Thompson, commis de la poste ; sa sœur Sylvanie vit avec eux.",
  "menage": [
   {
    "nom": "W. J. Thompson",
    "age": "42",
    "lien": "chef"
   },
   {
    "nom": "Emma Thompson",
    "age": "38",
    "lien": "épouse, née Robidoux",
    "metier": "x"
   },
   {
    "nom": "Emma Thompson",
    "age": "10",
    "lien": "fille"
   },
   {
    "nom": "Sylvania Robidoux",
    "age": "22",
    "lien": "belle-sœur",
    "ne": "v. 1858, Missouri"
   }
  ],
  "source": "1880 United States Federal Census, Ancestry (coll. 6742, notice 33368358)",
  "lieu_id": "R1880-thompson"
 },
 {
  "id": "R1880-edmond",
  "annee": 1880,
  "lieu": "Saint-Joseph, comté de Buchanan (Missouri), logement 137",
  "portraits": [
   "joseph3"
  ],
  "titre": "Edmond, 56 ans, imprimeur, avec Martha et leurs enfants.",
  "menage": [
   {
    "nom": "Edmond Robidoux",
    "age": "56",
    "lien": "chef",
    "ne": "v. 1824, Missouri",
    "metier": "imprimeur",
    "cible": true
   },
   {
    "nom": "Martha Robidoux",
    "age": "46",
    "lien": "épouse"
   },
   {
    "nom": "Jennie Robidoux",
    "age": "27",
    "lien": "fille"
   },
   {
    "nom": "Ben Robidoux",
    "age": "22",
    "lien": "fils"
   }
  ],
  "source": "1880 United States Federal Census, Ancestry (coll. 6742, notice 33695424)",
  "lieu_id": "R1880-edmond"
 },
 {
  "id": "R1880-charlese",
  "annee": 1880,
  "lieu": "Saint-Louis (Missouri), logement 15",
  "portraits": [
   "joseph3"
  ],
  "titre": "Charles E., fils de Félix, avec sa femme, ses enfants et sa mère Jane (deux inscriptions la même année).",
  "menage": [
   {
    "nom": "Chas. E. Robidoux",
    "age": "35",
    "lien": "chef",
    "ne": "v. 1846, Missouri",
    "metier": "commis de magasin",
    "cible": true
   },
   {
    "nom": "Annie Robidoux",
    "age": "33",
    "lien": "épouse"
   },
   {
    "nom": "Maria Robidoux",
    "age": "10",
    "lien": "fille",
    "ne": "v. 1870, Missouri"
   },
   {
    "nom": "Ella Robidoux",
    "age": "8",
    "lien": "fille"
   },
   {
    "nom": "Margaret Robidoux",
    "age": "6",
    "lien": "fille"
   },
   {
    "nom": "Frances Robidoux",
    "age": "3"
   },
   {
    "nom": "Edwin Robidoux",
    "age": "1",
    "lien": "fils"
   },
   {
    "nom": "Jane Robidoux",
    "age": "60",
    "lien": "mère"
   }
  ],
  "source": "1880 United States Federal Census, Ancestry (coll. 6742, notice 26084392)",
  "lieu_id": "R1880-charlese"
 },
 {
  "id": "R1880-felixv",
  "annee": 1880,
  "lieu": "Rawlins, comté de Carbon (territoire du Wyoming), logement 146",
  "portraits": [
   "joseph3"
  ],
  "titre": "F. V. Robidoux, 39 ans, fermier, né au Missouri vers 1841 : sans doute Felix, fils de François [Belevere] (recensé à 9 ans en 1850).",
  "menage": [
   {
    "nom": "F. V. Robidoux",
    "age": "39",
    "lien": "chef",
    "ne": "v. 1841, Missouri",
    "metier": "fermier",
    "cible": true
   },
   {
    "nom": "C. A. Robidoux",
    "age": "31",
    "lien": "épouse",
    "ne": "v. 1849, Tennessee"
   },
   {
    "nom": "Octavia Robidoux",
    "age": "3",
    "lien": "fille",
    "ne": "v. 1877, Colorado"
   },
   {
    "nom": "Beeler Robidoux",
    "age": "1 mois"
   }
  ],
  "source": "1880 United States Federal Census, Ancestry (coll. 6742, notice 13759105)",
  "note": "Identification probable, à confirmer.",
  "lieu_id": "R1880-felixv"
 },
 {
  "id": "R1880-louisjr",
  "annee": 1880,
  "lieu": "Riverside, comté de San Bernardino (Californie), logement 133",
  "portraits": [
   "louis"
  ],
  "titre": "Louis, fils de Louis et de Guadalupe García, tient une écurie de louage dans la jeune ville de Riverside, fondée sur l'ancien rancho de son père.",
  "menage": [
   {
    "nom": "Louis Rubodoux",
    "age": "42",
    "lien": "chef",
    "ne": "v. 1838, Nouveau-Mexique",
    "metier": "loueur d'écurie",
    "cible": true
   },
   {
    "nom": "Flavico [Flavia] Rubodoux",
    "age": "32",
    "lien": "épouse",
    "ne": "v. 1848, Californie"
   },
   {
    "nom": "Andronico Rubodoux",
    "age": "18",
    "lien": "fils",
    "ne": "v. 1862",
    "metier": "garçon d'écurie"
   },
   {
    "nom": "Selso Rubodoux",
    "age": "15",
    "lien": "fils"
   },
   {
    "nom": "Porfidio Rubodoux",
    "age": "13",
    "lien": "fils"
   },
   {
    "nom": "Maelovia Rubodoux",
    "age": "12"
   },
   {
    "nom": "Louis Rubodoux",
    "age": "9",
    "lien": "fils"
   },
   {
    "nom": "Joseph Rubodoux",
    "age": "7",
    "lien": "fils"
   },
   {
    "nom": "Francisco Rubodoux",
    "age": "5",
    "lien": "fils"
   },
   {
    "nom": "Alexander Rubodoux",
    "age": "4",
    "lien": "fils"
   },
   {
    "nom": "Agada Rubodoux",
    "age": "2",
    "lien": "fille"
   },
   {
    "nom": "George Rubodoux",
    "age": "8 mois",
    "lien": "fils"
   }
  ],
  "source": "1880 United States Federal Census, Ancestry (coll. 6742, notice 14333960)",
  "note": "Flavia Castillo est l'épouse que les biographies donnent à Louis père ; ici, elle est inscrite comme femme de Louis fils.",
  "lieu_id": "R1880-louisjr"
 },
 {
  "id": "R1880-abundio",
  "annee": 1880,
  "lieu": "Riverside, comté de San Bernardino (Californie), logement 29",
  "portraits": [
   "louis"
  ],
  "titre": "A. Robudaux, 28 ans, journalier, né en Californie vers 1852 : Abundio, fils de Louis (recensé en 1860 et 1870).",
  "menage": [
   {
    "nom": "A. [Abundio] Robudaux",
    "age": "28",
    "lien": "chef",
    "ne": "v. 1852, Californie",
    "metier": "journalier",
    "cible": true
   },
   {
    "nom": "Rosario Robudaux",
    "age": "28",
    "lien": "épouse"
   },
   {
    "nom": "Isadora Robudaux",
    "age": "9",
    "lien": "fille"
   },
   {
    "nom": "Cristobal Robudaux",
    "age": "7",
    "lien": "fils"
   },
   {
    "nom": "Carmen Robudaux",
    "age": "5",
    "lien": "fille"
   },
   {
    "nom": "Francisca Robudaux",
    "age": "3",
    "lien": "fille"
   },
   {
    "nom": "Manuel Robudaux",
    "age": "1",
    "lien": "fils"
   }
  ],
  "source": "1880 United States Federal Census, Ancestry (coll. 6742, notice 14333799)",
  "lieu_id": "R1880-abundio"
 },
 {
  "id": "R1880-wixom",
  "annee": 1880,
  "lieu": "San Bernardino (Californie), logement 101",
  "portraits": [
   "louis"
  ],
  "titre": "Veuve de Pascual, Maria Marcelina (« Marcellia ») a épousé Charles W. Wixom ; les enfants Robidoux portent le nom de leur beau-père.",
  "menage": [
   {
    "nom": "Charles W. Wixom",
    "age": "28",
    "lien": "chef"
   },
   {
    "nom": "Marcellia Wixom",
    "age": "33",
    "lien": "épouse (veuve de Pascual Robidoux)",
    "metier": "x"
   },
   {
    "nom": "Florida Wixom",
    "age": "16",
    "lien": "fille"
   },
   {
    "nom": "Ella Wixom",
    "age": "13",
    "lien": "fille"
   },
   {
    "nom": "Jose Wixom",
    "age": "11",
    "lien": "fils"
   },
   {
    "nom": "Mary Wixom",
    "age": "9",
    "lien": "fille"
   },
   {
    "nom": "Carmelila Wixom",
    "age": "6",
    "lien": "fille"
   },
   {
    "nom": "William Wixom",
    "age": "4",
    "lien": "fils"
   },
   {
    "nom": "C. Jaramillo",
    "age": "4"
   }
  ],
  "source": "1880 United States Federal Census, Ancestry (coll. 6742, notice 14337323)",
  "note": "Les prénoms Florida, Ella (Adella) et Jose correspondent aux enfants de Pascual recensés en 1870.",
  "lieu_id": "R1880-wixom"
 }
];
