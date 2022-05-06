función  sumar ( ) {
    let  num1  =  documento . getElementById ( "num1" ) . valor ;
    let  num2  =  documento . getElementById ( "num2" ) . valor ;
    sea  ​​suma  =  0 ;
    let  resultado  =  documento . getElementById ( "resultado" ) ;
    let  mensaje  =  documento . getElementById ( "mensaje" ) ;

    if  (  num1 . longitud  ==  0  ||  num2 . longitud  ==  0  ) {
          mensaje . innerText  =  "Ingrese los numeros por favor" ; 
    }
    más  {
        if  ( es  NaN ( num1 )  ||  esNaN ( num2 ) ) {
            mensaje . textoInterior  =  "Solo números" ; 
        }
        más  {
            /* realizando el calculo */
            mensaje . textointerno  =  "" ;
            suma  =  Número ( num1 )  +  Número ( num2 ) ;

            resultado _ valor  =  suma ;
        }
    }
}
