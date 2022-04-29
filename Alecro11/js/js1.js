/* Operadores aritméticos */

/* console.log(4 + 44)
console.log(4 ** 3) */

document.write("<h2>Operaciones aritméticas</h2>");
document.write(4 + 56 + "<br>");
document.write("Ejemplo suma " + 4 + 56 + "<br>");
document.write("Ejemplo suma " + (4 + 56) + "<br>");
document.write("Ejemplo residuo" + (5 % 2) + "<br>");
document.write("Multiplicar str por num " + "." * 3 + "<br>");
document.write('Grupo "51" ' + "<br>");
document.write(
  `<ul>
                    <li>Suma</li>
                    <li>Resta</li>
                    <li>Multiplicación</li>
                    <li>División</li>
                    <li>Residuo</li>
               </ul>` + "<br>"
);
document.write(`La suma es ${5 + 5} <br>`);
document.write("El tipo de dato del valor 32 es " + typeof 32 + "<br>");
document.write("El tipo de dato de false es " + typeof false + "<br>");
document.write(`El tipo de dato de false es ${typeof false} <br>`);
document.write(`Comparar 5 contra 6 ${5 == 6} <br>`);
document.write(`Operador ternario ${1 == 2 ? true : false} <br>`);

/* Variables */

let sueldo;
document.write(`Sueldo: ${sueldo} <br>`);
let num1 = 5,
  num2 = 56;
document.write(`Suma: ${num1 + num2} <br>`);
let nombre = "Grupo 51";
document.write(`Grupo: ${nombre} <br>`);

/* const FACTOR = 1.12;

sueldo = sueldo * FACTOR;

comision = comision * FACTOR;

calculo = FACTOR + data */

/* Arreglos y objetos en Javascript */

let lenguajes = ["python", "javascrpt", "java", "C#"];
document.write(`Lenguajes: ${lenguajes} <br>`);
document.write(`Segundo lenguaje: ${lenguajes[1]} <br>`);
console.log(lenguajes);

let empleado = {
  Nombre: "Jesus Corona",
  Edad: "21",
  Lenguajes: lenguajes,
};

document.write(`Empleado: ${empleado} <br>`);
console.log(empleado);
document.write(`Nombre: ${empleado["Nombre"]} <br>`);

/* Función prompt */

/* let estado = prompt("¿Cuál es su estado de procedencia? ");
let carrera = prompt("¿Cuál es su carrera? "); */

/* Estructuras condicionales */

let total = 1500;
let descuento = 0;

if (total > 1000) {
  descuento = total * 0.1;
} else {
  descuento = total * 0.02;
}

document.write(`Descuento: ${descuento} <br>`);

/* Operador ternario */
descuento = total > 100 ? total * 0.1 : total * 0.02;

let promedio = 90;

if (promedio == 100) {
  document.write(`Excelente <br>`);
} else if (promedio >= 90 && promedio <= 99) {
  document.write(`Muy bien <br>`);
} else if (promedio >= 80 && promedio <= 89) {
  document.write(`Bien <br>`);
}

/* Estructura switch */

let n1 = 5;
let n2 = 9;
let operacion = "*";

switch (operacion) {
  case "+":
       document.write(`La suma es: ${n1 + n2} <br>`);
    break;
  case "-":
     document.write(`La resta es: ${n1 - n2} <br>`);
    break;
  case "*":
     document.write(`La multiplicación es: ${n1 * n2} <br>`);
    break;
  case "/":
     document.write(`La división es: ${n1 / n2} <br>`);
    break;
  default:
     document.write(`Operación no valida <br>`);
    break;
}


/* Estructuras repetitivas FOR */

document.write(`Javascript <br>`);
document.write(`Javascript <br>`);
document.write(`Javascript <br>`);
document.write(`Javascript <br>`);
document.write(`Javascript <br>`);

for (let index = 0; index < 5; index++) {
     document.write(`JS <br>`);
     /* const element = array[index]; */
}

/* Imprime los pares del 2 al 20 */
for (let n = 2; n <= 20; n +=2 ) {
     document.write(`${n} <br>`);
}

/* Imprime los números del 10 al 1 */
for (let n = 10; n >= 1; n -- ) {
     document.write(`${n} <br>`);
}

/* Imprime los números del 10 al 1 */
let tabla= 3;
for (let n = 1; n <= 10; n ++ ) {
     document.write(`${tabla}X${n}=${tabla * n} <br>`);
}

/* Ejemplo DO*/

let iteración= 1
do {
     document.write(`do-while <br>`)
     iteración++;
} while (condition <=3);
