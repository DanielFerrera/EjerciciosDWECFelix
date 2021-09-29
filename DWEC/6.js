window.onload=inicio;

 function inicio(){
   document.formulario1.comprobar.onclick=calcular;
 }

function calcular(){
var cadena=document.formulario1.cadena.value;
var amirar=document.formulario1.vocalsubcadena.value;
let contador=0;
var cadena2=cadena.toLowerCase();
var amirar2=amirar.toLowerCase();
for (var i = cadena2[0]; i <= cadena2[-1]; i++) {
  if (cadena2[i]==amirar2) {
    contador++;
  }
}
document.formulario1.mensaje.value+=contador;
}
