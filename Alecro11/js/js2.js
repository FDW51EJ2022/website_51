function sumar() {
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    let suma = 0;
    let resultado = document.getElementById("resultado");
    let mensaje = document.getElementById("mensaje");

    if ( num1.length == 0 || num2.length == 0 ){
         mensaje.innerText = "Ingrese los números por favor";
    } 
    else {
        if ( isNan(num1) || isNan(num2)){
            mensaje.innerText = "Ingresa solo números";
        }
        else {
            /* realizar el cálculo */ 
            mensaje.innerText = "";
            suma = Number(num1) + Number(num2);
            
            resultado.value = suma;
        }
    }
}