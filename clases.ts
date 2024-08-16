class Pelicula{
    nombre?: string = 'troya';
    protagonistas?: string[];
    actores?: string[];

    proyectarEnCine(){
        console.log(`${this.nombre} esta siendo proyectada`)
    }

    constructor(nombre:string, protagonistas : string[], actores: string[]){
        this.nombre = nombre,
        this.protagonistas = protagonistas,
        this.actores = actores
    }

}

const pelicula = new Pelicula('Barbie',['Barbie','ken'],['Margot','Ryan'])
const pelicula2 = new Pelicula('Pelicula 2',['Prot1','Prot2'],['actor1','actoe2'])

pelicula.proyectarEnCine()

console.log(pelicula2)
//Para esta escenario cómo se dejo fijo el valor 'troya, al crear la clase sin parametros, toma los datos por default 



//-----------------------------------

// se crea genericos dentro de la clases cuando podemos tener diferentes valores o no conocemos el valor real

//Encapsulamos variables y funciones

class Sorteo<T>{

    private numero?: T;

    constructor(
        private nombre : string
    ){}

    setTicket(numero:T){
        this.numero = numero
    }

    getTicket(){
        return this.numero
    }

    public sortear():string{
        return `Para ${this.nombre} el ticket es ${this.numero}`
    }
}

let sorteo = new Sorteo<number>('Francisco code')
sorteo.setTicket(7)
console.log(sorteo.sortear())

let sorteo2 = new Sorteo<string>('Adalisa code')
sorteo2.setTicket('asdfgdg')
console.log(sorteo2.sortear())



