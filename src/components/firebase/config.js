import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore'
import 'firebase/compat/auth'
import 'firebase/compat/storage'

const firebaseConfig = {
  apiKey: "AIzaSyDxZ9WrtDJBrttHro_ePQVicA9GiwTNwAA",
  authDomain: "indiamun-main-website-e3160.firebaseapp.com",
  databaseURL: "https://indiamun-main-website-e3160-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "indiamun-main-website-e3160",
  storageBucket: "indiamun-main-website-e3160.appspot.com",
  messagingSenderId: "829117383904",
  appId: "1:829117383904:web:318e1030625b92b7bdbc85",
  measurementId: "G-M4KSQ1KGD6"
};

firebase.initializeApp(firebaseConfig)

const firebaseT = firebase.auth;

const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()
const projectStorage = firebase.storage()

// timestamp
const timestamp = firebase.firestore.Timestamp

export { projectFirestore, projectAuth, projectStorage, timestamp, firebaseT }