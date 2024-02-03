import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";


const firebaseConfig = {
//enter your config file.
};

const app = initializeApp(firebaseConfig);
const database=getDatabase(app);
const auth = getAuth();
export { app,auth,database};
export const db = getDatabase(app);
