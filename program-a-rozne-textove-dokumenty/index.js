"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
// Tu specifikujte nastavenia
const config = {
    // Cesta k suboru so slovami
    filePath: "slovak.txt",
    // Line break (ako sa konci riadok v textovom dokumente vo vasom systeme)
    // Napriklad Linux ma "\n", Windows "\r\n" apod.
    // Toto najdete na Googli
    lineBreak: "\n",
    // Flagy, ktore chcete extrahovat do suboru
    flagsToExtract: ["N", "Z", "z", "U", "D", "K", "M", "S", "V", "A", "C", "H", "B", "O", "J", "L", "Q", "Y", "I", "F", "P", "X", "E", "W", "T", "R"],
    // Nazov finalneho suboru
    writeTo: "vysledok.txt"
};
// Nacitanie suboru, co obsahuje vsetky slova, splitnutie do arrayu, filtrovanie podla toho, ci obsahuje dany flag a nasledne odstranenie flagu aj s /
const slovak = fs_1.readFileSync(config.filePath, "utf-8")
    .split(config.lineBreak)
    .filter(slovo => slovo.includes("/") && slovo.split("/")[1].split("").filter(pismeno => config.flagsToExtract.includes(pismeno)).length > 0)
    .map(slovo => slovo.split("/")[0]);
// Zapisanie do suboru
fs_1.writeFileSync(config.writeTo, slovak.join(config.lineBreak));
