
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyDsg2qU7xpMyHnVrFlYNPrCLD2kubvmSp4",
  authDomain: "docmate-f5062.firebaseapp.com",
  projectId: "docmate-f5062",
  storageBucket: "docmate-f5062.appspot.com",
  messagingSenderId: "525016346721",
  appId: "1:525016346721:web:a588a36f19b59717b43a20",
  measurementId: "G-EXS2CDH2GD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();