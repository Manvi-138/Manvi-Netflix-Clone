// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
//instead of exposing ur firebase details in this main file just write the variables names from env file.
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER,
  appId: process.env.REACT_APP_APP_ID
};

// REACT_APP_FIREBASE_API_KEY=AIzaSyANX8TyE5aUu7SFA-7SkxZNPwEzdg_vaR8
// REACT_APP_FIREBASE_AUTH_DOMAIN=netflix-clone-react-1b917.firebaseapp.com
// REACT_APP_FIREBASE_PROJECT_ID=netflix-clone-react-1b917
// REACT_APP_FIREBASE_STORAGE_BUCKET=netflix-clone-react-1b917.appspot.com
// REACT_APP_MESSAGING_SENDER=362931202347
// REACT_APP_APP_ID=1:362931202347:web:ed46d6aaa950f86dda3d6e

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const auth = getAuth(app);
export const db = getFirestore(app)

//NOTE:
//if we want to make any changes to project and deploy it again the simply make changes in file then,
//go to terminal and type "npm run build"
//then type "firebase deploy"
//ur changes will be made to the deployed project and u can check them from the link given in Hosting section in firebase.
