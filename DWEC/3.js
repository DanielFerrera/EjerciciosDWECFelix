window.onload=inicio;

 function inicio(){
   document.formulario1.calcular.onclick=calcula;
 }

function calcula(){
let ini=document.formulario1.texto1.value;
let fin=document.formulario1.texto2.value;
document.formulario1.texto3=calculaprimos(ini,fin);
}

function calculaprimos(ini,fin){
  for (var i=ini ; i <= fin; i++) {
    if (sonPrimos(i)) {
     document.formulario1.texto3.value+= " | " + i;
    }
  }
}


function sonPrimos(num){
  let primo=true;
  for(var i=2;i<num/2;i++){
    if(num%i==0){
      primo=false;
    }//de if
  }//de for
  return primo;
}//de function
