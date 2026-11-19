// Dossiers documentaires par portrait (onglet « Documents trouvés » de la salle de lecture).
// actes : registres catholiques de Saint-Louis (collection Drouin, Ancestry), lus sur les images ; voir genealogie/registres-saint-louis-drouin.md.
const DOSSIERS = {
 "joseph3": {
  "actes": [
   {
    "date": "août 1807",
    "texte": "Baptême de Thérèse Caroline, née le 17 juin 1807, fille légitime de Joseph Robidoux et de Julie Eugénie Bienvenu [Delisle] ; parrain François Robidoux, marraine Thérèse Bienvenu.",
    "source": "Collection Drouin, registres catholiques de Saint-Louis, Ancestry coll. 1111, notice 34510270"
   },
   {
    "date": "8 juillet 1810",
    "texte": "Joseph Eugène, ondoyé, né le 26 mai 1809, de Joseph Robidoux et d'Eugénie Delisle ; parrain Joseph Brazeau, marraine Catherine Rolet (la grand-mère).",
    "source": "Collection Drouin, registres catholiques de Saint-Louis, Ancestry coll. 1111, notice 34510292"
   },
   {
    "date": "2 mai 1816",
    "texte": "Baptême sous condition de Joseph, né le 14 janvier 1816, de Joseph Robidoux et d'Angélique Vaudry ; parrain Isidore Robidoux, marraine Susanne Vaudry.",
    "source": "Collection Drouin, registres catholiques de Saint-Louis, Ancestry coll. 1111, notice 34510372"
   },
   {
    "date": "2 mai 1816",
    "texte": "Le même jour, baptême sous condition d'Antoine, né le 2 novembre 1813 (lecture incertaine), de Joseph Robidou et d'Angélique Vaudry ; parrain François Robidou, marraine Marie Vaudry.",
    "source": "Collection Drouin, registres catholiques de Saint-Louis, Ancestry coll. 1111, notice 34510373"
   },
   {
    "date": "25 février 1818",
    "texte": "Baptême de François [Belevere], né le 29 octobre 1817, de Joseph Robidou et d'Angélique Vaudry ; parrain Vincent Guion, marraine Clarisse Delisle.",
    "source": "Collection Drouin, registres catholiques de Saint-Louis, Ancestry coll. 1111, notice 34510389"
   },
   {
    "date": "5 mai 1820",
    "texte": "Baptême de Félix, fils de Joseph Roubidoux et d'Angélique Vaudray ; parrain Amore Richebourg, marraine Pélagie Roubidoux, sa tante.",
    "source": "Collection Drouin, registres catholiques de Saint-Louis, Ancestry coll. 1111, notice 34510428"
   },
   {
    "date": "12 mai 1825",
    "texte": "Baptême d'Edmond Valentin, né le 11 mai 1825, de Joseph Robidoux et d'Angélique Vaudré ; parrain Joseph Brazeau, marraine Julie Fishback.",
    "source": "Collection Drouin, registres catholiques de Saint-Louis, Ancestry coll. 1111, notice 34510515"
   },
   {
    "date": "21 juillet 1832",
    "texte": "Baptême de Charles, né le 10 juillet 1831, et suppléance des cérémonies pour Marie Agnès (Sylvanie), ondoyée, née le 10 mars 1827, enfants de Joseph Robidoux et d'Angélique Vaudry ; marraine de Marie Agnès : Marie Deroin.",
    "source": "Collection Drouin, registres catholiques de Saint-Louis, Ancestry coll. 1111, notice 34510646"
   },
   {
    "date": "26 avril 1847",
    "texte": "Mariage de Sylvanie Agnès Robidoux, fille de Joseph et d'Angélique Vaudry, avec Francis August Beauvais ; témoin Edmond Robidoux ; célébré par l'évêque Edward Barron.",
    "source": "Collection Drouin, registres catholiques de Saint-Louis, Ancestry coll. 1111, notice 34530262"
   },
   {
    "date": "15 octobre 1830",
    "texte": "Sépulture de Fanny, esclave de Joseph Robidoux.",
    "source": "Collection Drouin, registres catholiques de Saint-Louis, Ancestry coll. 1111, notice 34540169"
   },
   {
    "date": "4 juillet 1834",
    "texte": "Sépulture de Louisa, enfant esclave de M. Robidoux, 3 ans.",
    "source": "Collection Drouin, registres catholiques de Saint-Louis, Ancestry coll. 1111, notice 34540204"
   }
  ]
 },
 "josephe": {
  "actes": [
   {
    "date": "8 juillet 1810",
    "texte": "Joseph Eugène, ondoyé, né le 26 mai 1809, fils de Joseph Robidoux et d'Eugénie Delisle ; parrain Joseph Brazeau, marraine Catherine Rolet. Ce registre donne 1809 et non 1806.",
    "source": "Collection Drouin, registres catholiques de Saint-Louis, Ancestry coll. 1111, notice 34510292"
   }
  ]
 },
 "catherine": {
  "actes": [
   {
    "date": "8 juillet 1810",
    "texte": "Catherine Rolet, marraine de son petit-fils Joseph Eugène, fils de Joseph Robidoux et d'Eugénie Delisle.",
    "source": "Collection Drouin, registres catholiques de Saint-Louis, Ancestry coll. 1111, notice 34510292"
   }
  ]
 },
 "francois": {
  "actes": [
   {
    "date": "août 1807",
    "texte": "Parrain de sa nièce Thérèse Caroline, fille de Joseph Robidoux et d'Eugénie Bienvenu Delisle.",
    "source": "Collection Drouin, registres catholiques de Saint-Louis, Ancestry coll. 1111, notice 34510270"
   },
   {
    "date": "8 juillet 1810",
    "texte": "Thérèse Eugénie, ondoyée, née le 15 avril 1809, de François Robidou et de Thérèse Delisle ; parrain Joseph Robidou, marraine Thérèse Delisle.",
    "source": "Collection Drouin, registres catholiques de Saint-Louis, Ancestry coll. 1111, notice 34510293"
   },
   {
    "date": "21 février 1812",
    "texte": "Baptême de François, né le 6 avril 1811, de François Robidou, cultivateur, et de Thérèse Delisle ; parrain Isidore Robidou, marraine Cécile Brazeau.",
    "source": "Collection Drouin, registres catholiques de Saint-Louis, Ancestry coll. 1111, notice 34510307"
   },
   {
    "date": "6 mars 1817",
    "texte": "Baptême sous condition d'Antoine, né le 24 août 1816, de François Robidou et de Thérèse Delisle ; parrain Charles Sanguinet.",
    "source": "Collection Drouin, registres catholiques de Saint-Louis, Ancestry coll. 1111, notice 34510379"
   },
   {
    "date": "29 août 1818",
    "texte": "Baptême de Marie, née le 26 août 1818, de François Robidou et de Thérèse De L'Isle ; marraine Rosalie De L'Isle.",
    "source": "Collection Drouin, registres catholiques de Saint-Louis, Ancestry coll. 1111, notice 34510399"
   },
   {
    "date": "24 juillet 1820",
    "texte": "Baptême de Joseph, né la veille, fils légitime de François Roubidou et de Thérèse Delile ; parrain Joseph Bouju.",
    "source": "Collection Drouin, registres catholiques de Saint-Louis, Ancestry coll. 1111, notice 34510432"
   },
   {
    "date": "19 juin 1825",
    "texte": "Baptême de Cécile, née le 20 novembre 1824, de François Robidoux et de Thérèse De L'Isle ; parrain Michel Robidoux, marraine Émilie Valois.",
    "source": "Collection Drouin, registres catholiques de Saint-Louis, Ancestry coll. 1111, notice 34510517"
   },
   {
    "date": "25 janvier 1836",
    "texte": "Mariage de Mary Robidoux, fille de François et de Thérèse Delisle, avec James Brown ; témoins Angélique, Susan et P. C. Robidoux.",
    "source": "Collection Drouin, registres catholiques de Saint-Louis, Ancestry coll. 1111, notice 34530003"
   },
   {
    "date": "3 janvier 1842",
    "texte": "Mariage, à la cathédrale, de Cecilia (Cécile) Robidoux, fille de François et de Thérèse Delisle, environ 17 ans, avec John McDowell, 24 ans.",
    "source": "Collection Drouin, registres catholiques de Saint-Louis, Ancestry coll. 1111, notice 34530154"
   },
   {
    "date": "12 juin 1833",
    "texte": "Sépulture de Clarisse Robidoux, épouse de François Robidoux, environ 43 ans (prénom de l'épouse différent de celui des baptêmes).",
    "source": "Collection Drouin, registres catholiques de Saint-Louis, Ancestry coll. 1111, notice 34540197"
   }
  ]
 },
 "isidore": {
  "actes": [
   {
    "date": "21 février 1812",
    "texte": "Parrain de son neveu François, fils de François Robidou et de Thérèse Delisle.",
    "source": "Collection Drouin, registres catholiques de Saint-Louis, Ancestry coll. 1111, notice 34510307"
   },
   {
    "date": "2 mai 1816",
    "texte": "Parrain de son neveu Joseph, fils de Joseph Robidoux et d'Angélique Vaudry.",
    "source": "Collection Drouin, registres catholiques de Saint-Louis, Ancestry coll. 1111, notice 34510372"
   },
   {
    "date": "10 octobre 1820",
    "texte": "Baptême de Louis, fils légitime d'Isidore Roubidoux et de Julie « Aloy » [Desjarlais ?], né le 6 ; parrain André Bouet, marraine Susanne Vaudry.",
    "source": "Collection Drouin, registres catholiques de Saint-Louis, Ancestry coll. 1111, notice 34510436"
   }
  ]
 },
 "michel": {
  "actes": [
   {
    "date": "25 juin 1825",
    "texte": "Mariage de Michel Robidoux, fils de Joseph et de Catherine Rollet, avec Susanne Vaudry, fille d'Antoine Vaudry et d'Agnès.",
    "source": "Collection Drouin, registres catholiques de Saint-Louis, Ancestry coll. 1111, notice 34521035"
   },
   {
    "date": "19 juin 1825",
    "texte": "Parrain de sa nièce Cécile, fille de François Robidoux et de Thérèse De L'Isle.",
    "source": "Collection Drouin, registres catholiques de Saint-Louis, Ancestry coll. 1111, notice 34510517"
   },
   {
    "date": "5 août 1832",
    "texte": "Baptême d'Agnès Sophie, née le 11 juillet 1832, de Michel Robidoux et de Suzanne Vaudry ; parrain Joseph Robidoux, marraine Sophie Valois.",
    "source": "Collection Drouin, registres catholiques de Saint-Louis, Ancestry coll. 1111, notice 34510648"
   },
   {
    "date": "26 août 1839",
    "texte": "Baptême de Pélagie, née le 9 mai 1839, de Michel Robidoux et de Suzanne [Vaudry] ; parrain Valentin [Edmond] Robidoux, marraine Agnès Robidoux.",
    "source": "Collection Drouin, registres catholiques de Saint-Louis, Ancestry coll. 1111, notice 34510789"
   }
  ]
 },
 "jules": {
  "actes": [
   {
    "date": "26 août 1839",
    "texte": "Baptême de Joseph, fils de Joseph Jules César Robidoux, marchand, et d'Isabelle Baradas ; parrain Valentin Robidoux, marraine Agnès Robidoux.",
    "source": "Collection Drouin, registres catholiques de Saint-Louis, Ancestry coll. 1111, notice 34510789"
   },
   {
    "date": "5 avril 1842",
    "texte": "Baptême de Margaret, née le 5 septembre 1841, fille de Jule C. Robidoux et d'Isabella Barada.",
    "source": "Collection Drouin, registres catholiques de Saint-Louis, Ancestry coll. 1111, notice 34510874"
   }
  ]
 },
 "soeurs": {
  "actes": [
   {
    "date": "5 mai 1820",
    "texte": "Pélagie Roubidoux, marraine de son neveu Félix, fils de Joseph Robidoux et d'Angélique Vaudry.",
    "source": "Collection Drouin, registres catholiques de Saint-Louis, Ancestry coll. 1111, notice 34510428"
   }
  ]
 }
};
