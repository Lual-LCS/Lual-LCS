
import firebase from 'firebase/app';
import { getDatabase, ref, onValue} from "firebase/database";
const database = getDatabase();



// Configuración de Firebase Realtime Database
const firebaseConfig = {
    apiKey: "AIzaSyBtSvmCI7onDchIZLsA0OG4eE9J-2LCOUc",
    authDomain: "conoce-tu-edad-lual-lcs.firebaseapp.com",
    databaseURL: "https://conoce-tu-edad-lual-lcs-default-rtdb.firebaseio.com",
    projectId: "conoce-tu-edad-lual-lcs",
    storageBucket: "conoce-tu-edad-lual-lcs.appspot.com",
    messagingSenderId: "1047654021508",
    appId: "1:1047654021508:web:53e8c6f4574db0075505d1",
  };
  firebase.initializeApp(firebaseConfig);

  
  // Obtener elementos del DOM
  const chatForm = document.getElementById('chat-form');
  const chatUsername = document.getElementById('chat-username');
  const chatMessage = document.getElementById('chat-message');
 

  
  // Generar un color aleatorio para el nombre de usuario
  const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[(Math.floor.random() * 16)];
    }
    return color;
  };
  
  // Enviar mensaje a Firebase Realtime Database
  const sendMessage = () => {
    const username = chatUsername.value;
    const message = chatMessage.value;
    if (username && message) {
      const timestamp = Date.now();
      const messageData = {
        username,
        message,
        timestamp
      };
      database.ref('messages').push(messageData);
      chatMessage.value = '';
    }
  };


  const db = getDatabase();
  const starCountRef = ref(db, 'posts/' + postId + '/starCount');
    onValue(starCountRef, (snapshot) => {
    const data = snapshot.val();
    updateStarCount(postElement, data);
  });
  
/*
  // Mostrar mensaje en el chat
  const showMessage = ({ username, message, timestamp, color }) => {
    const messageElement = document.createElement('div');
    const date = new Date(timestamp);
    const time = `${date.getHours()}:${date.getMinutes()}`;
    messageElement.innerHTML = `
      <span style="color: ${color};">${username}</span>
      <span style="color: #ccc;">(${time})</span>
      <span>: ${message}</span>
    `;
    chatMessages.appendChild(messageElement);
    chatMessages.scrollTop = chatMessages.scrollHeight;
  };         */
/*
  // Obtén una referencia al elemento donde se mostrarán los mensajes en la ventana del chat
  var chatMessages = document.getElementById('chat-messages');

  // Función para mostrar un mensaje en la ventana del chat
  function showMessage({ username, message, timestamp, color }) {
    const date = new Date(timestamp);
    const time = `${date.getHours()}:${date.getMinutes()}`;
    const messageHTML = `
      <span style="color: ${color};">${username}</span>
      <span style="color: #ccc;">(${time})</span>
      <span>: ${message}</span>
    `;
    const messageElement = document.createElement('div');
    messageElement.innerHTML = messageHTML;
    chatMessages.appendChild(messageElement);
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }

 */
  
  // Evento de envío de mensaje
  chatForm.addEventListener('submit', (event) => {
    event.preventDefault();
    sendMessage();
  });
  
  // Evento de recepción de mensaje
  database.ref('messages').on('child_added', (snapshot) => {
    const messageData = snapshot.val();
    showMessage({ ...messageData, color: getRandomColor() });
  });
