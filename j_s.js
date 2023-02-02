alert ("Bienvenidos a tu prestamo online inmediato");
let nombre = prompt ("Ingresa tu nombre y apellido");
let dni = prompt("Ingrese su documento");
let edad= prompt("Ingrese su edad");

if(mayor_de_edad(edad)){
   let monto = prompt ("Ingresa cuanto dinero quieres solicitar:  ");
   monto = parseInt (monto);

   let cuotas = prompt ("En cuantas cuotas: 6 , 9 , 12 , 24");

   let total = monto + intereses_cuotas (monto , cuotas);
   let total_con_iva = total + iva_prestamo(total);

   alert("Pediste:  " + monto);
   alert("Cuotas: " + cuotas);
   alert("Total con intereses: " + total);
   alert("Total con intereses e iva: " + total_con_iva);
}

function mayor_de_edad (edad){
   if( edad >=18 ){
      alert ("Correcto, es mayor de edad");
      return true;
   }
   else {
      alert ("Error, no es mayor de edad");
      return false;
   }
}

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