// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDRmGUONiXREIxDrtsafi6FCzVNy4CPr0E",
  authDomain: "travelplanner-2d72a.firebaseapp.com",
  projectId: "travelplanner-2d72a",
  storageBucket: "travelplanner-2d72a.firebasestorage.app",
  messagingSenderId: "651206686196",
  appId: "1:651206686196:web:0510b329390b9de43cf5a1",
  measurementId: "G-X9RWC59Q09"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db=getFirestore(app);
//const analytics = getAnalytics(app);