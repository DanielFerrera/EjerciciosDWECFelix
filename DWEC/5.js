window.onload=inicio;

 function inicio(){
   document.formulario1.comprobar.onclick=calcular;
 }

//comprobacion de que hay texto en decimal y que no esta vacio
function calcular(){
var cadena=document.formulario1.cadena.value;
let todasvocales= 'aeiouAEIOU';
let contadorvoc=0;
let contadorconso=0;
for (var i = 0; i < cadena.length; i++) {
  if (todasvocales.indexOf(cadena[i]) !== -1) {
    contadorvoc++;
  }else{
    contadorconso++;
  }
}
document.formulario1.vocales.value+=contadorvoc;
document.formulario1.consonantes.value+=contadorconso;
}
