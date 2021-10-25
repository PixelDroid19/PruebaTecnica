import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, FacebookAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCJ4YNE9ZpORKP9WXPAHWCBj2B3OZ6R20A",
  authDomain: "pokemonpage-53d31.firebaseapp.com",
  projectId: "pokemonpage-53d31",
  storageBucket: "pokemonpage-53d31.appspot.com",
  messagingSenderId: "1043215207196",
  appId: "1:1043215207196:web:fc5bf2e7bd845067f008d9",
  measurementId: "G-2Z5BV90HYK",
};

export const Export = () => {
  const App = initializeApp(firebaseConfig);
  const Google = new GoogleAuthProvider();
  const Facebook = new FacebookAuthProvider();
  const DB = getFirestore();
  
  return { App, Facebook, Google, DB };
};
