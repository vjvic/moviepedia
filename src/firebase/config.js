import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const app = firebase.initializeApp({
  apiKey: "AIzaSyCRIdzJVNp04X_6j0dq94Er5j_iTftP_ec",
  authDomain: "movie-app-e702a.firebaseapp.com",
  projectId: "movie-app-e702a",
  storageBucket: "movie-app-e702a.appspot.com",
  messagingSenderId: "95203344974",
  appId: "1:95203344974:web:c217f79ff1eba20315b91f",
});

export const db = firebase.firestore();
export const timeStamp = firebase.firestore.FieldValue.serverTimestamp;

export default app;
