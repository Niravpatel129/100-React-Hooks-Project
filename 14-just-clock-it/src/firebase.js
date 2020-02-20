import firebase from "firebase/app";
import "firebase/firestore";

let firebaseConfig = {
  apiKey: "AIzaSyDsn41kt0OtOXBKQ-Qx8LWAz4Dva5hvC5U",
  authDomain: "just-clock-it-2cc14.firebaseapp.com",
  databaseURL: "https://just-clock-it-2cc14.firebaseio.com",
  projectId: "just-clock-it-2cc14",
  storageBucket: "just-clock-it-2cc14.appspot.com",
  messagingSenderId: "101034510189",
  appId: "1:101034510189:web:fd4818c4bca860adcefc64",
  measurementId: "G-9QXKDKWPHV"
};

firebase.initializeApp(firebaseConfig);

export default firebase;
