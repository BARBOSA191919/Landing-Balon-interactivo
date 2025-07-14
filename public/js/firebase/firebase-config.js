export const firebaseConfig = {
  apiKey: "TU_API_KEY",
  authDomain: "balon-juego.firebaseapp.com",
  projectId: "balon-juego",
  storageBucket: "balon-juego.appspot.com",
  messagingSenderId: "44771160231",
  appId: "1:44771160231:web:2a063b562305dbafc1eb82",
  measurementId: "G-EPKLVMM8K5"
};

firebase.initializeApp(firebaseConfig);
export const db = firebase.firestore();
