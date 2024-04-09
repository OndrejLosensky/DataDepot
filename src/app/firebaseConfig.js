// firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  // Your Firebase configuration
  apiKey: "AIzaSyB-Ub-8CblvM6UjnifY6No8EPMDCZN9NMU",
  authDomain: "datadepot-fea2b.firebaseapp.com",
  projectId: "datadepot-fea2b",
  storageBucket: "datadepot-fea2b.appspot.com",
  messagingSenderId: "303649153712",
  appId: "1:303649153712:web:a22f64dd36f72a1c109175",
  measurementId: "G-1BCCVPKP8Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);
console.log("Storage object:", storage); // Log the storage object

export { auth, db, storage };
