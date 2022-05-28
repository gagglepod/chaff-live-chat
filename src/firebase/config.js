import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDuZrk6Wp_fxvEm8VI6jwlXLNwp06vlaZw",
  authDomain: "chaff-live-chat.firebaseapp.com",
  projectId: "chaff-live-chat",
  storageBucket: "chaff-live-chat.appspot.com",
  messagingSenderId: "650744645615",
  appId: "1:650744645615:web:75e9024c955d3f2e58d81a",
};

// init firebase
firebase.initializeApp(firebaseConfig);

const projectAuth = firebase.auth();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectAuth, projectFirestore, timestamp };
