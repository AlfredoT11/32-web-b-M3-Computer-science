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

    buscar(valor){
        let nodoAux = this.cabeza;
            
        while(nodoAux != null){ // Verificamos que no estemos en el final de la lista enlazada.
            if(nodoAux.valor == valor){
                return true;
            }
            nodoAux = nodoAux.siguiente; // Estamos avanzando en la lista enlazada.
        }
        return false;
    }

    eliminar(valor){
        
        // Este es el caso donde la cabeza es el elemento a eliminar.
        if(this.cabeza.valor == valor){
            this.cabeza = this.cabeza.siguiente;
        }
        
        let nodoAux = this.cabeza;    
        while(nodoAux.siguiente != null){ // Verificamos que no estemos en el final de la lista enlazada.
            if(nodoAux.siguiente.valor == valor){
                nodoAux.siguiente = nodoAux.siguiente.siguiente;
                return;
            }
            nodoAux = nodoAux.siguiente; // Estamos avanzando en la lista enlazada.
        }
    }

}

class TablaHash{
    constructor(n){
        this.n = n;
        this.tabla = new Array(n);
    }

    funcionHash(valor){
        return Math.abs(valor % this.n);
    }

    agregar(valor){
        let indice = this.funcionHash(valor);

        if(this.tabla[indice] == null){
            let listaEnlazada = new ListaEnlazada();
            listaEnlazada.insertar(valor);
            this.tabla[indice] = listaEnlazada;
        }else{
            this.tabla[indice].insertar(valor); // Esto es una colisión. Hay más de un valor en un índice.
        }
    }

    buscar(valor){
        let indice = this.funcionHash(valor);

        if(this.tabla[indice] == null){
            return false;
        }else{
            return this.tabla[indice].buscar(valor);
        }
    }

    mostrar(){
        for(let i = 0; i < this.n; i++){
            console.log(`Posición ${i}`);
            this.tabla[i].mostrarTodos();
        }
    }

}

let tablaHash1 = new TablaHash(5);

tablaHash1.agregar(2);
tablaHash1.agregar(5);
tablaHash1.agregar(10);
tablaHash1.agregar(1);
tablaHash1.agregar(0);
tablaHash1.agregar(7);
tablaHash1.agregar(8);
tablaHash1.agregar(8);
tablaHash1.agregar(100);
tablaHash1.agregar(-1);
tablaHash1.agregar(6);
tablaHash1.agregar(1);
tablaHash1.agregar(4);
tablaHash1.agregar(13);
tablaHash1.agregar(96);
tablaHash1.agregar(-1);

tablaHash1.mostrar();

let persona1 = {
    nombre: "Galilea",
    apellido: "Loretto"
}
