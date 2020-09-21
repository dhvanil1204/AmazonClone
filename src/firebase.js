import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBpi19uD9hGmeBgc7GjuuDtrCtPHPxg0R4",
  authDomain: "challenge-efe31.firebaseapp.com",
  databaseURL: "https://challenge-efe31.firebaseio.com",
  projectId: "challenge-efe31",
  storageBucket: "challenge-efe31.appspot.com",
  messagingSenderId: "609854852520",
  appId: "1:609854852520:web:9f3c0a55cb6bbde254e19d",
  measurementId: "G-2LXBVPTKPL",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
