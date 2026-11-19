# Ajoute à famille-robidoux.ged les personnes et faits tirés du Memorial to the Robidoux Brothers (1924),
# partie VI (généalogie) et parties II-V. Usage : python3 ajouts_memorial.py
import re

SRC = "famille-robidoux.ged"
txt = open(SRC, encoding="utf-8").read()
recs = re.split(r"\n(?=0 )", txt.strip())
head, body, trlr = recs[0], recs[1:-1], recs[-1]

indis, fams, notes = {}, {}, []
for r in body:
    m = re.match(r"0 (@[IF]\d+@) (INDI|FAM)", r)
    if not m:
        notes.append(r); continue
    (indis if m.group(2) == "INDI" else fams)[m.group(1)] = r.split("\n")

def nom(i):
    for l in indis[i]:
        if l.startswith("1 NAME "): return l[7:]
def trouve(given, surn, annee=None):
    c = [i for i in indis if nom(i) == f"{given} /{surn}/"]
    if annee:
        c = [i for i in c if any(annee in l for l in indis[i])]
    assert len(c) == 1, (given, surn, annee, c)
    return c[0]

ni = max(int(k[2:-1]) for k in indis) + 1
nf = max(int(k[2:-1]) for k in fams) + 1
SJ = "Saint-Joseph, Buchanan, Missouri, USA"; SL = "Saint-Louis, Missouri, USA"

def personne(given, surn, sex, birt=None, deat=None, note=None, occu=None, buri=None):
    global ni
    i = f"@I{ni}@"; ni += 1
    L = [f"0 {i} INDI", f"1 NAME {given} /{surn}/", f"2 GIVN {given}", f"2 SURN {surn}", f"1 SEX {sex}"]
    for tag, v in (("BIRT", birt), ("DEAT", deat), ("BURI", buri)):
        if v:
            L.append(f"1 {tag}")
            if v[0]: L.append(f"2 DATE {v[0]}")
            if len(v) > 1 and v[1]: L.append(f"2 PLAC {v[1]}")
    if occu: L.append(f"1 OCCU {occu}")
    if note: L.append(f"1 NOTE {note}")
    indis[i] = L
    return i

def ajoute_evt(i, tag, date=None, plac=None, note=None):
    L = indis[i]; j = max(k for k, l in enumerate(L) if not l.startswith(("1 FAMC", "1 FAMS"))) + 1
    ins = [f"1 {tag}"] + ([f"2 DATE {date}"] if date else []) + ([f"2 PLAC {plac}"] if plac else []) + ([f"2 NOTE {note}"] if note else [])
    indis[i] = L[:j] + ins + L[j:]

def ajoute_note(i, note):
    L = indis[i]; j = max(k for k, l in enumerate(L) if not l.startswith(("1 FAMC", "1 FAMS"))) + 1
    indis[i] = L[:j] + [f"1 NOTE {note}"] + L[j:]

def famille(h, w, enfants, marr=None):
    global nf
    f = f"@F{nf}@"; nf += 1
    L = [f"0 {f} FAM"] + ([f"1 HUSB {h}"] if h else []) + ([f"1 WIFE {w}"] if w else []) + [f"1 CHIL {c}" for c in enfants]
    if marr:
        L.append("1 MARR")
        if marr[0]: L.append(f"2 DATE {marr[0]}")
        if len(marr) > 1 and marr[1]: L.append(f"2 PLAC {marr[1]}")
    fams[f] = L
    for p in (h, w):
        if p: indis[p].append(f"1 FAMS {f}")
    for c in enfants: indis[c].append(f"1 FAMC {f}")
    return f

def enfants_de(f, enfants):
    for c in enfants:
        fams[f].append(f"1 CHIL {c}"); indis[c].append(f"1 FAMC {f}")

def fam_de(h=None, w=None):
    for f, L in fams.items():
        if (h is None or f"1 HUSB {h}" in L) and (w is None or f"1 WIFE {w}" in L):
            return f

# ---------------------------------------------------------------- corrections
gus = trouve("Gus", "Beauvais")
indis[gus] = [l.replace("1 NAME Gus /Beauvais/", "1 NAME Francis A. /Beauvais/").replace("2 GIVN Gus", "2 GIVN Francis A.") for l in indis[gus]]
fsyl = fam_de(h=gus)
fams[fsyl].append("1 MARR"); fams[fsyl] += ["2 DATE 26 APR 1847", "2 PLAC Vieille cathédrale, Saint-Louis, Missouri, USA"]

