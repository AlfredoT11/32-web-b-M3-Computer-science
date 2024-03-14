class Pokemon{
    constructor(nombre, nivelAtaque, nivelVida, velocidad){
        this.nombre = nombre;
        this.nivelAtaque = nivelAtaque;
        this.nivelVida = nivelVida;
        this.velocidad = velocidad;
    }
    atacar(pokemonAtacado){
        console.log(this.nombre + " está atacando a otro Pokémon");
        console.log(this.nombre + " tiene un nivel de ataque de " + this.nivelAtaque);
        console.log(pokemonAtacado.nombre + " está siendo atacado. Su nivel de vida ANTES del ataque es: " + pokemonAtacado.nivelVida);
        pokemonAtacado.nivelVida -= this.nivelAtaque; // = pokemonAtacado.nivelVida = pokemonAtacado.nivelVida - this.nivelAtaque;
        console.log(pokemonAtacado.nombre + " fue atacado. Su nivel de vida DESPUÉS del ataque es: " + pokemonAtacado.nivelVida);
        console.log(`El nivel de vida el pokemon atacante ${this.nombre} es ${this.nivelVida}`);
    }
}
// class <SubClase> extends <SuperClase>
class PokemonFuego extends Pokemon {
    constructor(nombre, nivelAtaque, nivelVida, velocidad, colorFlama){
        super(nombre, nivelAtaque, nivelVida, velocidad); // Se manda a llamar el constructor de la clase padre. Los parámetros se deben mandar en el mismo orden del constructor padre.
        this.colorFlama = colorFlama; // Este es un atributo específico de la clase. No lo tiene la clase padre.
    }
    quemar(pokemonAQuemar){
        console.log(this.nombre + " está quemando a otro Pokémon");
        console.log(this.nombre + " tiene un nivel de ataque de " + this.nivelAtaque);
        console.log(pokemonAQuemar.nombre + " está siendo quemado. Su nivel de vida ANTES del ataque es: " + pokemonAQuemar.nivelVida);
        pokemonAQuemar.nivelVida -= this.nivelAtaque * 1.5; // = pokemonAtacado.nivelVida = pokemonAtacado.nivelVida - this.nivelAtaque;
        console.log(pokemonAQuemar.nombre + " fue quemado. Su nivel de vida DESPUÉS del ataque es: " + pokemonAQuemar.nivelVida);
        console.log(`El nivel de vida el pokemon atacante ${this.nombre} es ${this.nivelVida}`);
    }
    // Sobreescritura de métodos
    atacar(pokemonAtacado){
        this.quemar(pokemonAtacado);
    }
}
class PokemonHielo extends Pokemon {
    constructor(nombre, nivelAtaque, nivelVida, velocidad, temperaturaDeCongelamiento){
        super(nombre, nivelAtaque, nivelVida, velocidad); // Se manda a llamar el constructor de la clase padre. Los parámetros se deben mandar en el mismo orden del constructor padre.
        this.temperaturaDeCongelamiento = temperaturaDeCongelamiento; // Este es un atributo específico de la clase. No lo tiene la clase padre.
    }
    congelar(pokemonACongelar){
        console.log(this.nombre + " está congelando a otro Pokémon");
        console.log(this.nombre + " tiene un nivel de ataque de " + this.nivelAtaque);
        console.log(pokemonACongelar.nombre + " está siendo congelado. Su nivel de vida ANTES del ataque es: " + pokemonACongelar.nivelVida);
        pokemonACongelar.nivelVida -= this.nivelAtaque * 0.8; // = pokemonAtacado.nivelVida = pokemonAtacado.nivelVida - this.nivelAtaque;
        pokemonACongelar.velocidad -= 10;
        console.log(pokemonACongelar.nombre + " fue congelado. Su nivel de vida DESPUÉS del ataque es: " + pokemonACongelar.nivelVida);
        console.log(`El nivel de vida el pokemon atacante ${this.nombre} es ${this.nivelVida}`);
    }
    atacar(pokemonAtacado){
        this.congelar(pokemonAtacado);
    }
}
class Combate{
    constructor(pokemonA, pokemonB){
        this.pokemonA = pokemonA;
        this.pokemonB = pokemonB;
    }
    iniciarCombate(){
        console.log("-------------");
        console.log(`Comienza el combate entre: ${this.pokemonA.nombre} y ${this.pokemonB.nombre}`);
    }
    pokemonAAtaca(){
        this.pokemonA.atacar(this.pokemonB);
    }
    pokemonBAtaca(){
        this.pokemonB.atacar(this.pokemonA);
    }
}
let pokemon1 = new Pokemon("Pikachu", 20, 200, 35);
let pokemon2 = new Pokemon("Charmander", 15, 150, 50);
pokemon1.atacar(pokemon2);
pokemon2.atacar(pokemon1);
console.log("-----------------------");
let pokemonFuego1 = new PokemonFuego("Charmander", 50, 500, 70, "Azul");
let pokemonHielo1 = new PokemonHielo("Bulbasaur", 30, 300, 25, 5);
pokemonFuego1.quemar(pokemonHielo1);
pokemonHielo1.congelar(pokemonFuego1);
pokemonFuego1.atacar(pokemonHielo1);
pokemonHielo1.atacar(pokemonFuego1);
let pokemonFuego2 = new PokemonFuego("Charizard", 30, 600, 40, "Naranja");
let pokemonHielo2 = new PokemonHielo("Squirtle", 45, 200, 70, -10);
let combate1 = new Combate(pokemonFuego2, pokemonHielo2);
combate1.iniciarCombate();
combate1.pokemonAAtaca();
combate1.pokemonBAtaca();
/*
    Ejercicio: Crear una clase Animal con la siguiente información: nombre, especie, edad.
    Los animales son capaces de saludar con un sonido. Por defecto los animales hacen el sonido "brrr" y dicen su nombre.
    Crear 3 animales diferentes. Cada animal tendrá una característica única que los diferencíe de los demás.
    Modificar el saludo de los animales para que cada uno haga su sonido específico.
    Crear una clase Rancho que tenga un conjunto de animales. Crear un método que permita que todos los animales en el rancho saluden.
*/