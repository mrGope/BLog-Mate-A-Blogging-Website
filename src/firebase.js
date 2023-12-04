import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAfUDfgUSOY8il9C2AsAjzUKgW5UKOyNCI",
  authDomain: "blog-mate.firebaseapp.com",
  projectId: "blog-mate",
  storageBucket: "blog-mate.appspot.com",
  messagingSenderId: "531321647592",
  appId: "1:531321647592:web:d42acdc3c4bbeb8d3f345d"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth();

export { app, auth };
