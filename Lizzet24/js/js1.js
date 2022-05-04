/* Operadores aritmeticos */
/* console.log(4 + 44);
console.log(4 **3); */

document.writeln("<h2>Operaciones aritmeticas</h2> ");
document.write("Ejemplo suma " + (4 + 56) + "<br>" );
document.write("Ejemplo Residuo " + ( 5 % 2 ) + "<br>" );
document.write("Multiplicar str por suma " + ( "." * 3 )+ "<br>s");
document.write('Grupo "51" <br>');
document.write(`<ul>
                <li>Suma</li>
                <li>Resta</li>
                <li>Multiplicación</li>
                <li>División</li>
                <li>Residuo</li>
                </ul>`);

document.write(`La suma es ${5 + 5} <br>`);
document.write("El tipo de dato del valor 32" + typeof 32 + "<br>" );
document.write("El tipo de dato de false es " + typeof false+ "<br>" );
document.write(`El tipo de dato de false es ${typeof false} <br> ` );
document.write(`Comprar 5 contra 6 ${5 == 6} <br> ` );
document.write(`Operador termanrio ${1 == 2 ? true : false} <br> ` );

/* Variables */
let sueldo;
document.write(`Sueldo: ${sueldo} <br>`);
let num1=5, num2=56;
document.write(`Suma: ${num1 + num2} <br>`);
let nombre="grupo 51";
document.write(` Grupo: ${nombre} <br> `);
const FACTOR =1.15;
FACTOR = 12.2;

/* Arreglos y objetos en javascrip */

let lenguajes = ["python", "javascript", "java", "C#"];

document.write(lenguajes)




