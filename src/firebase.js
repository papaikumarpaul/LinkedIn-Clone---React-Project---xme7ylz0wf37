import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

/*________________________________________________________________________________*/

const firebaseConfig = {
  apiKey: "AIzaSyDb0vZ3-ORJdNONpw4gMYg_Nno0RAAgtbQ",
  authDomain: "papai-aff65.firebaseapp.com",
  projectId: "papai-aff65",
  storageBucket: "papai-aff65.appspot.com",
  messagingSenderId: "703659311516",
  appId: "1:703659311516:web:8a088d264a9ef6648f4859",
  measurementId: "G-70BZ7QK6DD"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export const provider = new GoogleAuthProvider();

/*________________________________________________________________________________*/
