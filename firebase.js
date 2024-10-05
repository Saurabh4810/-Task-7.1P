import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore'; 

const firebaseConfig = {
  apiKey: "Your API Key",
  authDomain: "Development-7-2P.firebaseapp.com",
  projectId: "Development-7-2P",
  storageBucket: "Development-7-2P.appspot.com",
  messagingSenderId: "578596463066",
  appId: "1:578596463066:web:a13c283b032b33e3cde0e3"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
