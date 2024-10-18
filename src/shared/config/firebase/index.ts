import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";

export const firebaseConfig = {
  apiKey: "AIzaSyDBlGqbkcTyIS8YZP48bNnxW8E0fnpNsYg",
  authDomain: "messeneger-d23e0.firebaseapp.com",
  projectId: "messeneger-d23e0",
  storageBucket: "messeneger-d23e0.appspot.com",
  messagingSenderId: "792027324895",
  appId: "1:792027324895:web:b2cba666f00bb1a652a46a",
  measurementId: "G-X3T58D45ZX",
};

initializeApp(firebaseConfig);
export const provider = new GoogleAuthProvider();
export const auth = getAuth();
