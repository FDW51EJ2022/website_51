/* Operadores aritmeticos */
/* console.log(4+44);
console.log(4 ** 3); */

/* document es con d minuscula al inicio */

document.write("<h2>Operaciones aritmeticas<h2/>");
document.write("Ejemplo suma " + (4 + 56) + "<br>");
document.write("Ejemplo residuo " + (5 % 2) + "</br>");
document.write("Multiplicar str por num " + ("." * 3) + "<br>");

/* Cadenas */
document.write('Grupo "51"<br>');
document.write(`<ul>
                    <li>Suma</li>
                    <li>Resta</li>
                    <li>Multiplicacion</li>
                    <li>Division</li>
                    <li>Residuo</li>
                </ul>`);
document.write(`La suma es ${5 + 5} <br>`);
document.write("El tipo de dato del valor 32 es " + typeof 32 + "<br>");
document.write("El tipo de dato de false es " + typeof false + "<br>");
document.write(`El tipo de dato de false es ${typeof false} <br>`);
document.write(`Comparar 5 contra 6 ${5 == 6} <br>`);
document.write(`Operador ternario ${1 == 1 ? true : false} <br>`);

/* variables */

let sueldo;
document.write(`Sueldo: ${sueldo} <br>`);
let num1=5, num2=56;
document.write(`Suma: ${num1 + num2} <br>`);
let nombre= "grupo 51";
document.write(`Grupo: ${nombre}<br>`);








