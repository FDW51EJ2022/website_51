/* Operadores aritméticos */

/* console.log(4 + 44)
console.log(4 ** 3) */

document.write("<h2>Operaciones aritméticas</h2>");
document.write(4 + 56 + "<br>");
document.write("Ejemplo suma " + 4 + 56 + "<br>");
document.write("Ejemplo suma " + (4 + 56) + "<br>");
document.write("Ejemplo residuo" + (5 % 2) + "<br>");
document.write("Multiplicar str por num " + ("." * 3) + "<br>");
document.write('Grupo "51" ' + "<br>");
document.write(`<ul>
                    <li>Suma</li>
                    <li>Resta</li>
                    <li>Multiplicación</li>
                    <li>División</li>
                    <li>Residuo</li>
               </ul>`+ "<br>");
document.write(`La suma es ${5 + 5} <br>`)
document.write("El tipo de dato del valor 32 es " + typeof 32 + "<br>");
document.write("El tipo de dato de false es " + typeof false + "<br>");
document.write(`El tipo de dato de false es ${typeof false} <br>`);
document.write(`Comparar 5 contra 6 ${5 == 6} <br>`);
document.write(`Operador ternario ${1 == 2 ? true : false} <br>`);

/* Variables */

let sueldo;
document.write(`Sueldo: ${sueldo} <br>`);
let num1=5, num2=56;
document.write(`Suma: ${num1 + num2} <br>`)
let nombre="Grupo 51";
document.write(`Grupo: ${nombre} <br>`)

const FACTOR = 1.12;

sueldo = sueldo * FACTOR;
/* ... */
comision = comision * FACTOR;
/* ... */
calculo = FACTOR + data
