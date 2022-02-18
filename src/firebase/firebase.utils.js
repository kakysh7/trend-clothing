import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';


const config = {
    apiKey: "AIzaSyC1qRYM2cTwnaqIU1TJcjaXssweXHrztsc",
    authDomain: "trend-clothing-ee44c.firebaseapp.com",
    projectId: "trend-clothing-ee44c",
    storageBucket: "trend-clothing-ee44c.appspot.com",
    messagingSenderId: "155296479321",
    appId: "1:155296479321:web:2c2ff662fd0d5c39f35948",
    measurementId: "G-MD704VECVM"
  };

  firebase.initializeApp(config);


  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;