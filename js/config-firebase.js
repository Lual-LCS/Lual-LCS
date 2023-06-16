    // Import the functions you need from the SDKs you need
    import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-app.js";
    import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-analytics.js";
    import { getAuth } from "https://www.gstatic.com/firebasejs/8.6.8/firebase-auth.js";
    import { getDatabase } from "https://www.gstatic.com/firebasejs/8.6.8/firebase-database.js";
    import { getFirestore } from "https://www.gstatic.com/firebasejs/8.6.1/firebase-firestore.js";
    // TODO: Add SDKs for Firebase products that you want to use
    // https://firebase.google.com/docs/web/setup#available-libraries
  
    // Your web app's Firebase configuration
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    const firebaseConfig = {
      apiKey: "AIzaSyBtSvmCI7onDchIZLsA0OG4eE9J-2LCOUc",
      authDomain: "conoce-tu-edad-lual-lcs.firebaseapp.com",
      databaseURL: "https://conoce-tu-edad-lual-lcs-default-rtdb.firebaseio.com",
      projectId: "conoce-tu-edad-lual-lcs",
      storageBucket: "conoce-tu-edad-lual-lcs.appspot.com",
      messagingSenderId: "1047654021508",
      appId: "1:1047654021508:web:53e8c6f4574db0075505d1",
      measurementId: "G-DLDKVBDLCS"
    };
  
    // Initialize Firebase
export    const app = initializeApp(firebaseConfig);
export    const analytics = getAnalytics(app);
export    const auth = getAuth(app);
export    const database = getDatabase(app);
export    const db = getFirestore(app);
