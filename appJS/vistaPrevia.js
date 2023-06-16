

function mostrarVistaPrevia() {
  const inputFile = document.getElementById("input-file");
  const previewImage = document.getElementById("preview-image");
  
  const file = inputFile.files[0];
  console.log("Archivo seleccionado:", file);
  const reader = new FileReader();

  reader.addEventListener('load', function () {
    console.log("Contenido del archivo:", reader.result);
    previewImage.src = reader.result;
  }, false);

  if (file) {
    reader.readAsDataURL(file);
  }
}


function descargarImagenT(imagen) {
    
    var preview = document.createElement("img");                           // Crear un elemento img con la fuente de la imagen
    preview.src = imagen;
    
    var previewContainer = document.getElementById("preview-container");   // Obtener el contenedor de la vista previa y agregar el elemento img
    previewContainer.innerHTML = "resultadoImg";
    previewContainer.appendChild(preview);
  }

  function descargarImagenT(imagen) {
    setTimeout(function() {
    var enlace = document.createElement("a");
    enlace.href = imagen;
    enlace.download = "mi_resultado.png";
    enlace.click();
  }, 3000); // Esperar 3 segundos antes de descargar la imagen
}
  