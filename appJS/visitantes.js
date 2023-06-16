import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/functions";
import moment from "moment";


// Configura la conexión a Firebase
var firebaseConfig = {
    apiKey: "AIzaSyBtSvmCI7onDchIZLsA0OG4eE9J-2LCOUc",
    authDomain: "conoce-tu-edad-lual-lcs.firebaseapp.com",
    databaseURL: "https://conoce-tu-edad-lual-lcs-default-rtdb.firebaseio.com",
    projectId: "conoce-tu-edad-lual-lcs",
    storageBucket: "conoce-tu-edad-lual-lcs.appspot.com",
    messagingSenderId: "1047654021508",
    appId: "A1:1047654021508:web:53e8c6f4574db0075505d1",
  };
  
  firebase.initializeApp(firebaseConfig);


// Obtener la referencia a la base de datos
var database = firebase.database();

// Obtener la fecha actual en formato YYYY-MM-DD
var fechaActual = moment().format("YYYY-MM-DD");

// Obtener las referencias a los contadores de visitas
var visitasRef = database.ref("contadores/visitas");
var visitasHoyRef = database.ref("contadores/visitas-hoy/" + fechaActual);
var visitasSemanaRef = database.ref("contadores/visitas-semana");
var visitasMesRef = database.ref("contadores/visitas-mes");

// Obtener la lista de usuarios online
var usuariosOnlineRef = database.ref("usuarios-online");
usuariosOnlineRef.on("value", function(snapshot) {
  var usuariosOnline = snapshot.numChildren();
  // Mostrar el número de usuarios online
  console.log("Usuarios online: " + usuariosOnline);
});

// Obtener el contador de visitas de hoy
visitasHoyRef.on("value", function(snapshot) {
  var visitasHoy = snapshot.val();
  // Mostrar el número de visitas de hoy
  console.log("Visitas de hoy: + visitasHoy");
});

// Obtener el total de visitas de la semana
var inicioSemana = moment().startOf("isoWeek").format("YYYY-MM-DD");
var finSemana = moment().endOf("isoWeek").format("YYYY-MM-DD");
visitasSemanaRef.orderByKey().startAt(inicioSemana).endAt(finSemana).on("value", function(snapshot) {
  var visitasSemana = 0;
  snapshot.forEach(function(childSnapshot) {
    visitasSemana += childSnapshot.val();
  });
  // Mostrar el número de visitas de la semana
  console.log("Visitas de la semana: " + visitasSemana);
});

// Obtener el total de visitas del mes actual
var inicioMes = moment().startOf("month").format("YYYY-MM-DD");
var finMes = moment().endOf("month").format("YYYY-MM-DD");
visitasMesRef.orderByKey().startAt(inicioMes).endAt(finMes).on("value", function(snapshot) {
  var visitasMes = 0;
  snapshot.forEach(function(childSnapshot) {
    visitasMes += childSnapshot.val();
  });
  // Mostrar el número de visitas del mes actual
  console.log("Visitas del mes actual: " + visitasMes);
});

// Obtener el total de visitas del mes pasado
var inicioMesPasado = moment().subtract(1, "month").startOf("month").format("YYYY-MM-DD");
var finMesPasado = moment().subtract(1, "month").endOf("month").format("YYYY-MM-DD");
visitasMesRef.orderByKey().startAt(inicioMesPasado).endAt(finMesPasado).on("value", function(snapshot) {
  var visitasMesPasado = 0;
  snapshot.forEach(function(childSnapshot) {
    visitasMesPasado += childSnapshot.val();
  });
  // Mostrar el número de visitas del mes pasado
  console.log("Visitas del mes pasado: " + visitasMesPasado);
});

// Obtener el total de visitas desde el primer día
visitasRef.on("value", function(snapshot) {
  var visitasTotales = snapshot.val();
  // Mostrar el número de visitas desde el primer día
  console.log("Visitas desde el primer día: " + visitasTotales);
});
