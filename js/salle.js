// Salle de lecture de l'Atlas Robidoux : portraits de famille et documents.
// type : portrait | document | etude | journal (theme, recoupements) ; statut : biographie | transcription | traduction | resume | fiche
// lieux : identifiants de l'atlas (index.html#lieu=Lxx). Textes du domaine public transcrits ; études récentes résumées.
const WIL = 'R. J. Willoughby, The Brothers Robidoux and the Opening of the American West (University of Missouri Press, 2012)';

const ROB = 'O. M. Robidoux, Memorial to the Robidoux Brothers: A History of the Robidouxs in America (Kansas City, Smith-Grieves, 1924), texte intégral sur archive.org (memorialtorobido00robi)';

const ITEMS = [
// ===================================================================== PORTRAITS DE FAMILLE
{ id: 'joseph1', type: 'portrait', statut: 'biographie', ordre: 1, date: 'v. 1720 – 1771', titre: 'Joseph Robidoux Ier, le cordonnier de Montréal',
  personnes: ['Joseph Ier'],
  resume: "L'aïeul : un cordonnier de l'île de Montréal qui suit son fils jusqu'au poste naissant de Saint-Louis et y meurt la même année.",
  texte: `Joseph Robidoux, cordonnier, descend d'André Robidou dit l'Espagnol, matelot passé en Nouvelle-France en 1661 et établi à La Prairie vers 1671. Né à Montréal vers 1720, il épouse Marianne (Marie-Anne) Leblanc ; leur fils Joseph Marie est baptisé au Sault-au-Récollet le 12 février 1750.

Au printemps 1771, Joseph et son fils remontent jusqu'à Saint-Louis, village fondé sept ans plus tôt par Laclède et le jeune Auguste Chouteau sur la rive espagnole du Mississippi. En avril 1771, ils commencent une maison. Joseph meurt à l'improviste en septembre 1771 (le 12, selon Billon). Son fils décide de rester : c'est de lui que descendent tous les Robidoux de l'Ouest.

Un siècle plus tard, la rumeur colportée à Saint-Louis en 1780, selon laquelle la famille aurait quitté le Canada après un crime, montre que l'on se souvenait encore de ce départ.`,
  sources: `Billon, Annals of St. Louis (1886), p. 444 ; Houck, The Spanish Regime in Missouri (1909), vol. 2, p. 160 ; ${WIL}, p. 2-3 ; collection Drouin (baptême de 1750).`,
  lieux: ['L01', 'L73'] },

{ id: 'joseph2', type: 'portrait', statut: 'biographie', ordre: 2, date: '1750 – 1809', titre: 'Joseph Marie Robidoux (Joseph II), le père',
  personnes: ['Joseph II'],
  resume: "Le père des six frères : cordonnier devenu marchand et lieutenant de milice sous le régime espagnol, mort aveugle et endetté en 1809.",
  texte: `Joseph Marie Robidoux naît et est baptisé le 12 février 1750 à la Visitation du Sault-au-Récollet, au nord de l'île de Montréal. Arrivé à Saint-Louis avec son père en 1771, il reste après la mort de celui-ci et devient, entre 1780 et 1800, l'un des marchands du village : il prête et emprunte, achète et vend terres, maisons et esclaves.

En janvier 1780, il poursuit Louis Robert et Luc Marly, qui racontent que la famille a quitté le Canada en mauvaise posture (un oncle aurait tué sa femme) ; le lieutenant-gouverneur Leyba, faute de preuves, ordonne à tous de se taire. La même année, il reçoit une commission de lieutenant dans la 2e compagnie de milice et combat lors de l'attaque anglaise et indienne du 26 mai 1780.

En septembre 1782, à trente-trois ans, il signe un contrat de mariage avec Catherine Rollet dit Laderoute, de Cahokia, qui n'a peut-être que quinze ans. Ils ont six fils (Joseph III, 1783 ou 1784 ; François, 24 septembre 1788 ; Pierre Isidore, 2 novembre 1791 ; Antoine, 22 septembre 1794 ; Louis, 5 août 1796 ; Michel, 3 août 1798), deux filles (Eulalie, 1800 ; Marie Pélagie, 1802) et au moins deux enfants morts en bas âge.

Malade, il rédige son testament en décembre 1790. En mars 1793, il finance avec Bonaventura Collell l'expédition de Jacques D'Église sur le haut Missouri et y perd de l'argent. En 1794, il est membre de la Compagnie du Missouri et caution de Clamorgan, avec qui il se brouille ; en 1799, il demande en vain le monopole de la traite avec les Otos, les Omahas et les Poncas, puis, en décembre 1800, signe avec cinq marchands la requête contre le monopole.

À partir de 1803, sa santé décline : cécité progressive, sans doute héréditaire (ses fils en souffriront), et dettes (plus de 6 300 piastres chez les Chouteau en mai 1803). En mai 1803, il achète une part d'un poste au confluent de la Des Moines. Il meurt à Saint-Louis le 17 mars 1809 ; Auguste Chouteau est son exécuteur testamentaire.`,
  sources: `Collection Drouin (Ancestry, coll. 1091, notice 14650221) ; ${WIL}, p. 2-18, 23-25, 32-34 ; Houck, The Spanish Regime in Missouri (1909), vol. 1, p. 184-188, et vol. 2, p. 131-160 ; Billon (1886), p. 175, 255.`,
  lieux: ['L73', 'L02', 'L03', 'L05', 'L74', 'L07'] },

{ id: 'catherine', type: 'portrait', statut: 'biographie', ordre: 3, date: '1767 – ?', titre: 'Catherine Rollet dit Laderoute, la mère',
  personnes: ['Catherine Rollet'],
  resume: "Fille de Miguel Rolet, de Cahokia : mariée à quinze ans, mère de dix enfants, elle tient la maison de pierre de la rue Main après la mort de son mari.",
  texte: `Catherine (Catalina) Rollet dit Laderoute, fille de Miguel Rolet, est baptisée en 1767 dans la communauté française de Cahokia, sur la rive illinoise. Elle épouse Joseph Robidoux (II) par contrat en septembre 1782 et lui donne dix enfants, dont les six frères Robidoux.

Veuve en 1809, elle rachète à la succession, en mars 1810, la maison de pierre que son mari avait achetée en 1806 à l'angle des rues Main et Myrtle (moitié sud du bloc 5), pour 1 425 dollars. Remariée en 1812 à Victor Lagoterie, elle la revend en avril 1812 à son fils aîné Joseph pour 2 500 dollars. Son prénom revit en Californie : Louis appelle sa fille aînée Catarina (1835).`,
  sources: `${WIL}, p. 3, 34 ; D. J. Weber (éd.), « Louis Robidoux: Two Letters from California, 1848 », Southern California Quarterly (1972), p. 116.`,
  lieux: ['L03', 'L07', 'L85'] },

{ id: 'joseph3', type: 'portrait', statut: 'biographie', ordre: 4, date: '1783 – 1868', titre: 'Joseph Robidoux (III), le fondateur de Saint-Joseph',
  personnes: ['Joseph III'],
  resume: "L'aîné et le banquier de la fratrie : traiteur du Missouri pendant quarante ans, fondateur de Saint-Joseph, joueur de poker légendaire.",
  texte: `Né à Saint-Louis le 3 août 1784 selon Willoughby (le 2 août 1783 selon Tassé et la plupart des sources), Joseph fait la traite dès treize ans avec son père, passe plusieurs années à Michillimakinac et remonte le Missouri pour la première fois en 1799 ou 1803. Le 28 août 1805, le gouverneur Wilkinson lui délivre une licence. En 1806 ou 1807, il épouse Eugénie Delisle, qui lui donne Joseph E. (fin 1806) et Messanie, morte en bas âge ; Eugénie meurt vers 1810. En 1805, une femme ioway lui donne une fille, Mary (Many Days).

En juillet 1808, il commande une barge de Michillimakinac à l'Illinois. En 1812, il est inculpé de commerce illégal avec les Britanniques. Il épouse Angélique Vaudry, de Cahokia, civilement en 1813 et à l'église le 13 août 1814 ; ils ont Jules-César et Messanie (jumeaux, août 1814), Joseph (1815, mort jeune), Faraon (1816), François (1818), Félix (1820), Edmond (1825), Sylvanie (1827) et Charles (1831), tous nés à Saint-Louis.

De 1819 à 1828, il traite autour de Council Bluffs avec François et Papin, puis pour Berthold, Chouteau et Pratte. Licencié à son compte à Bellevue en 1826, associé à Baptiste Roy en 1827-1828, il livre une guerre commerciale à Cabanné, qui finit par le racheter en octobre 1828 contre 1 000 dollars par an pour qu'il quitte le Missouri. Il tient alors une boulangerie à Saint-Louis et finance l'expédition de Fontenelle et Drips de 1830, où part Michel.

À partir de 1831, il s'installe pour de bon aux Black Snake Hills pour l'American Fur Company, traite avec les Ioways, les Sauks et les Renards, et loue sa terre aux colons après la Platte Purchase. En mai 1843, il fait reconnaître sa préemption à Plattsburg ; en juillet, il fait enregistrer le plan de Saint-Joseph à Saint-Louis. Président du conseil des syndics à l'incorporation de 1845, il démissionne le 9 juin. Il promeut le chemin de fer Hannibal & St. Joseph, inauguré devant lui le 22 février 1859.

Joseph était, dit-on, généreux, caustique et joueur : le peintre Kurz raconte qu'il gagna une partie de poker sur un vapeur en misant une malle contenant mille dollars. Il possédait des esclaves ; l'un d'eux, Jeffrey Deroine, obtint sa liberté en 1832. Son fils Charles est tué en 1850 ; Angélique meurt en janvier 1857. Aveugle, il passe ses dernières années dans sa rangée de logements (Robidoux Row) et meurt le 27 mai 1868. Le maire George Hall fait fermer les commerces pour ses funérailles, parties de la maison de Jules, rue Edmond.`,
  sources: `${WIL}, p. 3, 20-45, 47-62, 88-119, 133-144, 178-204, 210 ; Tassé, Les Canadiens de l'Ouest (1878), t. II, p. 119-127 ; Chittenden (1902).`,
  images: [{ src: 'images/photos/joseph-robidoux-portrait-v1860.jpg', legende: 'Joseph Robidoux, portrait assis, vers 1860 (photographie ancienne ; arbre public d\'un membre d\'Ancestry)' },
           { src: 'images/photos/maison-joseph-robidoux.jpg', legende: 'La maison de rondins de Joseph Robidoux (photographie ancienne ; arbre public d\'un membre d\'Ancestry)' }],
  lieux: ['L04', 'L10', 'L75', 'L14', 'L76', 'L12', 'L41', 'L43', 'L44', 'L15', 'L46', 'L78', 'L79', 'L16', 'L47'] },

{ id: 'francois', type: 'portrait', statut: 'biographie', ordre: 5, date: '1788 – 1856 ?', titre: 'François Robidoux, le marchand de Saint-Louis',
  personnes: ['François'],
  resume: "Associé de Joseph au magasin de Saint-Louis, premier des frères à mener un convoi jusqu'à Taos, mort sans fortune quelque part sur les Plaines.",
  texte: `Né le 24 septembre 1788, François fait la traite dès 1806. En 1807, il épouse Thérèse Bienvenu Delisle, sœur jumelle de la femme de Joseph ; ils ont dix enfants entre 1809 et 1831. En septembre 1808, Joseph l'engage comme hivernant sur le Missouri. Avec Joseph, il tient un magasin à Saint-Louis (licence de marchand en novembre 1816) ; en décembre 1810, il obtient en justice contre Auguste Chouteau une part de la succession paternelle.

Associé à Papin et à Joseph sur le Missouri en 1819, il mène à l'automne 1824 un convoi de Council Bluffs à Taos, avec le jeune Espagnol Manuel Alvarez, futur consul américain à Santa Fe. En janvier 1825, il écrit à l'alcalde de Taos que ses hommes n'ont causé aucun désordre. En 1826, l'alcalde saisit plus de six cents livres de castor de François et de Sylvestre Pratte ; le gouverneur Narbona les leur rend. En mars 1827, il part de Taos pour le pays ute avec Chalifoux et LeDuc.

En 1850, il a tout cédé à Saint-Louis. Il travaille entre Saint-Joseph et Scotts Bluff, guide d'émigrants ou traiteur, employé de son frère Joseph en 1849. Son fils Antoine tient la forge du col de Robidoux (« Tinware, by A. Rubidue »). Le comté de Buchanan ouvre sa succession en avril 1856 ; une plaque de Mount Olivet le dit mort sur les Grandes Plaines en 1857.`,
  sources: `${WIL}, p. 3, 29-31, 34, 39, 47, 72, 79, 81-82, 192, 194, 202 ; D. J. Weber, « Sylvestre S. Pratte », et J. Lecompte, « Jean-Baptiste Chalifoux », dans Hafen (dir.), French Fur Traders and Voyageurs in the American West (1995).`,
  lieux: ['L88', 'L13', 'L19', 'L21', 'L37', 'L93'] },

{ id: 'isidore', type: 'portrait', statut: 'biographie', ordre: 6, date: '1791 – 1852', titre: 'Pierre Isidore Robidoux, le commerçant de la piste',
  personnes: ['Isidore'],
  resume: "Le plus discret des frères : base à Saint-Louis, affaires à Santa Fe et à Taos, associé de Michel à Saint-Joseph jusqu'à sa mort en 1852.",
  texte: `Pierre Isidore Robidoux, qui use de son second prénom, naît le 2 novembre 1791. Pendant la guerre de 1812, son unité de milice l'emmène avec Antoine en territoire illinois. Il garde sa base à Saint-Louis mais tient boutique à Taos et à Santa Fe avec Louis et François, aidant ses frères ou commerçant à son compte.

En juillet 1829, il écrit de Franklin à Pierre Chouteau qu'une barge de marchandises de W. J. Samuels & Co. est arrivée à bon port. En 1835, à Santa Fe, il signe avec Manuel Alvarez, Josiah Gregg, P. W. Thompson et L. L. Waldo une pétition au ministre américain au Mexique, Powhatan Ellis. En 1830, il est l'un des quatre signataires présents à Saint-Louis pour la vente d'un terrain familial.

À Saint-Joseph, il est l'associé de Michel (« Michel Robidoux & Co. ») et figure en 1850 parmi les employés de la licence de traite de Joseph. Il meurt sans testament à l'été 1852.`,
  sources: `${WIL}, p. 3, 35, 96-97, 122, 132, 194, 202.`,
  lieux: ['L80', 'L56', 'L92'] },

{ id: 'antoine', type: 'portrait', statut: 'biographie', ordre: 7, date: '1794 – 1860', titre: 'Antoine Robidoux, le roi de la traite intermontagnarde',
  personnes: ['Antoine'],
  resume: "Le plus célèbre : citoyen mexicain, alcalde de Santa Fe, bâtisseur des forts Uncompahgre et Uintah, interprète de Kearny, blessé à San Pasqual, mort aveugle à Saint-Joseph.",
  texte: `Antoine naît le 22 ou le 24 septembre 1794, à Florissant selon Wallace. Artilleur en 1813, il s'installe en 1817 à Franklin, où commence la piste de Santa Fe. En 1822-1824, il part pour le Nouveau-Mexique ; à l'automne 1824, il trappe dans le bassin de la Green avec Étienne Provost. En 1825, une liaison avec Lisa Romero, de Taos, donne une fille, Maria Juana.

En 1828, il prend pour épouse de fait Carmel Benavides, de la vieille famille Baca. Naturalisé mexicain en 1829, il est élu en 1830 à l'ayuntamiento de Santa Fe, dont il préside la junte. Vers 1828-1829, il bâtit le fort Uncompahgre au confluent de la Gunnison, le premier poste permanent à l'ouest de la ligne de partage, et y conduit des chariots par le col de Cochetopa. En 1832, il rachète le poste de Reed sur l'Uinta : c'est le fort Uintah. En novembre 1837, il grave son passage à Westwater. En 1834, il achète la mine du Cerro del Oro.

Ses forts vendent armes et alcool aux Utes et participent à la traite des captifs autochtones vers le Nouveau-Mexique, que dénonce le révérend Williams en 1842. En 1840, il vante la Californie à Weston, ce qui lance la caravane Bidwell de 1841. À l'automne 1844, les Utes détruisent le fort Uintah ; Antoine s'installe à Saint-Joseph.

En 1846, interprète et guide de Kearny, il traduit la prise de possession de Santa Fe, puis suit l'armée jusqu'en Californie. À San Pasqual, le 6 décembre, un coup de lance dans le dos le laisse pour mort ; une tasse de café, raconte Emory, le ramène à la vie. Il rentre par mer en 1847-1848, demande pension et remboursements au Congrès, et obtient en 1856 une pension de 16,66 dollars par mois. Presque aveugle, atteint d'hydropisie, il meurt à Saint-Joseph le 29 août 1860, laissant Carmel et leur petite-fille adoptive Amanda.`,
  sources: `${WIL}, ch. 4, 7, 9, 10, 12 ; W. S. Wallace, Antoine Robidoux, 1794-1860 (1953) et sa notice dans Hafen (dir.) (1995), p. 270-282 ; nécrologie de la St. Joseph Gazette (1860).`,
  images: [{ src: 'images/photos/antoine-robidoux-jeune.jpg', legende: 'Antoine Robidoux jeune homme (Museum of New Mexico ; arbre public d\'un membre d\'Ancestry)' }],
  lieux: ['L06', 'L09', 'L80', 'L81', 'L17', 'L22', 'L25', 'L23', 'L50', 'L48', 'L24', 'L54', 'L29', 'L30', 'L82', 'L32', 'L83', 'L84', 'L38'] },

{ id: 'louis', type: 'portrait', statut: 'biographie', ordre: 8, date: '1796 – 1868', titre: 'Louis Robidoux, d\'alcalde de Santa Fe à ranchero de Jurupa',
  personnes: ['Louis'],
  resume: "Le Californien : maire de Santa Fe, meunier, prisonnier de guerre, fondateur du rancho qui deviendra Riverside, dernier survivant des six frères.",
  texte: `Louis naît à Saint-Louis le 5 août 1796 (le 7 juillet selon d'autres sources). Il part pour le Nouveau-Mexique en 1823 avec Manuel Alvarez, fait la navette avec Saint-Louis (départ de Taos en avril 1827) et s'établit pour de bon à Santa Fe en 1828. Naturalisé en 1829, il prend pour épouse de fait Guadalupe García, fille de l'alcalde Juan García ; leurs enfants naissent à partir de 1835 (Catarina, 1835 ; José Luis, 1837).

Son goût de l'aguardiente le mène en prison en novembre 1830, pour avoir insulté l'alcalde ; il n'en devient pas moins secrétaire, conseiller, puis premier alcalde de Santa Fe en 1839. Il tient magasin, forge et, à partir de 1839, un moulin sur la rivière Santa Fe. Il cautionne des marchands américains et préside des procès. En mai 1841, il grave son nom dans le bassin du Willow Creek en allant au fort Uintah, dont il est copropriétaire.

Devant l'hostilité croissante envers les Américains, il vend ses biens en 1841, reconnaît la Californie en 1843 et achète en 1844, avec Benjamin Wilson, le rancho Jurupa sur le Santa Ana. Il y bâtit le premier moulin du sud de la Californie (1846-1847). Prisonnier des Californiens après le combat du rancho del Chino (27 septembre 1846), il est libéré en janvier 1847. Ses deux lettres de 1848 à Manuel Alvarez, en espagnol soigné, chantent la Californie et prédisent qu'elle restera américaine.

Superviseur et premier président du conseil du comté de San Bernardino (1853), il voit sa fortune ruinée par la crue de 1862, la sécheresse et les procès ; une chute de cheval le laisse infirme. Remarié à Flavia Castillo, il meurt le 24 septembre 1868 et repose à Agua Mansa. Le mont Rubidoux, à Riverside, porte son nom.`,
  sources: `${WIL}, p. 3, 66, 80-81, 86-87, 120-124, 149-154, 162-165, 174-177, 198-201, 209-210 ; D. J. Weber (éd.), « Louis Robidoux: Two Letters from California, 1848 » (1972) ; R. Hornbeck, Roubidoux's Ranch in the 70's (1913).`,
  images: [{ src: 'images/photos/louis-robidoux.jpg', legende: 'Louis Robidoux (photographie ancienne ; arbre public d\'un membre d\'Ancestry)' },
           { src: 'images/photos/louis-robidoux-ranch-1869.jpg', legende: 'La maison du ranch de Louis Robidoux à Jurupa (USC Digital Library, California Historical Society ; arbre public d\'un membre d\'Ancestry)' }],
  lieux: ['L18', 'L85', 'L49', 'L51', 'L58', 'L59', 'L60', 'L86', 'L87', 'L61', 'L62'] },

{ id: 'michel', type: 'portrait', statut: 'biographie', ordre: 9, date: '1798 – 1858', titre: 'Michel Robidoux, le chef de brigade',
  personnes: ['Michel'],
  resume: "Le benjamin : survivant du massacre de la Gila, chef d'une brigade de l'American Fur Company sur la Snake, puis traiteur des Plaines autour du fort Laramie.",
  texte: `Michel naît le 3 août 1798. Le 29 juin 1825, il reçoit avec Antoine un passeport pour le Mexique ; le 22 juin, il avait épousé à Saint-Louis Susanne Vaudry, sœur de la femme de Joseph. À l'automne 1826, il mène sur la Gila un parti financé par Sylvestre Pratte : trois hommes seulement sur vingt échappent à une attaque, dont James O. Pattie.

Rentré au Missouri, il travaille avec Baptiste Roy ; une fille lui naît à Saint-Louis en janvier 1830. En mars 1830, il part avec Fontenelle et Drips pour la Green : le 23 août, à Ham's Fork, il prend le commandement de la brigade du nord, hiverne à Ogden's Hole, engage des trappeurs iroquois (John Gray) et Jean-Baptiste Charbonneau, et fouille la Snake jusqu'aux chutes, malgré la maladie et la faim. Il rentre en juin 1831, repart, et travaille dans les montagnes du nord jusqu'en 1835.

Après 1835, il traite sur les Plaines autour du fort William (Laramie) et revient souvent à Saint-Louis, où il achète en 1839 la propriété de Joseph. À Saint-Joseph, il est l'associé d'Isidore, puis administre sa succession en 1852. Il meurt en avril 1858.`,
  sources: `${WIL}, p. 3, 76-77, 96-99, 202 ; D. J. Weber, « Sylvestre S. Pratte », dans Hafen (dir.) (1995), p. 264.`,
  images: [{ src: 'images/photos/michel-robidoux.jpg', legende: 'Michel Robidoux, profil aquarellé (miniature ancienne ; arbre public d\'un membre d\'Ancestry)' }],
  lieux: ['L88', 'L20', 'L89', 'L90', 'L91', 'L92'] },

{ id: 'soeurs', type: 'portrait', statut: 'biographie', ordre: 10, date: '1800 – ?', titre: 'Eulalie et Marie Pélagie, les sœurs',
  personnes: ['Eulalie', 'Pélagie'],
  resume: "Les deux filles de Joseph II, presque absentes des sources.",
  texte: `Eulalie naît en 1800 et Marie Pélagie en 1802. On ne sait presque rien d'elles. En septembre 1830, Pélagie signe avec Joseph, Isidore et François la vente à Joseph Laveille et George Morton d'un terrain de Saint-Louis hérité de leur père : c'est la seule trace de sa présence dans les affaires de la famille relevée par Willoughby.`,
  sources: `${WIL}, p. 3, 97.`,
  lieux: ['L88'] },

{ id: 'josephe', type: 'portrait', statut: 'biographie', ordre: 11, date: '1806 – v. 1888', titre: 'Joseph E. Robidoux, le fils aîné',
  personnes: ['Joseph E.'],
  resume: "Fils d'Eugénie Delisle, commis aux Black Snake Hills, traiteur chez les Sioux, sans doute maître du poste du col de Robidoux, allié des Ioways.",
  texte: `Fils de Joseph et d'Eugénie Delisle, Joseph E. naît fin 1806 (1802 selon d'autres). En octobre 1831, son père écrit que « mon fils Robidoux » revient de traiter avec les Sioux ; en janvier 1832, il est commis aux Black Snake Hills pour vingt dollars par mois. Il signe sans doute « H. Robidou, Jr. » comme témoin du traité de la Platte Purchase. En 1836, son père supplie Abady Sarpy de l'engager pour l'empêcher de travailler avec son ennemi Jeffre (Geoffrey Dorwin).

Employé de la licence paternelle en 1849, il tient très probablement le poste du col de Robidoux, près de Scotts Bluff, et retourne dans le nord du Kansas à la fin des années 1850. Les histoires familiales ioways-otoes lui donnent une épouse ioway, « Jennie », et un fils, Joseph, né vers 1825 près de White Cloud : une lignée Robidoux ioway en descend.`,
  sources: `${WIL}, p. 29, 97, 110, 134-135, 194 ; National Park Service, « Robidoux Pass » (2025) ; « Ioway-Otoe-Missouria Family Stories » (iowayotoelang.nativeweb.org).`,
  lieux: ['L41', 'L45', 'L37', 'L57', 'L63'] },

{ id: 'jules', type: 'portrait', statut: 'biographie', ordre: 12, date: '1814 – 1875', titre: 'Jules-César Robidoux, l\'héritier de Saint-Joseph',
  personnes: ['Jules'],
  resume: "Premier maître de poste des Black Snake Hills, marchand de Saint-Joseph, traiteur au fort Laramie, gardien de la mémoire paternelle.",
  texte: `Jules-César, jumeau de Messanie, naît à Saint-Louis en août 1814, fils de Joseph et d'Angélique Vaudry. En novembre 1833, il demande des fonds à Pierre Chouteau pour la famille. En 1840, il devient le premier maître de poste des Black Snake Hills ; en 1843, il bâtit la deuxième maison de la future ville. En 1849, il passe au fort Laramie comme traiteur.

Il reprend le commerce de détail et la vie civique de son père ; c'est de sa maison, rue Edmond, que partent les funérailles de Joseph le 28 mai 1868. Il assiste en septembre 1874 à l'assemblée des pionniers du Missouri et meurt à Saint-Joseph le 26 février 1875.`,
  sources: `${WIL}, p. 34, 113, 141, 202, 210 ; Tassé (1878), t. II, p. 125-128 ; Cragin, Early Far West Notebooks, p. 224.`,
  images: [{ src: 'images/photos/jules-robidoux.jpg', legende: 'Jules-César Robidoux (photographie de studio ; arbre public d\'un membre d\'Ancestry)' },
           { src: 'images/photos/elizabeth-barada-robidoux.jpg', legende: 'Elizabeth Barada Robidoux, son épouse (photographie ancienne ; arbre public d\'un membre d\'Ancestry)' }],
  lieux: ['L45', 'L31', 'L36', 'L16'] },

{ id: 'carmel', type: 'portrait', statut: 'biographie', ordre: 13, date: '1811 – 1888', titre: 'Carmel Benavides, l\'épouse d\'Antoine',
  personnes: ['Carmel Benavides'],
  resume: "Née dans la vieille famille Baca de Santa Fe, elle traverse la piste de Santa Fe plus souvent que toute autre femme connue et finit ses jours chez sa petite-fille au Colorado.",
  texte: `María de la Cruz Carmen Benavides, dite Carmel, est baptisée à Santa Fe le 22 novembre 1811, fille de José Pablo Benavides et de María Guadalupe Baca ; la maison familiale de la rue du Grenier remonte au XVIIIe siècle. À dix-sept ans, en 1828, elle s'unit à Antoine Robidoux, sans mariage religieux.

Elle aurait traversé la piste de Santa Fe cinq ou six fois : naissance de Carmelete au Missouri vers 1830, recensement de Santa Fe en 1841 avec sa cousine adoptée Martina Anaya, Saint-Joseph après 1844 (chez les Barada en 1850, au 3e quartier en 1860). Exécutrice du testament d'Antoine, sa « bien-aimée Carmelletta », elle repart en 1860-1862 pour Santa Fe avec sa petite-fille Amanda.

En 1870, elle vit à Conejos chez Amanda et Christian Stollsteimer. En 1879, elle vend la maison Baca et signe d'une croix. Elle meurt le 29 janvier 1888 et repose au cimetière Greenmount de Durango. Aucune lettre ni déclaration d'elle n'a été retrouvée.`,
  sources: `F. Levine, « Desperately Seeking Carmel », El Palacio (2019), et Crossings (2024) ; National Park Service, « Carmel Benavides » ; Wagon Tracks, vol. 13, n° 1 (novembre 1998) ; recensements de 1850, 1860, 1870.`,
  lieux: ['L17', 'L64', 'L65', 'L66', 'L67', 'L68', 'L71'] },

{ id: 'martina', type: 'portrait', statut: 'biographie', ordre: 14, date: 'v. 1821-1829 – 1852', titre: 'Martina Anaya, dite Carmelette',
  personnes: ['Martina Anaya', 'Carmelette'],
  resume: "La fille adoptive d'Antoine et de Carmel, épouse d'Isidore Barada, morte peu après la naissance d'Amanda : deux noms pour une même femme ?",
  texte: `Les sources hésitent. Pour Levine et Find a Grave, la fille adoptive du couple est Martina Anaya, cousine de Carmel, orpheline en 1827-1828, inscrite au foyer d'Antoine dans le recensement de Santa Fe de 1841, mariée à Isidore Barada à Saint-Joseph en 1847. La tradition familiale, reprise par Willoughby, le musée de Pagosa Springs et la généalogie Stollsteimer, l'appelle Carmelette (« petite Carmel ») ; une note du dossier de l'auteur la nomme « Martina Carmelette (Anaya) Barada ».

Le recensement de 1850 inscrit à Saint-Joseph « Maltine Barada », née au Mexique vers 1829, avec Isadore Barada (né vers 1808 au Missouri) et des enfants Barada nés au Mexique (Antoine, v. 1832 ; Adolph, v. 1837 ; Julius, v. 1839 ; Mary, v. 1841), sans doute d'un premier lit. Elle meurt en 1852, peu après la naissance d'Amanda.

Les registres du Missouri signalent par ailleurs une Carmelete née de Carmel vers 1830 : il pourrait s'agir d'une autre enfant, morte jeune, dont le nom aurait été transmis à Martina.`,
  sources: `F. Levine (2019) ; Find a Grave, mémorial 255125946 ; ${WIL}, p. 208 ; recensement de 1850 (Ancestry) ; Biblio.txt (dossier Armanda_Maria_Baracha de l'auteur).`,
  lieux: ['L64', 'L65', 'L66'] },

{ id: 'amanda', type: 'portrait', statut: 'biographie', ordre: 15, date: '1852 – 1916', titre: 'Amanda Barada Stollsteimer, la petite-fille d\'Antoine',
  personnes: ['Amanda Barada'],
  resume: "Élevée par Antoine et Carmel, mariée à un immigrant wurtembergeois, pionnière du comté d'Archuleta : la dernière à avoir connu Antoine.",
  texte: `Amanda Maria Barada naît à Saint-Joseph le 26 juin 1852. Orpheline de mère, elle est élevée par Antoine et Carmel, qui la couchent sur le testament d'Antoine. Après 1860, elle suit Carmel à Santa Fe, où elle épouse le 21 avril 1867 Christian Friedrich (Cristino) Stollsteimer, né en 1842 à Echterdingen (Wurtemberg), arrivé en Amérique en 1860.

Le couple vit à Conejos (1870), puis élève bétail et moutons sur la Piedra, près de Pagosa Springs (1880). Christian, agent des Utes du Sud et des Jicarillas, est révoqué en 1888 pour malversations : la famille a profité de la dépossession des nations autochtones. Leurs huit enfants s'établissent dans le comté ; en mai 1899, Emma et Adela sont en tête de file pour l'ouverture de la réserve ute.

Veuve en 1906, Amanda meurt d'un cancer le 15 décembre 1916 chez sa fille Stella, à Altadena (Californie), et repose au cimetière Mountain View ; sa tombe porte « Manda Stollsteimer, 1852-1917 » selon une note de l'auteur. Le Pagosa Springs Sun salue une pionnière du comté.`,
  sources: `Descendants of Johannes Stollsteimer (généalogie, 2025) ; Pagosa Springs History Museum ; Fort Lewis College, Prospectus TCP San Juan ; recensement de 1870 (Ancestry) ; Biblio.txt (dossier de l'auteur).`,
  lieux: ['L66', 'L67', 'L68', 'L69', 'L70', 'L96', 'L72'],
  images: [{ src: 'images/photos/amanda-barada-stollsteimer-portrait.jpg', legende: 'Amanda Marie Barada Stollsteimer, portrait reproduit par A. Oldham (dossier de l\'auteur)' }] },

{ id: 'mary', type: 'portrait', statut: 'biographie', ordre: 16, date: 'v. 1805 – 1884', titre: 'Mary Many Days et White Cloud',
  personnes: ['Mary Many Days', 'White Cloud'],
  resume: "Fille de Joseph et d'une femme ioway, épouse du chef White Cloud : par elle, le nom Robidoux entre dans une lignée de chefs ioways.",
  texte: `En 1805, sur le Missouri, Joseph Robidoux a d'une femme ioway une fille, Mary, dite Many Days. Elle épouse le chef ioway White Cloud ; leurs petits-fils James et Jefferson White Cloud deviennent chefs. L'historienne Tanis Thorne voit dans ce mariage l'exemple des alliances par lesquelles les traiteurs indépendants de Saint-Louis s'attachaient les clans dirigeants autochtones entre 1800 et 1825.

Les Ioways, partenaires commerciaux de Joseph (« Ayois » dans ses lettres), cèdent leurs terres du Missouri en 1836 et sont repoussés sur la réserve de la Grande Nemaha, au nord-est du Kansas, près de l'agence où Joseph tient un poste. Mary meurt le 29 juin 1884. Le peintre Rudolph Kurz parle des « soixante papooses » de Joseph : la descendance autochtone des Robidoux reste largement à écrire.`,
  sources: `${WIL}, p. 21, 134, 144 ; T. C. Thorne, The Many Hands of My Relations (1996) ; « Mary Many Days Robidoux », Wikipédia.`,
  lieux: ['L12', 'L63', 'L77'] },

{ id: 'deroine', type: 'portrait', statut: 'biographie', ordre: 17, date: 'v. 1804 – 1859', titre: 'Jeffrey Deroine, esclave, interprète et diplomate',
  personnes: ['Jeffrey Deroine'],
  resume: "Né esclave à Saint-Louis, détenu par Joseph Robidoux, il gagne sa liberté en 1832 avec l'aide des Ioways et devient interprète, puis voyageur du monde.",
  texte: `Jeffrey (Jeffre, Geoffrey Dorwin) naît à Saint-Louis vers 1804-1805, élevé dans la famille de Francis Deroin. Détenu comme esclave par Joseph Robidoux, il est l'objet d'un long procès en liberté (une déposition de janvier 1830 précise qu'il est né à Saint-Louis après la prise de possession américaine et qu'il a été élevé par la famille Deroin ; en 1835, la cour d'appel casse un jugement rendu contre lui). En mars 1832, l'agent Andrew Hughes paie 600 dollars à Joseph, sans doute avec des fonds réunis par ses amis ioways, et Jeffrey devient interprète à la sous-agence ioway.

Licencié pour la traite, il devient le rival acharné de Joseph, qui le dénonce dans ses lettres à Chouteau. L'historien Greg Olson a retracé la suite de sa vie d'interprète et de voyageur. En 1844-1845, il accompagne en Europe la délégation ioway, sauk et renarde du colonel Melody et de George Catlin. Il meurt à Saint-Joseph le 31 mars 1859. La dépêche qui annonce sa mort est reprise par neuf journaux (voir « La mort de Jeffrey Deroine, ancien esclave de Joseph »).`,
  sources: `${WIL}, p. 45, 114-117, 133-135 ; G. Olson, « Slave, Trader, Interpreter, and World Traveler: Jeffrey Deroine », Missouri Historical Review, vol. 107, n° 4 (2013).`,
  lieux: ['L12', 'L158', 'L159'] },

// ===================================================================== DOCUMENTS
{ id: 'd-bapteme-1750', type: 'document', statut: 'transcription', ordre: 101, date: '12 février 1750', titre: 'Baptême de Joseph Marie Robidoux, Sault-au-Récollet',
  personnes: ['Joseph II'],
  resume: "L'acte qui enracine la famille de l'Ouest à Montréal : le futur Joseph II, fils de Joseph Robidoux et de Marianne Leblanc.",
  images: [{ src: 'images/documents/drouin-1750-02-12-bapteme-joseph-marie-robidoux.jpg', legende: 'Registre de la Visitation du Sault-au-Récollet, 1750 ; acte B.5 en marge (collection Drouin, image Ancestry)' }],
  texte: `Notice de l'index (collection Drouin, Ancestry, coll. 1091, notice 14650221) :

Nom : Joseph Marie Robidoux
Sexe : homme
Type d'acte : baptême
Date de naissance : 12 février 1750
Lieu : Montréal, paroisse de la Visitation-de-la-Bienheureuse-Vierge-Marie (Sault-au-Récollet)
Père : Joseph Robidoux
Mère : Marianne Leblanc

En marge du registre : « B. 5 / joseph marie / Robidoux ».`,
  note: "L'index porte par erreur 1736 comme date de baptême (année d'ouverture du registre) ; l'acte est bien de 1750. Transcription intégrale de l'acte à faire sur l'image en pleine résolution.",
  sources: 'Institut généalogique Drouin, Drouin Collection ; Ancestry.com, Quebec, Canada, Vital and Church Records (Drouin Collection), 1621-1968.',
  lieux: ['L73'] },

{ id: 'd-loan-1846', type: 'document', statut: 'traduction', ordre: 102, date: '23 août 1846', titre: 'Lettre d\'Antoine Robidoux à B. F. Loan sur la prise de Santa Fe',
  personnes: ['Antoine'],
  resume: "Le seul long texte connu d'Antoine : l'interprète de Kearny raconte l'entrée sans combat de l'armée de l'Ouest à Santa Fe.",
  texte: `Santa Fe, 23 août 1846

Cher Monsieur,
Inutile de vous donner le détail de notre traversée des Plaines ; qu'il suffise de dire qu'elle eut sa part ordinaire d'accidents et d'émotions. La troupe a atteint Santa Fe le 18 et a pris possession du département du Nouveau-Mexique sans opposition.

À l'approche des établissements, bien des rumeurs nous parvinrent sur les préparatifs des Mexicains ; un moment, on ne douta pas qu'ils nous livreraient bataille, mais la rapidité des mouvements de la troupe du général Kearny contribua beaucoup à rendre la résistance moins probable.

Les Mexicains avaient rassemblé une masse hétéroclite de trois ou quatre mille hommes, soldats, rancheros et Indiens, mais si totalement inefficace que toute résistance était impossible. Cela, joint à l'incapacité du général Armijo, dont il semble avoir eu lui-même conscience, nous a valu une conquête facile.

Il semble qu'Armijo rejoignit ses troupes le 16 dans un col de montagne par où l'on pensait que passerait le général Kearny ; elles tentèrent d'y dresser un retranchement, mais comme il n'eut sans doute jamais l'intention d'affronter les troupes américaines, il sema la discorde parmi les siens, qui faillirent en venir aux mains entre eux. Dans cette agitation, il retira ses troupes régulières et s'enfuit vers sa résidence ; on ne sait pas au juste où il se trouve. Beaucoup de ses soldats l'ont abandonné et sont revenus à Santa Fe, après avoir quitté l'uniforme ; on ne les distingue plus des autres habitants.

Aucun homme, je suppose, n'a jamais été plus complètement déshonoré que le général Armijo, non seulement auprès des soldats américains mais auprès de son propre peuple.

En prenant possession de Santa Fe, le général Kearny a hissé le drapeau américain sur le capitole, déclarant aux Mexicains qu'il prenait possession du Nouveau-Mexique des deux côtés du rio del Norte comme partie du territoire des États-Unis, et qu'il le défendrait comme tel ; il leur a assuré que tous les Mexicains paisibles seraient protégés dans leurs personnes, leurs biens et leur religion, mais que ceux qu'on trouverait en armes seraient traités en ennemis.

La conduite du général Kearny a jusqu'ici donné entière satisfaction aux Mexicains. [...] Il est question qu'un détachement traverse le pays pour prendre possession de la Californie, sous le commandement du général en personne.

Respectueusement vôtre,
A. ROBIDOUX`,
  note: "Traduction française de l'auteur de l'atlas d'après le texte anglais publié dans la Gazette de Saint-Joseph du 9 octobre 1846 (domaine public), tel que reproduit par Willoughby. Un passage de politesse est abrégé [...].",
  sources: `Gazette (St. Joseph, Missouri), 9 octobre 1846 ; ${WIL}, p. 170-172.`,
  lieux: ['L82', 'L17'] },

{ id: 'd-lettres-louis-1848', type: 'document', statut: 'resume', ordre: 103, date: '1er mai et 17-19 juin 1848', titre: 'Deux lettres de Louis Robidoux à Manuel Alvarez, Jurupa',
  personnes: ['Louis', 'Antoine'],
  resume: "De son rancho de Jurupa, Louis raconte sa captivité de 1846, la blessure d'Antoine, sa vie de ranchero et la ruée vers l'or naissante.",
  texte: `Écrites en espagnol soigné à son vieil ami Manuel Alvarez, ancien consul américain à Santa Fe, ces deux lettres sont conservées dans la collection Benjamin M. Read (New Mexico State Records Center, Santa Fe). La première part avec Kit Carson, qui la remet à Santa Fe le 19 juin 1848.

Lettre du 1er mai 1848. Louis raconte la réunion de dix-huit étrangers chez lui et chez Benjamin Wilson le 25 septembre 1846, le combat et l'incendie du rancho del Chino le 27, sa captivité sous le général Flores, la menace de déportation vers Mexico et sa libération à l'entrée des Américains à Los Angeles le 10 janvier 1847. Il mentionne la blessure à la lance de « mon frère Antonio » à San Pasqual. Il décrit son rancho (deux lieues sur une, de part et d'autre du Santa Ana), ses 600 bovins, une centaine de chevaux et 600 agneaux, le moulin de la maison, et compare les Néo-Mexicains à des fourmis enfermées l'hiver. Guadalupe, elle, regrette Santa Fe et ses fandangos. Il nomme ses enfants (Catalina, Lucito, deux petites filles dont Carmelita) et regrette de ne pouvoir les instruire, l'école étant à quinze lieues.

Lettre du 17 juin 1848. Louis juge que la Californie ne reviendra jamais au Mexique et qu'il vaut mieux qu'elle reste américaine ; il décrit les séquoias, les moulins à vapeur du Sacramento et la découverte d'or au moulin de Sutter. Il salue Donaciano Vigil, gouverneur du Nouveau-Mexique, et se plaint du silence du riche docteur Waldo.`,
  note: "Résumé : la traduction anglaise publiée par D. J. Weber (1972) est protégée ; seul l'original espagnol de 1848 est du domaine public. Un fragment de la première lettre avait été traduit par B. M. Read (1912) et repris par O. M. Robidoux (1924).",
  sources: `D. J. Weber (éd.), « Louis Robidoux: Two Letters from California, 1848 », Southern California Quarterly, vol. 54, n° 2 (1972), p. 105-116 (PDF dans le dossier de l'auteur) ; ${WIL}, p. 164, 174-177.`,
  lieux: ['L86', 'L59', 'L32'] },

{ id: 'd-kern-1857', type: 'document', statut: 'traduction', ordre: 104, date: 'juin 1857', titre: 'Deux lettres d\'Antoine Robidoux à Edward Kern',
  personnes: ['Antoine'],
  resume: "Aveugle et alité, Antoine supplie son ami de Monterey de certifier ses frais de retour de Californie pour le Congrès.",
  texte: `Première lettre (dictée, juin 1857) :
J'ai reçu récemment une lettre de votre frère à Philadelphie, qui m'apprend que vous êtes à New York, et je vous fais suivre celle-ci par lui. J'ai le regret de dire que je suis alité depuis longtemps, et que je souffre à présent d'un mal plus grand que jamais : à la perte totale de mes yeux s'ajoute l'hydropisie.

Je vous écris pour vous prier de porter votre attention immédiate sur les papiers ci-joints. Je souhaite que vous les certifiiez et me les renvoyiez aussitôt, afin que je puisse les présenter au prochain Congrès. [...]
Bien respectueusement vôtre, Antoine Robidoux.
P.-S. : Ce projet de loi a déjà été présenté au Congrès ; il a passé la Chambre, mais il est tombé au Sénat, faute de la preuve que je vous demande.

Seconde lettre (de sa main) :
J'écris en hâte ces quelques lignes. J'ai le regret de dire que je suis cloué au lit par l'hydropisie depuis le 1er mars ; je vais un peu mieux. J'ai envoyé à votre frère à Philadelphie des documents qu'il vous a fait suivre. J'espère, cher ami, que vous les avez reçus. [...] Si vous pouvez remettre ces papiers à M. Edwards, l'avocat que j'ai engagé pour mon affaire, ou lui donner tout autre renseignement, je vous en serai obligé. Heureux d'avoir de vos nouvelles. Antoine Robidoux.`,
  note: "Traduction de l'auteur de l'atlas d'après les lettres anglaises de 1857 (domaine public) citées par Willoughby. Le projet H.R. 465 meurt avec le 34e Congrès.",
  sources: `${WIL}, p. 206-207.`,
  lieux: ['L84', 'L38'] },

{ id: 'd-necrologie-1860', type: 'document', statut: 'transcription', ordre: 105, date: '29 août 1860 (publiée le 29 septembre 1860)', titre: 'Nécrologie d\'Antoine Robidoux',
  personnes: ['Antoine', 'Joseph III', 'Carmel Benavides'],
  resume: "Publiée par la Gazette de Saint-Joseph, reprise un mois plus tard par le Los Angeles Star : le portrait d'Antoine par ses contemporains, avec ses erreurs.",
  texte: `From the St. Joseph (Mo.) Gazette.
OBITUARY.

Departed this life, at his residence, in this city, on Wednesday, the 29th day of August, 1860, after a long illness, Antoine Robidoux, in the 66th year of his age.

Mr. Robidoux was born in the city of St. Louis, in the year 1794. He was one of the brothers of Mr. Joseph Robidoux, founder of the city of St. Joseph. He was possessed of a sprightly intellect and a spirit of adventure. When not more than 22 years of age he accompanied Gen. Atkinson to the then very wild and distant region of the Yellow Stone. At the age of 28 he went to Mexico, and lived there fifteen years. He there married a very interesting Mexican lady, who returned with him to the States. For many years he traded extensively with the Navajoes and Apaches. In 1840 he came to this city with his family, and has resided here ever since. In 1845 he went out to the mountains on a trading expedition, and was caught by the most terrible storms, which caused the death of one or two hundred of his horses, and stopped his progress. His brother Joseph, the respectable founder of this city, [...] had him found in a most deplorable condition and saved. In 1846 he accompanied Gen. Kearney, as interpreter and guide to Mexico. In a battle with the Mexicans, he was lanced severely in three places, but he survived his wounds and returned to St. Joseph in 1849. Soon after that he went to California and remained until 1854. In 1855 he removed to New Mexico with his family, and in 1856 he went to Washington and remained there a year, arranging some business with the Government. He then returned to St. Joseph, and has remained here ever since.

Mr. Robidoux was a very remarkable man — tall, slender, athletic and agile. He possessed the most graceful and pleasing manners, and an intellect of a superior order. In every company he was affable, graceful and highly pleasing. His conversation was always interesting and instructive, and he possessed many of those qualities which, had he remained in the States, would have raised him to positions of distinction. He suffered for several years before his death with a terrible soreness of the eyes, which defied the curative skill of the doctors; and for the ten years he has been afflicted with dropsy. A week or two ago he was taken with a violent hemorrhage of the lungs, which completely prostrated him, and from the effects of which he never recovered.

— Traduction —
Est décédé à sa résidence, en cette ville, le mercredi 29 août 1860, après une longue maladie, Antoine Robidoux, dans sa 66e année. Né à Saint-Louis en 1794, frère de M. Joseph Robidoux, fondateur de Saint-Joseph, il avait l'esprit vif et le goût de l'aventure. À 22 ans à peine, il accompagna le général Atkinson dans la lointaine région de la Yellowstone. À 28 ans, il partit pour le Mexique et y vécut quinze ans ; il y épousa une Mexicaine fort intéressante, qui revint avec lui aux États. Il traita longtemps avec les Navajos et les Apaches. En 1840, il vint s'établir ici avec sa famille. En 1845, une expédition de traite dans les montagnes fut arrêtée par de terribles tempêtes qui tuèrent cent ou deux cents de ses chevaux ; son frère Joseph le fit retrouver dans un état pitoyable. En 1846, il accompagna le général Kearny comme interprète et guide ; blessé de trois coups de lance, il revint à Saint-Joseph en 1849, partit pour la Californie jusqu'en 1854, s'installa au Nouveau-Mexique en 1855 et passa un an à Washington en 1856. Grand, mince, athlétique et agile, il avait des manières gracieuses et une intelligence supérieure. Il souffrait depuis des années d'un terrible mal d'yeux et depuis dix ans d'hydropisie ; une hémorragie des poumons l'emporta.`,
  note: "Transcription de l'auteur de l'atlas, corrigée de l'OCR (un passage illisible est noté [...]). La notice contient des erreurs : Antoine est né à Florissant selon Wallace, n'est pas rentré en 1849 mais en 1847-1848, et le séjour en Californie de 1849-1854 n'est pas documenté. Le Los Angeles Star la reprend sans doute à cause de Louis, bien connu dans le sud de la Californie.",
  sources: 'Los Angeles Star, 29 septembre 1860 (PDF LASTAR_18600929 du dossier de l\'auteur), reprenant la St. Joseph Gazette ; voir aussi la Liberty Tribune du 7 septembre 1860.',
  lieux: ['L38'] },

{ id: 'd-hall-1868', type: 'document', statut: 'traduction', ordre: 106, date: '28 mai 1868', titre: 'Proclamation du maire George Hall pour les funérailles de Joseph Robidoux',
  personnes: ['Joseph III', 'Jules'],
  resume: "La ville ferme ses commerces trois heures pour enterrer son fondateur.",
  texte: `« Joseph Robidoux, le fondateur de la ville de Saint-Joseph (Missouri), est mort. En hommage à la mémoire de Joseph Robidoux, dont le nom est inséparablement lié à la ville de Saint-Joseph, dont il fut le fondateur, les citoyens de Saint-Joseph sont priés de fermer leurs maisons de commerce de deux heures à cinq heures de l'après-midi, le jeudi 28 mai 1868, pendant le service funèbre. Les membres du conseil municipal et les officiers de la ville sont priés, et tous les autres citoyens invités, d'assister aux funérailles, qui partiront de la résidence de Julius C. Robidoux, rue Edmond, entre la 4e et la 5e rue, à deux heures, le 28 mai 1868. Signé : George Hall, maire. »

Le lendemain, le journal rapporte que la plupart des commerces ont fermé dès midi, que la rue Edmond est noire de monde autour de la maison de « Jule » Robidoux, et que l'ancien gouverneur Robert Stewart compte parmi les porteurs. Le corps est conduit au cimetière catholique.`,
  note: "Traduction de l'auteur de l'atlas d'après la proclamation de 1868 (domaine public) citée par Willoughby.",
  sources: `Journal de Saint-Joseph, 28 et 29 mai 1868 ; ${WIL}, p. 210.`,
  lieux: ['L16', 'L47'] },

{ id: 'd-westwater-1837', type: 'document', statut: 'transcription', ordre: 107, date: '13 novembre 1837', titre: 'L\'inscription d\'Antoine Robidoux au ruisseau Westwater',
  personnes: ['Antoine'],
  resume: "La plus belle inscription de l'Utah : un Français grave son passage sur la falaise, au-dessus d'un bouclier peint autochtone.",
  images: [{ src: 'images/photos/westwater-inscription-antoine-robidoux-2001.jpg', legende: 'L\'inscription en 2001, rehaussée à la craie ; au bas, le bouclier peint préhistorique criblé de balles (dossier de l\'auteur)' }],
  texte: `ANTOINE ROBIDOUX
PASSÉ ICI LE 13 NOVEMBRE
1837
POUR ÉTABLIRE MAISON
TRAITTE A LA
RV. VERT OU WIYTE

Charles Kelly retrouve et photographie l'inscription en 1933 : elle est taillée dans la face lisse d'une falaise de grès, près de l'embouchure du canyon de Westwater, au ranch Larsen (section 5, canton 18 sud, rang 24 est, comté de Grand), à quinze milles au nord-ouest de la gare de Westwater ; la ville la plus proche est Mack (Colorado). Robidoux campait dans un abri sous roche et grava juste au sud de l'entrée. Kelly juge la date sans équivoque : 1837.

« Wiyte » se lit Uinta (Winte, Wintey) ou White ; Antoine voulait peut-être fonder un nouveau poste sur la Green ou la White, projet jamais réalisé, le fort Uintah restant à son emplacement jusqu'en 1844.`,
  note: "L'inscription est reproduite telle qu'elle se lit sur la photographie. L'article de Kelly (1933) est résumé, non reproduit.",
  sources: 'C. Kelly, « Antoine Robidoux », Utah Historical Quarterly, vol. 6, n° 4 (octobre 1933), p. 115-116 (PDF dans le dossier de l\'auteur) ; ' + WIL + ', p. 126-128 ; B. Bartholomew, History Blazer (1996).',
  lieux: ['L50'] },

{ id: 'd-willow-1841', type: 'document', statut: 'transcription', ordre: 108, date: '5 mai 1841', titre: 'L\'inscription de Louis Robidoux au Willow Creek',
  personnes: ['Louis'],
  resume: "Le pendant espagnol de Westwater : Louis marque son passage vers le fort Uintah.",
  texte: `« Passo qui el cinco de mayo de 1841 » (« Il est passé ici le cinq mai 1841 »), selon la transcription donnée par Willoughby, qui lit « clincle » sur la roche.

L'inscription se trouve dans le bassin du Willow Creek, sur le plateau Tavaputs (Utah). Le Missouri Historical Society conserve trois photographies Polaroid d'inscriptions prises en septembre-octobre 1968, dont celle de Louis Robidoux (22 septembre 1968), avec celles d'Antoine Leroux et de F. R. B. Chalifou.`,
  sources: `${WIL}, p. 154 ; Missouri Historical Society, Western Travel Collection, A1734-00001 (accession 69-0017).`,
  lieux: ['L51'] },

{ id: 'd-recensements', type: 'document', statut: 'transcription', ordre: 109, date: '1850, 1860, 1870', titre: 'Carmel, Martina et Amanda dans les recensements américains',
  personnes: ['Carmel Benavides', 'Martina Anaya', 'Amanda Barada'],
  resume: "Trois recensements suivent la famille d'Antoine de Saint-Joseph au Colorado.",
  texte: `1850, canton de Washington, comté de Buchanan (Missouri) :
Isadore Barada, né v. 1808, Missouri
Maltine Barada, née v. 1829, Mexique
Antoine Barada, né v. 1832, Mexique
Adolph Barada, né v. 1837, Mexique
Julius Barada, né v. 1839, Mexique
Mary Barada, née v. 1841, Mexique
E. Barada, né v. 1803, Missouri
(Carmel est inscrite dans ce foyer sous le nom de « A. Robidoux », 38 ans, née au Mexique, selon Levine.)

1860, Saint-Joseph, comté de Buchanan :
A. Robidoux, femme, née v. 1812, Nouveau-Mexique (Carmel), avec une fillette de neuf ans, « A. Barady » (Amanda), et une jeune Allemande, M. Bither (selon Levine).

1870, Conejos (territoire du Colorado) :
Chas F. Stollsteimer, né v. 1843, Wurtemberg
Amanda Stollsteimer, née v. 1851, Missouri
Charles Albert Stollsteimer, né v. 1868, Colorado
Ferdinand Stollsteimer, né 1869, Colorado
(avec Carmel Robideaux, 59 ans, et Sarda Candelaria, 16 ans, selon la généalogie Stollsteimer.)`,
  note: "Relevés de l'index d'Ancestry (consultés le 19 novembre 2026). Antoine n'apparaît pas dans le foyer de Carmel en 1860. Maltine, née vers 1829, ne peut être la mère des enfants Barada nés au Mexique avant 1841 : ce sont sans doute ceux d'un premier mariage d'Isadore.",
  sources: 'Ancestry, 1850, 1860 et 1870 United States Federal Census ; F. Levine (2019) ; Descendants of Johannes Stollsteimer (2025).',
  lieux: ['L65', 'L66', 'L68'] },

// ===================================================================== ÉTUDES DU DOSSIER
{ id: 'e-willoughby', type: 'etude', statut: 'fiche', ordre: 201, date: '2012', titre: 'Willoughby, The Brothers Robidoux and the Opening of the American West',
  personnes: ['Joseph II', 'Joseph III', 'François', 'Isidore', 'Antoine', 'Louis', 'Michel'],
  resume: "La seule biographie collective des six frères, dépouillée chapitre par chapitre pour l'atlas.",
  texte: `Robert J. Willoughby, The Brothers Robidoux and the Opening of the American West, Columbia et Londres, University of Missouri Press, 2012.

1. The Business of the Father (Joseph Ier et Joseph II à Saint-Louis, 1771-1803)
2. Emerging Sons (1803-1818 : licences, mariages, guerre de 1812, mort du père)
3. Working the Missouri (1819-1823 : Council Bluffs, Franklin, premiers voyages au Mexique)
4. Into the Mountains (1823-1828 : Taos, la Green, Michel sur la Gila)
5. Trouble at Council Bluffs (1826-1835 : Roy & Robidoux contre Cabanné, la brigade de Michel)
6. The Blacksnake Hills Post (1828-1834)
7. Brothers in New Mexico (1829-1835 : naturalisation, Santa Fe, forts Uncompahgre et Uintah)
8. Joseph Builds His Own Town (1835-1843 : Platte Purchase, fondation de Saint-Joseph)
9. Dwindling Prospects in the Mountains (1839-1845)
10. War and Finding Home (1846-1848 : Kearny, San Pasqual, Louis prisonnier)
11. Queen City of the West (1845-1853 : Saint-Joseph, la ruée vers l'or, Scotts Bluff, Louis en Californie)
12. The End of Their Era (1852-1868 : morts d'Isidore, de François, de Michel, d'Antoine, de Louis et de Joseph)
Épilogue, notes, bibliographie, index.

Willoughby s'appuie surtout sur les papiers Chouteau (Missouri Historical Society), les archives mexicaines du Nouveau-Mexique, les dossiers de licences de William Clark et la presse du Missouri. Il ne cache ni l'esclavage, ni la traite des captifs, ni l'alcool vendu aux nations autochtones.`,
  sources: 'Exemplaire numérique (Project MUSE) dans le dossier ROBIDOUX_FAMILY de l\'auteur.',
  lieux: [] },

{ id: 'e-nelson-1996', type: 'etude', statut: 'resume', ordre: 202, date: 'automne 1996', titre: 'Nelson, « The North Branch of the Old Spanish Trail », Journal of the Western Slope',
  personnes: ['Antoine', 'Louis'],
  resume: "La branche nord de la Vieille piste espagnole, de Taos au fort Uintah : la route des convois Robidoux.",
  texte: `Le Journal of the Western Slope (vol. 11, n° 4, automne 1996) consacre son numéro à la branche nord de la Vieille piste espagnole, la plus fréquentée par les voyageurs allant de Taos au fort Uintah d'Antoine Robidoux jusqu'au milieu des années 1840. Les tronçons de la vallée de San Luis sont bien repérés ; l'étude suit la piste au-delà, jusqu'au confluent de l'Uncompahgre et de la Grand, où la piste se réunit au fort Robidoux, puis vers la Green.

L'auteur, Jack Nelson, archéologue amateur et randonneur de la piste, a aussi écrit une thèse, « Louis Robidoux, the Man Behind the Legend », souvent citée parmi les rares travaux de première main sur Louis.`,
  sources: 'Journal of the Western Slope, vol. 11, n° 4 (Mesa State College, 1996) ; PDF dans le dossier de l\'auteur.',
  lieux: ['L22', 'L23', 'T03', 'T04'] },

{ id: 'e-wagontracks-1998', type: 'etude', statut: 'resume', ordre: 203, date: 'novembre 1998', titre: 'Carmel Benavides de Robidoux dans Wagon Tracks',
  personnes: ['Carmel Benavides'],
  resume: "Le premier article consacré à Carmel, écrit après la première réunion de la famille Robidoux à Saint-Joseph.",
  texte: `Le bulletin de la Santa Fe Trail Association, Wagon Tracks (vol. 13, n° 1, novembre 1998), publie une étude sur Carmel Benavides de Robidoux, « épouse de fait d'Antoine Robidoux, voyageur, traiteur, marchand de Santa Fe, alcalde et interprète de Kearny ». L'autrice, qui a assisté à la première réunion de la famille Robidoux organisée par la société historique de Saint-Joseph, affirme que Carmel traversa la piste plus souvent que toute autre femme de son histoire. Elle relève une cinquantaine de graphies du nom Robidoux et retient celle de la signature d'Antoine dans les documents néo-mexicains.

Cet article sert de base aux travaux du National Park Service et de Frances Levine sur Carmel ; Levine juge toutefois que le nombre de traversées est peut-être surestimé pour Carmel et sous-estimé pour Antoine.`,
  sources: 'Wagon Tracks, vol. 13, n° 1 (novembre 1998), Santa Fe Trail Association (UNM Digital Repository) ; deux PDF dans le dossier de l\'auteur.',
  lieux: ['L17', 'L65', 'T07'] },

{ id: 'e-hornbeck-1913', type: 'etude', statut: 'resume', ordre: 204, date: '1913', titre: 'Hornbeck, Roubidoux\'s Ranch in the 70\'s',
  personnes: ['Louis'],
  resume: "L'histoire des débuts de Riverside par un ancien journaliste de Redlands, avec un chapitre sur Louis.",
  texte: `Robert Hornbeck, de Redlands, ancien correspondant du Rocky Mountain News, du Globe-Democrat et du Toledo Blade, publie en 1913 (Riverside, Press Printing Company) Roubidoux's Ranch in the 70's. Le livre retrace la Californie espagnole et mexicaine, la concession de Jurupa à Juan Bandini (chap. IV), un chapitre « Louis Roubidoux » (chap. VI, p. 80, avec portrait), puis la colonie de 1870 qui fonde Riverside sur l'ancien rancho, l'orange navel et les premiers journaux. La planche finale montre « Robidoux's Ranch ».

L'ouvrage, numérisé par Google à partir de l'exemplaire de Harvard, est du domaine public.`,
  note: "L'extraction de texte du PDF du dossier s'arrête au chapitre V : le chapitre VI reste à transcrire depuis le fac-similé.",
  sources: 'R. Hornbeck, Roubidoux\'s Ranch in the 70\'s (Riverside, 1913) ; PDF Google Books dans le dossier de l\'auteur.',
  lieux: ['L59', 'L62'] },

{ id: 'e-kelly-1933', type: 'etude', statut: 'resume', ordre: 205, date: 'octobre 1933', titre: 'Utah Historical Quarterly, vol. 6, n° 4',
  personnes: ['Antoine'],
  resume: "Le numéro où Charles Kelly publie la redécouverte de l'inscription de Westwater et réfute la date de 1831.",
  texte: `Dans le numéro précédent, un article sur « le mystérieux D. Julien » citait une inscription d'Antoine Robidoux près de Fruita (Colorado), datée de 1837 mais supposée mal recopiée pour 1831. Charles Kelly, qui l'a depuis retrouvée et photographiée, en donne la lecture correcte, la situe avec précision (voir le document « L'inscription de Westwater ») et maintient 1837. Il pense que Robidoux voulait fonder un nouveau poste sur la Green ou la White, peut-être à la suite des explorations de Denis Julien, qui grava cinq inscriptions sur la Green en 1836.`,
  sources: 'Utah Historical Quarterly, vol. 6, n° 4 (octobre 1933), p. 115-116 ; PDF dans le dossier de l\'auteur.',
  lieux: ['L50', 'L23'] },
// ===================================================================== MEMORIAL DE 1924, TASSÉ
{ id: 'd-decharge-1856', type: 'document', statut: 'traduction', ordre: 110, date: '23 mai 1856', titre: 'Rapport n° 157 de la Chambre des représentants sur la pension d\'Antoine Robidoux',
  personnes: ['Antoine'],
  resume: "Le rapport du comité des pensions d'invalidité qui reconnaît la blessure de San Pasqual ; la famille le conservait comme « certificat de congé honorable ».",
  texte: `Texte original (34e Congrès, 1re session, rapport n° 157, accompagnant le projet de loi H.R. 196) :

« Mr. Lumpkin, from the committee on invalids' pensions, made the following report: The committee on invalids' pensions, to whom was referred the petition of Antoine Robidoux, beg leave to submit the following report. That Antoine Robidoux was on or about June 9, 1846, employed by Brigadier General Kearney as Spanish interpreter and continued in actual service about ten months. That he was discharged honorably at Monterey, in California, in the month of April or May, 1847. That while in the actual discharge of his duty he received a severe lance wound at the battle of San Pasqual, from which he has ever since been disabled. His attending physician, a man of good reputation as a surgeon in his profession, testifies that the effect of the lance wound is now and has been since the reception of said wound, such as to render him entirely unable to make a support for himself and family by manual labor. The committee, therefore, recommend that the prayer of the petitioner be granted and beg leave to report back to the house bill No. 196 and recommend its passage. »

Traduction :

M. Lumpkin, au nom du comité des pensions d'invalidité, présente le rapport suivant. Le comité, saisi de la pétition d'Antoine Robidoux, expose qu'Antoine Robidoux fut engagé vers le 9 juin 1846 par le général de brigade Kearny comme interprète d'espagnol et resta en service effectif environ dix mois ; qu'il fut congédié honorablement à Monterey, en Californie, en avril ou mai 1847 ; que, dans l'exercice de ses fonctions, il reçut à la bataille de San Pasqual un grave coup de lance qui l'a depuis rendu invalide. Son médecin, chirurgien de bonne réputation, atteste que les suites de cette blessure le rendent, depuis lors, entièrement incapable de subvenir par le travail manuel à ses besoins et à ceux de sa famille. Le comité recommande donc de faire droit à la requête et propose l'adoption du projet de loi n° 196.`,
  note: "La loi est signée par le président Pierce le 23 août 1856 : 16,66 dollars par mois (voir le lieu « Washington : la pension d'Antoine »).",
  sources: `${ROB}, p. 198-199.`,
  lieux: ['L84', 'L32', 'L83'] },

{ id: 'd-gazette-1809', type: 'document', statut: 'transcription', ordre: 111, date: 'avril-juin 1809', titre: 'La maison Robidoux dans les annonces de la Missouri Gazette',
  personnes: ['Joseph II', 'Joseph III'],
  resume: "Quatre petites annonces de 1809, l'année de la mort du père, qui situent la grande maison familiale de la rue Seconde.",
  texte: `« Dr. Farrar, Surgery and Medicine. Office in Joseph Robidoux House, Second Street. » (16 mai 1809)

« L. T. Hampton, skindressing and breeches making; Mr. Joseph Robidoux's house, known as the Council House near Webster tavern. » (29 juin 1809)

« Prim and Davis, Taylors. Have entered into partnership and will continue the business in P. Pruns old stand opposite the late Robidoux's house. » (25 avril 1809)

« Auction Sale. On Monday, June 12, at the store of Alexander McKeever, next door to Madam Robidoux. » (31 mai 1809)

Commentaire : la « maison de feu Robidoux » est celle de Joseph II, mort en mars 1809 ; sa veuve Catherine Rollet est « Madame Robidoux ». Joseph III loue des pièces de la grande maison, surnommée Council House, où siégera le 7 décembre 1812 la première assemblée générale du territoire du Missouri.`,
  sources: `${ROB}, p. 114, 138 (d'après la Missouri Gazette).`,
  lieux: ['L122', 'L07', 'L08'] },

{ id: 'd-vol-1842', type: 'document', statut: 'resume', ordre: 112, date: '18 octobre 1842', titre: 'Le vol des quatre mille dollars de Joseph Robidoux',
  personnes: ['Joseph III', 'Jules'],
  resume: "Le cambriolage du magasin de Blacksnake, le procès manqué et la justice expéditive d'une compagnie de « régulateurs ».",
  texte: `Dans la nuit du 18 octobre 1842, quelqu'un force la fenêtre du magasin de Joseph Robidoux, au ruisseau Blacksnake, et emporte quatre caisses de mille dollars en pièces d'argent rangées sous l'étagère du bas. Joseph dort à côté du magasin, son commis Isidore Poulin dans une maison attenante ; ni l'un ni l'autre n'entend rien.

Les soupçons tombent sur les quatre fils de John Spencer, réputés faux-monnayeurs et joueurs, qui vivent à sept milles, dans le comté d'Andrew. Arrêtés sur la plainte de Joseph devant le juge de paix Samuel P. Hall, ils sont relâchés : leurs témoins jurent qu'ils étaient à cent milles. Seul indice, un soulier trouvé dans le champ de maïs, que Poulin reconnaît pour en avoir vendu la paire à un certain Scott.

Jules Robidoux va consulter à Sparta le juge David R. Atchison, qui laisse entendre que seule une action privée fera justice. Soixante-quinze hommes se réunissent chez Joseph, élisent pour capitaine le « général » Ashley, du comté d'Andrew, s'arrêtent à Jamestown chez le juge E. S. Castle ; vingt-cinq seulement vont jusqu'au bout. À la ferme Spencer, ils arrêtent Scott et Davis, pendent Davis pour le faire parler, puis font croire à Scott qu'on a tué son complice : il avoue. John et George Spencer ont pris l'argent ; Scott et Davis gardaient les portes de Joseph et de Poulin, armés de gourdins et de pistolets. Les caisses sont retrouvées enterrées au bord de la rivière 102, dans la prairie et près de la ferme ; il manque environ trois cents dollars. Joseph verse 1 300 dollars à la compagnie, qui se transforme en comité de « régulateurs » et chasse du pays plusieurs mauvais sujets. Davis s'évade ; Scott, témoin à charge, est relâché.`,
  note: "L'histoire du comté de Buchanan (1881) donne une version plus courte : tout l'argent sauf 27 dollars est retrouvé et la récompense est de 500 dollars.",
  sources: `${ROB}, p. 106-113 ; The History of Buchanan County (1881).`,
  lieux: ['L104', 'L102', 'L42'] },

{ id: 'd-seven-up', type: 'document', statut: 'resume', ordre: 113, date: '1803 (récit de la fin du XIXe siècle)', titre: 'La partie de « seven-up » : une légende de Blacksnake Hills',
  personnes: ['Joseph III'],
  resume: "Un conte facétieux de journal, repris par le Memorial : Joseph joue sa vie aux cartes contre un chef.",
  texte: `Le récit, écrit sur le ton de l'humour de presse de l'époque, raconte qu'à son arrivée aux collines du Serpent-Noir, Joseph Robidoux initie ses hôtes au seven-up et au poker et gagne sans cesse. Le conseil de la nation décide que le Grand Esprit est irrité et qu'il faut un sacrifice humain ; pourquoi pas ce Français, dont les biens reviendraient à la tribu ? Joseph, entré dans la salle du conseil, propose de jouer contre le chef, en lui laissant trois points d'avance, lequel des deux sera offert au Grand Esprit, non sans avoir d'abord misé une somme contre les biens du chef. Il gagne les deux parties.

Ce texte n'a pas de valeur historique : il reflète surtout les préjugés de ceux qui l'ont écrit. Il montre néanmoins la réputation de joueur que Joseph garda toute sa vie : le Memorial rappelle qu'il jouait encore au poker et au seven-up avec Elisha Gladden, Charley Stewart et des Indiens dans les années 1840.`,
  sources: `${ROB}, p. 67-70, 121.`,
  lieux: ['L12'] },

{ id: 'd-carmel-1924', type: 'document', statut: 'resume', ordre: 114, date: 'v. 1833 – 1888', titre: 'Les récits de Carmel Benavides selon le Memorial',
  personnes: ['Carmel Benavides', 'Amanda Barada', 'Antoine'],
  resume: "Le blizzard du Llano Estacado, les Comanches qui veulent acheter Amanda : les souvenirs que Carmel racontait à Durango.",
  texte: `Le Memorial recueille les histoires que Carmel Benavides racontait dans sa vieillesse. Fille d'un capitaine espagnol tué par les Comanches, née à Santa Fe (le 29 décembre 1812 selon la famille), mariée à Antoine en 1828, elle aimait la danse : on la voyait chevaucher en un jour de Santa Fe à Albuquerque pour un bal, et elle traversa plusieurs fois le Rio Grande à la nage, à cheval.

Dès 1833, dit le texte, elle avait franchi six fois les plaines entre Saint-Joseph et Santa Fe. Lors d'un de ces voyages, un blizzard surprend la caravane sur le Llano Estacado : la neige monte jusqu'aux chariots, toutes les mules gèlent, sept hommes meurent, ainsi que la servante qui dormait à côté d'elle. Les survivants brûlent les chariots et vivent des semaines de viande de mule gelée, jusqu'à l'arrivée d'une expédition de secours envoyée par Joseph Robidoux.

Après la mort d'Antoine (1860), Carmel repart pour Santa Fe avec la petite Amanda Barada, dans un convoi mené par le traiteur Leitensdorfer. Des Comanches s'approchent pour commercer et veulent acheter la fillette de dix ans contre des poneys, des couvertures et même un enfant. Carmel vit ensuite chez Amanda et son mari Christian F. Stollsteimer, qu'elle suit jusqu'à Durango, où elle meurt en 1888, à soixante-seize ans, parlant couramment espagnol, français et anglais.`,
  note: "Plusieurs points sont discutés : Carmel ne savait pas signer, la chronologie des traversées est invraisemblable dès 1833, et le Memorial confond par endroits Carmelete (Martina Anaya, mère d'Amanda) et la fille adoptive « Miss Barada ».",
  sources: `${ROB}, p. 183-187, 281-282.`,
  lieux: ['L38', 'L67', 'L71', 'T07'] },

{ id: 'd-genealogie-1924', type: 'document', statut: 'transcription', ordre: 115, date: '1924', titre: 'La généalogie familiale du Memorial',
  personnes: ['Joseph II', 'Joseph III', 'François', 'Isidore', 'Antoine', 'Louis', 'Michel', 'Eulalie', 'Pélagie', 'Jules'],
  resume: "Les dates de naissance des enfants de Joseph II et de Joseph III telles que la famille les transmettait en 1924.",
  texte: `Enfants de Joseph Robidoux (né en 1750) et de Catherine Rollet (née en 1767), mariés à Saint-Louis le 21 septembre 1782 :
– Joseph, 10 août 1783 ; épouse Eugénie Delisle, puis Angélique Vaudry.
– Lewis, 6 octobre 1786 ; mort en 1788.
– François, 25 septembre 1788 ; épouse Clarisse Delisle.
– Marguerite, 12 octobre 1790 ; morte jeune.
– Pierre Isidore, 6 novembre 1791 ; épouse Julie Desjarlais à Cahokia le 14 octobre 1815.
– Antoine, 24 septembre 1794 ; épouse Carmel Benavides.
– Louis, 31 juillet 1796 ; épouse Guadalupe García.
– Michel, 8 août 1798 ; épouse Susanne Vaudry.
– Eulalie, 7 septembre 1800 ; morte célibataire en 1818 (à Portage des Sioux).
– Marie Pélagie, 8 mai 1802 ; épouse Philippe Saucier.

Enfants de Joseph III : Joseph E. (né vers 1801-1802, de son union avec Eugénie Delisle, morte en couches avec la jumelle du garçon), puis, d'Angélique Vaudry : Jules C. et sa jumelle Messanie (morte à la naissance), 13 août 1814 ; Faraon H., 3 mai 1816, mort célibataire en 1840 ; François B., 25 février 1818 ; Félix, 1820 ; Edmond, 12 mai 1825 ; Sylvanie A., 18 mars 1827 ; Charles, 1831, tué en 1851 [1850].

« Faits remarquables » : le père devint aveugle à 53 ans, Joseph III en partie à 56, François à 53, Antoine à 58.`,
  note: "Ces dates diffèrent parfois des registres : Willoughby donne Isidore né le 2 novembre 1791, Louis le 5 août 1796, Michel le 3 août 1798 et Antoine le 22 septembre 1794 ; le baptême de Joseph III est daté du 2 août 1783 dans d'autres sources, et Charles est tué le 8 septembre 1850.",
  sources: `${ROB}, p. 222-223, 276-287 ; ${WIL}.`,
  lieux: ['L115', 'L73', 'L113', 'L114', 'L98'] },

{ id: 'd-stollsteimer-journal', type: 'document', statut: 'resume', ordre: 116, date: 'décembre 1866 – avril 1867', titre: 'Le journal de Christian Stollsteimer : la demande en mariage chez Carmel',
  personnes: ['Carmel Benavides', 'Amanda Barada'],
  resume: "Le seul témoignage de première main connu sur la maison de Carmel à Santa Fe : le récit, dans son journal, du prétendant éconduit puis accepté.",
  texte: `Christian Friedrich Stollsteimer (Echterdingen, Wurtemberg, 29 décembre 1842 – Pagosa Springs, 13 avril 1906) tenait un journal relié de cuir, frappé du blason familial, commencé en allemand puis poursuivi en anglais. Émigré à dix-sept ans (1860), passé par le Wisconsin, il gagne Saint-Joseph en 1863, suit à pied la route de la Platte jusqu'à Denver, puis devient commis du vivandier du fort Garland, à Costilla et à Conejos.

À la fin de 1866, ayant entendu parler « d'une jeune fille convenable qui vivait à Santa Fe », il part le lendemain de Noël avec le père Miguel Rolly. Le lendemain de leur arrivée, ils se présentent « à la maison de Mrs. Carmel Benavides de Ribidouse, la mère adoptive de la jeune fille », pour remettre des lettres et apercevoir Amanda, qui vient s'asseoir avec eux ; il repart « passablement amoureux ». Le prêtre, faisant office de père, porte une demande écrite. Le jour de l'An 1867, du vin et des gâteaux arrivent de chez « Mrs. Robidouse » : bon signe, croit le père ; le soir, la réponse, tournée avec tant de cérémonie espagnole que le prêtre la comprend de travers, est un refus. Au départ, les dames de la maison, sur la galerie, saluent les cavaliers « avec un sourire malicieux ».

Cinq semaines plus tard, Christian redescend à Santa Fe avec un chariot de calicots, écrit à la jeune fille et obtient une visite : il trouve une troupe d'amies qui prennent congé de « Miss Amanda » en retenant leurs rires. « Ce que je n'avais pu obtenir par une lettre de cérémonie, je l'obtins en plaidant » : ils se fiancent. Le mariage est célébré le 21 avril 1867, jour de Pâques, par le frère Eguillon ; Carmel accompagne le couple à Conejos.

Les souvenirs du fils Harry, recueillis par Ila Montroy, ajoutent qu'Amanda parlait couramment anglais, français et espagnol, et qu'elle sermonna le bandit Charles Allison, venu dîner chez elle sous escorte du shérif.`,
  note: "Le journal original appartient aux descendants ; Ann Oldham en a publié des extraits en 2000 (« Stollsteimer Chronik »). Les pages photographiées dans le dossier de l'auteur sont protégées : seules de brèves citations sont traduites ici.",
  sources: "A. Oldham, « Stollsteimer Chronik » (2000), p. 46-55 ; I. Montroy, « Colonel C. T. Stollsteimer », p. 56-57 ; nécrologies d'Archuleta County (p. 227) ; pages photographiées dans le dossier de l'auteur (dossier Armanda_Maria_Baracha).",
  lieux: ['L124', 'L67', 'L68', 'L125', 'L69', 'L126', 'L127', 'L72'],
  images: [{ src: 'images/photos/amanda-barada-stollsteimer-portrait.jpg', legende: 'Amanda Marie Barada Stollsteimer (1852-1916)' },
           { src: 'images/photos/christian-f-stollsteimer-portrait.jpg', legende: 'Christian Friedrich Stollsteimer (1842-1906)' }] },

{ id: 'd-clark-1827', type: 'document', statut: 'transcription', ordre: 117, date: '23 juillet 1827', titre: 'Licence de William Clark à « Antoine Robidoux and Company »',
  personnes: ['Antoine'],
  resume: "Le formulaire imprimé de la surintendance des Affaires indiennes, rempli à la main et signé par William Clark, qui autorise Antoine et sa compagnie à traverser le pays indien.",
  texte: `Texte (formulaire imprimé, parties manuscrites en italique entre astérisques) :

« WILLIAM CLARK, Superintendent of Indian Affairs: To all whom it may Concern: Under authority vested in me by the President of the United States, to grant permission to citizens or other persons to pass into and through the Indian country, &c., permission is hereby granted to *Antoine Robidoux and Company* to pass *through* the Indian country to *trade in the Territory*. In testimony whereof, I have hereunto fixed my seal. Given under my hand, at St. Louis, the *twenty third* day of *July* A.D. eighteen hundred and twenty *seven* and of the Independence of the United States, the *fifty second*. *Wm Clark* »

Traduction :

William Clark, surintendant des Affaires indiennes, à tous ceux qu'il appartiendra : en vertu de l'autorité que m'a conférée le président des États-Unis d'accorder aux citoyens et autres personnes la permission d'entrer dans le pays indien et de le traverser, permission est accordée par la présente à Antoine Robidoux et compagnie de traverser le pays indien pour faire la traite dans le Territoire. En foi de quoi j'ai apposé mon sceau. Donné de ma main à Saint-Louis, le vingt-trois juillet mil huit cent vingt-sept, cinquante-deuxième année de l'indépendance des États-Unis. Wm Clark.`,
  note: "La lecture « to trade in the Territory » est probable mais l'écriture est cursive ; le sceau est apposé à gauche. Deux ans plus tôt (29 juin 1825), Clark avait déjà délivré un passeport à Antoine et à Michel pour le Mexique.",
  sources: "Original photographié, dossier ROBIDOUX_FAMILY de l'auteur ; R. J. Willoughby (2012), p. 76-80.",
  lieux: ['L128', 'L81', 'L22', 'L17'],
  images: [{ src: 'images/documents/clark-1827-07-23-licence-antoine-robidoux-and-company.jpg', legende: 'Licence signée par William Clark, Saint-Louis, 23 juillet 1827' }] },

{ id: 'd-trois-inscriptions', type: 'document', statut: 'transcription', ordre: 118, date: '1837 – 1841', titre: 'Trois frères, trois inscriptions : Antoine, Louis et « M. Robidoux, trapper »',
  personnes: ['Antoine', 'Louis', 'Michel'],
  resume: "Une planche familiale réunit les gravures rupestres laissées par Antoine (1837), Louis (1841) et un « M. Robidoux » (1841).",
  texte: `Une planche du dossier familial rassemble trois inscriptions :

1. « Antoine Robidoux passé ici le 13 novembre 1837 pour établire maison traitte à la rv. Vert ou Wiyte » — canyon Westwater (Utah), à une quarantaine de milles au nord-est de Grand Junction.

2. « Louis Robidoux passo aqui el [cuarto ?] de mayo de 1841 » — drainage du Willow Creek, plateau de Tavaputs (Utah), au nord de l'inscription d'Antoine ; photo de George E. Stewart.

3. « M. Robidoux, trapper, 1841 » — gravée au bord d'un « Robidoux Creek » où, selon la légende de la planche, Michel tenait un poste de traite avec les Indiens ; le gué voisin, « Robidoux Crossing », aurait servi au Pony Express, et le ruisseau comme le gué porteraient son nom.`,
  note: "L'emplacement de la troisième inscription n'est pas précisé : elle n'est donc pas placée sur la carte. Le lien avec le Pony Express (1860-1861) et l'attribution à Michel restent à vérifier.",
  sources: "Planche du dossier ROBIDOUX_FAMILY de l'auteur ; J. Nelson (1996, 2003) ; C. Kelly (1933).",
  lieux: ['L50', 'L51'],
  images: [{ src: 'images/documents/inscription-m-robidoux-trapper-1841.jpg', legende: '« M. Robidoux, trapper, 1841 » (planche du dossier familial)' },
           { src: 'images/photos/willow-creek-inscription-louis-robidoux-1841.jpg', legende: 'L\'inscription de Louis au Willow Creek, 1841 (photo G. E. Stewart)' }] },

{ id: 'e-memorial-1924', type: 'etude', statut: 'fiche', ordre: 206, date: '1924', titre: 'O. M. Robidoux, Memorial to the Robidoux Brothers',
  personnes: ['Joseph III', 'Antoine', 'Louis', 'Michel', 'François', 'Isidore', 'Jules', 'Carmel Benavides'],
  resume: "Le livre de famille publié à Kansas City par Orral Messmore Robidoux, veuve d'un petit-fils de Joseph : une mine d'anecdotes, à manier avec précaution.",
  texte: `Orral Messmore Robidoux, épouse (1879) de Louis Robidoux, fils de Jules, publie en 1924 à Kansas City ce volume de 300 pages illustré de portraits, de plans et de documents. Il compile des papiers de famille, des souvenirs, des articles de journaux et des passages d'ouvrages (Tassé, Bancroft, Read, Emory).

Plan : I. La Louisiane espagnole et le père (pétition de 1798 au gouverneur Gayoso, contribution patriotique de 1799, l'« année du grand hiver » 1800) ; II. Les temps indiens (Lewis et Clark, Pike, la légende du seven-up, le chef Wathena, les bateaux) ; III. Joseph, fondateur de Saint-Joseph (le vol de 1842, le premier mariage, les dons de terrains, les églises, le vote pour Frémont en 1856, le dernier crampon du chemin de fer en 1859) ; les frères dans le Nord-Ouest et le Sud-Ouest (Michel au fort Laramie, Antoine, Carmel, San Pasqual, la pension de 1856, Louis à Jurupa, sa lettre de 1848, les marchands de Santa Fe en 1837) ; IV. Jules et ses enfants ; V. Le petit-fils Louis de Kansas City ; VI. La généalogie (France, Canada, Missouri) ; VII. La maison Robidoux et l'hôtel Robidoux.

Valeur : précieux pour les traditions de famille, les dates de naissance, les adresses de Saint-Joseph et les anecdotes (le bac, le moulin de 1841, l'explosion du moulin à vapeur vers 1844, l'écurie des rues Fourth et Felix, le 411 rue Edmond). Mais l'ouvrage multiplie les anachronismes (Joseph au service d'Astor dès 1799, Joseph « premier colon de Kansas City », dates de l'inscription de 1837 traduite à contresens) et les confusions de personnes ; chaque fait a été recoupé, quand c'était possible, avec Willoughby, Tassé et les histoires de comté.`,
  sources: `${ROB}.`,
  lieux: ['L97', 'L98', 'L99', 'L100', 'L101', 'L102', 'L103', 'L104', 'L105', 'L106', 'L107', 'L108', 'L109', 'L110', 'L111', 'L112', 'L121'] },

{ id: 'e-tasse-1878', type: 'etude', statut: 'fiche', ordre: 207, date: '1878', titre: 'Tassé, Les Canadiens de l\'Ouest, t. II, chapitre « Joseph Robidoux »',
  personnes: ['Joseph III', 'Antoine', 'Jules'],
  resume: "Le premier portrait en français de Joseph Robidoux, par le journaliste montréalais Joseph Tassé, repris en partie dans le Memorial de 1924.",
  texte: `Dans le second tome de ses Canadiens de l'Ouest (Montréal, 1878, p. 119-129 et 193), Joseph Tassé consacre un chapitre à Joseph Robidoux. Il le fait naître à Saint-Louis en 1783 d'un père canadien, le suit au comptoir qu'il ouvre en 1803 au pied des collines du Serpent-Noir, puis cite longuement le prince Maximilien de Wied, qui passe aux collines du Serpent-Noir le 24 avril 1833, en remontant le Missouri : « l'habitation de Robidoux, peinte en blanc » et entourée de la brillante verdure des prairies, fait un effet si agréable que le peintre Karl Bodmer en fait un croquis. Au retour, le 16 mai 1834, le prince trouve le propriétaire et son fils absents et ne peut obtenir de ses engagés ni provisions ni chevaux ; le 22 mai, il croise le vapeur Ioway, à bord duquel « le vieux Robidoux » lui donne des nouvelles de sa maison des Blacksnake Hills.

Tassé raconte ensuite les lettres patentes de 1843, le lotissement de la ville, son érection en village en 1845 sous le nom du patron de Joseph, la fortune et la mort du fondateur, avant de consacrer quelques lignes à Antoine (le Nouveau-Mexique, la blessure de la campagne de Kearny, la Californie, la mort à Saint-Joseph en 1860) et à Jules, qui bâtit la deuxième maison de la ville et meurt en 1875. Pour Tassé, Joseph « mérite une mention spéciale comme premier habitant de cette ville, premier commerçant de fourrures avec les sauvages, premier pionnier ».`,
  note: "Le Memorial de 1924 reproduit ce passage en français, très déformé par la transcription (p. 89-91).",
  sources: `Tassé, Les Canadiens de l'Ouest (Montréal, 1878), t. II, p. 119-129, 193, archive.org cihm_33779 ; ${ROB}, p. 89-91.`,
  lieux: ['L12', 'L15', 'L31', 'L38'] },

// ===================================================================== DANS LES JOURNAUX (Newspapers.com)
// Articles lus sur Newspapers.com ; découpures dans images/journaux/. Textes antérieurs à 1929 (domaine public) transcrits par l'auteur de l'atlas.
{ id: 'j-guide', type: 'journal', theme: '0. Guide de lecture', statut: 'fiche', ordre: 300, date: '1820 – 1930', titre: 'Les Robidoux dans la presse : ce que donnent 717 pages de journaux',
  personnes: ['Joseph III', 'Antoine', 'Louis', 'Michel', 'Jules'],
  resume: "Bilan d'un dépouillement de Newspapers.com : neuf grands sujets, beaucoup de reprises du même texte, quelques homonymes à écarter.",
  texte: `Une recherche sur Newspapers.com (Robidoux, Robideaux, Rubideau, Roubidoux, Robidou, Rubidoux, Stollsteimer) a donné 717 pages entre 1820 et 1930. Elles se rangent en neuf sujets, présentés ici par thème. Chaque fiche indique si l'article a été repris ailleurs.

Comment la presse de l'époque se recopie. Avant le télégraphe, et encore après, un journal reprend mot pour mot l'article d'un confrère en le citant (« St. Joseph Gazette », « St. Jo. Cycle », « Intell. »). Une seule nouvelle peut donc produire dix ou quinze pages. Ces reprises ne sont pas des témoignages indépendants : elles comptent pour une seule source. Les grandes séries de reprises sont les suivantes.
• Mai-juin 1825 : récit de William Huddart sur « Mr. Rubideau » au Green River (Missouri Intelligencer de Franklin, puis 14 journaux de Washington à Pensacola).
• Octobre-novembre 1842 : l'argent volé de Joseph est retrouvé (Missouri Republican, puis 8 journaux).
• Mars 1845 : les Utes détruisent le fort Uintah (St. Louis Republican du 6 mars, puis 18 journaux en deux semaines).
• Mai 1845 : on croit Antoine mort (Independence Expositor, puis 11 journaux). C'est une rumeur fausse, qui contredit la nouvelle de mars.
• Septembre 1850 : meurtre de Charles (St. Joseph Gazette, puis 9 journaux).
• Mai-juin 1855 : Michel revient des Plaines (St. Joseph Cycle, puis 10 journaux).
• Avril 1859 : mort de Jeffrey Deroine (dépêche de Saint-Louis, 9 journaux).
• Février-mai 1863 : le « cas de conscience » de Joseph (St. Joseph Herald, puis 4 journaux jusqu'en Californie).
• Mai-juin 1868 : mort de Joseph (une quinzaine de notices, du Montana au Kentucky). Elles ne sont pas toutes identiques : chaque journal résume à sa façon.
• Avril-juin 1927 : un feuilleton sur Kit Carson, publié dans une quinzaine de journaux, ne cite Antoine qu'en passant.

Petites annonces répétées. Plusieurs séries de pages ne sont qu'une seule annonce publiée tous les jours :
• Joseph vend sa propriété de la rue Main à Saint-Louis (Missouri Republican, 17 pages du 21 mai au 24 juin 1845), puis deux maisons entre les rues Elm et Myrtle (11 pages, août 1846).
• Louis vend le rancho San Timoteo (San Bernardino Guardian, juin-juillet 1867).
• Jules publie des annonces commerciales à Saint-Joseph (1853-1854).

Homonymes et faux positifs à écarter :
• La Montreal Gazette de 1827 cite un Antoine Robidoux voisin d'une terre saisie dans la seigneurie de Yamaska, au Québec. Ce n'est pas le traiteur.
• Les Stollsteimer d'Ann Arbor, de Buffalo et de Brooklyn (1887-1913) appartiennent à une autre branche.
• De 1888 à 1902, la St. Joseph Gazette mentionne surtout l'école, l'hôtel, la rue et l'immeuble Robidoux.
• De 1891 à 1893, la Riverside Daily Enterprise parle presque toujours du mont Rubidoux et de l'ancien rancho.

Premiers avis, années 1820 (Missouri Republican et Missouri Intelligencer) :
• avis de succession où paraissent Michael Robideaux, Vitrai Papin et « F. Robideau » (mai 1820) ;
• listes de lettres en souffrance au bureau de poste, au nom d'Isadore Robideaux (1821), de « J. & F. Robideaux » (1823) et de François Robideaux (1824-1825) ;
• procès de « Frenays & Fontaine contre Jos. Robidoux et Angélique, sa femme, avec F. Robidoux et sa femme » (novembre 1823) ;
• avis de dissolution de la société J. & F. Robidoux.`,
  note: "Les articles n'ont pas d'OCR exploitable sur le site : ils ont été lus sur les images. La date d'un article est celle du numéro consulté, souvent quelques jours ou semaines après les faits.",
  sources: 'Newspapers.com (abonnement de l\'auteur), recherches de novembre 2026.',
  lieux: ['L120', 'L104', 'L29', 'L78', 'L38', 'L16', 'L31'] },

// ---- Thème 1
{ id: 'j-1825-green-river', type: 'journal', theme: "1. Les traiteurs dans l'Ouest", statut: 'transcription', ordre: 301, date: '19 avril 1825 (Washington, 23 mai 1825)', titre: '« Mr. Rubideau » abandonné sans un cheval au Green River',
  personnes: ['Antoine', 'François', 'Michel'],
  resume: "La première mention d'un Robidoux au-delà des Rocheuses dans la presse américaine : une attaque arapaho près du Green River, à l'automne 1824.",
  texte: `« Franklin, Mo. April 19. William Huddard, who went to Santa Fe in one of the trading companies, last summer, has just returned, having left Taos on the 12th of January last. He gives us the following particulars: — On the 24th of August, he, in company with fourteen others, left Taos for the purpose of trapping for beaver, and travelled west thirty days. On Green River (probably the Rio Colorado of the West) the company separated, and nine ascended the river. Our informant was among those who remained; and in a few days they accidentally fell in with five other Americans, among whom was Mr. Rubideau. Two days after this junction, a large party of the Aripehoes attacked them, killed one person by the name of Nowlin, and robbed the others. The party of six then concluded to return to Taos, and left Mr. Rubideau and his men in the mountains without a single horse or mule. »

— Traduction —
Franklin (Missouri), 19 avril. William Huddart, parti l'été dernier pour Santa Fe avec une des compagnies de traite, vient de rentrer ; il a quitté Taos le 12 janvier. Le 24 août [1824], avec quatorze compagnons, il a quitté Taos pour piéger le castor et marché trente jours vers l'ouest. Sur le Green River (« sans doute le Rio Colorado de l'Ouest »), la compagnie s'est séparée et neuf hommes ont remonté la rivière. Ceux qui restaient ont rencontré par hasard cinq autres Américains, dont M. Rubideau. Deux jours plus tard, un fort parti d'Arapahos les a attaqués, a tué un certain Nowlin et les a dépouillés. Les six ont décidé de rentrer à Taos et ont laissé M. Rubideau et ses hommes dans les montagnes sans un cheval ni une mule.`,
  note: "Le prénom n'est pas donné. Willoughby y voit Antoine, alors associé à Taos avec François. L'article cite aussi trois Américains tués au Nouveau-Mexique (Nance, Foot, Hadley).",
  recoupements: "Le texte vient du Missouri Intelligencer de Franklin. Le Daily National Intelligencer de Washington le reprend le 23 mai 1825 (« Intell. »), puis 13 journaux le recopient mot pour mot entre le 23 mai et le 18 juin 1825 : Washington Gazette, Daily National Journal, Philadelphia Inquirer, United States Gazette, Harrisburg Chronicle, Herald and Torch Light, Pennsylvania Republican, Lancaster Intelligencer, Village Herald, Alexandria Gazette, Vermont Watchman, Sparta Review et Pensacola Gazette. C'est une seule source.",
  sources: 'Daily National Intelligencer (Washington), 23 mai 1825, d\'après le Missouri Intelligencer (Newspapers.com).',
  lieux: ['L120', 'L131'],
  images: [{ src: 'images/journaux/1825-05-23-national-intelligencer-huddart-rubideau-green-river.jpg', legende: 'Daily National Intelligencer, 23 mai 1825 (Newspapers.com)' }] },

{ id: 'j-1845-uintah', type: 'journal', theme: "1. Les traiteurs dans l'Ouest", statut: 'resume', ordre: 302, date: 'mars – mai 1845', titre: 'Le fort Uintah détruit, puis Antoine donné pour mort',
  personnes: ['Antoine'],
  resume: "Deux vagues de nouvelles en 1845 : en mars, les Utes prennent le fort Uintah et Antoine se réfugie au fort Uncompahgre ; en mai, on le croit mort.",
  texte: `Mars 1845. Le St. Louis Republican du 6 mars, repris par le Washington Union du 18 mars (p. 3) et le Daily Madisonian du 19 mars, annonce que les Utes ont pris « le fort d'Antoine Robidoux sur la Wintae [Uintah] » et tué les traiteurs et les engagés. Antoine Robidoux s'est échappé vers son fort de la « Campagara » [Uncompahgre]. Les journaux y voient la vengeance du massacre de chefs utes à Santa Fe en août 1844.

Mai 1845. Le 1er mai, le Louisville Daily Courier cite l'Independence Expositor du 17 avril. Des voyageurs arrivés de Santa Fe confirment « le massacre des traiteurs par les Utes ». On suppose qu'Antoine Robideaux a péri, car on est sans nouvelles de lui depuis l'hiver. La même dépêche signale la mort de Richard McCarty, d'Independence, à Santa Fe en février, et le vol de 165 mules par les Apaches sur la Jornada del Muerto.

La rumeur était fausse. Antoine rentre à Saint-Joseph en 1845. Sa nécrologie de 1860 raconte qu'une expédition vers les montagnes, cette année-là, perdit cent à deux cents chevaux dans les tempêtes, et que Joseph envoya des secours qui le ramenèrent « dans un état déplorable ».`,
  recoupements: "Mars : la nouvelle part du St. Louis Republican (6 mars) et passe en deux semaines dans 18 journaux, du Louisville Courier (12 mars) au Pittsburgh Post (22 mars) et au Spirit of Democracy (28 mars) : New York Herald, New-York Tribune, Brooklyn Eagle, Evening Post, Alexandria Gazette, Washington Union, Daily Madisonian, Buffalo Courier, Vicksburg Daily Whig… Mai : la rumeur de la mort d'Antoine est reprise par 11 journaux entre le 1er et le 14 mai (Boon's Lick Times, Baltimore Daily Commercial, Public Ledger, Niles' National Register, Holly Springs Gazette, Michigan Expositor…). Les deux séries sont deux sources distinctes, et la seconde dément en partie la première.",
  sources: 'Washington Union, 18 mars 1845, p. 3 ; Louisville Daily Courier, 1er mai 1845 (Newspapers.com).',
  lieux: ['L29', 'L23', 'L22', 'L30'],
  images: [{ src: 'images/journaux/1845-03-18-washington-union-fort-uintah.jpg', legende: 'Washington Union, 18 mars 1845, p. 3 (Newspapers.com)' }] },

{ id: 'j-1855-michel', type: 'journal', theme: "1. Les traiteurs dans l'Ouest", statut: 'transcription', ordre: 303, date: '25 mai 1855', titre: 'Michel Robidoux revient des Plaines',
  personnes: ['Michel'],
  resume: "Vingt-cinq jours après avoir quitté Laramie, Michel annonce une guerre indienne et décrit son poste, à soixante milles du fort.",
  texte: `« From the Plains. Mr. Mitchell Robidoux has just returned from the Plains, (twenty-five days from Laramie,) and confirms our worst apprehensions of a terrible Indian war on our frontiers. The Indians everywhere are confederating, to offer active resistance to the Government troops, whose coming they eagerly anticipate. The leader of the Smoke band, well known to all traders, and a terror to all who know him, is acting the Tecumseh in banding them together. Delay at this juncture is dangerous. The four regiments should have been by this time on the Plains, to prevent a general coalition of all the different tribes. [...] Mr. Robidoux came in without detriment to person or property, save the loss of ten horses, stolen by the Ogalalies. The weather at his trading post, sixty miles from Laramie, has been, during the whole winter, extremely mild and pleasant; so much so, that during the months of January and February, he found it convenient to dispense with the usual fire. — St. Jo. Cycle. »

— Traduction —
M. Michel Robidoux revient des Plaines, à vingt-cinq jours de Laramie. Il confirme nos pires craintes d'une terrible guerre indienne. Partout, les Indiens se confédèrent pour résister aux troupes, dont ils attendent l'arrivée. Le chef de la bande de Smoke, bien connu des traiteurs et redouté de tous, joue les Tecumseh. Robidoux est rentré sain et sauf, mais les Oglalas lui ont volé dix chevaux. À son poste de traite, à soixante milles de Laramie, l'hiver a été si doux qu'il s'est passé de feu en janvier et en février.`,
  note: "Le contexte est celui de l'affaire Grattan (août 1854) et de l'expédition Harney, qui aboutit au massacre de Blue Water (Ash Hollow) en septembre 1855. Le poste de Michel n'est pas localisé ; « soixante milles de Laramie » le place sans doute en aval sur la Platte Nord, vers Scotts Bluff.",
  recoupements: "Le texte vient du St. Joseph Commercial Cycle (25 mai 1855). Il est repris tel quel par la Liberty Tribune (25 mai), le Tri-Weekly Washington (29 mai), le Columbia Herald-Statesman, le Washington Union et le Charleston Mercury (1er juin), le Kansas Herald of Freedom (2 juin), le Weekly Plain Dealer (6 juin), le Quad-City Times (7 juin) et le Weekly Arkansas Gazette (8 juin). C'est une seule source.",
  sources: 'Liberty Tribune, 25 mai 1855, d\'après le St. Joseph Cycle (Newspapers.com).',
  lieux: ['L157', 'L121', 'L92'],
  images: [{ src: 'images/journaux/1855-05-25-liberty-tribune-michel-robidoux-plaines.jpg', legende: 'Liberty Tribune, 25 mai 1855 (Newspapers.com)' }] },

{ id: 'j-1912-westwater', type: 'journal', theme: "1. Les traiteurs dans l'Ouest", statut: 'transcription', ordre: 304, date: '23 février 1912', titre: "Moab découvre l'inscription de Westwater",
  personnes: ['Antoine'],
  resume: "Des éleveurs retrouvent l'inscription d'Antoine dans les Book Cliffs ; le journal de Moab la publie, avec une traduction fantaisiste.",
  texte: `« Message left by explorer found written on cliffs. A message left printed indelibly on a rocky wall of the Book Cliffs near Westwater by Antoine Robidoux, a French explorer who passed through Grand county in 1837, has been discovered by cattlemen in the Westwater country. The message is as follows: "ANTOINE ROBIDOUX PASSE ICI LE 13 NOVEMBRE 1837 POUR ESTBLIRE MAISON TRAITTE A LA RY VERT OU WIYTE." Translated, the message reads: "Antoine Robidous passed here the 13th of November, 1837, to establish a mission and bring a law to the reservation for the Uintah." The inscription is painted in red, at a point about 5 miles west of the Uintah railroad tracks and at the head of Bitter Creek canyon, which runs into the Grand river at Westwater, and at a place where the old Ute trail passes. »

— Commentaire —
La traduction du journal est fausse. Le texte signifie : « Antoine Robidoux est passé ici le 13 novembre 1837 pour établir une maison de traite à la rivière Verte ou Wiyte [White] ». C'est la plus ancienne publication connue de l'inscription, vingt et un ans avant l'article de Charles Kelly (1933). L'inscription est gravée, et non peinte.`,
  recoupements: "Aucune reprise trouvée.",
  sources: 'The Times-Independent (Moab, Utah), 23 février 1912 (Newspapers.com).',
  lieux: ['L50'],
  images: [{ src: 'images/journaux/1912-02-23-times-independent-inscription-westwater.jpg', legende: 'The Times-Independent (Moab), 23 février 1912 (Newspapers.com)' }] },

// ---- Thème 2
{ id: 'j-1842-vol', type: 'journal', theme: '2. Saint-Joseph, la ville du fondateur', statut: 'transcription', ordre: 311, date: '26 octobre 1842', titre: '« Stolen Money Recovered » : la justice du juge Lynch',
  personnes: ['Joseph III'],
  resume: "Huit jours après le vol, la presse de Saint-Louis annonce que l'argent est retrouvé, grâce à des aveux arrachés par la pendaison simulée et le fouet.",
  texte: `« Stolen Money Recovered. — We are gratified to learn, that the money, of which Mr. Robidoux, residing at the Black Snake Hills, was robbed a few days since, has been recovered, with the exception of a small amount. The sum stolen was about $4,000. We have not learned all the particulars, but understand that the offenders were brought under the jurisdiction of Judge Lynch, and after trying the choaking and whipping process a short time, they confessed. »

— Traduction —
Nous apprenons avec plaisir que l'argent volé il y a quelques jours à M. Robidoux, des Black Snake Hills, a été retrouvé, sauf une petite somme. On avait volé environ 4 000 dollars. Nous ne connaissons pas tous les détails, mais les coupables ont été soumis à la juridiction du juge Lynch : après un moment d'étranglement et de fouet, ils ont avoué.`,
  note: "Voir le document « Le vol des quatre mille dollars de Joseph Robidoux » pour le récit complet du Memorial (1924).",
  recoupements: "Le texte vient du Missouri Republican (Saint-Louis). Il est repris par le Courier-Journal de Louisville (28 octobre et 7 novembre), le Jefferson Inquirer (3 novembre), le Columbia Herald-Statesman (4 et 11 novembre), le Daily National Intelligencer (4 novembre), le Knickerbocker News d'Albany (15 novembre) et le Fall River Argus (17 novembre). C'est une seule source.",
  sources: 'Missouri Republican (Saint-Louis), 26 octobre 1842 (Newspapers.com).',
  lieux: ['L104', 'L12'],
  images: [{ src: 'images/journaux/1842-10-26-missouri-republican-argent-vole-recupere.jpg', legende: 'Missouri Republican, 26 octobre 1842 (Newspapers.com)' }] },

{ id: 'j-1845-annonce', type: 'journal', theme: '2. Saint-Joseph, la ville du fondateur', statut: 'transcription', ordre: 312, date: '21 mai 1845 – août 1846', titre: 'Joseph vend ses maisons de Saint-Louis',
  personnes: ['Joseph III'],
  resume: "Au moment où sa ville prend son essor, Joseph met en vente ses biens de Saint-Louis contre de l'argent… et des marchandises de traite.",
  texte: `« Valuable City Property for Sale. The subscriber will sell his property in the city of St. Louis, in block No. 5, containing 84 feet front on Main street, by 221 feet in depth. The whole of the property has valuable buildings on it, bringing a rent of $2,200 per year. He will sell the whole or one half, and take half in cash and the balance in Indian goods and groceries. JOSEPH ROBIDOUX. For further particulars, enquire of James Browne, No. 73 South Main street. » (Missouri Republican, 21 mai 1845, « m21 1m »)

« Bargains. — The undersigned offers for [sale] one or two houses on Main or Front street, between Elm and Myrtle streets, for cash or merchandise. JOSEPH ROBIDOUX. » (Missouri Republican, août 1846, « au1 1m »)

— Traduction —
Propriété de valeur à vendre. Le soussigné vendra sa propriété de Saint-Louis, îlot n° 5 : 84 pieds de façade sur la rue Main, 221 pieds de profondeur. Elle porte des bâtiments de valeur qui rapportent 2 200 dollars de loyer par an. Il vendra le tout ou la moitié, payable pour moitié en argent comptant et pour le reste en marchandises de traite et en épicerie.`,
  note: "L'îlot 5 est celui de la vieille maison familiale (la Council House de la rue Seconde, devenue rue Main). Le Memorial situe le jardin de Joseph à l'angle des rues Elms et Myrtle.",
  recoupements: "Ce n'est pas une série d'articles mais une seule annonce payée pour un mois : 17 pages du Missouri Republican, du 21 mai au 24 juin 1845. La seconde annonce occupe 11 pages, du 5 au 31 août 1846.",
  sources: 'Missouri Republican (Saint-Louis), 21 mai 1845 et 5 août 1846 (Newspapers.com).',
  lieux: ['L155', 'L122'],
  images: [{ src: 'images/journaux/1845-05-21-missouri-republican-annonce-propriete-joseph-robidoux.jpg', legende: 'Missouri Republican, 21 mai 1845 (Newspapers.com)' }] },

{ id: 'j-1859-deroine', type: 'journal', theme: '2. Saint-Joseph, la ville du fondateur', statut: 'transcription', ordre: 313, date: '1er avril 1859', titre: 'La mort de Jeffrey Deroine, ancien esclave de Joseph',
  personnes: ['Jeffrey Deroine', 'Joseph III'],
  resume: "Une dépêche télégraphique de Saint-Louis résume une vie hors du commun : esclave, traiteur, interprète, reçu dans les cours d'Europe.",
  texte: `« St. Louis, April 1. Jeffres Deron, formerly a slave of Joseph Robidoux, the founder of St. Joseph, died there yesterday. Deceased, by long association with his master in the Indian country, became an expert trader, and realized sufficient to purchase his freedom in 1835. He was then employed as government interpreter. In 1844 he accompanied a number of Iowa and Sacs and Fox Indian chiefs, under the charge of Col. Melody, to Europe. His interpretation of their language was so intelligent that he not only made a favorable impression upon all the dignitaries of foreign courts at which they were received, but it is said fascinated a lady of high rank. D'Israeli and other literati showed him marked attention. He returned to this country loaded with presents, having mastered several European languages during his visit. He has since served as interpreter to guide the U.S. exploring expeditions. »

— Traduction —
Jeffrey Deroine, ancien esclave de Joseph Robidoux, fondateur de Saint-Joseph, est mort hier [31 mars 1859] dans cette ville. À force de suivre son maître en pays indien, il était devenu un traiteur habile et avait gagné de quoi acheter sa liberté en 1835. Il fut ensuite interprète du gouvernement. En 1844, il accompagna en Europe des chefs ioways, sauks et renards conduits par le colonel Melody. Ses traductions firent si bonne impression dans les cours étrangères qu'il aurait, dit-on, séduit une dame de haut rang ; Disraeli et d'autres lettrés le remarquèrent. Il en revint chargé de présents et parlant plusieurs langues européennes. Il servit ensuite d'interprète aux expéditions d'exploration.`,
  note: "Les archives (Willoughby, Olson) placent le rachat en 1832 (600 dollars versés à Joseph par l'agent Hughes) et un arrêt d'appel en 1835. La délégation ioway de 1844-1845 voyagea avec George Catlin à Londres, Paris et Bruxelles.",
  recoupements: "C'est une seule dépêche télégraphique, reprise du 4 avril au 2 mai 1859 : Courier-Journal (Louisville), Knickerbocker News, Daily Gate City (Keokuk), Cleveland Leader, Keosauqua Republican, Lynchburg Daily Virginian, Liberty Tribune, Holt County News et The Recorder.",
  sources: 'Courier-Journal (Louisville), 4 avril 1859 (Newspapers.com).',
  lieux: ['L158', 'L159', 'L12'],
  images: [{ src: 'images/journaux/1859-04-04-courier-journal-mort-jeffrey-deroine.jpg', legende: 'Courier-Journal, 4 avril 1859 (Newspapers.com)' }] },

{ id: 'j-1863-conscience', type: 'journal', theme: '2. Saint-Joseph, la ville du fondateur', statut: 'transcription', ordre: 314, date: 'février – mai 1863', titre: 'Un cas de conscience : trois cents dollars rendus par un confesseur',
  personnes: ['Joseph III'],
  resume: "Un catholique de Saint-Louis avoue en confession avoir escroqué Joseph Robidoux ; le prêtre lui fait parvenir l'argent.",
  texte: `« A Case of Conscience. — Joseph Robidoux, Sr., one of our oldest citizens, was lately in receipt of about three hundred dollars, the history of which will never be known. A Catholic in St. Louis, at confession, informed the Priest that he had defrauded Mr. Robidoux of that amount and made full restitution. The Priest remitted the same to its rightful owner. Mr. Robidoux has not the slightest idea of the name of the party, or the transaction out of which the affair could have sprung. — Who will say that the "monitor within" is not a faithful and persistent watcher over the acts of men? — St. Jos. Herald. »

— Traduction —
Un cas de conscience. Joseph Robidoux père, l'un de nos plus anciens citoyens, a reçu récemment environ trois cents dollars dont on ne connaîtra jamais l'histoire. À confesse, un catholique de Saint-Louis a avoué au prêtre avoir escroqué cette somme à M. Robidoux, et il l'a remboursée en entier. Le prêtre l'a remise à son légitime propriétaire. M. Robidoux n'a pas la moindre idée du nom de cette personne ni de l'affaire en cause. Qui dira que la « voix intérieure » ne veille pas fidèlement sur les actes des hommes ?`,
  recoupements: "Le texte vient du St. Joseph Herald (février 1863). Il est repris par la Liberty Tribune (3 avril), le Missouri State Times (4 avril), le Clinton Republican (10 avril) et le Shasta Courier, en Californie (2 mai). C'est une seule source.",
  sources: 'Liberty Tribune, 3 avril 1863, d\'après le St. Joseph Herald (Newspapers.com).',
  lieux: ['L15', 'L108'],
  images: [{ src: 'images/journaux/1863-04-03-liberty-tribune-cas-de-conscience.jpg', legende: 'Liberty Tribune, 3 avril 1863 (Newspapers.com)' }] },

{ id: 'j-1866-anniversaire', type: 'journal', theme: '2. Saint-Joseph, la ville du fondateur', statut: 'transcription', ordre: 315, date: '3 août 1866', titre: 'Les deux fondateurs fêtent leurs quatre-vingt-deux ans',
  personnes: ['Joseph III'],
  resume: "Joseph Robidoux et John Patee, les deux « fondateurs » rivaux de Saint-Joseph, sont nés le même jour.",
  texte: `« From St. Joseph. Special Dispatch to the Republican. St. Joseph, August 3. The two founders of our city Joseph Robidoux and John Patee yesterday celebrated their eighty-second birthday. The former was the first white man to penetrate the upper Missouri country, when St. Louis was a mere trading post. »

— Traduction —
Saint-Joseph, 3 août. Les deux fondateurs de notre ville, Joseph Robidoux et John Patee, ont fêté hier leur quatre-vingt-deuxième anniversaire. Le premier fut le premier Blanc à pénétrer dans le haut Missouri, quand Saint-Louis n'était encore qu'un comptoir.`,
  note: "La dépêche donne le 2 août comme anniversaire de Joseph, ce qui confirme la date retenue par l'atlas (2 août 1783 ou 1784). John Patee, qui lança l'« addition Patee » au sud de la ville, est le promoteur du Patee House.",
  recoupements: "Cette dépêche du Tri-Weekly Missouri Republican (6 août 1866) est reprise ou résumée par le Weekly Caucasian (8 août), The Landmark (10 août), le Weekly Tribune (16 août) et le Montana Post (22 septembre).",
  sources: 'Tri-Weekly Missouri Republican, 6 août 1866 (Newspapers.com).',
  lieux: ['L15', 'L04'] },

// ---- Thème 3
{ id: 'j-1850-charles', type: 'journal', theme: '3. Morts dans la famille du fondateur', statut: 'transcription', ordre: 321, date: '8 septembre 1850', titre: '« Serious Affair » : Charles Robidoux tué d\'un coup de fusil',
  personnes: ['Joseph III'],
  resume: "Une nuit de chahut finit mal : le fils cadet de Joseph est abattu depuis la fenêtre d'un magasin de la rue principale.",
  texte: `« Serious Affair. A serious affair occurred in this place on Sunday evening last, the 8th inst., which resulted in the death of Charles Robidoux, son of Mr. Joseph Robidoux. The facts connected with this melancholy affair, are about these. On Sunday night, young Robidoux in company with other young men, were on the street engaged in a "frolic or a sort of carousal," as was stated by witnesses, and such as is frequently indulged in by a portion of our young men. About 11 or 12 o'clock they were making a noise along the street, rapping at some of the doors of the business houses, so as to awaken the clerks and others sleeping therein. This they did at the store room of D. & T. D. S. MacDonald. After leaving the door they went to a post set in the ground at the edge of the pavement, opposite the building, and commenced pulling it up. Before they succeeded in getting it out of the ground, some of the police appeared on the pavement, when the young man who was then in company with the deceased, left him and crossed the street, to the Edgar House. Young Robidoux still remained at the post, which he succeeded in removing. Placing it on his shoulder, he started towards the opposite side of the street, and when he had gone about one third of the distance, a gun was fired from the window in the second story of MacDonald's store. The load which consisted of shot of large size, took effect in the back part of the head, tearing it almost to atoms. He expired in a few minutes, not having spoken after he was shot, except to call the name of his companion, which he did two or three times. [...] Duncan MacDonald confessed that he had shot the gun, but as he states, with no intention of injuring any person, as he knew no person then on the street. He is now undergoing examination before Esquires Wash and Tracy, which will probably be concluded to-day. Charles Robidoux was a young man much respected in this place, and his death is a source of great regret to his friends and numerous acquaintances. — St. Joseph Gazette. »

— Résumé —
Le dimanche 8 septembre 1850, vers minuit, Charles Robidoux et d'autres jeunes gens font du chahut dans la rue et frappent aux portes des magasins pour réveiller les commis. Devant le magasin de D. & T. D. S. MacDonald, ils arrachent un poteau planté au bord du trottoir. La police arrive, le compagnon de Charles s'enfuit vers l'Edgar House. Charles traverse la rue, le poteau sur l'épaule. Un coup de fusil chargé de gros plomb, tiré d'une fenêtre de l'étage, l'atteint à l'arrière de la tête. Il meurt en quelques minutes en appelant son ami. Duncan MacDonald avoue avoir tiré, sans intention de blesser quelqu'un, dit-il. Il comparaît devant les juges de paix Wash et Tracy.`,
  recoupements: "Le texte vient de la St. Joseph Gazette. Il est repris par la Frontier Guardian de Kanesville (18 septembre), la Liberty Tribune et le Missouri Telegraph (20 septembre), le Tri-Weekly Missouri Republican (21 septembre), le Journal and Courier et le Weekly Pioneer (26 septembre), le Missouri Republican (27 septembre), le Jefferson Inquirer (28 septembre) et le Monmouth Atlas (11 octobre). C'est une seule source.",
  sources: 'Liberty Tribune, 20 septembre 1850, d\'après la St. Joseph Gazette (Newspapers.com).',
  lieux: ['L78'],
  images: [{ src: 'images/journaux/1850-09-20-liberty-tribune-mort-charles-robidoux.jpg', legende: 'Liberty Tribune, 20 septembre 1850 (Newspapers.com)' }] },

{ id: 'j-1860-antoine', type: 'journal', theme: '3. Morts dans la famille du fondateur', statut: 'resume', ordre: 322, date: '1er septembre 1860', titre: "La nécrologie d'Antoine dans la presse de Saint-Louis",
  personnes: ['Antoine', 'Carmel Benavides'],
  resume: "Trois jours après la parution de la notice de la St. Joseph Gazette, le Missouri Republican la reproduit en entier.",
  texte: `Le texte est celui de la St. Joseph Gazette du 30 août 1860, transcrit et traduit dans le document « Nécrologie d'Antoine Robidoux ». La version de Saint-Louis est lisible là où la copie du Los Angeles Star ne l'est pas. Elle confirme deux lectures :
• « In 1856 he went to Washington and remained there a year, arranging some business with the Government » : il s'agit de la pension de 1856 ;
• « He was found in a most deplorable condition and saved » : l'épisode des tempêtes de 1845.

Le portrait final dit : « Mr. Robidoux was a very remarkable man — tall, slender, athletic and agile. »`,
  recoupements: "Cinq journaux reproduisent la même notice entre le 1er et le 29 septembre 1860 : Missouri Republican, Daily Gate City (Keokuk, 5 septembre), Liberty Tribune (7 septembre), Cleveland Leader (18 septembre, deux éditions) et Los Angeles Star (29 septembre). C'est une seule source.",
  sources: 'Missouri Republican (Saint-Louis), 1er septembre 1860, d\'après la St. Joseph Gazette du 30 août (Newspapers.com).',
  lieux: ['L38', 'L84', 'L32'],
  images: [{ src: 'images/journaux/1860-09-01-missouri-republican-mort-antoine-robidoux.jpg', legende: 'Missouri Republican, 1er septembre 1860 (Newspapers.com)' }] },

{ id: 'j-1868-joseph', type: 'journal', theme: '3. Morts dans la famille du fondateur', statut: 'transcription', ordre: 323, date: '27 mai – juin 1868', titre: 'La mort du fondateur, « mort relativement pauvre »',
  personnes: ['Joseph III'],
  resume: "Les journaux de la région rendent compte de la mort de Joseph en quelques lignes, sans complaisance : sa fortune lui avait échappé.",
  texte: `« Death of an Old Citizen of St. Joseph. — Joseph Robidoux, the first inhabitant and founder of St. Joseph, died in that city last Wednesday morning, at the age of 84. He was taken ill during the night, having retired in apparent good health. Mr. Robidoux established an Indian trading post at that place nearly sixty years ago, and has resided there ever since. After he laid off the ground into town lots he became wealthy, but most of it passed out of his hands years ago, and he died comparatively poor. His children and grand children are numerous. »

— Traduction —
Joseph Robidoux, premier habitant et fondateur de Saint-Joseph, est mort dans cette ville mercredi matin [27 mai 1868], à 84 ans. Il s'était couché en bonne santé apparente et fut pris de malaise dans la nuit. Il avait fondé là un comptoir de traite il y a près de soixante ans et y avait toujours vécu. Le lotissement de ses terres l'avait enrichi, mais il avait perdu depuis longtemps la plus grande partie de sa fortune et il meurt relativement pauvre. Ses enfants et petits-enfants sont nombreux.`,
  recoupements: "Une quinzaine de journaux annoncent la mort entre le 28 mai et le 19 juin 1868 : Gallatin North Missourian, Tri-Weekly Missouri Republican, Omaha Herald, Nebraska City News (deux fois), Brookfield Gazette, Courier-Journal, Platte County Reveille, Richmond Conservator, Warrensburg Journal, Freeport Journal, Montana Post (deux éditions). Ce sont des résumés de la nouvelle partie de Saint-Joseph, pas un texte unique : les détails varient (âge de 84 ou 85 ans).",
  sources: 'Liberty Tribune, 5 juin 1868 (Newspapers.com).',
  lieux: ['L16', 'L47'],
  images: [{ src: 'images/journaux/1868-06-05-liberty-tribune-mort-joseph-robidoux.jpg', legende: 'Liberty Tribune, 5 juin 1868 (Newspapers.com)' }] },

{ id: 'j-1875-jules', type: 'journal', theme: '3. Morts dans la famille du fondateur', statut: 'transcription', ordre: 324, date: '26 février 1875', titre: 'Jules-César Robidoux, juge de paix et marchand',
  personnes: ['Jules', 'Joseph III'],
  resume: "La notice de la St. Joseph Gazette, reprise à Saint-Louis, résume la vie du troisième fils de Joseph.",
  texte: `« Death of Julius C. Robidoux, Sr. Mr. Julius C. Robidoux, Sr., a native of St. Louis, and well and favorably known to all our citizens of forty years ago, died at his residence in St. Joseph, Mo., on the 26th ult. The Gazette gives the following sketch of his life: Joseph C. Robidoux, Sr., was the third son of Joseph Robidoux, the founder of St. Joseph, and was born in St. Louis in 1816. After receiving a good education at the St. Louis University he came to St. Joseph, in the year 1836, and clerked for his father, who then kept an Indian store on Black Snake Hills. After the city was laid out by his father, he opened the first store in St. Joseph for the settlers, and also started two more, one at White Hall, now called Jimtown, and the other at Savanna. He continued in business in St. Joseph for fifteen years, accumulating a large fortune. In 1858 he was appointed Justice of the Peace, and was elected for two terms, making ten years. He justly earned the title of being one of the most competent and popular Justices Buchanan County ever had. In 1838 Mr. Robidoux was married, at Carondelet, in St. Louis County, to Miss Elizabeth Barada, by whom he had twelve children — six still living. Mr. Robidoux was a charitable man, giving bountifully to the poor, and assisting with a helping hand all those who were needy and in want. He was enterprising, as the number of public houses he has erected testifies, and as a man he bore a character above reproach. [...] For many years Mr. Robidoux has been a consistent member of the Catholic Church, and died the death of a Christian. He had been sick for about three months, and was confined for a month to his bed. His disease was consumption. His funeral will take place from his late residence, on Edmond, between Fourth and Fifth streets, Sunday evening at 1:30 o'clock. »

— Résumé —
Troisième fils de Joseph, né à Saint-Louis en 1816 (la Gazette écrit par erreur « Joseph C. »), Jules étudie à l'université Saint-Louis et arrive en 1836 aux Black Snake Hills comme commis de son père. Il ouvre le premier magasin de Saint-Joseph, puis deux autres, à White Hall (Jimtown) et à Savannah, et fait fortune en quinze ans. Juge de paix de 1858 à 1868, il épouse en 1838 à Carondelet Elizabeth Barada, qui lui donne douze enfants, dont six vivent encore. Il est charitable et catholique. Il meurt de consomption chez lui, rue Edmond, entre les rues Quatre et Cinq.`,
  recoupements: "La notice de la St. Joseph Gazette est reprise par le St. Louis Globe-Democrat (1er mars 1875). Le Weekly Democrat-Forum de Maryville (4 mars) et l'Andrew County Republican (5 mars) publient des notices plus brèves.",
  sources: 'St. Louis Globe-Democrat, 1er mars 1875, d\'après la St. Joseph Gazette (Newspapers.com).',
  lieux: ['L31', 'L108', 'L109', 'L110'],
  images: [{ src: 'images/journaux/1875-03-01-st-louis-globe-democrat-mort-jules-robidoux.jpg', legende: 'St. Louis Globe-Democrat, 1er mars 1875 (Newspapers.com)' }] },

// ---- Thème 4
{ id: 'j-louis-californie', type: 'journal', theme: '4. Louis en Californie', statut: 'resume', ordre: 331, date: '1860 – 1868', titre: 'Don Louis Robidoux dans la presse du sud de la Californie',
  personnes: ['Louis'],
  resume: "Le Los Angeles Star et le San Bernardino Guardian montrent Louis parmi les grandes fortunes du comté, puis vendant ses terres.",
  texte: `4 août 1860, Los Angeles Star. Un correspondant de San Bernardino, qui signe « Civis », publie le rôle d'imposition établi par l'assesseur adjoint F. G. J. Margetson. Parmi « nos citoyens les plus riches » : Rains & Carlisle, 43 071 dollars ; Louis Robidoux, 14 000 dollars ; Abel Stearns, 9 250 dollars ; James W. Waters, 8 875 dollars ; la succession de Bernardo Yorba, 10 135 dollars.

22 juin 1867, San Bernardino Guardian (annonce répétée quatre semaines) : « Valuable Rancho for Sale. The fine and well known Rancho of San Timoteo, situated in San Bernardino County, is offered for sale, a bargain. It is well watered with never failing springs; a handsome Dwelling House, and Out-Houses attached, and known as the "Robidoux Rancho." This property contains one league of land, and is a desirable investment to those wishing to purchase land. Title perfect. For further particulars, apply to LOUIS ROBIDOUX, Jurupé Rancho, or to A. PARKS, San Bernardino, Cal. »
(Traduction : beau rancho de San Timoteo, bien arrosé par des sources intarissables, avec une belle maison et ses dépendances, connu sous le nom de « rancho Robidoux » ; une lieue de terre ; titre parfait.)

6 juin 1868, San Bernardino Guardian. Une description du comté, en suivant la Santa Ana vers l'ouest, arrive au « Jurupé Rancho, owned in part by Don Louis Robidoux, and now under the management of his agent, Arthur Parks ». C'est l'une des meilleures terres du comté : la rivière permet d'irriguer toutes les terres arables, et les peupliers de la rive fournissent le bois. Louis meurt trois mois plus tard, le 24 septembre 1868.`,
  recoupements: "L'annonce de 1867 paraît les 22 juin, 6 juillet et 27 juillet : c'est une seule annonce. Aucun autre journal ne reprend ces textes.",
  sources: 'Los Angeles Star, 4 août 1860 ; San Bernardino Guardian, 22 juin 1867 et 6 juin 1868 (Newspapers.com).',
  lieux: ['L87', 'L156', 'L34', 'L59'],
  images: [{ src: 'images/journaux/1867-06-22-san-bernardino-guardian-rancho-san-timoteo-a-vendre.jpg', legende: 'San Bernardino Guardian, 22 juin 1867 (Newspapers.com)' }] },

// ---- Thème 5
{ id: 'j-1904-elizabeth', type: 'journal', theme: '5. Les descendants', statut: 'resume', ordre: 341, date: '28 septembre 1904', titre: 'Elizabeth Barada Robidoux, « la première femme blanche » de Saint-Joseph',
  personnes: ['Jules'],
  resume: "La veuve de Jules meurt à Denver à 84 ans ; on la ramène à Saint-Joseph, et l'on parle déjà de réunir la famille sous un seul monument.",
  texte: `La St. Joseph Gazette du 28 septembre 1904 (p. 6) titre par erreur « Was Daughter of Joseph Robidoux ». C'est en fait la nécrologie d'Elizabeth Barada, veuve de Jules, morte à Denver à 84 ans.

Venue à Saint-Joseph en 1838 comme jeune épouse de Jules, elle est présentée comme la première femme blanche de la ville. Elle part en 1893 vivre chez son fils Louis à Kansas City. Lors du cinquantenaire de Saint-Joseph, on lui offre des lunettes en or.

Les funérailles partent de la maison du capitaine Joseph Thompson, 2206 rue Charles, et l'inhumation a lieu à Mount Olivet. Elle laisse un fils, Louis (Kansas City), et trois filles : Mme Thomas Conway (Saint-Louis), Mme L. F. Thacker (Los Angeles) et Mme Edwin Tappan (Denver). L'article évoque le projet de transférer les restes de la famille à Mount Olivet, sous un seul monument. Le transfert sera fait en 1908.`,
  recoupements: "Aucune reprise trouvée.",
  sources: 'St. Joseph Gazette, 28 septembre 1904, p. 6 (Newspapers.com).',
  lieux: ['L47', 'L31', 'L145'] },

{ id: 'j-1886-stollsteimer', type: 'journal', theme: '5. Les descendants', statut: 'resume', ordre: 342, date: '15 mars 1886', titre: "L'agent Stollsteimer et le déplacement des Utes du Sud",
  personnes: ['Amanda Barada'],
  resume: "Le mari d'Amanda, agent des Utes du Sud, se prononce pour le transfert de la réserve en Utah.",
  texte: `Le Santa Fe New Mexican du 15 mars 1886 (« The Ute Lands ») s'adresse aux lecteurs du pays de San Juan : ils seront heureux d'apprendre l'avis de l'agent Stollsteimer sur le probable déplacement des Utes du Sud. Le journal cite le Denver News : on demande qu'une commission choisisse en Utah une nouvelle résidence pour les Utes du Sud, et le Congrès sera prié de voter une loi.

Christian F. Stollsteimer, l'époux d'Amanda Barada, petite-fille adoptive d'Antoine, ne peut dire où les Indiens iraient. Il croit qu'ils trouveraient de bons pâturages en Utah et seraient plus heureux loin des Blancs. Selon lui, on réussit mal à faire des Utes des cultivateurs, mais ils font de bons éleveurs. La terre qu'ils quitteraient serait parmi les meilleures du Colorado pour l'agriculture et l'élevage.`,
  note: "Le projet échoue. La réserve des Utes du Sud est divisée en lots en 1895-1899 (voir le lieu « Durango : l'ouverture de la réserve ute »).",
  recoupements: "Le passage du Denver News est repris par le New Mexican. Les autres pages de 1887-1913 qui citent un Stollsteimer (Ann Arbor, Buffalo, Brooklyn) concernent une autre famille.",
  sources: 'Santa Fe New Mexican, 15 mars 1886 (Newspapers.com).',
  lieux: ['L126', 'L96'] },

{ id: 'j-1916-amanda', type: 'journal', theme: '5. Les descendants', statut: 'transcription', ordre: 343, date: '14 décembre 1916', titre: 'La mort d\'Amanda Stollsteimer à Pasadena',
  personnes: ['Amanda Barada'],
  resume: "Une courte notice nécrologique donne l'adresse d'Amanda et les noms de ses six enfants.",
  texte: `« Mrs. Amanda Stollsteimer. Mrs. Amanda Stollsteimer, a native of Missouri, aged 64 years, died yesterday afternoon at her home, 1710 Las Lunas street. She had lived in California three years and in Pasadena for six months. She leaves six children, C. A. Stollsteimer, Harry S. Stollsteimer and Tony S. Stollsteimer of Denver; Mrs. Lena S. Archulrat of San Diego, Mrs. A. L. Knorr and Mrs. Tom Accord of Pasadena. Funeral services will be held at 9 o'clock tomorrow at St. Andrew's church with burial at Mountain View. Arrangements are in charge of Ives & Warren Company. »

— Traduction —
Mme Amanda Stollsteimer, née au Missouri, 64 ans, est morte hier après-midi [13 décembre 1916] chez elle, au 1710 rue Las Lunas. Elle vivait en Californie depuis trois ans et à Pasadena depuis six mois. Elle laisse six enfants : C. A., Harry S. et Tony S. Stollsteimer, de Denver ; Mme Lena S. Archuleta, de San Diego ; Mme A. L. Knorr et Mme Tom Accord, de Pasadena. Les funérailles auront lieu demain à 9 heures à l'église St. Andrew, et l'inhumation au cimetière Mountain View.`,
  note: "« Archulrat » est une coquille pour Archuleta.",
  recoupements: "Aucune reprise trouvée.",
  sources: 'Pasadena Star-News, 14 décembre 1916 (Newspapers.com).',
  lieux: ['L160', 'L72'],
  images: [{ src: 'images/journaux/1916-12-14-pasadena-star-news-mort-amanda-stollsteimer.jpg', legende: 'Pasadena Star-News, 14 décembre 1916 (Newspapers.com)' }] },

{ id: 'j-1923-louis', type: 'journal', theme: '5. Les descendants', statut: 'transcription', ordre: 344, date: '7 février 1923', titre: '« Death of a Robidoux » : Louis, le petit-fils',
  personnes: ['Jules'],
  resume: "Le petit-fils du fondateur, tenancier de saloon puis homme d'affaires de Kansas City, meurt d'apoplexie ; c'est lui qui avait fait transférer le corps de Joseph à Mount Olivet.",
  texte: `« Death of a Robidoux. Grandson of founder of St. Joseph is no more. Stroke of apoplexy suffered by Louis Robidoux three weeks ago proves fatal — will be buried at Morrill, Kan., tomorrow. Louis Robidoux, grandson of Joseph Robidoux, founder of St. Joseph, and who lived here until young manhood, died late yesterday at his home in Kansas City. Death followed a stroke of apoplexy suffered three weeks ago. Louis Robidoux was a son of Julius Caesar Robidoux, the first postmaster and for many years a justice of the peace of St. Joseph. For years Louis Robidoux was in the saloon business in Kansas City. He used to visit St. Joseph several times a year. It was Louis Robidoux who had the body of Joseph Robidoux moved from old Calvary Cemetery, in South Park, to Mount Olivet Cemetery. Joseph Robidoux visited the site of St. Joseph as early as 1804. Antoine Robidoux, a great uncle of Louis Robidoux, blazed the first white man's trail to Colorado and members of the family made their way across the Utah pass to Riverside, Cal. Louis Robidoux was sixty-eight years old, and lived in St. Joseph until he was twenty-seven, when he moved to Kansas City and established a saloon on Union avenue, opposite the old Union Station, where he is said to have amassed a comfortable fortune. Until the last several years he was active as a Democrat in Kansas City ward politics. The funeral service will be conducted at 10 o'clock tomorrow morning in Our Lady of Good Counsel Church, Kansas City, and burial will be in Morrill, Kan. There are several relatives of Louis Robidoux living in St. Joseph and vicinity. Mrs. F. J. Hamaker, on Cook road, just north of the city, is a niece. Her mother, Emma Robidoux, was the wife of Joseph Thompson, for many years a clerk in the postoffice here. Mrs. B. F. Ellis, Mrs. Fannie Perry and Miss Delia Beauvais, all of whom live here, are children of Mr. and Mrs. G. Beauvais. Mrs. Beauvais was Sylvanie Robidoux, a daughter of Joseph Robidoux. Mrs. Orel Robidoux, the widow, is the only immediate survivor of Louis Robidoux. When a squad of Kansas City firemen under Chief George C. Hale went to England and France to give demonstrations, twenty-five years ago, Louis Robidoux accompanied them as a delegate from Kansas City, and carried credentials from James A. Reed, then mayor of Kansas City. »

— Résumé —
Louis Robidoux, fils de Jules-César (premier maître de poste et longtemps juge de paix de Saint-Joseph), meurt le 6 février 1923 à Kansas City, trois semaines après une attaque d'apoplexie. Il a vécu à Saint-Joseph jusqu'à 27 ans, puis a tenu un saloon avenue Union, en face de l'ancienne gare, et a été actif dans la politique démocrate. C'est lui qui fit transférer le corps de Joseph du vieux cimetière du Calvaire à Mount Olivet. Il est inhumé à Morrill (Kansas). Il laisse une veuve, Orral, et des neveux et nièces Thompson et Beauvais.`,
  note: "Plusieurs affirmations sont inexactes : Joseph n'est pas venu « dès 1804 », et la famille n'a pas gagné Riverside par un « col de l'Utah ». Le voyage des pompiers de Kansas City est celui de 1893 (Londres) ou de l'Exposition de Paris de 1900. Le Memorial, publié l'année suivante par la veuve, développe toute cette biographie.",
  recoupements: "D'autres journaux publient des notices indépendantes, plus courtes : Nebraska City News et Falls City Daily News (9 février), Catholic Tribune (10 février), Sabetha Herald (15 février). La mention du Riverside Daily Press (23 février) montre que la famille était encore connue en Californie.",
  sources: 'St. Joseph News-Press, 7 février 1923 (Newspapers.com).',
  lieux: ['L145', 'L161', 'L47'],
  images: [{ src: 'images/journaux/1923-02-07-st-joseph-news-press-mort-louis-robidoux.jpg', legende: 'St. Joseph News-Press, 7 février 1923 (Newspapers.com)' }] },

// ---- Thème 6
{ id: 'j-memoire', type: 'journal', theme: '6. La mémoire de la famille (1924-1930)', statut: 'resume', ordre: 351, date: '1924 – 1930', titre: 'Le Memorial dans le Kansas City Star et l\'histoire de Miles Cannon',
  personnes: ['Joseph III', 'Antoine', 'Louis'],
  resume: "La parution du Memorial (1924) vaut aux Robidoux une pleine page dans le Kansas City Star ; en 1930, Riverside raconte à son tour la famille.",
  texte: `16 octobre 1924, Kansas City Star : « A French Canadian Family Among Western Pathfinders ». Le sous-titre annonce un « Recent Memorial History of the Robidoux Family », qui raconte la carrière de Joseph et de ses cinq frères. L'article énumère les lieux qui portent le nom :
• le mont Robidoux, au-dessus des orangeraies de Riverside ;
• une rivière et une ville du Colorado ;
• des cols au Nouveau-Mexique, en Utah et au Wyoming ;
• à Saint-Joseph, l'hôtel, l'école, les maisons de commerce et un mémorial à la Chambre de commerce.

Il cite ensuite la description, par Mme Robidoux, du vieux Saint-Louis français : le jardin clos de murs de pierre à l'angle des rues Elms et Myrtle, la maison de Joseph derrière son portail. Il retrace la traite de Joseph avec les Otoes, les Ioways, les Pawnees et les Sauks jusqu'en 1831, et le rachat en 1833 du vieux poste de l'American Fur Company aux Black Snake Hills. De là, ses frères Antoine, Isidore, François, Michel et Louis auraient lancé leurs caravanes de chariots Conestoga. La maison de Joseph, à l'angle nord-est des rues Main et Jule, accueillit Kit Carson, Frémont et Jim Bridger. La page est illustrée d'un portrait de Joseph et de dessins (vapeur, comptoir).

8 novembre 1930, Riverside Daily Press : pleine page de Miles Cannon, « Recounts Early History ». Elle part de la mention d'un Robidoux dans le journal de Lewis et Clark (1804) et suit Joseph de la traite à Saint-Joseph, jusqu'au transfert de 1908 à Mount Olivet. Un intertitre « Others in Family » présente Antoine (« de onze ans son cadet ») et Louis (« de treize ans »), placés sous la tutelle de leur aîné. Les frères ont établi à Taos une station centrale, où Louis était le facteur en chef pendant qu'Antoine parcourait les montagnes.`,
  note: "Ces articles de vulgarisation reprennent le Memorial et contiennent des erreurs (première maison « en 1803 », écarts d'âge). Ils montrent comment la mémoire familiale s'est fixée dans les années 1920.",
  recoupements: "L'article du Kansas City Star est le compte rendu du Memorial (1924) : il n'apporte pas de source nouvelle. Le Kansas City Journal (11 mai 1924) et le Riverside Daily Press (30 octobre 1924) parlent aussi du livre. Le feuilleton sur Kit Carson d'avril-juin 1927, publié dans une quinzaine de journaux (Oakland Tribune, Cincinnati Enquirer, Daily Oklahoman, Arizona Republic, Fort Worth Star-Telegram…), cite seulement « Bridger, the Sublettes, Fitzpatrick and Antoine Robidoux ».",
  sources: 'Kansas City Star, 16 octobre 1924 ; Riverside Daily Press, 8 novembre 1930 (Newspapers.com).',
  lieux: ['L15', 'L62', 'L12', 'L47'],
  images: [{ src: 'images/journaux/1924-10-16-kansas-city-star-famille-canadienne-francaise.jpg', legende: 'Kansas City Star, 16 octobre 1924 (Newspapers.com)' }] },

];
