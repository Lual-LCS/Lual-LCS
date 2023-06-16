

  //---------------------------------------------------------------------------------------------------------------

var form = document.querySelector("form");

form.addEventListener("submit", function(event) {
  event.preventDefault();

  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;

  firebase.auth().signInWithEmailAndPassword(email, password)
    .then(function(userCredential) {
      // El usuario ha iniciado sesión correctamente
    })
    .catch(function(error) {
      // Ha ocurrido un error al iniciar sesión
    });
});

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // El usuario ha iniciado sesión correctamente
  } else {
    // El usuario no ha iniciado sesión
  }
});
