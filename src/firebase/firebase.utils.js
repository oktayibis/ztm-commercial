import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCiWmdnUkqQ4wcjNsY-pKdil4tsCFQUZyk",
  authDomain: "ztm-commerce-db.firebaseapp.com",
  databaseURL: "https://ztm-commerce-db.firebaseio.com",
  projectId: "ztm-commerce-db",
  storageBucket: "ztm-commerce-db.appspot.com",
  messagingSenderId: "172803513185",
  appId: "1:172803513185:web:dbdbefc1caa53251b14320",
  measurementId: "G-3PZWP3VNME",
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

// Google sing-in
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
