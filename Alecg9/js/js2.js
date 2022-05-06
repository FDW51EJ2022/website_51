function sumar(){
    /* Solo traemos texto y con value solo el valor. Value es para inputs */
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;

    let suma = 0;

    let resultado = document.getElementById("resultado");
    let mensaje = document.getElementById("mensaje");

    if (num1.length == 0 || num2.length == 0) {
        mensaje.innerText ="Ingrese los numeros por favor";
    }
    else{
        if ( isNaN(num1) || isNaN(num2)) {
            /* innertext es para etiquetas */
            mensaje.innerText = "Solo numeros";
        }
        else{
            /* Realizar calculos */
            mensaje.innerText= "";
            suma = Number(num1) + Number(num2);
            /* para mandarle valores a la caja */
            resultado.value = suma;
        }
    }
}