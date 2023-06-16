
// BOTON capturar Resultado
function guardarComoImagen() {
    const resultado = document.getElementById("resultado");
    const canvas = document.createElement("canvas");
    canvas.width = resultado.offsetWidth;
    canvas.height = resultado.offsetHeight;
    const context = canvas.getContext("2d");
    context.drawImage(resultado, 0, 0, canvas.width, canvas.height);
    const link = document.createElement("a");
    link.download = "mi_resultado.png";
    link.href = canvas.toDataURL("image/png");
    link.click();
  }
  
  

const resultado = obtenerResultado();                                   // Obtener el resultado de la aplicación web
const imagen = new Image();                                             // Crear un elemento de imagen
imagen.src = resultado;                                                 // Establecer la fuente de la imagen como el resultado de la aplicación web
const enlace = document.createElement('a');                             // Crear un elemento de enlace
enlace.download = 'mi_resultado.png';                                   // Establecer el atributo de descarga del enlace como el nombre de archivo de la imagen
const lienzo = document.createElement('canvas');                        // Crear un objeto de lienzo

// Establecer el ancho y el alto del lienzo como el ancho y el alto de la imagen
lienzo.width = imagen.width;
lienzo.height = imagen.height;

const contexto = lienzo.getContext('2d');                               // Obtener el contexto de dibujo del lienzo
contexto.drawImage(imagen, 0, 0);                                       // Dibujar la imagen en el lienzo
const url = lienzo.toDataURL();                                         // Convertir el lienzo en una URL de datos
enlace.href = url;                                                      // Establecer la URL de datos como la fuente del enlace
enlace.click();                                                         // Hacer clic en el enlace para descargar la imagen


const botonGuardar = document.getElementById("guardar");
botonGuardar.addEventListener("click", guardarComoImagen);


// Vista previa de la imagen antes de guardarla o descargarse

const inputFile = document.getElementById('input-file');
const previewImage = document.getElementById('preview-image');
inputFile.addEventListener('change', mostrarVistaPrevia);

function mostrarVistaPrevia() {
  const file = inputFile.files[0];
  const reader = new FileReader();

  reader.addEventListener('load', function () {
    previewImage.src = reader.result;
  }, false);

  if (file) {
    reader.readAsDataURL(file);
  }
}

var botonCapturar = document.getElementById("capturar");
var elementoHTML = document.getElementById("capture");

  botonCapturar.addEventListener("click", function() {
    html2canvas(elementoHTML).then(function(canvas) {
      var imagen = canvas.toDataURL("image/png");
      descargarImagen(imagen);
    });
  });

function descargarImagen(imagen) {
  var enlace = document.createElement("a");
  enlace.href = imagen;
  enlace.download = "mi_resultado.png";
  enlace.click();
}




//CAPTURA DE EL RESULTADO
var botonCapturar = document.getElementById("capturar");
var elementoHTML = document.getElementById("capture");

botonCapturar.addEventListener("click", function() {
  html2canvas(elementoHTML).then(function(canvas) {
    var imagen = canvas.toDataURL("image/png");
    descargarImagen(imagen);
  });
});

function descargarImagen(imagen) {
  var enlace = document.createElement("a");
  enlace.href = imagen;
  enlace.download = "mi_resultado_edad.png";
  enlace.click();
}



 src="https://cdn.jsdelivr.net/npm/html2canvas@1.0.0/dist/html2canvas.min.js"
 src="https://www.gstatic.com/firebasejs/8.6.1/firebase-app.js"
 src="https://www.gstatic.com/firebasejs/8.6.1/firebase-storage.js"