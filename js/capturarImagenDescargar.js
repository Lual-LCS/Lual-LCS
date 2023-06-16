//---------------------------------------------------------------------------------------------------------------

//Para las Capturas de imagen
html2canvas(document.querySelector("capture")).then(canvas => {
  document.body.appendChild(canvas)
});


//-----------------------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------------------


//CAPTURA DE EL RESULTADO

var botonCapturar = document.getElementById("capturar");
var elementoHTML = document.getElementById("capture");

//Añadido ---------------------------------------------
/*var ancho = elementoHTML.offsetWidth;
var alto = elementoHTML.offsetHeight;

var canvas = document.createElement("canvas");
canvas.width = ancho;
canvas.height = alto;


var contexto = canvas.getContext("2d");
contexto.drawImage(elementoHTML, 0, 0, ancho, alto);
*/

//Añadido ----------------------------------------------

botonCapturar.addEventListener("click", function() {
  html2canvas(elementoHTML).then(function(canvas) {
   
    var imagen = canvas.toDataURL("image/png");
    descargarImagen(imagen);
  });
});

function descargarImagen(imagen) {
  setTimeout(function() {
    var enlace = document.createElement("a");
    enlace.href = imagen;
    enlace.download = "mi_resultado.png";
    enlace.click();
  }, 3000); // Esperar 3 segundos antes de descargar la imagen
}


