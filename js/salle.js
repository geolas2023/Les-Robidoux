// Salle de lecture de l'Atlas Robidoux : portraits de famille et documents.
// type : portrait | document | etude ; statut : biographie | transcription | traduction | resume | fiche
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
  lieux: ['L06', 'L09', 'L80', 'L81', 'L17', 'L22', 'L25', 'L23', 'L50', 'L48', 'L24', 'L54', 'L29', 'L30', 'L82', 'L32', 'L83', 'L84', 'L38'] },

{ id: 'louis', type: 'portrait', statut: 'biographie', ordre: 8, date: '1796 – 1868', titre: 'Louis Robidoux, d\'alcalde de Santa Fe à ranchero de Jurupa',
  personnes: ['Louis'],
  resume: "Le Californien : maire de Santa Fe, meunier, prisonnier de guerre, fondateur du rancho qui deviendra Riverside, dernier survivant des six frères.",
  texte: `Louis naît à Saint-Louis le 5 août 1796 (le 7 juillet selon d'autres sources). Il part pour le Nouveau-Mexique en 1823 avec Manuel Alvarez, fait la navette avec Saint-Louis (départ de Taos en avril 1827) et s'établit pour de bon à Santa Fe en 1828. Naturalisé en 1829, il prend pour épouse de fait Guadalupe García, fille de l'alcalde Juan García ; leurs enfants naissent à partir de 1835 (Catarina, 1835 ; José Luis, 1837).

Son goût de l'aguardiente le mène en prison en novembre 1830, pour avoir insulté l'alcalde ; il n'en devient pas moins secrétaire, conseiller, puis premier alcalde de Santa Fe en 1839. Il tient magasin, forge et, à partir de 1839, un moulin sur la rivière Santa Fe. Il cautionne des marchands américains et préside des procès. En mai 1841, il grave son nom dans le bassin du Willow Creek en allant au fort Uintah, dont il est copropriétaire.

Devant l'hostilité croissante envers les Américains, il vend ses biens en 1841, reconnaît la Californie en 1843 et achète en 1844, avec Benjamin Wilson, le rancho Jurupa sur le Santa Ana. Il y bâtit le premier moulin du sud de la Californie (1846-1847). Prisonnier des Californiens après le combat du rancho del Chino (27 septembre 1846), il est libéré en janvier 1847. Ses deux lettres de 1848 à Manuel Alvarez, en espagnol soigné, chantent la Californie et prédisent qu'elle restera américaine.

Superviseur et premier président du conseil du comté de San Bernardino (1853), il voit sa fortune ruinée par la crue de 1862, la sécheresse et les procès ; une chute de cheval le laisse infirme. Remarié à Flavia Castillo, il meurt le 24 septembre 1868 et repose à Agua Mansa. Le mont Rubidoux, à Riverside, porte son nom.`,
  sources: `${WIL}, p. 3, 66, 80-81, 86-87, 120-124, 149-154, 162-165, 174-177, 198-201, 209-210 ; D. J. Weber (éd.), « Louis Robidoux: Two Letters from California, 1848 » (1972) ; R. Hornbeck, Roubidoux's Ranch in the 70's (1913).`,
  lieux: ['L18', 'L85', 'L49', 'L51', 'L58', 'L59', 'L60', 'L86', 'L87', 'L61', 'L62'] },

{ id: 'michel', type: 'portrait', statut: 'biographie', ordre: 9, date: '1798 – 1858', titre: 'Michel Robidoux, le chef de brigade',
  personnes: ['Michel'],
  resume: "Le benjamin : survivant du massacre de la Gila, chef d'une brigade de l'American Fur Company sur la Snake, puis traiteur des Plaines autour du fort Laramie.",
  texte: `Michel naît le 3 août 1798. Le 29 juin 1825, il reçoit avec Antoine un passeport pour le Mexique ; le 22 juin, il avait épousé à Saint-Louis Susanne Vaudry, sœur de la femme de Joseph. À l'automne 1826, il mène sur la Gila un parti financé par Sylvestre Pratte : trois hommes seulement sur vingt échappent à une attaque, dont James O. Pattie.

Rentré au Missouri, il travaille avec Baptiste Roy ; une fille lui naît à Saint-Louis en janvier 1830. En mars 1830, il part avec Fontenelle et Drips pour la Green : le 23 août, à Ham's Fork, il prend le commandement de la brigade du nord, hiverne à Ogden's Hole, engage des trappeurs iroquois (John Gray) et Jean-Baptiste Charbonneau, et fouille la Snake jusqu'aux chutes, malgré la maladie et la faim. Il rentre en juin 1831, repart, et travaille dans les montagnes du nord jusqu'en 1835.

Après 1835, il traite sur les Plaines autour du fort William (Laramie) et revient souvent à Saint-Louis, où il achète en 1839 la propriété de Joseph. À Saint-Joseph, il est l'associé d'Isidore, puis administre sa succession en 1852. Il meurt en avril 1858.`,
  sources: `${WIL}, p. 3, 76-77, 96-99, 202 ; D. J. Weber, « Sylvestre S. Pratte », dans Hafen (dir.) (1995), p. 264.`,
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

{ id: 'deroine', type: 'portrait', statut: 'biographie', ordre: 17, date: 'v. 1804 – ?', titre: 'Jeffrey Deroine, esclave, interprète et diplomate',
  personnes: ['Jeffrey Deroine'],
  resume: "Né esclave à Saint-Louis, détenu par Joseph Robidoux, il gagne sa liberté en 1832 avec l'aide des Ioways et devient interprète, puis voyageur du monde.",
  texte: `Jeffrey (Jeffre, Geoffrey Dorwin) naît à Saint-Louis vers 1804-1805, élevé dans la famille de Francis Deroin. Détenu comme esclave par Joseph Robidoux, il est l'objet d'un long procès en liberté (une déposition de janvier 1830 précise qu'il est né à Saint-Louis après la prise de possession américaine et qu'il a été élevé par la famille Deroin ; en 1835, la cour d'appel casse un jugement rendu contre lui). En mars 1832, l'agent Andrew Hughes paie 600 dollars à Joseph, sans doute avec des fonds réunis par ses amis ioways, et Jeffrey devient interprète à la sous-agence ioway.

Licencié pour la traite, il devient le rival acharné de Joseph, qui le dénonce dans ses lettres à Chouteau. L'historien Greg Olson a retracé la suite de sa vie d'interprète et de voyageur.`,
  sources: `${WIL}, p. 45, 114-117, 133-135 ; G. Olson, « Slave, Trader, Interpreter, and World Traveler: Jeffrey Deroine », Missouri Historical Review, vol. 107, n° 4 (2013).`,
  lieux: ['L12'] },

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
];
