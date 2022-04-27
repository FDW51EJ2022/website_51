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

/* variables (las variables se declaran con let) */

let sueldo;
document.write(`Sueldo: ${sueldo} <br>`);
let num1=5, num2=56;
document.write(`Suma: ${num1 + num2} <br>`);
let nombre= "grupo 51";
document.write(`Grupo: ${nombre}<br>`);


/* Arreglos y onjetos en javascipt */

/* arreglo */

let lenguajes = ["python","javascript","java","C#"];

document.write(`Lenguajes ${lenguajes} <br>`);
document.write(` Segundo Lenguaje ${lenguajes[1]} <br>`);
console.log(lenguajes);

/* objeto */

let empleado = {
    "nombre":"Jesus Cortez",
    "Edad": 21,
    "Lenguajes": lenguajes
}



document.write(`Empleado ${empleado} <br>`);
console.log(empleado);
document.write(`Empleado ${empleado["nombre"]} <br>`)


/*  funcion prompt */

/* let estado = prompt("Cual es tu estado de procedencia?")
let carrera = prompt("Cual es tu carrera?")
*/

/* Estructuras condicionales*/

let total = 1500;

let descuento = 0;

if (total > 1000) {
    descuento = total * 0.10;
    
} else {
    descuento = total * 0.02;
    
}

/* operador ternario */

descuento = total > 1000 ? total * 0.1 : total * 0.02;

document.write(`Descuento ${descuento} <br>`)

let promedio = 90;
if (promedio == 100) {
    document.write(`Excelente <br>`)   
} else if(promedio >= 90 && promedio <= 99){
    document.write(`Muy bien <br>`)
} else if(promedio >= 80 && promedio <= 89){
    document.write(`Bien <br>`);
}

/* Estructura switch */

let n1 = 5;
let n2 = 9;
let operacion = "+"

switch (operacion) {
    case "+":
        document.write(`La suma es ${n1+n2} <br>`);
        break;

    case "-":
        document.write(`La resta es ${n1-n2} <br>`);
        break;
    
    case "*":
        document.write(`La multiplicacion es ${n1*n2} <br>`);
        break;

    case "/":
        document.write(`La division es ${n1/n2} <br>`);
        break;

    default:
        document.write(`Operacion no valida <br>`);
        break;
}

/* for */

for (let index = 0; index < 5; index++) {
    document.write(`Js <br>`);
    
}

/* Imprime los pares del 2 al 20 */
for (let n = 2; n <= 20; n += 2 ){
    document.write(`${n} <br>`);
}

/* imprime los numeros del 20 al 2 */
for (let n = 10; n >= 1; n--){
    document.write(`${n} <br>`);
}

let tabla = 3
for(let n=1; n<=10; n++){
    document.write(`${tabla}X${n} = ${tabla*n} <br>`)
}

/* ejemplo do */

let iteracion = 1;
do {
    document.write(`do-while <br>`);
    iteracion++;
} while (iteracion<=3);


/* Declaracion de una funcion */

/* sintaxis 1  como constante*/

const saludo = function(){
    document.write("<h1>Hola</h1>");
};


const cuadrado = function(num){
    return num * num;
};

/* llamar a la funcion  */

saludo();
document.write(` El cuadrado es: ${cuadrado(3)} <br>`);

/* sintaxis 2. Utilizando function */

function numeros(){
    for (let n = 10; n >= 1; n--){
    document.write(`${n} <br>`);
    }
}

function cuadrado_v2(num){
    return num * num
}

/* llamar la funcion */

numeros();
document.write(`Cuadrado v2 ${cuadrado_v2(8)}`)

/* Sintaxis 3. funcion flecha */

const cuadrado_v3 = (num) => {
    return num * num;
};

/* llamar la funcion */

document.write(`Cuadrado v3 ${cuadrado_v3(5)} <br>`);

/* sintaxis 4. Funcio flecha reducida */

const cuadrado_v4 = num => num * num;

/* llamar la funcion */

document.write(`Cuadrado v4 ${cuadrado_v4(3)}`); 


















