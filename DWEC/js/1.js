window.onload=inicio;
function inicio(){
  document.formulario.texto.value=primos();
}function primos(){
  var cont=0;
  for(var i=1;i<100;i++){
    if (primos(i)) {
      document.formulario.texto.value+= " | " + i;
    }//der if
  }//de for
}//de function

function primos(num){
  let primo=true;

  for(var i=2;i<num/2;i++){
    if(num%i==0){
      primo=false;
    }//de if
  }//de for
  return primo;
}//de function
