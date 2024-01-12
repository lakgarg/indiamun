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
const firebaseAuth = firebase.auth()
// const firebaseDatabase = firebase.getDatabase(firebase.initializeApp(firebaseConfig))
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()
const projectStorage = firebase.storage()

const usersCollection = projectFirestore.collection('users');

// Function to store user information in Firestore
const storeUserInfo = async (uid, displayName, email) => {
  try {
    // Use the "users" collection and the user's UID as the document ID
    await usersCollection.doc(uid).set({
      UID: uid,
      displayName: displayName,
      email: email
    });
    console.log('User information stored successfully in Firestore');
  } catch (error) {
    console.error('Error storing user information in Firestore:', error);
    // You might want to handle the error appropriately, e.g., show an error message to the user
  }
};

const registeredUsersIYFA = projectFirestore.collection('iyfa-registered-users');

// Function to store user information in Firestore
const storeRegisteredUsersIYFAInfo = async (uid, displayName, email) => {
  try {
    // Use the "users" collection and the user's UID as the document ID
    await registeredUsersIYFA.doc(uid).set({
      UID: uid,
      displayName: displayName,
      email: email
    });
    console.log('User information stored successfully in Firestore');
  } catch (error) {
    console.error('Error storing user information in Firestore:', error);
    // You might want to handle the error appropriately, e.g., show an error message to the user
  }
};

const registeredUsersYLP = projectFirestore.collection('ylp-registered-users');

// Function to store user information in Firestore
const storeRegisteredUsersYLPInfo = async (uid, displayName, email) => {
  try {
    // Use the "users" collection and the user's UID as the document ID
    await registeredUsersYLP.doc(uid).set({
      UID: uid,
      displayName: displayName,
      email: email
    });
    console.log('User information stored successfully in Firestore');
  } catch (error) {
    console.error('Error storing user information in Firestore:', error);
    // You might want to handle the error appropriately, e.g., show an error message to the user
  }
};

const registeredUsersIMCC = projectFirestore.collection('imcc-registered-users');

// Function to store user information in Firestore
const storeRegisteredUsersIMCCInfo = async (uid, displayName, email) => {
  try {
    // Use the "users" collection and the user's UID as the document ID
    await registeredUsersIMCC.doc(uid).set({
      UID: uid,
      displayName: displayName,
      email: email
    });
    console.log('User information stored successfully in Firestore');
  } catch (error) {
    console.error('Error storing user information in Firestore:', error);
    // You might want to handle the error appropriately, e.g., show an error message to the user
  }
};


// timestamp
const timestamp = firebase.firestore.Timestamp

export { 
  projectFirestore, 
  projectAuth, 
  projectStorage, 
  timestamp, 
  firebaseT, 
  usersCollection, 
  storeUserInfo, 
  firebaseAuth, 
  storeRegisteredUsersIYFAInfo,
  storeRegisteredUsersYLPInfo,
  storeRegisteredUsersIMCCInfo
}