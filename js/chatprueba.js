
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set } from "firebase/database";

/* seccion para porbar  la consola*/
/*
// Lógica para responder al mensaje
function responderMensaje(mensaje) {
  // Aquí puedes implementar la lógica de tu función de respuesta al mensaje
  // Puedes acceder al contenido del mensaje a través de la variable 'mensaje'

  // Ejemplo de respuesta
  var respuesta = "¡Hola! Has enviado el mensaje: " + mensaje;

  // Devolver la respuesta
  return respuesta;
}

// Ejemplo de uso
var mensajeUsuario = "Hola, ¿cómo estás?";
var respuestaMensaje = responderMensaje(mensajeUsuario);
console.log(respuestaMensaje); // Imprime la respuesta en la consola

*/
/*Hasta aqui llego el codigo de prueba. */


// Inicializar Firebase
var firebaseConfig = {
    // Agrega aquí la configuración de tu proyecto de Firebase
    apiKey: "AIzaSyBtSvmCI7onDchIZLsA0OG4eE9J-2LCOUc",
    authDomain: "conoce-tu-edad-lual-lcs.firebaseapp.com",
    databaseURL: "https://conoce-tu-edad-lual-lcs-default-rtdb.firebaseio.com",
    projectId: "conoce-tu-edad-lual-lcs",
    storageBucket: "conoce-tu-edad-lual-lcs.appspot.com",
    messagingSenderId: "1047654021508",
    appId: "1:1047654021508:web:53e8c6f4574db0075505d1",
    measurementId: "G-DLDKVBDLCS"
  };
  
    const app = initializeApp(firebaseConfig);
    // Initialize Realtime Database and get a reference to the service
    const database = getDatabase(app);

  
  // Referencia a la base de datos de Firebase
  /*var database = firebase.database();*/
  
  // Referencia al nodo "chat" en la base de datos
  const chatRef = ref(database, 'chat');
  
  // Función para obtener la hora actual en formato HH:mm
  function getCurrentTime() {
    var now = new Date();
    var hours = now.getHours().toString().padStart(2, '0');
    var minutes = now.getMinutes().toString().padStart(2, '0');
    return hours + ':' + minutes;
  }
  
  // Función para mostrar los mensajes del chat
function displayChatMessage(name, message, time, messageId) {
    var chatMessages = document.getElementById('chatMessages');
  
    var messageContainer = document.createElement('div');
    messageContainer.classList.add('message-container');
    
    var senderName = document.createElement('span');
    senderName.classList.add('message-sender');
    senderName.innerText = name + ' - ' + time;
    
    var messageContent = document.createElement('span');
    messageContent.classList.add('message-content');
    messageContent.innerText = message;
  
    var replyLink = document.createElement('a');
    replyLink.classList.add('reply-link');
    replyLink.innerText = 'Responder este mensaje';
    replyLink.addEventListener('click', function() {
      // Lógica para responder al mensaje
      // Aquí puedes implementar la función de respuesta al mensaje
    });
  
    messageContainer.appendChild(senderName);
    messageContainer.appendChild(messageContent);
    messageContainer.appendChild(replyLink);
  
    chatMessages.appendChild(messageContainer);
  }
  

  // Ejecutar código inicial al cargar la página
  document.addEventListener('DOMContentLoaded', function() {
  // Aquí puedes llamar a las funciones y realizar otras tareas de inicialización
  
  // Ejemplo de uso de getCurrentTime
  var currentTime = getCurrentTime();
  console.log(currentTime);
  
  // Ejemplo de uso de displayChatMessage
  var name = "John";
  var message = "Hello, world!";
  var time = getCurrentTime();
  var messageId = "123";
  displayChatMessage(name, message, time, messageId);
});