

// CONFIGURACION A FIREBASE
var firebaseConfig = {
  apiKey: "AIzaSyBtSvmCI7onDchIZLsA0OG4eE9J-2LCOUc",
  authDomain: "conoce-tu-edad-lual-lcs.firebaseapp.com",
  databaseURL: "https://conoce-tu-edad-lual-lcs-default-rtdb.firebaseio.com",
  projectId: "conoce-tu-edad-lual-lcs",
  storageBucket: "conoce-tu-edad-lual-lcs.appspot.com",
  messagingSenderId: "1047654021508",
  appId: "A1:1047654021508:web:53e8c6f4574db0075505d1"
};
const app = initializeApp(firebaseConfig);



//--------------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------------


// CAMBIAR EL IDIOMA DE LA APLICACION WEB
function cambiarIdioma(idioma) {
  var traducciones = {
    es: {
      genero: "Género:",
      hombre: "Hombre",
      mujer: "Mujer",
      fecha: "Fecha de nacimiento:",
      calcular: "Calcular edad",
      resetear: "Resetear",
      edad: "Edad:",
      horoscopo: "Horóscopo:",
      consejo: "Consejo del día:",
      visitas: "Visitas totales:",
      visitasHoy: "Visitas de hoy:",
      usuariosActivos: "Usuarios activos ahora mismo:",
      compartirInstagram: "Compartir en Instagram",
      compartirFacebook: "Compartir en Facebook"
    },
    en: {
      genero: "Gender:",
      hombre: "Male",
      mujer: "Female",
      fecha: "Date of birth:",
      calcular: "Calculate age",
      resetear: "Reset",
      edad: "Age:",
      horoscopo: "Horoscope:",
      consejo: "Tip of the day:",
      visitas: "Total visits:",
      visitasHoy: "Visits today:",
      usuariosActivos: "Active users right now:",
      compartirInstagram: "Share on Instagram",
      compartirFacebook: "Share on Facebook"
    },
    pt: {
      genero: "Gênero:",
      hombre: "Homem",
      mujer: "Mulher",
      fecha: "Data de nascimento:",
      calcular: "Calcular idade",
      resetear: "Resetar",
      edad: "Idade:",
      horoscopo: "Horóscopo:",
      consejo: "Dica do dia:",
      visitas: "Visitas totais:",
      visitasHoy: "Visitas de hoje:",
      usuariosActivos: "Usuários ativos agora mesmo:",
      compartirInstagram: "Compartilhar no Instagram",
      compartirFacebook: "Compartilhar no Facebook"
    },
    de: {
      genero: "Geschlecht:",
      hombre: "Mann",
      mujer: "Frau",
      fecha: "Geburtsdatum:",
      calcular: "Alter berechnen",
      resetear: "Zurücksetzen",
      edad: "Alter:",
      horoscopo: "Horoskop:",
      consejo: "Tipp des Tages:",
      visitas: "Gesamtbesuche:",
      visitasHoy: "Besuche heute:",
      usuariosActivos: "Aktive Benutzer gerade jetzt:",
      compartirInstagram: "Auf Instagram teilen",
      compartirFacebook: "Auf Facebook teilen"
    },
    
    fr: {
      genero: "Genre:",
      hombre: "Homme",
      mujer: "Femme",
      fecha: "Date de naissance:",
      calcular: "Calculer l'âge",
      resetear: "Réinitialiser",
      edad: "Âge:",
      horoscopo: "Horoscope:",
      consejo: "Conseil du jour:",
      visitas: "Visites totales:",
      visitasHoy: "Visites aujourd'hui:",
      usuariosActivos: "Utilisateurs actifs en ce moment:",
      compartirInstagram: "Partager sur Instagram",
      compartirFacebook: "Partager sur Facebook"
    }
  };

// TRADUCCION A LOS IDIOMAS ESPECIFICADOS
  var traduccion = traducciones[idioma];
  document.querySelector("label[for='genero']").textContent = traduccion.genero;
  document.querySelector("option[value='hombre']").textContent = traduccion.hombre;
  document.querySelector("option[value='mujer']").textContent = traduccion.mujer;
  document.querySelector("label[for='fecha']").textContent = traduccion.fecha;
  document.querySelector("button[onclick='calcularEdad()']").textContent = traduccion.calcular;
  document.querySelector("button[onclick='resetear()']").textContent = traduccion.resetear;
  document.getElementById("edad").previousSibling.textContent = traduccion.edad;
  document.getElementById("horoscopo").previousSibling.textContent = traduccion.horoscopo;
  document.getElementById("consejo").previousSibling.textContent = traduccion.consejo;
  document.querySelector("p:contains('Visitas totales:')").textContent = traduccion.visitas;
  document.querySelector("p:contains('Visitas de hoy:')").textContent = traduccion.visitasHoy;
  document.querySelector("p:contains('Usuarios activos ahora mismo:')").textContent = traduccion.usuariosActivos;
  document.querySelector("button:contains('Compartir en Instagram')").textContent = traduccion.compartirInstagram;
  document.querySelector("button:contains('Compartir en Facebook')").textContent = traduccion.compartirFacebook;
}

