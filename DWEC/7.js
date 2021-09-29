window.onload=inicio;

 function inicio(){
   document.formulario1.comprobar.onclick=calcular;
 }

function calcular(){
var nombre=document.formulario1.nombre.value;
document.formulario1.mensaje.value=contar(nombre);
}

function contar(nombre){
var nombre1=nombre;
var contartodo=0;
var mensaje=true;
var resultadofinal;
var contadorletra=0;
var longitudminima=0;
let todosvalores= 'aAbBcCdDeEfFgGhHiIjJkKlLmMnNoOñÑpPqQrRsStTuUvVwWxXyYzZºª- ';

for (var i = 0; i < nombre1.length; i++) {
  if (todosvalores.indexOf(nombre1[i]) !== -1) {
    contartodo++;
  }
  longitudminima++;
}

// for (var i = 0; i < todosvalores.length; i++) {
//   if (nombre1.charAt(0)==todosvalores.indexOf(nombre1[i])) {
//     contadorletra++;
//   }
//   if (nombre1.charAt(nombre1.length-1)==todosvalores.indexOf(nombre1[i])) {
//     contadorletra++;
//   }
// }

if (longitudminima<=2) {
  mensaje==false;
  resultadofinal="Tiene una longitud mínima menor de 3 caracteres";
  return resultadofinal;
}

// if (contadorletra<2) {
//   mensaje==false;
//   resultadofinal="O el primer caracter o el ultimo no son una letra";
//   return resultadofinal;
// }

if (nombre1.length <3 || nombre1.length>27) {
  mensaje==false;
  resultadofinal="Menor de 3 o mayor de 27 letras";
  return resultadofinal;
}

if (contartodo<nombre.length) {
  mensaje==false;
  resultadofinal="Algún caracter del nombre no es válido";
  return resultadofinal;
}

if (mensaje==true) {
  resultadofinal="El nombre es válido";
  return resultadofinal;
}



}
