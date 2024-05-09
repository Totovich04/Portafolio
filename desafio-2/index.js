import {readFile} from 'fs/promises';

function readJSON(file){
    return readFile(file, 'utf8').then(data => JSON.parse(data));
}

function main(){
     readJSON('personas.json').then(data => {
        
        function promedioEdades(){
            let sumaEdades = 0;
            data.forEach(persona => {
                sumaEdades += persona.edad;
            });
            let promedio = sumaEdades / data.length;
            return Math.round(promedio);
        };

        function edadMinima(){
            let edadMinima , nombre = "", apellido = "";
            data.forEach((persona, i) => {
                if (i===0 ){
                    edadMinima = persona.edad
                    nombre = persona.nombre
                    apellido = persona.apellido;
                }
                if (persona.edad < edadMinima){
                    edadMinima = persona.edad;
                    nombre = persona.nombre;
                    apellido = persona.apellido;
                }
            });
            return {e: edadMinima,n: nombre,a: apellido}};

        function informeNombres(){
            data.sort((a, b) => a.nombre.localeCompare(b.nombre));
            let nombresGomez = data.filter(persona => persona.apellido === "GOMEZ").map(persona => persona.nombre);
            return console.log(nombresGomez.join(", "));
        };

        function sumaEdades(){
            let edad4 = 0;
            data.forEach(persona => {
            
                if (persona.nombre.length % 2 === 0 && persona.apellido.length % 2 === 1){
                    edad4 += persona.edad;
                }
            })
            return edad4;
        }
        function generarObjetos(){
            
            let objeto = {
                mayores: data.filter(persona => persona.edad > 18).length,
                menores: data.filter(persona => persona.edad <= 18).length,
                primeraMitad: data.filter(persona => persona.apellido < "M").length,
                segundaMitad: data.filter(persona => persona.apellido > "M").length,
            };
            
            let objetoJSON = JSON.stringify(objeto); 
            return objetoJSON;
        }

        function generarObjetos2(){
            
            let objeto = {
                castillo: data.filter(persona => persona.apellido === "CASTILLO").length,
                diaz: data.filter(persona => persona.apellido === "DIAZ").length,
                ferrer: data.filter(persona => persona.apellido === "FERRER").length,
                pino: data.filter(persona => persona.apellido === "PINO").length,
                romero: data.filter(persona => persona.apellido === "ROMERO").length,

            };
            
            let objetoJSON = JSON.stringify(objeto);
            return objetoJSON;
        }
        
        console.log("El promedio de edades es: " + promedioEdades());
        let respuesta = edadMinima();
        console.log("La edad mínima es: " + respuesta.n + " " + respuesta.a + " " + respuesta.e);
        informeNombres();
        console.log("Suma edades nombre Par y apellido Impar: " + sumaEdades());
        console.log(generarObjetos());
        console.log(generarObjetos2());
     });
}


main();

