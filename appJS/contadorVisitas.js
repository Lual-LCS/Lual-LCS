import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/functions";


// Configura la conexión a la base de datos de Firebase
var firebaseConfig = {
    apiKey: "AIzaSyBtSvmCI7onDchIZLsA0OG4eE9J-2LCOUc",
    authDomain: "conoce-tu-edad-lual-lcs.firebaseapp.com",
    projectId: "conoce-tu-edad-lual-lcs",
    storageBucket: "conoce-tu-edad-lual-lcs.appspot.com",
    messagingSenderId: "1047654021508",
    appId: "1:1047654021508:web:53e8c6f4574db0075505d1",
    measurementId: "G-DLDKVBDLCS"
  };
  firebase.initializeApp(firebaseConfig);
  
  // Obtiene una referencia a la base de datos de Firebase
  var database = firebase.database();
  
  // Obtiene una referencia a la ubicación de los datos de visitas
  var visitsRef = database.ref("visits");
  
  // Obtiene una referencia a la ubicación de los datos de usuarios en línea
  var onlineRef = database.ref(".info/connected");
  
  // Incrementa el contador de visitas de hoy
  visitsRef.child("today_count").transaction(function(count) {
    return (count || 0) + 1;
  });
  
  // Actualiza el contador de usuarios en línea
  onlineRef.on("value", function(snapshot) {
    if (snapshot.val()) {
      visitsRef.child("online_users").transaction(function(count) {
        return (count || 0) + 1;
      });
    } else {
      visitsRef.child("online_users").transaction(function(count) {
        return (count || 0) - 1;
      });
    }
  });
  
  // Actualiza los contadores de visitas
  visitsRef.on("value", function(snapshot) {
    var today_count = snapshot.child("today_count").val() || 0;
    var online_users = snapshot.child("online_users").val() || 0;
    var week_count = snapshot.child("week_count").val() || 0;
    var month_count = snapshot.child("month_count").val() || 0;
    var prev_month_count = snapshot.child("prev_month_count").val() || 0;
    var year_count = snapshot.child("year_count").val() ||0;
    var total_count = snapshot.child("total_count").val() || 0;
  
    // Actualiza los contadores en la página
    $("#today_count").text(today_count);
    $("#online_users").text(online_users);
    $("#week_count").text(week_count);
    $("#month_count").text(month_count);
    $("#prev_month_count").text(prev_month_count);
    $("#year_count").text(year_count);
    $("#total_count").text(total_count);
  });
  