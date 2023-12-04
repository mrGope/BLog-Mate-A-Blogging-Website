import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";


const firebaseConfig = {
  apiKey: "AIzaSyAfUDfgUSOY8il9C2AsAjzUKgW5UKOyNCI",
  authDomain: "blog-mate.firebaseapp.com",
  databaseURL: "https://blog-mate-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "blog-mate",
  storageBucket: "blog-mate.appspot.com",
  messagingSenderId: "531321647592",
  appId: "1:531321647592:web:d42acdc3c4bbeb8d3f345d"
};

const app = initializeApp(firebaseConfig);
const database=getDatabase(app);
const auth = getAuth();
export { app,auth,database};
export const db = getDatabase(app);
