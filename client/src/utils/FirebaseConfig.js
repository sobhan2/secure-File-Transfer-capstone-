import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyBWD1KsTOQ8JFK1nZSY8RzXjyIzhHjHe84",
    authDomain: "filesharingapp-f30dc.firebaseapp.com",
    projectId: "filesharingapp-f30dc",
    storageBucket: "filesharingapp-f30dc.appspot.com",
    messagingSenderId: "139482167341",
    appId: "1:139482167341:web:a04273ba7f5a593a66e0a4",
    measurementId: "G-14N3D8ZMRE"
  };

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);