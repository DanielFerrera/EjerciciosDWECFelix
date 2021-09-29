window.onload=inicio;

 function inicio(){
   document.formulario1.convertir.onclick=calcular;
 }

//comprobacion de que hay texto en decimal y que no esta vacio
function calcular(){
var decimal=document.formulario1.numdec.value;
var decimal2= new Number (decimal);
if (decimal>=0) {
var binario=decimal2.toString(2);
document.formulario1.binario.value+=binario;
var octal=decimal2.toString(8);
document.formulario1.octal.value+=octal;
var hexa=decimal2.toString(16);
document.formulario1.hexadecimal.value+=hexa;
}

}
