//  0  1  2  3  4  5  
// [1, 3, 0, 9, 8, 5] []
// arreglo.lenght - 1 = 5

/*
    [1, 3, 0, 9, 8, 5]
    Comparando 9 y 8
    arreglo[3] => 9
    arreglo[4] => 8

    aux = arreglo[4] => 9
    arreglo[3] = arreglo[4];
    arreglo[3] => 8
    arreglo[4] => 8
    arreglo[4] = aux; => 9
    arreglo[3] => 8
    arreglo[4] => 9

              a  b
    [1, 3, 0, 9, 8, 5]

    compareFunction(a, b) => 9, 8 return 1
    
              b  a
    [1, 3, 0, 8, 9, 5]

    9 > 8
    a = 9
    b = 8
    a/b = 9/8 > 0
    return a/b > 0 

    a = 8
    b = 9
    a/b = 8/9 > 0

    a = 9
    b = 8

    b - a = 8 - 9 = -1

    a - b = 9 - 8 = 1
    

*/

function ordenamientoBurbuja(arreglo){
    let huboCambio = true;
    while(huboCambio){
        huboCambio = false;
        for(let i = 0; i < arreglo.length - 1; i++){
            if(arreglo[i] > arreglo[i + 1]){
                //Intercambiar los valores.
                let aux = arreglo[i];
                arreglo[i] = arreglo[i + 1];
                arreglo[i + 1] = aux;
                huboCambio = true;
            }
        }
    }
}

let arregloAOrdenar = [1, 3, 0, 9, 8, 5];
console.log("Arreglo sin ordenar");
console.log(arregloAOrdenar);

ordenamientoBurbuja(arregloAOrdenar);

console.log("Arreglo ordenado: ")
console.log(arregloAOrdenar);


let arregloAOrdenar2 = [1, 3, 0, 9, 8, 5, 10, -2, 8, 13, 21, 2];

console.log("Arreglo sin ordenar");
console.log(arregloAOrdenar2);

arregloAOrdenar2.sort();

console.log("Arreglo ordenado");
console.log(arregloAOrdenar2);

let arregloAOrdenar3 = [1, 3, 0, 9, 8, 5, 10, -2, 8, 13, 21, 2];

console.log("Arreglo sin ordenar");
console.log(arregloAOrdenar3);

// Cuando una función recibe como parámetro otra función, la función parámetro se conoce como callback.
arregloAOrdenar3.sort(function funcionDeComparacion(a, b){
    return a - b;
});

console.log("Arreglo ordenado");
console.log(arregloAOrdenar3);
