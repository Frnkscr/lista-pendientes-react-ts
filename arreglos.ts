// de esta manera es cómo se debe crear los Arrays
let arreglo: number[] = [1,2,3,4,5]

let arreglo1: string[] = ['html','css', 'js']

let programador = {
    nombre: 'Francisco code',
    tecnologias: ['React','python','sql'],
    tomaCoca: true
}

programador = {
    nombre: 'Adalisa code',
    tecnologias: ['ethereum'],
    tomaCoca: false
}

console.log(programador)

// creamos un tipos para que se puedan utilizar objetos
// se agrega un signo'?'. para colocar que ese valor es opcional

type Programador = {
    nombre: string,
    tecnologias: string[],
    tomaCoca?: Boolean |null
}

let programador2 : Programador = {
    nombre: 'Paco',
    tecnologias: [''],
    tomaCoca: null

}

console.log(programador2)