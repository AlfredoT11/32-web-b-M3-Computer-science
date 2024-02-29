// Las clases se nombran con la primera letra en mayúscula (PascalCase)
class Persona{

    #mejorAmigo; // <- atributo privado. Los atributos privados empiezan con un #
    #mascotas;

    constructor(nombre, nuevaEdad, genero, peso){
        this.nombre = nombre; // <- atributo público. Los atributos públicos NO tienen #. string
        this.edad = nuevaEdad; // number
        this.genero = genero; // string
        this.#mejorAmigo = null; // object de tipo Persona
        this.peso = peso; // number
        this.#mascotas = []; // array
    }

    saludar(){
        console.log(`Hola, mi nombre es: ${this.nombre}`); // template string -> Utiliza bacticks ` ` (alt + 96)
    }

    platicar(interlocutor){
        console.log(`Hola ${interlocutor.nombre}, mi nombre es: ${this.nombre}`);
    }

    // Un método get me permite regresar el valor de un atributo privado.
    get mejorAmigo(){
        return this.#mejorAmigo;
    }

    // Un método set me permite modificar el valor de un atributo privado.
    set mejorAmigo(nuevoMejorAmigo){
        this.#mejorAmigo = nuevoMejorAmigo;
    }

    agregarMascota(nuevaMascota){
        this.#mascotas.push(nuevaMascota);
    }

    mostrarMascotas(){
        if(this.#mascotas.length == 0){
            console.log(`${this.nombre} no tiene mascotas`)
        }else{
            console.log(`Las mascotas de ${this.nombre} son: `)
            for(let i = 0; i < this.#mascotas.length; i++){
                console.log(`${this.#mascotas[i].nombre} es un ${this.#mascotas[i].especie}`);
            }
        }
    }
}

class Mascota{
    constructor(nuevoNombre, especieDeMascota){
        this.nombre = nuevoNombre;
        this.especie = especieDeMascota;
    }
}


let persona1 = new Persona("Malinali", 25, "Femenino", 50); // Creamos un objeto de tipo Persona.
let persona2 = new Persona("Ángel", 27, "Masculino", 75);

persona1.saludar();
persona2.saludar();

persona1.platicar(persona2);
persona2.platicar(persona1);

// Accediendo al atributo privado #mejorAmigo a través de los métodos get y set.
console.log(`El mejor amigo de la persona 1 es: ${persona1.mejorAmigo}`);
persona1.mejorAmigo = persona2;
console.log(`El nombre del mejor amigo de la persona 1 es: ${persona1.mejorAmigo.nombre}`);

//Accediendo al atributo público nombre.
console.log(`El nombre de la persona 1 es: ${persona1.nombre}`);

let mascota1 = new Mascota("Periquito", "perico");
let mascota2 = new Mascota("Lili", "gato");

persona1.agregarMascota(mascota1);
persona1.agregarMascota(mascota2);

persona1.mostrarMascotas();

persona2.mostrarMascotas();

/* Ejercicio:
Crear una clase llamada Contacto con los siguientes datos
    Nombre 
    Apellidos
    Telefono


Después crear una clase que sea ListaContactos la cual tendrá dos métodos
    Agregar un contacto
    Buscar un contacto por nombre
*/
