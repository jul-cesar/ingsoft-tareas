// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCd97t8xeC6415qLcls9Rek8h2TL27ZSp4",
  authDomain: "task-management-d8499.firebaseapp.com",
  projectId: "task-management-d8499",
  storageBucket: "task-management-d8499.appspot.com",
  messagingSenderId: "426377943196",
  appId: "1:426377943196:web:ce16f7e8ae4778689cb559",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
