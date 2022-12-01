# Slovník slovenského jazyka
Pokiaľ ste sa dostali na túto stránku tak predpokladám, že hľadáte slovenský slovník, ktorý chcete použiť pre svoje programy.

Našťastie som objavil slovník, ktorý bol vyvíjaný pre ispell (Open Source spell checker), ktorý je vydaný pod licenciami GPL (v2), LGPL (v2.1) a MPL (1.1).

# Kde ho nájdem?
Slovník si môžete stiahnuť z [tejto stránky](https://sk-spell.sk.cx/ispell-sk).

Tu máte aj priame odkazy na download:
[ispell-sk-0.3.2.tar.gz](https://spell.linux.sk/file_download/19/ispell-sk-0.3.2.tar.gz)
alebo
["admin friendly" link](https://sk-spell.sk.cx/files/ispell-sk-0.3.2.tar.gz).

Slovník vo formáte UTF-8 nájdete [tu](https://slovnik.brambora.sk/slovnik.txt), prípadne si ho môžete stiahnúť z tohoto repa.

Exporter nájdete [tu](https://slovnik.brambora.sk/).

# Kroky po stiahnutí
1. Otvoríte si súbor `ispell-sk-0.3.2.tar.gz` pomocou 7-Zip, WinRAR, Ark apod. (alebo ho nejak rozbalíte)
2. Extrahujete súbor `slovak.words`.
3. Súbor je zakódovaný v ISO-8859-2, pokiaľ ho chcete konvertovať na UTF-8 a ste na Linuxe, tak to môžete spraviť pomocou príkazu `iconv -f ISO-8859-2 -t UTF-8 slovak.words > slovnik.txt` (vyššie je prípadne link na stiahnutie súboru priamo v UTF-8)
4. Môžete použiť [môj exporter](https://slovnik.brambora.sk/) pre exportovanie špecifických tagov. Taktiež si tam môžete vybrať rôzne nastavenia.

# Ďalšie informácie
Za niektorými slovami je / a nejaké písmená, to sú flagy. Pridávam popis flagov zo [stránky](https://sk-spell.sk.cx/ispell-sk):

| Flag | Popis                                                                                                                                               |
|------|-----------------------------------------------------------------------------------------------------------------------------------------------------|
| N    | prefix ne                                                                                                                                           |
| Z    | žena – množné číslo                                                                                                                                 |
| z    | žena - iba jednotné číslo (napr. látkové podst. mená - ropa, názvy jazykov - slovenčina prípadne ďalšie veci, pre ktoré sa nepoužíva množné číslo…) |
| U    | ulica                                                                                                                                               |
| D    | dlaň                                                                                                                                                |
| K    | kosť a gazdiná                                                                                                                                      |
| M    | mesto                                                                                                                                               |
| S    | srdce                                                                                                                                               |
| V    | vysvedčenie                                                                                                                                         |
| A    | dievča                                                                                                                                              |
| C    | chlap a kuli                                                                                                                                        |
| H    | hrdina                                                                                                                                              |
| B    | dub                                                                                                                                                 |
| O    | dub – zámen hlások v koncovke                                                                                                                       |
| J    | stroj                                                                                                                                               |
| L    | zvieracie podstatné mená mužského rodu                                                                                                              |
| Q    | pomnožné                                                                                                                                            |
| Y    | prídavné mená – všetky, kt. nie sú zakončené na -í                                                                                                  |
| I    | prídavné mená zakončené na -í                                                                                                                       |
| F    | stupňovanie prídavných mien – 3. stupeň                                                                                                             |
| P    | stupňovanie prídavných mien – 2. stupeň                                                                                                             |
| X    | slovesá podľa vzorov chytať, robiť s krátkou koncovkou                                                                                              |
| E    | slovesá podľa vzorov chytať, robiť s dlhou koncovkou                                                                                                |
| W    | slovesá podľa vzorov pracovať                                                                                                                       |
| T    | slovesá podľa vzorov česať                                                                                                                          |
| R    | slovesá podľa vzorov kričať, brať                                                                                                                   |
