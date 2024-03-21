function busquedaBinaria(numeroABuscar, arreglo, inicio, final){

    let posicionMitad = Math.floor((inicio + final) / 2);

    if(inicio == final && arreglo[posicionMitad] != numeroABuscar){
        return -1;
    }

    if(arreglo[posicionMitad] === numeroABuscar){
        return posicionMitad;
    }else if(numeroABuscar > arreglo[posicionMitad]){
        // Me muevo a la derecha.
        return busquedaBinaria(numeroABuscar, arreglo, posicionMitad + 1, final);
    }else if(numeroABuscar < arreglo[posicionMitad]){
        // Me muevo a la izquierda.
        return busquedaBinaria(numeroABuscar, arreglo, inicio, posicionMitad - 1);
    }

}

//             0                                           13   14
let arreglo = [0, 0, 1, 1, 3, 4, 5, 9, 15, 21, 32, 32, 33, 52, 100];
let valorABuscar = 52;
let posicionValor = busquedaBinaria(valorABuscar, arreglo, 0, arreglo.length - 1);
if(posicionValor != -1){
    console.log(`El valor ${valorABuscar} SÍ existe y está en la posición ${posicionValor}`);
}else{
    console.log(`El valor ${valorABuscar} NO existe`);
}

valorABuscar = 101;
posicionValor = busquedaBinaria(valorABuscar, arreglo, 0, arreglo.length - 1);
if(posicionValor != -1){
    console.log(`El valor ${valorABuscar} SÍ existe y está en la posición ${posicionValor}`);
}else{
    console.log(`El valor ${valorABuscar} NO existe`);
}

class Alumno{
    constructor(boleta, nombre){
        this.boleta = boleta;
        this.nombre = nombre;
    }
}

let alumnos = [];
alumnos.push(new Alumno(500, "Uziel"));
alumnos.push(new Alumno(2, "Andrea"));
alumnos.push(new Alumno(4, "Galilea"));
alumnos.push(new Alumno(5, "Arturo"));
alumnos.push(new Alumno(1, "Mauro"));



let arregloNumeros = [5, 8, 1, 0, 24, 32, 9, 4, 2, 7];
valorABuscar = 24;
// La función que se recibe como parámetro se conoce como callback
let valorEncontrado = arregloNumeros.find(function busqueda(a){
    return a == valorABuscar;
});

console.log(valorEncontrado);

let boletaAEncontrar = 5;

console.log(`Buscando un alumno cuya boleta sea mayor o igual a ${boletaAEncontrar}`);
// find() regresa el primer valor que cumpla con la condición del callback
let alumnoEncontrado = alumnos.find(function busqueda(alumno){
    return alumno.boleta >= boletaAEncontrar;
});
console.log(alumnoEncontrado);

console.log(`Buscando a todos los alumnos cuya boleta sea mayor o igual a ${boletaAEncontrar}`);
// filter() regresa todos los valores que cumplan con la condición del callback
let alumnosEncontrados = alumnos.filter(function busqueda(alumno){
    return alumno.boleta >= boletaAEncontrar;
});
console.log(alumnosEncontrados);
