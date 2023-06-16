
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set } from "firebase/database";

// Configura Firebase
var firebaseConfig = {
    apiKey: "AIzaSyBtSvmCI7onDchIZLsA0OG4eE9J-2LCOUc",
    authDomain: "conoce-tu-edad-lual-lcs.firebaseapp.com",
    databaseURL: "https://conoce-tu-edad-lual-lcs-calificaciones.firebaseio.com/",
    projectId: "conoce-tu-edad-lual-lcs",
    storageBucket: "conoce-tu-edad-lual-lcs.appspot.com",
    messagingSenderId: "1047654021508",
    appId: "1:1047654021508:web:53e8c6f4574db0075505d1",
    measurementId: "G-DLDKVBDLCS"
    
  };
  const app = initializeApp(firebaseConfig);
  
  document.getElementById("enviar").addEventListener("click", function () {
    // Obtiene los valores de los campos del formulario
    var nombre = document.getElementById("nombre").value;
    var correo = document.getElementById("correo").value;
    var calificacion = document.getElementById("calificacion").value;
    var comentario = document.getElementById("comentario").value;
  
    // Envía los datos del formulario a la base de datos de Firebase
    firebase
      .firestore()
      .collection("calificaciones")
      .add({
        nombre: nombre,
        correo: correo,
        calificacion: calificacion,
        comentario: comentario,
      })
      .then(function (docRef) {
        console.log("Calificación agregada con ID: ", docRef.id);
      })
      .catch(function (error) {
        console.error("Error al agregar la calificación: ", error);
      });
  });
  
  
  // Recupera las calificaciones de la base de datos de Firebase y muéstralas en la página web
  firebase
    .firestore()
    .collection("calificaciones")
    .get()
    .then(function (querySnapshot) {
      querySnapshot.forEach(function (doc) {
        var calificacion = doc.data().calificacion;
        var comentario = doc.data().comentario;
        // Agrega la calificación y el comentario a la página web
        // ...
      });
    })
    .catch(function (error) {
      console.error("Error al recuperar las calificaciones: ", error);
    });
  