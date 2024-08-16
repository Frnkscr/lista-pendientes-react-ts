"use strict";
console.log("hola mundo, desde typescript");
//booleans
let estudiasteJavascript = false;
if (estudiasteJavascript) {
    console.log('Puedes seguir viendo este curso');
}
else {
    console.log('No puedes seguir viendo este curso');
}
// Number
let fcDallas = 11;
let fcInterMiami = 11;
let cr7 = 1;
let juegacr7 = true;
let palabras = 'Me emocione del resultado';
function jugar(equipo1, equipo2, juegacr7) {
    if (juegacr7)
        equipo1 += cr7;
    if (equipo1 > equipo2)
        console.log('Gana equipo 1');
    if (equipo1 < equipo2)
        console.log('Gana equipo 2');
    if (equipo1 == equipo2)
        console.log('Empatan');
}
jugar(fcDallas, fcInterMiami, juegacr7);
//any
