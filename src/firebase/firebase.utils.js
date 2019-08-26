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
 export const createUserProfileDocument = async(userAuth, additionalData)=> {
     if(!userAuth) return;
     const userRef = firestore.doc(`users/${userAuth.uid}`);
     const snapShot = await userRef.get();

     if(!snapShot.exists){
         const {displayName, email} = userAuth;
         const createdAt = new Date();
         try{
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
         }
         catch(error){
             console.log('Error creating User', error.message)
         }  
     }
     return userRef;
 };


export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;