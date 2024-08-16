console.log("hola mundo, desde typescript")

//booleans
let estudiasteJavascript: boolean = false

if(estudiasteJavascript){
    console.log('Puedes seguir viendo este curso')
}else{
    console.log('No puedes seguir viendo este curso')
}

// Number
let fcDallas: number | null | undefined = 11
let fcInterMiami: number = 11
let cr7: number = 1
let juegacr7: boolean = true

let palabras: string = 'Me emocione del resultado'

function jugar(equipo1: number,equipo2: number,juegacr7: boolean): void{
    if(juegacr7) equipo1 += cr7
    if(equipo1 > equipo2) console.log ('Gana equipo 1')
    if(equipo1 < equipo2) console.log ('Gana equipo 2')
    if(equipo1 == equipo2) console.log ('Empatan')
        
}

jugar(fcDallas,fcInterMiami,juegacr7)

//any







