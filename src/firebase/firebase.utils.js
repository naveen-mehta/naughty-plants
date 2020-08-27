import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";


const firebaseConfig = {

    apiKey: "AIzaSyCxSAv5yIrQQ5L97M9eJVbibiLR0ZphSaE",
    authDomain: "naughty-plants-db.firebaseapp.com",
    databaseURL: "https://naughty-plants-db.firebaseio.com",
    projectId: "naughty-plants-db",
    storageBucket: "naughty-plants-db.appspot.com",
    messagingSenderId: "657163029800",
    appId: "1:657163029800:web:2c117f0696a18da641d41d",
    measurementId: "G-2G9PWB564E"

}

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

export const googSignIn = () => firebase.auth().signInWithPopup(provider);

export default firebase; 


