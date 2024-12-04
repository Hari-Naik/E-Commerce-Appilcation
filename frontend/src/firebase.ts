import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAv1NtmThPIFuGQnwdLmPmKSpwHvk-IwyI",
  authDomain: "e-commerce-8b324.firebaseapp.com",
  projectId: "e-commerce-8b324",
  storageBucket: "e-commerce-8b324.appspot.com",
  messagingSenderId: "295262575514",
  appId: "1:295262575514:web:e22659be13b1adac4d7823",
  measurementId: "G-M555JS5C34",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth();

export { db, auth };
