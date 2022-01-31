import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDEwZnKMOfB_wE0C-7FT5KvK2OHNSvtO7k",
    authDomain: "mla-esports.firebaseapp.com",
    projectId: "mla-esports",
    storageBucket: "mla-esports.appspot.com",
    messagingSenderId: "818334399775",
    appId: "1:818334399775:web:827e5b6adae26180be442a",
    measurementId: "G-V6LLT852TN"
};

const app = initializeApp(firebaseConfig);
export const getFirebase = () => app;

export { getFirestore  };