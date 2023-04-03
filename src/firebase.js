import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

/*________________________________________________________________________________*/

const firebaseConfig = {
  apiKey: "AIzaSyBHfY32oPYd6NJs0sFahZJgInfUgMLe4bk",
  authDomain: "linkedin-clone-project-a1bca.firebaseapp.com",
  projectId: "linkedin-clone-project-a1bca",
  storageBucket: "linkedin-clone-project-a1bca.appspot.com",
  messagingSenderId: "101366265725",
  appId: "1:101366265725:web:1b251d79184de9d8507e14",
  measurementId: "G-5X4VL8ECXR",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
// export const auth = getAuth(app);
// export const db = getFirestore(app);
// export const storage = getStorage(app);
export const provider = new GoogleAuthProvider();

/*________________________________________________________________________________*/
