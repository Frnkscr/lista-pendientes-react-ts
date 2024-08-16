"use strict";
//Para crear una interface no es necesario gregar el "="
let dev = {
    nombre: 'Francisco code',
    tecnologias: ['React', 'python', 'sql'],
    tomaCoca: true
};
function enviarCV(developer) {
    console.log(`Este curriculum es de ${developer.nombre}`);
}
enviarCV(dev);
