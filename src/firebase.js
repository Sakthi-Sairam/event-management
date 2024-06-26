// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: "AIzaSyDzTZNdlSX-K5MySrm1EOSTwei2pOcYU_c",
  authDomain: "event-management-page.firebaseapp.com",
  projectId: "event-management-page",
  storageBucket: "event-management-page.appspot.com",
  messagingSenderId: "409078410094",
  appId: "1:409078410094:web:18145244abc0bcad47af7f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
