// Firebase SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-app.js";
import {
  getFirestore,
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc
} from "https://www.gstatic.com/firebasejs/12.2.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCK2ehcTScioY9b_nK0upvanZ4MUTz9vTY",
  authDomain: "prime-lab-diagnostic-cec12.firebaseapp.com",
  projectId: "prime-lab-diagnostic-cec12",
  storageBucket: "prime-lab-diagnostic-cec12.firebasestorage.app",
  messagingSenderId: "640035125658",
  appId: "1:640035125658:web:d75ce1d63a964881992223",
  measurementId: "G-ZYKLRE59Z8"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {
  db,
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc
};
