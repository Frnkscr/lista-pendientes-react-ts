//Para crear una interface no es necesario gregar el "="

interface Develop{
    nombre: string,
    tecnologias: string[],
    tomaCoca?: Boolean |null
}

let dev: Develop = {
    nombre: 'Francisco code',
    tecnologias: ['React','python','sql'],
    tomaCoca: true
}

function enviarCV(developer : Develop){
    console.log(`Este curriculum es de ${developer.nombre}`)
}

enviarCV(dev)
