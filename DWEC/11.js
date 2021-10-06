window.onload=inicio;

 function inicio(){
   document.formulario1.comprobar.onclick=calcular;
 }

function calcular(){
var localidad=document.formulario1.localidad.value;
document.formulario1.mensaje.value=existeLugar(localidad);
}

function existeLugar(localidad){
var localidad1=localidad.toLowerCase();
var mensaje=true;
var resultadofinal;

for(var i=0;i<localidad1.length;i++){
  if(i==0 || i==1 || i==2){
    if(localidad1.charAt(i)<"a" || localidad1.charAt(i)>"z"){
      mensaje=false;
      resultadofinal="3 primeras letras mal";
    }//COMPRUBEO QUE SOLO SEAN LETRAS
  }//estamos en las 3 primeras posiciones

  else if(i==localidad1.length-1 || i==localidad1.length-2){
    if(localidad1.charAt(i)<"a" || localidad1.charAt(i)>"z"){
      mensaje=false;
      resultadofinal="2 ultimas letras mal";
    }//COMPRUBEO QUE SOLO SEAN LETRAS
  }//ultima letra
  else{
    if( (localidad1.charAt(i)<"a" || localidad1.charAt(i)>"z") && (localidad1.charAt(i)!= " ") ){
      mensaje=false;
      resultadofinal="Error intermedio";
    }//COMPRUBEO QUE SOLO SEAN LETRAS
  }//else
}

if (mensaje==true) {
  resultadofinal="Localidad bien";
  return resultadofinal;
}else{
return resultadofinal;
}

}
