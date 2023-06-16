//Para las Capturas de imagen
html2canvas(document.querySelector("capture")).then(canvas => {
    document.body.appendChild(canvas)
  });
  
  
  //-----------------------------------------------------------------------------------------------------------
  //-----------------------------------------------------------------------------------------------------------

  var botonCapturar = document.getElementById("capturar");
  var elementoHTML = document.getElementById("capture");
  
  function descargarImagen(imagen) {
    setTimeout(function() {
      var enlace = document.createElement("a");
      enlace.href = imagen;
      enlace.download = "mi_resultado.png";
      enlace.click();
    }, 1000); // Esperar 1 segundo antes de descargar la imagen
  }
  
  function guardarComoImagen() {
    const resultado = document.getElementById("resultado");
    // Crear un canvas con las mismas dimensiones que el resultado
    const canvas = document.createElement("canvas");
    canvas.width = resultado.offsetWidth;
    canvas.height = resultado.offsetHeight;
    // Dibujar el contenido del resultado en el canvas
    const context = canvas.getContext("2d");
    context.drawImage(resultado, 0, 0, canvas.width, canvas.height);
    // Crear un enlace para descargar la imagen
    const link = document.createElement("a");
    link.download = "mi_resultado.png";
    link.href = canvas.toDataURL("image/png");
    descargarImagen(link.href); // Descargar la imagen después de 1 segundo
  }
  
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
  