//--------------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------------

// CALCULAR LA EDAD Y MOSTRAR LOS RESULTADOS
function calcularEdad() {
  
  var resultado = document.getElementById("resultado");          // Obtener la sección "resultado" por su identificador
    resultado.style.visibility = "visible";        // Cambiar el estilo de la sección "resultado" para mostrarla

  var genero = document.getElementById("generoOp").value;
  var fecha = moment(document.getElementById("fechaS").value);
  var edad = moment().diff(fecha, "years");
  var meses = moment().diff(fecha, "months");
  var semanas = moment().diff(fecha, "weeks");
  var dias = moment().diff(fecha, "days");
  var horas = moment().diff(fecha, "hours") % 24;
  document.getElementById("edad2").nextSibling.textContent = "Tienes:";
  document.getElementById("edad").textContent = edad;
  document.getElementById("edad").title = fecha.format("LL");
  document.getElementById("edad").style.color = genero == "hombre" ? "#70caee" : "#f1889b";
  document.getElementById("edad").nextSibling.textContent = "(Has vivido " + meses + " meses, " + semanas + " semanas y " + dias + " días con " + horas + " horas)";
  var signo = obtenerSigno(fecha);
  var significado = obtenerSignificado(signo, genero);
  document.getElementById("horoscopo").textContent =  signo;
  document.getElementById("horoscopo").title = significado;
  document.getElementById("significado").textContent =  significado;
  var consejo = obtenerConsejo();
  document.getElementById("consejo").textContent = consejo;
  
}

// RESETEAR EL FORMULARIO
function resetear() {
  document.getElementById("edad2").nextSibling.textContent = "";
  document.getElementById("generoOp").value = "hombre";
  document.getElementById("fechaS").value = "";
  document.getElementById("edad").textContent = "";
  document.getElementById("edad").title = "";
  document.getElementById("edad").style.color = "";
  document.getElementById("edad").nextSibling.textContent = "";
  document.getElementById("horoscopo").textContent = "";
  document.getElementById("horoscopo").title = "";
  document.getElementById("significado").textContent =  "";
  document.getElementById("consejo").textContent = "";
  document.getElementById("capturar").button = "";

  // Obtener la sección "resultado" por su identificador
  var resultado = document.getElementById("resultado");
  
  // Cambiar el estilo de la sección "resultado" para mostrarla
  resultado.style.visibility = "hidden";
}


//--------------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------------


// OBTENER SIGNO DEL ZODIACO
function obtenerSigno(fecha) {
  var mes = fecha.month() + 1;
  var dia = fecha.date();
  var signos = [
    { nombre: "Aries", inicio: "03-21", fin: "04-19" },
    { nombre: "Tauro", inicio: "04-20", fin: "05-20" },
    { nombre: "Géminis", inicio: "05-21", fin: "06-20" },
    { nombre: "Cáncer", inicio: "06-21", fin: "07-22" },
    { nombre: "Leo", inicio: "07-23", fin: "08-22" },
    { nombre: "Virgo", inicio: "08-23", fin: "09-22" },
    { nombre: "Libra", inicio: "09-23", fin: "10-22" },
    { nombre: "Escorpio", inicio: "10-23", fin: "11-21" },
    { nombre: "Sagitario", inicio: "11-22", fin: "12-21" },
    { nombre: "Capricornio", inicio: "12-22", fin: "12-31" },
    { nombre: "Capricornio", inicio: "01-01", fin: "01-19" },
    { nombre: "Acuario", inicio: "01-20", fin: "02-18" },
    { nombre: "Piscis", inicio: "02-19", fin: "03-20" }
  ];
  var signo = signos.find(function(signo) {
    var inicio = moment(signo.inicio + "-" + fecha.year(), "MM-DD-YYYY");
    var fin = moment(signo.fin + "-" + fecha.year(), "MM-DD-YYYY");
    if (fin.isBefore(inicio)) {
      fin.add(1, "year");
    }
    return fecha.isBetween(inicio, fin, null, "[]");
  });
  return signo.nombre;
}


//--------------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------------


