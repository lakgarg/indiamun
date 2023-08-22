import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore'
import 'firebase/compat/auth'
import 'firebase/compat/storage'

const firebaseConfig = {
  apiKey: "AIzaSyDyNdtVjoU9-fyup9ySIW1s9OS3cO8UbLo",
  authDomain: "indiamun-main-website.firebaseapp.com",
  projectId: "indiamun-main-website",
  storageBucket: "indiamun-main-website.appspot.com",
  messagingSenderId: "416875930617",
  appId: "1:416875930617:web:4ff37adedec9bdb85dd328",
  measurementId: "G-VHVCC070PW"
};

  firebase.initializeApp(firebaseConfig)


  const firebaseT=firebase.auth;

  const projectFirestore = firebase.firestore()
  const projectAuth =firebase.auth()
  const projectStorage = firebase.storage()

  // timestamp
  const timestamp = firebase.firestore.Timestamp

  export {projectFirestore,projectAuth,projectStorage,timestamp,firebaseT}