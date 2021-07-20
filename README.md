# Slovník slovenského jazyka
Pokiaľ ste sa dostali na túto stránku tak predpokladám, že hľadáte slovenský slovník, ktorý chcete použiť pre svoje programy.

Našťastie som objavil slovník, ktorý bol vyvíjaný pre ispell (Open Source spell checker), ktorý je vydaný pod licenciami GPL (v2), LGPL (v2.1) a MPL (1.1).

# Kde ho nájdem?
Slovník si môžete stiahnuť z [tejto stránky](http://sk-spell.sk.cx/ispell-sk).

Tu máte aj priame odkazy na download:
[ispell-sk-0.3.2.tar.gz](http://spell.linux.sk/file_download/19/ispell-sk-0.3.2.tar.gz&)
alebo
["admin friendly" link](http://sk-spell.sk.cx/files/ispell-sk-0.3.2.tar.gz)

# Kroky po stiahnutí
1. Otvoríte si súbor `ispell-sk-0.3.2.tar.gz` pomocou 7-Zip, WinRAR, Ark apod. (alebo ho nejak rozbalíte)
2. Extrahujete súbor `slovak.words`, môžete zmeniť príponu na .txt, pokiaľ si to želáte.
3. Je šanca, že po otvorení súboru budete vidieť rozbité písmená:

![Ukážka rozbitých písmen](https://i.imgur.com/LTWI0Ga.png)

Pokiaľ je toto váš prípad, tak máte 2 možnosti:
* Pokiaľ ste na Linuxe, tak použite tento príkaz pre konvertovanie:

  `iconv -f ISO-8859-2 -t UTF-8 slovak.words > opravene.txt`
* Môžete si stiahnuť súbor `opravene.txt` z tohoto repa, kde to je už opravené.

# Ďalšie informácie
Pokiaľ sa čudujete, že prečo je za niektorými slovami / a nejaké písmená, tak to sú flagy. Pridávam popis flagov zo [stránky](http://sk-spell.sk.cx/ispell-sk):

Flag | Popis
---- | -----
N | prefix ne
Z | žena – množné číslo
z | žena-iba jednotné číslo (napr. látkové podst. mená-ropa, názvy jazykov-slovenčina prípadne ďalšie veci, pre ktoré sa nepoužíva množné číslo…
U | ulica
D | dlaň
K | kosť a gazdiná
M | mesto
S | srdce
V | vysvedčenie
A | dievča
C | chlap a kuli
H | hrdina
B | dub
O | dub – zámen hlások v koncovke
J | stroj
L | zvieracie podstatné mená mužského rodu
Q | pomnožné
Y | prídavné mená – všetky, kt. nie sú zakončené na -í
I | prídavné mená zakončené na -í
F | stupňovanie prídavných mien – 3. stupeň
P | stupňovanie prídavných mien – 2. stupeň
X | slovesá podľa vzorov chytať, robiť s krátkou koncovkou
E | slovesá podľa vzorov chytať, robiť s dlhou koncovkou
W | slovesá podľa vzorov pracovať
T | slovesá podľa vzorov česať
R | slovesá podľa vzorov kričať, brať

Ak chcete súbory, kde sú iba podstatné mená, prídavné mená alebo slovesá, tak ich nájdete v tomto repe, presnejšie v priečinku s programom a textovými dokumentami. Nájdete tam aj TypeScriptový (.ts) súbor, ktorý môžete použiť na extrahovanie vami špecifikovanými flagmi.