# ---------------------------------------------------------------- Joseph III : décès, inhumation, translation
j3 = trouve("Joseph", "Robidoux", "10 AUG 1783")
ajoute_evt(j3, "BURI", "28 MAY 1868", "Cimetière du Calvaire (Garfield Avenue), Saint-Joseph, Missouri, USA")
ajoute_evt(j3, "BURI", "15 AUG 1908", "Cimetière Mount Olivet, Saint-Joseph, Missouri, USA", "Translation avec son fils Jules et son petit-fils Napoléon ; lot 111, bloc 1 ; monument de 1914.")
ajoute_note(j3, "Laisse à sa mort sa sœur Pélagie Saucier (Saint-Joseph), ses fils Joseph E., Jules, Félix et Edmond, sa fille Mme F. A. Beauvais (Saint-Louis) et vingt-huit petits-enfants (Memorial, 1924, p. 151).")
jules = trouve("Jules César (Julius C.)", "Robidoux")
ajoute_evt(jules, "BURI", "15 AUG 1908", "Cimetière Mount Olivet, Saint-Joseph, Missouri, USA", "Translation depuis le cimetière du Calvaire.")
nap = trouve("Napoléon", "Robidoux")
ajoute_evt(nap, "BURI", "15 AUG 1908", "Cimetière Mount Olivet, Saint-Joseph, Missouri, USA", "Translation depuis le cimetière du Calvaire.")

# ---------------------------------------------------------------- Louis, petit-fils (Kansas City)
lj = trouve("Louis", "Robidoux", "1855")
indis[lj] = [l.replace("2 DATE 1855", "2 DATE 26 AUG 1855") for l in indis[lj]]
ajoute_evt(lj, "DEAT", "6 FEB 1923", "3518 Wyandotte Street, Kansas City, Missouri, USA")
ajoute_evt(lj, "BURI", "8 FEB 1923", "Morrill, Brown, Kansas, USA")
ajoute_evt(lj, "RESI", "1883", "Kansas City, Missouri, USA", "Marchand de vins et spiritueux, puis agent immobilier ; voyage à l'Exposition universelle de Paris (1900).")
indis[lj].insert(5, "1 OCCU Agent immobilier")
orral = trouve("Orral", "Messmore")
jasper = personne("Jasper", "Messmore", "M", note="De Morrill, Kansas.")
harriet = personne("Harriet", "Foster", "F")
famille(jasper, harriet, [orral])

# ---------------------------------------------------------------- Edmond
edm = trouve("Edmond", "Robidoux")
fed = fam_de(h=edm)
jeanne = personne("Jeanne Elvira", "Robidoux", "F", ("28 FEB 1852", SJ))
eddie = personne("Eddie Sylvanie", "Robidoux", "M", ("1854", SJ), ("1856", SJ))
ben = personne("Ben E.", "Robidoux", "M", ("31 OCT 1857", SJ))
charlesA = personne("Charles Albert", "Robidoux", "M", ("21 NOV 1859", SJ), ("1861", SJ))
enfants_de(fed, [jeanne, eddie, ben, charlesA])
wake = personne("John A.", "Wakefield", "M", note="D'Omaha, Nebraska.")
jeleanor = personne("Jeane Eleanor", "Wakefield", "F", ("19 OCT 1882", SJ))
famille(wake, jeanne, [jeleanor], ("16 AUG 1881", SJ))
street = personne("Harry L.", "Street", "M", note="De Chicago ; famille établie à Winnetka, Illinois.")
famille(street, jeleanor, [], ("20 FEB 1909", None))
edith = personne("Edith Watee", "Van Aernam", "F")
famille(ben, edith, [], ("19 JAN 1887", "Omaha, Douglas, Nebraska, USA"))

# ---------------------------------------------------------------- Sylvanie et Francis A. Beauvais
enf = [personne("Agnes", "Beauvais", "F", note="Religieuse du Sacré-Cœur à Seattle."),
       personne("(religieuse)", "Beauvais", "F", note="« Madame Beauvais », religieuse du Sacré-Cœur à Menlo Park (Californie)."),
       personne("Delia", "Beauvais", "F"),
       personne("Fannie", "Beauvais", "F", note="Mme Perry."),
       personne("Addie", "Beauvais", "F", note="Mme Ellis, de Saint-Joseph."),
       personne("Charles", "Beauvais", "M"),
       personne("Cassius", "Beauvais", "M", note="De Saint-Louis.")]
