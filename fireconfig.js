// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB8FOnp3ydCWQuUNwvQ9f9vr2H1z9Swv3g",
  authDomain: "diginums-8acaa.firebaseapp.com",
  projectId: "diginums-8acaa",
  storageBucket: "diginums-8acaa.appspot.com",
  messagingSenderId: "141373759825",
  appId: "1:141373759825:web:d304dbc2e5c638dc1d7370",
  measurementId: "G-HVHFEZZQD8",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// export const analytics = getAnalytics(app);
