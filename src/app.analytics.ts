// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";



export const setupAnalytics = () => {
  const firebaseConfig = {
    apiKey: "AIzaSyDexFSdm1eE4leYd8kLIwN3T7RqbGAs8s8",
    authDomain: "kjbapps.firebaseapp.com",
    projectId: "kjbapps",
    storageBucket: "kjbapps.appspot.com",
    messagingSenderId: "588676241575",
    appId: "1:588676241575:web:91ce8572492247df5e6382",
    measurementId: "G-8THHD7S6BD"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  analytics.app.automaticDataCollectionEnabled = true;
}