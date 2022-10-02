import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC1Gjdoig2jTpFQjzXA-x9XbR7RWEW7JiY",
  authDomain: "blog-project-bd0ba.firebaseapp.com",
  projectId: "blog-project-bd0ba",
  storageBucket: "blog-project-bd0ba.appspot.com",
  messagingSenderId: "992250821730",
  appId: "1:992250821730:web:b10d8b88423e4aca74e53b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// const db = getFirestore(app);

export default getFirestore(app);
