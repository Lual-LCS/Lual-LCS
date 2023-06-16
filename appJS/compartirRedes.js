// Agrega un botón de compartir en Twitter
function compartirTwitter() {
  var firebaseConfig = {
    apiKey: "AIzaSyBtSvmCI7onDchIZLsA0OG4eE9J-2LCOUc",
    authDomain: "conoce-tu-edad-lual-lcs.firebaseapp.com",
    databaseURL: "https://conoce-tu-edad-lual-lcs-default-rtdb.firebaseio.com",
    projectId: "conoce-tu-edad-lual-lcs",
    storageBucket: "conoce-tu-edad-lual-lcs.appspot.com",
    messagingSenderId: "1047654021508",
    appId: "A1:1047654021508:web:53e8c6f4574db0075505d1"
  };
  firebase.initializeApp(firebaseConfig);

  var storageRef = firebase.storage().ref();
  var imagenRef = storageRef.child('captura.png');
  

  html2canvas(document.getElementById("capture")).then(function(canvas) {
    canvas.toBlob(function(blob) {
      imagenRef.put(blob).then(function(snapshot) {
        var url = snapshot.metadata.downloadURLs[0];
        var tweetText = "¡Mira lo que acabo de crear con esta aplicación! #MiApp";
        var tweetUrl = "https://twitter.com/intent/tweet?text=" + encodeURIComponent(tweetText) + "&url=" + encodeURIComponent(url);
        var botonTwitter = document.createElement("a");
        botonTwitter.href = tweetUrl;
        botonTwitter.target = "_blank";
        botonTwitter.innerHTML = "Compartir en Twitter";
        document.body.appendChild(botonTwitter);
      });
    });
  });
}

// Comparte la información como imagen en Facebook
function compartirFacebook() {
  var firebaseConfig = {
    apiKey: "AIzaSyBtSvmCI7onDchIZLsA0OG4eE9J-2LCOUc",
    authDomain: "conoce-tu-edad-lual-lcs.firebaseapp.com",
    databaseURL: "https://conoce-tu-edad-lual-lcs-default-rtdb.firebaseio.com",
    projectId: "conoce-tu-edad-lual-lcs",
    storageBucket: "conoce-tu-edad-lual-lcs.appspot.com",
    messagingSenderId: "1047654021508",
    appId: "A1:1047654021508:web:53e8c6f4574db0075505d1"
  };
  firebase.initializeApp(firebaseConfig);

  var storageRef = firebase.storage().ref();
  var imagenRef = storageRef.child('captura.png');

  html2canvas(document.getElementById("capture")).then(function(canvas) {
    canvas.toBlob(function(blob) {
      imagenRef.put(blob).then(function(snapshot) {
        var url = snapshot.metadata.downloadURLs[0];
        var fbUrl = "https://www.facebook.com/sharer/sharer.php?u=" + encodeURIComponent(url);
        window.open(fbUrl);
      });
    });
  });
}

// Comparte la información como imagen en Instagram
function compartirInstagram() {
  var firebaseConfig = {
    apiKey: "AIzaSyBtSvmCI7onDchIZLsA0OG4eE9J-2LCOUc",
  authDomain: "conoce-tu-edad-lual-lcs.firebaseapp.com",
  databaseURL: "https://conoce-tu-edad-lual-lcs-default-rtdb.firebaseio.com",
  projectId: "conoce-tu-edad-lual-lcs",
  storageBucket: "conoce-tu-edad-lual-lcs.appspot.com",
  messagingSenderId: "1047654021508",
  appId: "A1:1047654021508:web:53e8c6f4574db0075505d1"
  };
  firebase.initializeApp(firebaseConfig);

  var storageRef = firebase.storage().ref();
  var imagenRef = storageRef.child('captura.png');

  html2canvas(document.getElementById("capture")).then(function(canvas) {
    canvas.toBlob(function(blob) {
      imagenRef.put(blob).then(function(snapshot) {
        var url = snapshot.metadata.downloadURLs[0];
        var igUrl = "instagram://library?AssetPath=" + encodeURIComponent(url);
        window.open(igUrl);
      });
    });
  });
}

  