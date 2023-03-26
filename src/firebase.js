import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

/*________________________________________________________________________________*/

const firebaseConfig = {
  apiKey: "AIzaSyAD-8UYfkpdgCoOEBVF9FelTdJvHNNmtf8",
  authDomain: "linkedin-clone-6a333.firebaseapp.com",
  projectId: "linkedin-clone-6a333",
  storageBucket: "linkedin-clone-6a333.appspot.com",
  messagingSenderId: "551963891626",
  appId: "1:551963891626:web:92d29b4a7e348f71af3dd3",
  measurementId: "G-VCPKLGM8MZ",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export const provider = new GoogleAuthProvider();

/*________________________________________________________________________________*/
