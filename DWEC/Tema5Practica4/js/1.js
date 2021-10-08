window.onload=inicio;

 function inicio(){
   //on focus
   document.primero.nif.onfocus=activar;
   document.primero.nombre.onfocus=activar;
   document.primero.apellidos.onfocus=activar;
   document.primero.domicilio.onfocus=activar;
   document.primero.localidad.onfocus=activar;
   document.primero.cp.onfocus=activar;
   document.primero.provincia.onfocus=activar;
   //on blur
   document.primero.nif.onblur=desactivar;
   document.primero.nombre.onblur=desactivar;
   document.primero.apellidos.onblur=desactivar;
   document.primero.domicilio.onblur=desactivar;
   document.primero.localidad.onblur=desactivar;
   document.primero.cp.onblur=desactivar;
   document.primero.provincia.onblur=desactivar;
   //on change
   document.primero.cp.onchange=cambio;
   //presionar CRTL+F3;
   document.primero.img_aficion.onkeydown=presionar;
 }

 function presionar(elemento){
   var valor=String.fromCharCode(elemento.charCode);
   if (valor=144) {
      document.primero.img_aficion=;"url('cenar.jpg')";
   }
 }

function activar(elemento){
  let nombre=elemento || window.event;
  elemento.target.style.backgroundColor="red";
}

function desactivar(elemento){
  let nombre=elemento || window.event;
  elemento.target.style.backgroundColor="white";
}

function cambio(elemento){
    var codigo=document.primero.cp.value;
    var codigo1=codigo.substr(0,2);
    if(isNaN(codigo1) || parseInt(codigo1)<1 || parseInt(codigo1)>52){
      document.primero.provincia.value="No es un numero";
    }
    else{
      switch (codigo1) {
        case "01":
        document.primero.provincia.value="Araba/Álava";
        break;
        case "02":
        document.primero.provincia.value="Albacete";
        break;
        case "03":
        document.primero.provincia.value="Alicante/Alacant";
        break;
        case "04":
        document.primero.provincia.value="Almería";
        break;
        case "05":
        document.primero.provincia.value="Ávila";
        break;
        case "06":
        document.primero.provincia.value="Badajoz";
        break;
        case "07":
        document.primero.provincia.value="Baleares";
        break;
        case "08":
        document.primero.provincia.value="Barcelona";
        break;
        case "09":
        document.primero.provincia.value="Burgos";
        break;
        case "10":
        document.primero.provincia.value="Cáceres";
        break;
        case "11":
        document.primero.provincia.value="Cádiz";
        break;
        case "12":
        document.primero.provincia.value="Castellón";
        break;
        case "13":
        document.primero.provincia.value="Ciudad Real";
        break;
        case "14":
        document.primero.provincia.value="Córdoba";
        break;
        case "15":
        document.primero.provincia.value="A Coruña";
        break;
        case "16":
        document.primero.provincia.value="Cuenca";
        break;
        case "17":
        document.primero.provincia.value="Gerona";
        break;
        case "18":
        document.primero.provincia.value="Granada";
        break;
        case "19":
        document.primero.provincia.value="Guadalajara";
        break;
        case "20":
        document.primero.provincia.value="Guipuzkoa";
        break;
        case "21":
        document.primero.provincia.value="Huelva";
        break;
        case "22":
        document.primero.provincia.value="Huesca";
        break;
        case "23":
        document.primero.provincia.value="Jaén";
        break;
        case "24":
        document.primero.provincia.value="León";
        break;
        case "25":
        document.primero.provincia.value="Lérida";
        break;
        case "26":
        document.primero.provincia.value="La Rioja";
        break;
        case "27":
        document.primero.provincia.value="Lugo";
        break;
        case "28":
        document.primero.provincia.value="Madrid";
        break;
        case "29":
        document.primero.provincia.value="Málaga";
        break;
        case "30":
        document.primero.provincia.value="Murcia";
        break;
        case "31":
        document.primero.provincia.value="Navarra";
        break;
        case "32":
        document.primero.provincia.value="Orense";
        break;
        case "33":
        document.primero.provincia.value="Asturias";
        break;
        case "34":
        document.primero.provincia.value="Palencia";
        break;
        case "35":
        document.primero.provincia.value="Las Palmas";
        break;
        case "36":
        document.primero.provincia.value="Pontevedra";
        break;
        case "37":
        document.primero.provincia.value="Salamanca";
        break;
        case "38":
        document.primero.provincia.value="Santa Cruz de Tenerife";
        break;
        case "39":
        document.primero.provincia.value="Cantabria";
        case "40":
        document.primero.provincia.value="Segovia";
        break;
        case "41":
        document.primero.provincia.value="Sevilla";
        break;
        case "42":
        document.primero.provincia.value="Soria";
        break;
        case "43":
        document.primero.provincia.value="Tarragona";
        break;
        case "44":
        document.primero.provincia.value="Teruel";
        break;
        case "45":
        document.primero.provincia.value="Toledo";
        break;
        case "46":
        document.primero.provincia.value="Valencia";
        break;
        case "47":
        document.primero.provincia.value="Valladolid";
        break;
        case "48":
        document.primero.provincia.value="Vizcaya";
        break;
        case "49":
        document.primero.provincia.value="Zamora";
        break;
        case "50":
        document.primero.provincia.value="Zaragoza";
        break;
        case "51":
        document.primero.provincia.value="Ceuta";
        break;
        case "52":
        document.primero.provincia.value="Melilla";
        break;      default:
        document.primero.provincia.value="";
      }
    }
  }




  // function comprobar(contenido){
  //
  // }
