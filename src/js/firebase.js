import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCpggLdjLSnzFtWFyUbOjuWLkADkOTn5lQ",
  authDomain: "memo-grass.firebaseapp.com",
  projectId: "memo-grass",
  storageBucket: "memo-grass.appspot.com",
  messagingSenderId: "872326362354",
  appId: "1:872326362354:web:07e606b94526b490e00c6b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);


export {
    db,
    auth
}
