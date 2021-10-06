window.onload=inicio;

function inicio(){
  document.formulario1.comprobar.onclick=calcular;
}

function calcular(){
  var direccion=document.formulario1.direccion.value;
  document.formulario1.mensaje.value=existeDireccion(direccion);
}

function existeDireccion(direccion){
  var direccion1=direccion.toLowerCase();
  var mensaje=true;
  var resultadofinal="";
  var contador=0;

  for(var i=0;i<direccion1.length;i++){
    contador++;
    if (i==0) {
      if(direccion1.charAt(i)<"a" || direccion1.charAt(i)>"z"){
        mensaje=false;
        resultadofinal="No empieza por letra";
      }
    }else if(i==direccion1.length-1){
      if ((direccion1.charAt(i)<"a" || direccion1.charAt(i)>"z")
      && (direccion1.charAt(i)!=1 || direccion1.charAt(i)!=2 || direccion1.charAt(i)!=3 ||
      direccion1.charAt(i)!=4 || direccion1.charAt(i)!=5 || direccion1.charAt(i)!=6 ||
      direccion1.charAt(i)!=7 || direccion1.charAt(i)!=8|| direccion1.charAt(i)!=9 ||
      direccion1.charAt(i)!=0)) {
        mensaje=false;
        resultadofinal="No termina por letra o digito";
      }
    }else if(i==1 || i==direccion1.length-1 ) {
      if ((direccion1.charAt(i)<"a" || direccion1.charAt(i)>"z")
      && (direccion1.charAt(i)!=1 || direccion1.charAt(i)!=2 || direccion1.charAt(i)!=3 ||
      direccion1.charAt(i)!=4 || direccion1.charAt(i)!=5 || direccion1.charAt(i)!=6 ||
      direccion1.charAt(i)!=7 || direccion1.charAt(i)!=8 || direccion1.charAt(i)!=9 ||
      direccion1.charAt(i)!=0) && (direccion1.charAt(i)!="º" || direccion1.charAt(i)!="ª"||
      direccion1.charAt(i)!="/" || direccion1.charAt(i)!="-"))
      {
        mensaje=false;
        resultadofinal="Error intermedio";
      }//del if
    }//del else
  }// del for

  if (contador<=7 || contador>=41) {
    mensaje=false;
    resultadofinal="Error cantidad caracteres";
    return resultadofinal;
  }//del if caracteres

  if (mensaje==true) {
    resultadofinal="Direccion correcta";
    return resultadofinal;
  }else{
    return resultadofinal;
  }

}
