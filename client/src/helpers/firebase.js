// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getEvn } from "./getEnv";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: getEvn("VITE_FIREBASE_API"),
  authDomain: "blog-9dca7.firebaseapp.com",
  projectId: "blog-9dca7",
  storageBucket: "blog-9dca7.firebasestorage.app",
  messagingSenderId: "419671008929",
  appId: "1:419671008929:web:fd6283765b0bdd51aa32e0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider();
export { auth, provider };