enfants_de(fsyl, enf)

# ---------------------------------------------------------------- Félix
fel = trouve("Félix", "Robidoux")
ffel = fam_de(h=fel)
edwin = personne("Edwin Charles", "Robidoux", "M"); josa = personne("Josephine A.", "Robidoux", "F"); ella = personne("Ella", "Robidoux", "F")
enfants_de(ffel, [edwin, josa, ella])
famille(edwin, personne("Annie", "George", "F"), [])
famille(personne("Frank", "Corby", "M"), josa, [], (None, SJ))
famille(personne("James P.", "Sweeney", "M"), ella, [])

# ---------------------------------------------------------------- François B. et Rosine Guion
fb = trouve("François Belevere", "Robidoux")
ffb = fam_de(h=fb)
albert = personne("Albert", "Robidoux", "M")
enfants_de(ffb, [personne("Octavia", "Robidoux", "F", note="Fille de François B. Robidoux et de Rosine Guion."), albert,
                 personne("Frank", "Robidoux", "M"), personne("Felix", "Robidoux", "M"),
                 personne("Rosine", "Robidoux", "F"), personne("Carmel", "Robidoux", "F")])
mreilly = personne("Mary", "Reilly", "F")
famille(albert, mreilly, [personne("Edward Joseph Reilly", "Robidoux", "M")], ("21 SEP 1886", None))

# ---------------------------------------------------------------- Jules : petits-enfants
emily = trouve("Emily", "Robidoux")
femily = fam_de(w=emily)
emma = personne("Emma Adelaide", "Thompson", "F")
enfants_de(femily, [emma])
famille(personne("J. F.", "Hamaker", "M"), emma, [], ("14 JUL 1904", None))
nina = trouve("Sylvania (Nina)", "Robidoux")
famille(personne("Antonie", "Loffing", "M"), nina, [personne("Geraldine", "Loffing", "F", note="De Los Angeles.")], ("1883", None))
fen = trouve("Louise (Fenette)", "Robidoux")
famille(personne("Edward", "Tappan", "M"), fen, [], ("1881", None))
ajoute_note(fen, "Trois filles, établies à Denver : Mmes Dorothy Wilson, Henrietta Boyles et Mabel Tappan (Memorial, 1924).")

# ---------------------------------------------------------------- Michel : Kathrens
soph = trouve("Sophia", "Robidoux")
fk = fam_de(w=soph)
enfants_de(fk, [personne("Joseph", "Kathrens", "M"), personne("Vaudry", "Kathrens", "M"), personne("R. D.", "Kathrens", "M"),
                personne("William", "Kathrens", "M", note="Épouse Anna Zang le 4 février 1891 à Kansas City."), personne("Albert", "Kathrens", "M")])

# ---------------------------------------------------------------- Louis (Riverside) : descendants
fred = trouve("Frederic", "Robidoux")
famille(fred, personne("Pilar", "Trujillo", "F"), [])
ajoute_note(fred, "De Riverside ; sept enfants, dont Mme George Graham (San Diego) et Melda, épouse d'Edward Patric White (Butte, Montana).")
adel = trouve("Adelaide", "Robidoux")
famille(personne("(époux)", "Estudillo", "M"), adel,
        [personne("Michel", "Estudillo", "M", note="Avocat, ancien sénateur de Californie, de Riverside."),
         personne("Adelaide", "Estudillo", "F", note="Épouse d'Arthur Wright, avocat de Los Angeles."),
         personne("Henrietta", "Estudillo", "F", note="Épouse de Hugh J. Boyde, professeur à Portland.")])

# ---------------------------------------------------------------- Pélagie
pel = trouve("Marie Pélagie", "Robidoux")
ajoute_note(pel, "Vit encore à Saint-Joseph à la mort de son frère Joseph (mai 1868) ; trois enfants (deux fils, une fille).")

out = [head] + ["\n".join(L) for L in indis.values()] + ["\n".join(L) for L in fams.values()] + notes + [trlr]
open(SRC, "w", encoding="utf-8").write("\n".join(out) + "\n")
print(len(indis), "personnes,", len(fams), "familles")
