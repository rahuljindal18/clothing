import firebase from 'firebase/app';
import 'firebase/firestore';  //this is for database
import 'firebase/auth'; //this is for authentication

//we need to import firebase as in line 1 because when we import 
//firestore and auth they will automatically get attached to the firebase

const config = {
    apiKey: "AIzaSyAZNL8SbVMezsK4urUrSGrpSF4RJ65PvgM",
    authDomain: "clothing-db-c03b3.firebaseapp.com",
    databaseURL: "https://clothing-db-c03b3.firebaseio.com",
    projectId: "clothing-db-c03b3",
    storageBucket: "clothing-db-c03b3.appspot.com",
    messagingSenderId: "482248998193",
    appId: "1:482248998193:web:830fb754e410a6c23b4410",
    measurementId: "G-W2GH54NRD7"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});

  export const signInWithGoogle = () => auth.signInWithPopup(provider);
  export default firebase;