// OBTENER EL SIGNIFICADO DE TU SIGNO
function obtenerSignificado(signo, genero) {
  var significados = {
    Aries: {
      hombre: "Eres un líder nato y siempre estás buscando nuevos desafíos. Tu energía y entusiasmo son contagiosos.",
      mujer: "Eres una líder nata y siempre estás buscando nuevos desafíos. Tu energía y entusiasmo son contagiosos."
    },
    Tauro: {
      hombre: "Eres una persona muy terca pero también muy leal. Valoras la estabilidad y la seguridad.",
      mujer: "Eres una persona muy terca pero también muy leal. Valoras la estabilidad y la seguridad."
    },
    Géminis: {
      hombre: "Eres una persona muy curiosa y siempre estás buscando aprender cosas nuevas. Tu habilidad para comunicarte es impresionante.",
      mujer: "Eres una persona muy curiosa y siempre estás buscando aprender cosas nuevas. Tu habilidad para comunicarte es impresionante."
    },
    Cáncer: {
      hombre: "Eres una persona muy emocional y sensible. Valoras mucho la familia y el hogar.",
      mujer: "Eres una persona muy emocional y sensible. Valoras mucho la familia y el hogar."
    },
    Leo: {
      hombre: "Eres una persona muy segura de ti misma y siempre buscas destacar. Tu creatividad y pasión son impresionantes.",
      mujer: "Eres una persona muy segura de ti misma y siempre buscas destacar. Tu creatividad y pasión son impresionantes."
    },
    Virgo: {
      hombre: "Eres una persona muy detallista y perfeccionista. Tu habilidad para analizar y resolver problemas es impresionante.",
      mujer: "Eres una persona muy detallista y perfeccionista. Tu habilidad para analizar y resolver problemas es impresionante."
    },
    Libra: {
      hombre: "Eres una persona muy equilibrada y justa. Valoras mucho la armonía y la belleza.",
      mujer: "Eres una persona muy equilibrada y justa. Valoras mucho la armonía y la belleza."
    },
    Escorpio: {
      hombre: "Eres una persona muy intensa y apasionada. Tu habilidad para investigar y descubrir secretos es impresionante.",
      mujer: "Eres una persona muy intensa y apasionada. Tu habilidad para investigar y descubrir secretos es impresionante."
    },
    Sagitario: {
      hombre: "Eres una persona muy aventurera y optimista. Tu habilidad para inspirar a los demás es impresionante.",
      mujer: "Eres una persona muy aventurera y optimista. Tu habilidad para inspirar a los demás es impresionante."
    },
    Capricornio: {
      hombre: "Eres una persona muy ambiciosa y trabajadora. Valoras mucho la disciplina y la responsabilidad.",
      mujer: "Eres una persona muy ambiciosa y trabajadora. Valoras mucho la disciplina y la responsabilidad."
    },
    Acuario: {
      hombre: "Eres una persona muy original y creativa. Tu habilidad para pensar fuera de la caja es impresionante.",
      mujer: "Eres una persona muy original y creativa. Tu habilidad para pensar fuera de la caja es impresionante."
    },
    Piscis: {
      hombre: "Eres una persona muy sensible y compasiva. Tu habilidad para conectar con los demás es impresionante.",
      mujer: "Eres una persona muy sensible y compasiva. Tu habilidad para conectar con los demás es impresionante."
    }
  };
  return significados[signo][genero];
}


//--------------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------------


