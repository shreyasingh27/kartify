import  firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config ={
    apiKey: "AIzaSyBGlAdBhOdkB_vH67e41U3jv7e3Mgo03DQ",
    authDomain: "kartify-db.firebaseapp.com",
    databaseURL: "https://kartify-db.firebaseio.com",
    projectId: "kartify-db",
    storageBucket: "",
    messagingSenderId: "103978632723",
    appId: "1:103978632723:web:3a2ec9c110c8b377"
}
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;