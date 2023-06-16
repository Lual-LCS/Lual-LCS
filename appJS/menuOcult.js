// Selecciona la imagen del menú
let menuIcon = document.getElementById("menuIco");

// Selecciona la lista de elementos del menú
let listMenu = document.querySelector(".listMenu");

// Agrega un evento de clic a la imagen del menú
menuIcon.addEventListener("click", function() {
  // Alterna la clase "oculto" en la lista de elementos del menú
  listMenu.classList.toggle("oculto");

});
