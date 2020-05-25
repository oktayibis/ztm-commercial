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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (err) {
      console.log("error: ", err.message);
    }
  }
  return userRef;
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

// Google sign-in
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
