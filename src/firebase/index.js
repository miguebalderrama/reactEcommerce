import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { getAuth} from "firebase/auth";


const app = firebase.initializeApp({
  apiKey: "AIzaSyDSBDCigDECviKUXbHpYlTZt0_LoQrhcN4",
  authDomain: "myecommerce-e45c3.firebaseapp.com",
  projectId: "myecommerce-e45c3",
  storageBucket: "myecommerce-e45c3.appspot.com",
  messagingSenderId: "1007763545841",
  appId: "1:1007763545841:web:0b53bd0a4dd3f723a99350"
});

export const getFirebase = () => app;

export const getFirestore = () => firebase.firestore(app);

export const authentication = getAuth(app);