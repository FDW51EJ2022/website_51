/* Operadores aritmeticos */
/* console.log(4 + 44);
console.log(4 ** 3); */
document.write("<h2Operaciones aritmeticas</h2>");
document.write("Ejemplo suma " + (4 + 56) + "<br>");
document.write("Ejemplo residuo " + (5 % 2) + "<br>");
document.write("Multipliacar str por num " + ("." * 3));
document.write('Grupo "51" <br>');
document.write(`<ul>
                    <li>Suma</li>
                    <li>Resta</li>
                    <li>Multiplicacion</li>
                    <li>Division</li>
                    <li>Residuo</li>
                </ul>`);
document.write(`La suma es ${5 + 5} <br>`)
document.write("El tipo de dato del valor 32 es " + typeof 32 + "<br>");
document.write("El tipo de dato de false es " + typeof false + "<br>");
document.write(`El tipo de dato de false es ${typeof false} <br>`);
document.write(`Comparar 5 contra 6 ${5 == 6} <br>`);
document.write(`Operador ternario ${1 == 2 ? true : false } <br>`);

/* Variables */
let sueldo; 
document.write(`Sueldo: ${sueldo} <br>`);
let num1=5, num2=56;
document.write(`Suma: ${num1 + num2} <br>`);
let nombre="grupo 51"
document.write(`Grupo: ${nombre}<br>`);
const FACTOR = 1.15;

document.write(FACTOR + "<br>");


/* Arreglos y objetos en javascript */

let lenguajes = ["pyhton","javascript","java","C#"];

document.write(`Lenguajes ${lenguajes} <br>`);
document.write(`Segundo Lenguaje ${lenguajes[1]} <br>`);
console.log(lenguajes)


let empleado = {
    "nombre" : "Jesus Cortez",
    "edad" : 21,
    "lenguajes" : lenguajes
}

document.write(`Empleado ${empleado} <br>`);
console.log(empleado)
document.write(`Nombre ${empleado["nombre"]} <br>`);

/* Funcion prompt */

/* let estado = prompt("¿Cuál es su estado de procedencia?");
let estado = prompt("¿Cuál es tu carrera?"); */

/* Estructuras condicionales */

let total = 1500;
let descuento = 0;

if (total > 1000) {
    descuento = total * 0.10;
} else {
    descuento = total * 0.02;
}

/* Operador ternario */
descuento = total > 1000 ? total * 0.1 : total * 0.02;

document.write(`Descuento ${descuento} <br>`)

let promedio = 90;

if (promedio == 100) {
     document.write(`Excelente <br>`)
} else if(promedio >=90 && promedio <=99) {
    document.write(`Muy bien <br>`);
} else if(promedio >=80 && promedio <=89) {
    document.write(`Bien <br>`);
}

/* Estructura switch */
let n1 = 5;
let n2 = 9;
let operacion = "+"; /*  */

switch (operacion) {
  case "+":
    document.write(`La suma es: ${n1 + n2} <br>`);
    break;
  case "-":
    document.write(`La resta es: ${n1 - n2} <br>`);
    break;
  case "*":
    document.write(`La multiplicacion es: ${n1 * n2} <br>`);
    break;
  case "/":
    document.write(`La división es: ${n1 / n2} <br>`);
    break;
  default:
    document.write(`Operacion no valida <br>`);
    break;
}

/* Estructuras repetitivas FOR */
document.write(`Javascript <br>`);
document.write(`Javascript <br>`);
document.write(`Javascript <br>`);
document.write(`Javascript <br>`);
document.write(`Javascript <br>`);

for (let index = 0; index < 5; index++) {
    document.write(`js <br>`); 
}
/* Imprime los pares del 2 al 20 */
for(let n = 2; n <=20; n +=2){
    document.write(`${n} <br>`); 
}

/* Imprime los numeros del 10 al 1 */
for(let n= 10; n >=1; n--){
    document.write(`${n} <br>`); 
}

let tabla=3;
for(let n=1; n <=10; n++){
    document.write(`${tabla}X${n}=${tabla*n} <br>`); 
}

/* Ejemplo do */
let iteracion=1
do {
    document.write(`do-while <br>`); 
    iteracion++;
} while (iteracion <=3);