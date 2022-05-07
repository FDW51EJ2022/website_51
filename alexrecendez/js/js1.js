/* Práctica de operadores aritméticos */
/* console.log(4 + 44);
console.log(4 ** 3); */

document.write("<h2> Operaciones aritméticas </h2>");
document.write("Ejemplo suma: " + (4 + 56) + "<br>");
document.write("Ejemplo residuo: " + (5 % 2) + "<br>");
document.write("Multiplicar str por num: " + "." * 3 + "<br>");
document.write('Grupo "51" <br>');
document.write(`<ul>
                    <li>Suma</li>
                    <li>Resta</li>
                    <li>Multiplicación</li>
                    <li>División</li>
                    <li>Residuo</li>
                </ul>`);
document.write(`La suma es: ${5 + 5} <br>`);
document.write("El tipo de dato del valor 32 es: " + typeof 32 + "<br>");
document.write("El tipo de dato false es: " + typeof false + "<br>");
document.write(`El tipo de dato false es: ${typeof false} <br>`);
document.write(`Comparar 5 contra 6: ${5 == 6} <br>`);
document.write(`Operador ternario: ${1 == 2 ? true : false} <br>`);



/* Práctica de variables */
let sueldo;
document.write(`Sueldo: ${sueldo} <br>`);
let num1 = 5,
  num2 = 56;
document.write(`Suma: ${num1 + num2} <br>`);
let nombre = "grupo 51";
document.write(`Grupo: ${nombre} <br>`);

const factor = 1.15;
document.write(factor + "<br>");



/* Arreglos y objetos en javascript */
let lenguajes = ["python", "javascript", "java", "C#"];
document.write(`Lenguajes: ${lenguajes} <br>`);
document.write(`Segundo lenguaje: ${lenguajes[1]} <br>`);
console.log(lenguajes);

let empleado = {
  nombre: "Alejandra Rivera",
  edad: 21,
  lenguajes: lenguajes,
};
document.write(`Empleado: ${empleado} <br>`);
console.log(empleado);
document.write(`Nombre: ${empleado["nombre"]} <br>`);

/* let estado = prompt("¿Cúal es su estado de procedencia?");
let carrera = prompt("¿Cúal es tu carrera?"); */



/* Estructuras condicionales */
let total = 1500;
let descuento = 0;

if (total > 1000) {
  descuento = total * 0.1;
} else {
  descuento = total * 0.02;
}



/* Operador ternario */
descuento = total > 1000 ? total * 0.1 : total * 0.02;

document.write(`Descuento: ${descuento} <br>`);

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
let operacion = "+";

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



/* Estructuras repetititvas for */
document.write(`Javascript <br>`);
document.write(`Javascript <br>`);
document.write(`Javascript <br>`);
document.write(`Javascript <br>`);
document.write(`Javascript <br>`);

for (let index = 0; index < 5; index++) {
  document.write(`js <br>`);
}
/* Imprime los pares del 2 al 20 */
for (let n = 2; n <= 20; n += 2) {
  document.write(`${n} <br>`);
}

/* Imprime los números del 10 al 1 */
for (let n = 10; n >= 1; n--) {
  document.write(`${n} <br>`);
}

let tabla = 3;
for (let n = 1; n <= 10; n++) {
  document.write(`${tabla} X ${n} = ${tabla * n} <br>`);
}



/* Ejemplo de estructura do */
let iteracion = 1;
do {
  document.write(`do-while <br>`);
} while (iteracion <= 3);



/* Declaración de una función */
/* Sintaxis 1. Como constante */

const saludo = function () {
  document.write("<h1>Hola</h1>");
};

const cuadrado = function (num) {
  return num * num;
};

/* Llamar a la funcion */
saludo();
document.write(`El cuadrado es: ${cuadrado(3)} <br>`);

/* Sintaxis 2. Utilizando function */
function numeros() {
  for (let n = 1; n <= 10; n++) {
    document.write(`${n} <br>`);
  }
}
function cuadrado_v2(num) {
  return num * num;
}
/* Llama a la función */
numeros();
document.write(`Cuadrado v2 ${cuadrado_v2(8)} <br>`);

/* Sintaxis 3. Función flecha */
const cuadrado_v3 = (num) => {
  return num * num;
};
/* LLama a la función */
document.write(`Cuadrado v3 ${cuadrado_v3(5)} <br>`);

/* Sintaxis 4. Función flecha reducida */
const cuadrado_v4 = (num) => num * num;
/* Llama a la función */
document.write(`Cuadrado v4 ${cuadrado_v4(3)} <br>`);



/* Manipulando elemento html */
let p = document.getElementById("info");

console.log(p.textContent);
console.log(p.innerHTML);
console.log(p.outerHTML);

p.innerHTML = "Adiós <strong> :D </strong>";