// OBTEN UN CONSEJO ALEATORIO
function obtenerConsejo() {
  var consejos = [
    "Hoy es un buen día para tomar decisiones importantes.",
    "No te rindas ante los obstáculos, sigue adelante.",
    "Recuerda que la paciencia es una virtud.",
    "No te preocupes tanto por el futuro, vive el presente.",
    "Aprovecha las oportunidades que se te presenten.",
    "No dejes que el miedo te detenga, sigue tus sueños.",
    "Recuerda que la felicidad está en las pequeñas cosas.",
    "No te compares con los demás, cada uno tiene su propio camino.",
    "Aprende de tus errores y sigue adelante.",
    "No te olvides de cuidar tu salud, es lo más importante.",
    "Trata a los demás como te gustaría ser tratado.",
    "Escucha activamente a las personas que te rodean.",
    "Practica la empatía y trata de ponerte en el lugar de los demás.",
    "Ayuda a los demás sin esperar nada a cambio.",
    "Agradece a las personas que te ayudan o te brindan su apoyo.",
    "Pide ayuda cuando la necesites, no tengas miedo de pedir ayuda.",
    "Aprende a perdonar y a dejar ir el rencor.",
    "Aprende a decir ¡lo siento! cuando te equivocas.",
    "Aprende a aceptar las críticas constructivas y a mejorar a partir de ellas.",
    "Aprende a valorar las diferencias y a respetar las opiniones de los demás.",
    "Aprende a ser paciente y a esperar tu turno.",
    "Aprende a ser tolerante y a no juzgar a los demás.",
    "Aprende a ser humilde ya reconocer tus errores.",
    "Aprende a ser agradecido ya valorar lo que tienes.",
    "Aprende a ser generoso y a compartir con los demás.",
    "Aprende a ser compasivo y a ayudar a los que sufren.",
    "Aprende a ser optimista y a ver el lado positivo de las cosas.",
    "Aprende a ser perseverante y a no rendirte ante los obstáculos.",
    "Aprende a ser responsable y a cumplir con tus compromisos.",
    "Aprende a ser organizado y a planificar tus actividades.",
    "Aprende a ser disciplinado y a seguir tus metas.",
    "Aprende a ser creativo y a buscar soluciones innovadoras.",
    "Aprende a ser curioso ya investigar sobre temas que te interesen.",
    "Aprende a ser crítico y a cuestionar lo que te rodea.",
    "Aprende a ser auténtico y a ser tú mismo.",
    "Aprende a ser resiliente y a superar las adversidades.",
    "Aprende a ser amable y a trata a los demás con respeto.",
    "Aprende a ser justo y a no discriminar a nadie.",
    "Aprende a ser honesto y a decir la verdad.",
    "Aprende a ser valiente y a enfrentar tus miedos.",
    "Aprende a ser solidario y a ayudar a los más necesitados.",
    "Aprende a ser alegre ya disfrutar de la vida.",
    "Aprende a ser agradable y a tener una actitud positiva.",
    "Aprende a ser educado y a tener buenos modos.",
    "Aprende a ser respetuoso y a no faltar el respeto a nadie.",
    "Aprende a ser agradecido y a dar las gracias por las cosas buenas que te suceden.",
    "Aprende a ser ordenado y a mantener tu espacio limpio y organizado.",
    "Aprende a ser puntual y a llegar a tiempo a tus compromisos.",
    "Aprende a ser comprometido y a cumplir con tus responsabilidades.",
    "Aprende a ser proactivo y a buscar soluciones antes de que surjan los problemas.",
    "Aprende a ser colaborativo y a trabajar en equipo.",
    "Aprende a ser comunicativo y a expresar tus ideas con claridad.",
    "Aprende a ser reflexivo y a pensar antes de actuar.",
    "Aprende a ser agradecido y a honrar a tus padres ya tus mayores.",
    "Aprende a ser espiritual y a pedir a Dios de los cielos.",
    "Aprende a ser saludable y a dejar los vicios de alcoholismo y tabaco.",
    "Aprende a ser agradecido y a valorar lo que tienes.",
    "Aprende a ser curioso y a aprender constantemente.",
    "Aprende a ser agradecido y a valorar las oportunidades que se te presentan.",
    "Aprende a ser agradecido y a disfrutar de la vida.",
    "Trabaja con ética y valores.",
    "Sé honesto en todo momento.",
    "Cumple con tus responsabilidades y compromisos.",
    "Trata a los demás con respeto y consideración.",
    "Sé puntual y llega a tiempo a tus compromisos.",
    "Aprende constantemente y mejora tus habilidades.",
    "Sé proactivo y busca soluciones a los problemas.",
    "Sé colaborativo y trabaja en equipo.",
    "Sé comunicativo y expresa tus ideas con claridad.",
    "Sé responsable y toma decisiones con madurez.",
    "Sé organizado y mantén tu espacio de trabajo limpio y ordenado.",
    "Sé comprometido y trabaja con dedicación.",
    "Sé perseverante y no te rindas ante los obstáculos.",
    "Sé humilde y reconoce tus errores.",
    "Sé agradecido y valora las oportunidades que se te presentan.",
    "El esfuerzo te hace valorar más lo que has conseguido.",
    "El esfuerzo te ayuda a desarrollar habilidades y fortalezas.",
    "El esfuerzo te hace más resiliente ante las adversidades.",
    "El esfuerzo te ayuda a crecer como persona.",
    "El esfuerzo te da una sensación de logro y satisfacción.",
    "El esfuerzo te hace mas consciente de tus capacidades.",
    "El esfuerzo te ayuda a superar tus límites.",
    "El esfuerzo te hace mas independiente y autonomo.",
    "El esfuerzo te ayuda a valorar el tiempo y la dedicación que has invertido.",
    "El esfuerzo te hace mas disciplinado y organizado.",
    "El esfuerzo te ayuda a desarrollar una mentalidad de crecimiento.",
    "El esfuerzo te hace mas consciente de tus metas y objetivos.",
    "El esfuerzo te ayuda a ser más perseverante y a no rendirte ante los obstáculos.",
    "El esfuerzo te hace más creativo y a buscar soluciones innovadoras.",
    "El esfuerzo te ayuda a ser más responsable y a cumplir con tus compromisos.",
    "El esfuerzo te hace más comprometido y a trabajar con dedicación.",
    "El esfuerzo te ayuda a ser más proactivo y a buscar soluciones antes de que surjan los problemas.",
    "El esfuerzo te hace mas colaborativo y a trabajar en equipo.",
    "El esfuerzo te ayuda a ser más comunicativo y a expresar tus ideas con claridad.",
    "El esfuerzo te hace más agradecido ya valora las oportunidades que se te presentan.",
    "Aprende a amarte a ti mismo antes de amar a alguien más.",
    "Trata a tu pareja con respeto y consideración.",
    "Escucha activamente a tu pareja y trata de entender sus necesidades.",
    "Aprende a comunicarte de manera efectiva y a expresar tus sentimientos.",
    "Aprende a perdonar y a dejar ir el rencor.",
    "Aprende a ser paciente y a esperar tu turno.",
    "Aprende a ser tolerante y a no juzgar a tu pareja.",
    "Aprende a ser humilde y a reconocer tus errores.",
    "Aprende a ser agradecido y a valorar los detalles que tu pareja tiene contigo.",
    "Aprende a ser generoso y a compartir con tu pareja.",
    "Aprende a ser compasivo y a apoyar a tu pareja en los momentos difíciles.",
    "Aprende a ser optimista y a ver el lado positivo de las cosas.",
    "Aprende a ser perseverante y a no rendirte ante los obstáculos.",
    "Aprende a ser responsable y a cumplir con tus compromisos.",
    "Aprende a ser cariñoso y a demuestras tu amor de manera constante.",
    "Sé honesto y fiel a tu pareja en todo momento.",
    "No flirtees con otras personas y evita situaciones comprometedoras.",
    "Aprende a controlar tus impulsos y a no caer en la tentación.",
    "Aprende a respetar los límites de tu pareja y a no presionarla.",
    "Aprende a ser leal y a no traicionar la confianza de tu pareja.",
    "Trata a tu pareja con respeto y consideración en todo momento.",
    "Aprende a valorar las diferencias y a respetar las opiniones de tu pareja.",
    "Aprende a ser tolerante y a no juzgar a tu pareja.",
    "Aprende a ser humilde y a reconocer tus errores.",
    "Aprende a ser agradecido y a valorar los detalles que tu pareja tiene contigo.",
    "Aprende a ser generoso y a compartir con tu pareja.",
    "Aprende a ser compasivo y a apoyar a tu pareja en los momentos difíciles.",
    "Aprende a ser optimista y a ver el lado positivo de las cosas.",
    "Aprende a ser perseverante y a no rendirte ante los obstáculos.",
    "Aprende a ser responsable y a cumplir con tus compromisos.",
    "Sé honesto y di siempre la verdad.",
    "No ocultes información importante a tu pareja.",
    "Aprende a ser transparente y a compartir tus pensamientos y sentimientos.",
    "Aprende a ser sincero y a no engañar a tu pareja.",
    "Aprende a ser responsable y a asumir las consecuencias de tus acciones.",
    "Aprende a ser agradecido y a valorar lo que tienes.",
    "Aprende a ser curioso y a aprender constantemente.",
    "Aprende a ser agradecido y a valorar las oportunidades que se te presentan.",
    "Aprende a ser agradecido y a disfrutar de la vida.",
    "Aprende a ser saludable y a cuidar tu cuerpo y mente.",
    "Aprende a ser ordenado y a mantener tu espacio limpio y organizado.",
    "Aprende a ser puntual y a llegar a tiempo a tus compromisos.",
    "Aprende a ser comprometido y a cumplir con tus responsabilidades.",
    "Aprende a ser proactivo y a buscar soluciones antes de que surjan los problemas.",
    "Aprende a ser colaborativo y a trabajar en equipo.",
    "Aprende a ser comunicativo y a expresa tus ideas con claridad.",
    "Aprende a ser reflexivo y a pensar antes de actuar.",
    "Aprende a ser agradecido y a honrar a tus padres ya tus mayores.",
    "Aprende a ser espiritual y a pedir a Dios de los cielos.",
    "Aprende a ser agradecido y a valorar las oportunidades que se te presentan."
  ];
  var indice = Math.floor(Math.random() * consejos.length);
  return consejos[indice];
}
