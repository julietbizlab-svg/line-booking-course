const firebaseConfig = {
  apiKey: "AIzaSyBNTlXGd2Jlmgr4js7rsjNuqB5MWXD3OnU",
  authDomain: "line-booking-course-458ab.firebaseapp.com",
  projectId: "line-booking-course-458ab",
  storageBucket: "line-booking-course-458ab.firebasestorage.app",
  messagingSenderId: "763296043787",
  appId: "1:763296043787:web:ef444c1cd1065feffb480e",
  measurementId: "G-RRMDHT540H"
};

firebase.initializeApp(firebaseConfig);

window.auth = firebase.auth();
window.db = firebase.firestore();

const auth = window.auth;
const db = window.db;

window.authReady = new Promise((resolve, reject) => {
  const stopWatching = auth.onAuthStateChanged((user) => {
    if (user) {
      stopWatching();
      resolve(user);
    }
  }, reject);

  auth.signInAnonymously().catch(reject);
});
