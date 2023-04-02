import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getAuth, GoogleAuthProvider, FacebookAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";
// import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyB-_9azWc_Hq3mykyNf3snQj7em2GRUhDA",
  authDomain: "sharepire-app.firebaseapp.com",
  projectId: "sharepire-app",
  storageBucket: "sharepire-app.appspot.com",
  messagingSenderId: "924363811858",
  appId: "1:924363811858:web:f2a79935f22042dcc67ccb",
  measurementId: "G-MDJKW1YKH7"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const facebookProvider = new FacebookAuthProvider();
export const storage = getStorage(app);




