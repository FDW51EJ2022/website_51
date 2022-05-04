function sumar(){
    /* Traemos nuestro texto y con value nadamas validamos el valor*/
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
            mensaje.innerText = "Por favor, ingresa solo numeros";
        }
        else{
            /* Realizar calculos */
            mensaje.innerText= "";
            suma = Number(num1) + Number(num2);
            resultado.value = suma;
        }
    }
}