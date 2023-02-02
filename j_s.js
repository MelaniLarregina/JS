
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
   var interes = 0;
   if( cuotas == 6){
      interes = monto * 0.30; 
   }
   else if  ( cuotas == 9){
      interes = monto * 0.50;
   }
   else if ( cuotas == 12){
      interes = monto * 0.80;
   }
   else if (cuotas == 24){
      interes = monto * 1;
   }
   return interes;
}

function iva_prestamo ( total ){
   return total * 0.21;
}

let total = monto + intereses_cuotas (monto , cuotas);
let total_con_iva = total + iva_prestamo(total);

alert("Pediste:  " + monto);
alert("Cuotas: " + cuotas);
alert("Total con intereses: " + total);
alert("Total con intereses e iva: " + total_con_iva);



