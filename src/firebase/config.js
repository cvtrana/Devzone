import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyCSBsMglkAzm53IPexC8NL9jtXRUCw8uZs",
  authDomain: "devzone-27848.firebaseapp.com",
  projectId: "devzone-27848",
  storageBucket: "devzone-27848.appspot.com",
  messagingSenderId: "208202784705",
  appId: "1:208202784705:web:56c0763bf07e5e59fe5940"
};

// initialise app
firebase.initializeApp(firebaseConfig)

// intialise other services

const projectFirestore  = firebase.firestore();
const projectAuth = firebase.auth();
const timestamp = firebase.firestore.Timestamp
// here project storage service
const projectStorage = firebase.storage()


// export
export {projectAuth,projectFirestore,timestamp,projectStorage}