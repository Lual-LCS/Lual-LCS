

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
    appId: "A1:1047654021508:web:53e8c6f4574db0075505d1"
    
  };
  
  firebase.initializeApp(firebaseConfig);

//-------------------------------------------------------------------------------------------------------------

// Inicializar base de fuego
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Obtener la fecha actual en formato YYYY-MM-DD
var fechaActual = moment().format("YYYY-MM-DD");

database.rule.json

  
// Actualiza el contador de visitas AGREGAMOS LA VARIABLE (visitasRef)
var visitasRef = database.ref("contadores/visitas");
visitasRef.transaction(function(contador) {
  return contador + 1;
});

//-------------------------------------------------------------------------------------------------------------

// LAS VISITAS CONTADOR TOTAL
visitasRef.on("value", function(snapshot) {
  var visitas = snapshot.val();
  document.getElementById("visitas").textContent = visitas;
});

//--------------------------------------------------------------------------------------------------------------

// LAS VISITAS CONTADOR TOTAL (modificado)
var visitasRef = database.ref("contadores/visitas");
visitasRef.transaction(function(contador) {
  return contador + 1;
});

visitasRef.on("value", function(snapshot) {
  var visitas = snapshot.val();
  document.getElementById("visitas").textContent = visitas;
});

//-------------------------------------------------------------------------------------------------------------

// VISITAS HOY CONTADOR
var visitasHoyRef = database.ref("contadores/visitas-hoy/" + moment().format("YYYY-MM-DD"));
visitasHoyRef.transaction(function(contador) {
  return contador + 1;
});

visitasHoyRef.on("value", function(snapshot) {
  var visitasHoy = snapshot.val() || 0;
  document.getElementById("visitas-hoy").textContent = visitasHoy;
});



//-------------------------------------------------------------------------------------------------



// Obtener las referencias a los contadores de visitas
var visitasRef = database.ref("contadores/visitas");
var visitasHoyRef = database.ref("contadores/visitas-hoy/" + fechaActual);
var visitasSemanaRef = database.ref("contadores/visitas-semana");
var visitasMesRef = database.ref("contadores/visitas-mes");


// Incrementar el contador de visitas
visitasRef.transaction(function(contador) {
  return contador + 1;
});


// Incrementar el contador de visitas de hoy MODIFICADO
visitasHoyRef.transaction(function(contador) {
    return contador + 1;
});

visitasHoyRef.on("value", function(snapshot) {
  var visitasHoy = snapshot.val();
  document.getElementById("visitas-hoy").textContent = visitasHoy;
});

visitasHoyRef.once("value", function(snapshot) {
  var fechaAnterior = moment(snapshot.key, "YYYY-MM-DD");
  var fechaActual = moment();
  if (!fechaAnterior.isSame(fechaActual, "day")) {
    visitasHoyRef.set(0);
  }
});

// Reiniciar el contador de visitas de hoy si la fecha ha cambiado
visitasHoyRef.once("value", function(snapshot) {
  var fechaAnterior = moment(snapshot.key, "YYYY-MM-DD");
  var fechaActual = moment();
  if (!fechaAnterior.isSame(fechaActual, "day")) {
    visitasHoyRef.set(0);
  }
});

// Incrementar el contador de visitas semanales y reiniciarlo cada lunes a las 00:00
var inicioSemana = moment().startOf("isoWeek").format("YYYY-MM-DD");
var finSemana = moment().endOf("isoWeek").format("YYYY-MM-DD");
var visitasSemanales = 0;
visitasSemanaRef.orderByKey().startAt(inicioSemana).endAt(finSemana).once("value", function(snapshot) {
  snapshot.forEach(function(childSnapshot) {
    visitasSemanales += childSnapshot.val();
  });
  visitasSemanaRef.child(inicioSemana).transaction(function(contador) {
    return visitasSemanales + 1;
  });
});

// Incrementar el contador de visitas mensuales y reiniciarlo cada mes
var inicioMes = moment().startOf("month").format("YYYY-MM-DD");
var finMes = moment().endOf("month").format("YYYY-MM-DD");
var visitasMensuales = 0;
visitasMesRef.orderByKey().startAt(inicioMes).endAt(finMes).once("value", function(snapshot) {
  snapshot.forEach(function(childSnapshot) {
    visitasMensuales += childSnapshot.val();
  });
  visitasMesRef.child(inicioMes).transaction(function(contador) {
    return visitasMensuales + 1;
  });
});


