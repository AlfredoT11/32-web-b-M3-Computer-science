class Persona{
    constructor(id, nombre){
        this.id = id;
        this.nombre = nombre;
    }
}

class Nodo{
    constructor(valor){
        this.valor = valor;
        this.siguiente = null;
    }
}

class ListaEnlazada{
    constructor(){
        this.cabeza = null;
    }

    insertar(valor){
        let nuevoNodo = new Nodo(valor);

        // La lista lista enlazada está vacía, por lo tanto, el nodo creado será la cabeza.
        if(this.cabeza == null){
            this.cabeza = nuevoNodo;
        }else{ // Ya tenemos al menos un valor en la lista.
            let nodoAux = this.cabeza;
            
            while(nodoAux.siguiente != null){ // Verificamos que no estemos en el final de la lista enlazada.
                nodoAux = nodoAux.siguiente; // Estamos avanzando en la lista enlazada.
            }

            nodoAux.siguiente = nuevoNodo; // Agregando el nuevo nodo al final de la lista.

        }
    }

    mostrarTodos(){
        let nodoAux = this.cabeza;
            
        while(nodoAux != null){ // Verificamos que no estemos en el final de la lista enlazada.
            console.log(nodoAux.valor);
            nodoAux = nodoAux.siguiente; // Estamos avanzando en la lista enlazada.
        }
    }

    buscar(idABuscar){
        let nodoAux = this.cabeza;
            
        while(nodoAux != null){ // Verificamos que no estemos en el final de la lista enlazada.
            if(nodoAux.valor.id == idABuscar){
                return nodoAux;
            }
            nodoAux = nodoAux.siguiente; // Estamos avanzando en la lista enlazada.
        }
        return null;
    }

    eliminar(idUsuario){
        
        // Este es el caso donde la cabeza es el elemento a eliminar.
        if(this.cabeza.valor.id == idUsuario){
            this.cabeza = this.cabeza.siguiente;
        }
        
        let nodoAux = this.cabeza;    
        while(nodoAux.siguiente != null){ // Verificamos que no estemos en el final de la lista enlazada.
            if(nodoAux.siguiente.valor.id == idUsuario){
                nodoAux.siguiente = nodoAux.siguiente.siguiente;
                return;
            }
            nodoAux = nodoAux.siguiente; // Estamos avanzando en la lista enlazada.
        }
    }

}

let persona1 = new Persona(1, 'Juan');
let persona2 = new Persona(5, 'Arturo');
let persona3 = new Persona(2, 'Jose');
let persona4 = new Persona(15, 'Juliana');

let listaPersonas = new ListaEnlazada();
listaPersonas.insertar(persona1);
listaPersonas.insertar(persona2);
listaPersonas.insertar(persona3);
listaPersonas.insertar(persona4);
listaPersonas.mostrarTodos();

let idABuscar = 15;
let valorEncontrado = listaPersonas.buscar(idABuscar);
if(valorEncontrado != null){
    console.log(`El nombre del usuario con id ${idABuscar} es ${valorEncontrado.valor.nombre}`);
}else{
    console.log(`No existe una persona con el id ${idABuscar}`);
}

idABuscar = 32;
valorEncontrado = listaPersonas.buscar(idABuscar);
if(valorEncontrado != null){
    console.log(`El nombre del usuario con id ${idABuscar} es ${valorEncontrado.valor.nombre}`);
}else{
    console.log(`No existe una persona con el id ${idABuscar}`);
}

console.log('Lista personas');
listaPersonas.mostrarTodos();
listaPersonas.eliminar(5);

console.log('Lista personas');
listaPersonas.mostrarTodos();
listaPersonas.eliminar(15);

console.log('Lista personas');
listaPersonas.mostrarTodos();
listaPersonas.eliminar(32);

console.log('Lista personas');
listaPersonas.mostrarTodos();




