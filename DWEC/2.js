window.onload=primos;
function primos(){
  var cont=0;
  for(var i=1;i<1000 && cont<100;i++){
    if (sonPrimos(i)) {
      document.formulario.texto.value+= " | " + i;
      cont++;
    }//der if
  }//de for
}//de function

function sonPrimos(num){
  let primo=true;
  for(var i=2;i<num/2;i++){
    if(num%i==0){
      primo=false;
    }//de if
  }//de for
  return primo;
}//de function
