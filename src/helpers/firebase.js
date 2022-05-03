import { initializeApp } from "firebase/app";
//import auth from "firebase/auth";
import { getFirestore } from "firebase/firestore";
//import { doc, deleteDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA-nH3RHk8KdNqQU8P2tvoAnHl7m_oMdPw",
  authDomain: "cursos-alfaweb-6aef7.firebaseapp.com",
  projectId: "cursos-alfaweb-6aef7",
  storageBucket: "cursos-alfaweb-6aef7.appspot.com",
  messagingSenderId: "816303599244",
  appId: "1:816303599244:web:c9ae620f8142d05f3055a9",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export { db };
export default app;
