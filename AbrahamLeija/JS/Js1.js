/* Operadores aritméticos */
/* consola.log(4 + 44);
consola.log(4 ** 3); */
documento _ write ( "<h2>Operaciones aritméticas</h2>" ) ;
documento _ write ( "Ejemplo suma "  +  ( 4  +  56 )  +  "<br>" ) ;
documento _ write ( "Ejemplo residuo "  +  ( 5  %  2 )  +  "<br>" ) ;
documento _ write ( "Multiplicar str por num "  +  "."  *  3  +  "<br>" ) ;
documento _ escribir ( 'Grupo "51"<br>' ) ;
documento _ escribir ( `<ul>
                    <li>Suma</li>
                    <li>Resta</li>
                    <li>Multiplicación</li>
                    <li>División</li>
                    <li>Residuo</li>
                </ul>` ) ;
documento _ write ( `La suma es ${ 5  +  5 } <br>` ) ;
documento _ write ( "El tipo de dato del valor 32 es "  +  typeof  32  +  "<br>" ) ;
documento _ write ( "El tipo de dato de false es "  +  typeof  false  +  "<br>" ) ;
documento _ write ( `El tipo de dato de false es ${ typeof  false } <br>` ) ;
documento _ write ( `Comparar 5 contra 6 ${ 5  ==  6 } <br>` ) ;
documento _ write ( `operador ternario ${ 1  ==  1 ? true : false } <br>` ) ;

/* Variables */
dejar  sueldo ;
documento _ write ( `Sueldo: ${ sueldo } <br>` ) ;
sea  ​​num1  =  5 ,
  núm2  =  56 ;
documento _ escribir ( `Suma: ${ num1  +  num2 } <br>` ) ;
let  nombre  =  "grupo 51" ;
documento _ write ( `Grupo: ${ nombre } <br>` ) ;
 FACTOR  constante =  1,15 ;

documento _ escribir ( FACTOR  +  "<br>" ) ;

/* Arreglos y objetos en javascript */

let  lenguajes  =  [ "python" ,  "javascript" ,  "java" ,  "C#" ] ;

documento _ write ( `Lenguajes ${ lenguajes } <br>` ) ;
documento _ write ( `Segundo lenguaje ${ lenguajes [ 1 ] } <br>` ) ;
consola _ log ( lenguajes ) ;

let  empleado  =  {
  nombre : "Jesús Cortés" ,
  edad : 21 ,
  lenguajes : lenguajes ,
} ;

documento _ write ( `Empleado ${ empleado } <br>` ) ;
consola _ registro ( empleado ) ;
documento _ write ( `Nombre ${ empleado [ "nombre" ] } <br>` ) ;

/* Solicitud de función */

/* let estado = prompt("¿Cual es su estado de procedencia?");
let carrera = prompt("¿Cual es tu carrera?");
*/

/* Estructuras condicionales */

sea  ​​total  =  1500 ;
sea  ​​descuento  =  0 ;

si  ( total  >  1000 )  {
  descuento  =  total  *  0.1 ;
}  más  {
  descuento  =  total  *  0.02 ;
}

/* operador ternario */
descuento  =  total  >  1000 ? total  *  0,1 : total  *  0,02 ;

documento _ write ( `Descuento ${ descuento } <br>` ) ;

sea  ​​promedio  =  90 ;

si  ( promedio  ==  100 )  {
  documento _ escribir ( `Excelente <br>` ) ;
}  else  if  ( promedio  >=  90  &&  promedio  <=  99 )  {
  documento _ escribir ( `Muy bien <br>` ) ;
}  else  if  ( promedio  >=  80  &&  promedio  <=  89 )  {
  documento _ escribir ( `Bien <br>` ) ;
}

/* Cambio de estructura */
Sea  n1  =  5 ;
Sea  n2  =  9 ;
let  operacion  =  "+" ;

interruptor  ( operación )  {
  caso  "+" :
    documento _ write ( `La suma es: ${ n1  +  n2 } <br>` ) ;
    romper ;
  caso  "-" :
    documento _ write ( `La resta es: ${ n1  -  n2 } <br>` ) ;
    romper ;
  caso  "*" :
    documento _ write ( `La multiplicación es: ${ n1  *  n2 } <br>` ) ;
    romper ;
  caso  "/" :
    documento _ write ( `La división es: ${ n1  /  n2 } <br>` ) ;
    romper ;
  predeterminado :
    documento _ write ( `Operacion no valida <br>` ) ;
    romper ;
}

/* Estructuras repetitivas FOR */
documento _ escribir ( `Javascript <br>` ) ;
documento _ escribir ( `Javascript <br>` ) ;
documento _ escribir ( `Javascript <br>` ) ;
documento _ escribir ( `Javascript <br>` ) ;
documento _ escribir ( `Javascript <br>` ) ;

for  ( let  índice  =  0 ;  índice  <  5 ;  índice ++ )  {
  documento _ escribir ( `js <br>` ) ;
}
/* imprime los pares del 2 al 20 */
para  ( sea  n  =  2 ;  n  <=  20 ;  n  +=  2 )  {
  documento _ escribir ( ` ${ n } <br>` ) ;
}

/* Imprima los numeros del 10 al 1 */
para  ( sea  n  =  10 ;  n  >=  1 ;  n -- )  {
  documento _ escribir ( ` ${ n } <br>` ) ;
}

sea  ​​tabla  =  3 ;
para  ( sea  n  =  1 ;  n  <=  10 ;  n ++ )  {
  documento _ write ( ` ${ tabla } X ${ n } = ${ tabla  *  n } <br>` ) ;
}

/*ejemplo hacer*/
let  iteracion  =  1 ;
hacer  {
  documento _ escribir ( `hacer-mientras <br>` ) ;
  iteración ++ ;
}  while  ( iteración  <=  3 ) ;

/* declaración de una función */

/* sintaxis 1. Como constante */

const  saludo  =  función  ( )  {
  documento _ escribir ( "<h1>Hola</h1>" ) ;
} ;

const  cuadrado  =  función  ( num )  {
  devuelve  num  *  num ;
} ;

/* llamar a la funcion */
saludo ( ) ;
documento _ write ( `El cuadrado es: ${ cuadrado ( 3 ) } <br>` ) ;

/* sintaxis 2. Usando la función */
función  numeros ( )  {
  para  ( sea  n  =  1 ;  n  <=  10 ;  n ++ )  {
    documento _ escribir ( ` ${ n } <br>` ) ;
  }
}

function  cuadrado_v2 ( num ) {
  devuelve  num  *  num ;
}

/* llamar a la funcion */
números ( ) ;
documento _ escribe ( `Cuadrado v2 ${ cuadrado_v2 ( 8 ) } <br>` )


/* Sintaxis 3. Funcion flecha */
const  cuadrado_v3  =  ( num )  =>  {
  devuelve  num  *  num ;
} ;

/* llamar a la funcion */
documento _ write ( `Cuadrado v3 ${ cuadrado_v3 ( 5 ) } <br>` ) ;


/* Sintaxis 4. Funcion flecha reducida */
const  cuadrado_v4  =  num  =>  num  *  num ;

/* llamar a la funcion */
documento _ write ( `Cuadrado v4 ${ cuadrado_v4 ( 3 ) } ` ) ;

/* manipulando elemento html */

Sea  p  =  documento . getElementById ( "información" ) ;

consola _ log ( p . textContent ) ;
consola _ registro ( p . HTML interno ) ;
consola _ log ( p . HTML externo ) ;

pág . innerHTML  =  "Adios <strong>:)</strong>" ;
