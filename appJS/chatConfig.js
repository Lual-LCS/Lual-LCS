import '../js/config-firebase.js'
/*
// Inicializa la configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBtSvmCI7onDchIZLsA0OG4eE9J-2LCOUc",
  authDomain: "conoce-tu-edad-lual-lcs.firebaseapp.com",
  databaseURL: "https://conoce-tu-edad-lual-lcs-default-rtdb.firebaseio.com",
  projectId: "conoce-tu-edad-lual-lcs",
  storageBucket: "conoce-tu-edad-lual-lcs.appspot.com",
  messagingSenderId: "1047654021508",
  appId: "1:1047654021508:web:53e8c6f4574db0075505d1",
  measurementId: "G-DLDKVBDLCS",
};
firebase.initializeApp(firebaseConfig);
*/
// Obtén una referencia a la base de datos
const database = firebase.database();

let botonMinMax = document.getElementById('botonMinMax');
let chatwindow = document.getElementById('chat-window');


botonMinMax.addEventListener('click', function() {
  chatwindow.style.display = chatwindow.style.display === "none" ? "block" : "none";
});

function minChat() {
  chatwindow.style.display = "none";
}

function sendMessage() {
  const usernameInput = document.getElementById("chat-username");
  const messageInput = document.getElementById("chat-message");
  const username = usernameInput.value;
  const message = messageInput.value;

  if (username && message) {
    // Aquí puedes agregar la lógica para enviar el mensaje a Firebase Realtime Database si lo deseas

    const chatMessages = document.getElementById("chat-messages");
    const messageElement = document.createElement("div");
    messageElement.innerHTML = `<strong>${username}:</strong> ${message}`;
    chatMessages.appendChild(messageElement);

    messageInput.value = "";
  }
}

// Generar un color aleatorio para el nombre de usuario
const getRandomColor = () => {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor.random() * 16];
  }
  return color;
};

function sendMessage() {
  // Obtener el nombre de usuario y el mensaje del formulario
  const usernameInput = document.getElementById("chat-username");
  const messageInput = document.getElementById("chat-message");
  const username = usernameInput.value;
  const message = messageInput.value;

  // Verificar si el nombre de usuario y el mensaje no están vacíos
  if (username && message) {
    // Guardar el mensaje en la base de datos de Firebase
    database.ref("messages").push({
      username: username,
      message: message,
      timestamp: Date.now(),
    });

    // Limpiar el campo de mensaje
    messageInput.value = "";
  }
}

// Evento de envío de mensaje
chatForm.addEventListener("submit", (event) => {
  event.preventDefault();
  sendMessage();
});

// Evento de recepción de mensaje
database.ref("messages").on("child_added", (snapshot) => {
  const messageData = snapshot.val();
  showMessage({ ...messageData, color: getRandomColor() });
});

// Enviar mensaje a Firebase Realtime Database
const sendMessage = () => {
  const username = chatUsername.value;
  const message = chatMessage.value;
  if (username && message) {
    const timestamp = Date.now();
    const messageData = {
      username,
      message,
      timestamp,
    };
    database.ref("messages").push(messageData);
    chatMessage.value = "";
  }
};

const db = getDatabase();
const starCountRef = ref(db, "posts/" + postId + "/starCount");
onValue(starCountRef, (snapshot) => {
  const data = snapshot.val();
  updateStarCount(postElement, data);
});

database.ref("messages").on("child_added", (snapshot) => {
  const messageData = snapshot.val();
  showMessage({ ...messageData, color: getRandomColor() });
});