//---------------------------------------------------------------------------------------------------------------

// CONTADOR DE USUARIOS ACTIVOS (ONLINE)
var usuariosActivosRef = database.ref("contadores/usuarios-activos");
usuariosActivosRef.transaction(function(contador) {
  return contador + 1;
});

usuariosActivosRef.on("value", function(snapshot) {
  var usuariosActivos = snapshot.val();
  document.getElementById("usuarios-activos").textContent = usuariosActivos;
});

usuariosActivosRef.onDisconnect().transaction(function(contador) {
  return contador - 1;
});


//----------------------------------------------------------------------------------------------------------  


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

// Obtener la fecha actual en formato YYYY-MM-DD
var fechaActual = moment().format("YYYY-MM-DD");

// Obtener las referencias a los contadores de visitas
var visitasRef = firebase.database().ref("contadores/visitas");
var visitasHoyRef = firebase.database().ref("contadores/visitas-hoy/" + fechaActual);
var visitasSemanaRef = firebase.database().ref("contadores/visitas-semana");
var visitasMesRef = firebase.database().ref("contadores/visitas-mes");
var usuariosActivosRef = firebase.database().ref("contadores/usuarios-activos");

// Incrementar el contador de visitas
visitasRef.transaction(function(contador) {
  return contador + 1;
});

// LAS VISITAS CONTADOR TOTAL
visitasRef.on("value", function(snapshot) {
  var visitas = snapshot.val();
 document.getElementById("visitas").textContent = visitas;
});

// Incrementar el contador de visitas de hoy
visitasHoyRef.transaction(function(contador) {
  return contador + 1;
});

// LAS VISITAS CONTADOR TOTAL (modificado)
visitasRef.on("value", function(snapshot) {
  var visitas = snapshot.val();
  document.getElementById("visitas").textContent = visitas;
});

// LAS VISITAS HOY CONTADOR
visitasHoyRef.on("value", function(snapshot) {
  var visitasHoy = snapshot.val() || 0;
  document.getElementById("visitas-hoy").textContent = visitasHoy;
});

// Reiniciar el contador de visitas de hoy si la fecha ha cambiado
visitasHoyRef.once("value", function(snapshot) {
  var fechaAnterior = moment(snapshot.key, "YYYY-MM-DD");
  var fechaActual = moment();
  if (!fechaAnterior.isSame(fechaActual, "day")) {
    visitasHoyRef.set(0);
  }
});

// Incrementar el contador de visitas semanales y reiniciarlo cada lunes a las 00:00
var inicioSemana = moment().startOf("isoWeek").format("YYYY-MM-DD");
var finSemana = moment().endOf("isoWeek").format("YYYY-MM-DD");
var visitasSemanales = 0;
visitasSemanaRef.orderByKey().startAt(inicioSemana).endAt(finSemana).once("value", function(snapshot) {
  snapshot.forEach(function(childSnapshot) {
    visitasSemanales += childSnapshot.val();
  });
  visitasSemanaRef.child(inicioSemana).transaction(function(contador) {
    return visitasSemanales + 1;
  });
});

// Incrementar el contador de visitas mensuales y reiniciarlo cada mes
var inicioMes = moment().startOf("month").format("YYYY-MM-DD");
var finMes = moment().endOf("month").format("YYYY-MM-DD");
var visitasMensuales = 0;
visitasMesRef.orderByKey().startAt(inicioMes).endAt(finMes).once("value", function(snapshot) {
  snapshot.forEach(function(childSnapshot) {
    visitasMensuales += childSnapshot.val();
  });
  visitasMesRef.child(inicioMes).transaction(function(contador) {
    return visitasMensuales + 1;
  });
});

// Contador de usuarios activos (online)
usuariosActivosRef.transaction(function(contador) {
  return contador + 1;
});

usuariosActivosRef.on("value", function(snapshot) {
  var usuariosActivos = snapshot.val();
  document.getElementById("usuarios-activos").textContent = usuariosActivos;
});

usuariosActivosRef.onDisconnect().transaction(function(contador) {
  return contador - 1;
});
