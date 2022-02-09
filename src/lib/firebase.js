import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBtIz_5hMM3weaRbuOmb5WmED6CwoOpbSA",
  authDomain: "redux-book-self-day-1.firebaseapp.com",
  projectId: "redux-book-self-day-1",
  storageBucket: "redux-book-self-day-1.appspot.com",
  messagingSenderId: "916626857467",
  appId: "1:916626857467:web:e8ca099d3ecc73fc8a7f5e",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;
