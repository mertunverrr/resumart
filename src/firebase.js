import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBpQnCDbAyMLJjgW9L0lGJ36UeN5bq2uhE",
    authDomain: "resumart-8b89c.firebaseapp.com",
    projectId: "resumart-8b89c",
    storageBucket: "resumart-8b89c.appspot.com",
    messagingSenderId: "417325259337",
    appId: "1:417325259337:web:17ace60edd59a000a9bd98",
    measurementId: "G-TPQYPVBFV5"
  };

  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  export const auth = getAuth(app);