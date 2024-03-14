class Nodo {
    constructor(valor) {
        this.valor = valor;
        this.izquierdo = null;
        this.derecho = null;
    }
}

class ArbolBinario {
    constructor() {
        this.raiz = null;
    }

    insertar(valor) {
        let nuevoNodo = new Nodo(valor);
        if (this.raiz == null) {
            this.raiz = nuevoNodo;
        } else {
            let nodoActual = this.raiz;

            while (true) {
                // Necesito saber si me tengo que moverme a la izquierda o a la derecha.
                if (valor <= nodoActual.valor) {
                    // El nuevo valor va a la izquierda.
                    if (nodoActual.izquierdo == null) {
                        // En este caso aún no hay un hijo izquierdo.
                        nodoActual.izquierdo = nuevoNodo;
                        return;
                    } else {
                        // En este caso ya hay un hijo izquierdo.
                        nodoActual = nodoActual.izquierdo;
                    }
                } else {
                    // El nuevo valor va a la derecha.
                    if (nodoActual.derecho == null) {
                        // En este caso aún no hay un hijo derecho.
                        nodoActual.derecho = nuevoNodo;
                        return;
                    } else {
                        // En este caso ya hay un hijo derecho.
                        nodoActual = nodoActual.derecho;
                    }
                }

            }
        }
    }

    buscar(valorABuscar){
        let nodoActual = this.raiz;
        if(this.raiz == null){
            return null;
        }

        while(nodoActual != null){
            if(nodoActual.valor == valorABuscar){
                return nodoActual.valor;
            }

            if(valorABuscar <= nodoActual.valor){
                // Me muevo a la izquierda.
                nodoActual = nodoActual.izquierdo;
            }else{
                // Me muevo a la derecha.
                nodoActual = nodoActual.derecho;
            }
        }
        return null;
    }

    inorden(nodo, arreglo){
        if(nodo != null){
            this.inorden(nodo.izquierdo, arreglo); // <- Este es el movimiento a la izquierda.
            arreglo.push(nodo.valor);
            this.inorden(nodo.derecho, arreglo); // <- Este es el movimiento a la derecha. 
        }
    }

    preorden(nodo, arreglo){
        if(nodo != null){
            arreglo.push(nodo.valor);
            this.preorden(nodo.izquierdo, arreglo); // <- Este es el movimiento a la izquierda.
            this.preorden(nodo.derecho, arreglo); // <- Este es el movimiento a la derecha. 
        }
    }

    postorden(nodo, arreglo){
        if(nodo != null){
            this.postorden(nodo.izquierdo, arreglo); // <- Este es el movimiento a la izquierda.
            this.postorden(nodo.derecho, arreglo); // <- Este es el movimiento a la derecha. 
            arreglo.push(nodo.valor);
        }
    }

}

// función factorial = x! = x * (x - 1) * (x - 2) * (x - 3) * ... * 1
// 5! = 5 * 4 * 3 * 2 * 1;

// Una función recursiva es una función que se llama así misma.
function factorial(x){
    if(x == 1){ // Esta es la condición de paro.
        return 1;
    }else{
        return x * factorial(x - 1);
    }
}

let factorialACalcular = 6;
console.log(`El factorial de ${factorialACalcular} es ${factorial(factorialACalcular)}`);

let valoresAInsertar = [8, 9, 10, 5, 2, 9, 7, 8, 6];
let arbolBinario1 = new ArbolBinario();

for(let i = 0; i < valoresAInsertar.length; i++){
    arbolBinario1.insertar(valoresAInsertar[i]);
}

let valorABuscar = 8;
if(arbolBinario1.buscar(valorABuscar) != null){
    console.log(`El valor ${valorABuscar} SÍ está en el árbol`);
}else{
    console.log(`El valor ${valorABuscar} NO está en el árbol`);
}

valorABuscar = 11;
if(arbolBinario1.buscar(valorABuscar) != null){
    console.log(`El valor ${valorABuscar} SÍ está en el árbol`);
}else{
    console.log(`El valor ${valorABuscar} NO está en el árbol`);
}

console.log('Arreglo original');
console.log(valoresAInsertar);

console.log('Inorden'); // El inorden nos permite obtener un arreglo ordenado de valores.
let arregloInorden = [];
arbolBinario1.inorden(arbolBinario1.raiz, arregloInorden);
console.log(arregloInorden);

console.log('Preorden')
let arregloPreorden = [];
arbolBinario1.preorden(arbolBinario1.raiz, arregloPreorden);
console.log(arregloPreorden);

console.log('Postorden')
let arregloPostorden = [];
arbolBinario1.postorden(arbolBinario1.raiz, arregloPostorden);
console.log(arregloPostorden);

let nombres = ['Edmundo', 'Arturo', 'Juliana', 'Jose', 'Roberto'];
let arbolDeNombres = new ArbolBinario();
for(let i = 0; i < nombres.length; i++){
    arbolDeNombres.insertar(nombres[i]);
}

let nombresOrdenados = [];
console.log('Inorden de nombres');
arbolDeNombres.inorden(arbolDeNombres.raiz, nombresOrdenados);
console.log(nombresOrdenados);

