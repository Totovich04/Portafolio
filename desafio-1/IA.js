// Importar la librería seedrandom
const seedrandom = require('seedrandom');

// Semilla para generar números aleatorios
const seed = 1763519;

// Función para generar números aleatorios enteros utilizando seedrandom
function generarNumerosAleatorios(cantidad) {
    const rng = seedrandom(seed);
    const numeros = [];
    for (let i = 0; i < cantidad; i++) {
        numeros.push(rng.int32());
    }
    return numeros;
}

// Función para contar la cantidad de números positivos y negativos
function contarPositivosYNegativos(numeros) {
    let positivos = 0;
    let negativos = 0;
    for (const numero of numeros) {
        if (numero > 0) {
            positivos++;
        } else if (numero < 0) {
            negativos++;
        }
    }
    return { positivos, negativos };
}

// Función para contar la cantidad de números cuyo resto al dividirlos en 7 sea exactamente 0, 3, 5 o 6
function contarRestos(numeros) {
    const restos = [0, 0, 0, 0]; // Índices 0, 1, 2, 3 representan los restos 0, 3, 5, 6
    for (const numero of numeros) {
        const resto = Math.abs(numero) % 7;
        if (resto === 0 || resto === 3 || resto === 5 || resto === 6) {
            restos[resto]++;
        }
    }
    return restos;
}

// Función para contar la cantidad de números según su anteúltimo dígito
function contarAnteultimosDigitos(numeros) {
    const contadores = Array.from({ length: 10 }, () => 0); // Inicializar contadores en 0
    for (const numero of numeros) {
        const anteultimoDigito = Math.abs(numero) % 100;
        const indice = Math.floor(anteultimoDigito / 10);
        contadores[indice]++;
    }
    return contadores;
}

// Función para encontrar el valor y posición del menor número
function encontrarMenor(numeros) {
    let menor = numeros[0];
    let posicion = 1;
    for (let i = 1; i < numeros.length; i++) {
        if (numeros[i] < menor) {
            menor = numeros[i];
            posicion = i + 1;
        }
    }
    return { valor: menor, posicion };
}

// Función para contar la cantidad de números cuyo signo sea igual al del anterior
function contarSignoIgualAlAnterior(numeros) {
    let contador = 0;
    for (let i = 1; i < numeros.length; i++) {
        if ((numeros[i] > 0 && numeros[i - 1] > 0) || (numeros[i] < 0 && numeros[i - 1] < 0)) {
            contador++;
        }
    }
    return contador;
}

// Función para calcular el promedio entero de los números que contienen exactamente 6 dígitos
function calcularPromedio6Digitos(numeros) {
    let suma = 0;
    let cantidad = 0;
    for (const numero of numeros) {
        if (Math.abs(numero) >= 100000 && Math.abs(numero) < 1000000) {
            suma += numero;
            cantidad++;
        }
    }
    return Math.round(suma / cantidad);
}

// Generar 1000000 de números aleatorios
const numerosAleatorios = generarNumerosAleatorios(1000000);

// Realizar los cálculos solicitados
const { positivos, negativos } = contarPositivosYNegativos(numerosAleatorios);
const cantidadRestos = contarRestos(numerosAleatorios);
const contadoresAnteultimosDigitos = contarAnteultimosDigitos(numerosAleatorios);
const { valor: menorNumero, posicion: posicionMenor } = encontrarMenor(numerosAleatorios);
const cantidadSignoIgualAlAnterior = contarSignoIgualAlAnterior(numerosAleatorios);
const promedio6Digitos = calcularPromedio6Digitos(numerosAleatorios);

// Mostrar resultados
console.log("Cantidad de números positivos:", positivos);
console.log("Cantidad de números negativos:", negativos);
console.log("Cantidad de números cuyo resto al dividirlos en 7 sea exactamente 0, 3, 5 o 6:", cantidadRestos);
console.log("Contadores de números según su anteúltimo dígito:", contadoresAnteultimosDigitos);
console.log("Menor número generado:", menorNumero, "en la posición:", posicionMenor);
console.log("Cantidad de números cuyo signo sea igual al del anterior:", cantidadSignoIgualAlAnterior);
console.log("Promedio entero de números que contienen exactamente 6 dígitos:", promedio6Digitos);
