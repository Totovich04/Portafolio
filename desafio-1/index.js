// Autor: Olmos Tomas
"use strict";

import seedrandom from "seedrandom";

var random = seedrandom(1763519);

let numRandoms = Array.from({length: 1000000 }, () => random.int32());

console.log(numRandoms);
//Punto 1 Cantidad de números positivos y cantidad de números negativos.
console.log("Cantidad de Positivos: " + numRandoms.filter(x => x > 0).length);
console.log("Cantidad de Negativos: " + numRandoms.filter(x => x < 0).length);

//Punto 2 Cantidad de números cuyo resto al dividirlos en 7 sea exactamente 0, 3, 5 o 6
console.log("Cantidad de Resto 0, 3, 5 o 6: " + numRandoms.filter(x => x % 7 === 0 || x % 7 === 3 || x % 7 === 5 || x % 7 === 6 ).length);

//Punto 3 Un arreglo de contadores que indique la cantidad de números según su anteúltimo dígito (el de las decenas) coincida con el índice
let contadores = Array.from({length: 10}, () => 0);

numRandoms.forEach(num => { 
    let numero = Math.abs(num);
    let segundoDigito = Math.floor(numero / 10) % 10; 
    contadores[segundoDigito]++; });

console.log("Contadores:" + "{"+ contadores +"}");

//Punto 4 Valor y posición del menor de todos los números
let min = NaN
let pos = 0
numRandoms.forEach(num => { 
    if (isNaN(min)) {
        min = num
        pos = numRandoms.indexOf(num) + 1;
    }
    if (num < min) {
        min = num
        pos = numRandoms.indexOf(num) + 1;
    }
});

console.log("Minimo: ", min);
console.log("Posicion: ", pos);

//Punto 5 Cantidad de números cuyo signo sea igual al del anterior
let ant = NaN
let signo = NaN
let contador = 0

numRandoms.forEach(num => { 
    if (isNaN(ant)) {
        ant = num
        signo = Math.sign(num)
    }
    else {if (Math.sign(num) === signo) {
        ant = num
        signo = Math.sign(num)
        contador++;}
        else {
            ant = num
            signo = Math.sign(num)
        }}
    
    
});

console.log("Cantidad de numeros con el mismo signo: ", contador);

//Punto 6 Promedio entero (redondeado con Math.round) de todos los números que contengan exactamente 6 dígitos.
let acu = 0;
let cont = 0;
let numA = 0;
let numB = "";
numRandoms.forEach(num => { 
    numA = Math.abs(num);
    numB = numA.toString();
    if (numB.length == 6) {
        acu += num
        cont++;
    }
});

let promedio = Math.round(acu / cont);
console.log("Promedio de los numeros de 6 digitos: ", promedio);
