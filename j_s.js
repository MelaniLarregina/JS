
console.log ("Bienvenidos a tu prestamo online inmediato");
let nombre = prompt ("Ingresa tu nombre y apellido");
let dni = prompt("Ingrese su documento");
let edad= prompt("Ingrese su edad");

function mayor_de_edad (edad){

    if( edad >=18 && typeof (edad) == "number"){
    console.log ("Correcto, es mayor de edad");
}

    else {console.log ("Error, no mayor de edad");

    }
}

let monto = prompt ("Ingresa cuanto dinero quieres solicitar:  ");
monto = parseInt (monto);

let cuotas = prompt ("En cuantas cuotas: 6 , 9 , 12 , 24");

function intereses_cuotas ( monto , cuotas){
 if( cuotas == 6){
    let interes = monto * 0.30;
    return interes 
 }
 else if  ( cuotas == 9){
    let interes = monto * 0.50;
    return interes 
 }
 else if ( cuotas == 12){
    let interes = monto * 0.80;
    return interes
 }
 else if (cuotas == 24){
    let interes = monto * 100;
    return interes 
 }

}
let total = monto + intereses_cuotas (monto , cuotas);


console.log ("Pediste:  ", monto);
console.log ("Cuotas: ", cuotas);
console.log ("Total con intereses: ", monto + intereses_cuotas (monto , cuotas) );