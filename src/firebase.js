import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyCz358gvjEk-BDk1L0rub2acuqBGPfZQq8",
    authDomain: "slack-clone-800c5.firebaseapp.com",
    projectId: "slack-clone-800c5",
    storageBucket: "slack-clone-800c5.appspot.com",
    messagingSenderId: "1075851486430",
    appId: "1:1075851486430:web:f8a8d4a3a6bd4bd25a4e4f"
}


const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth =  firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export { auth, provider, db}