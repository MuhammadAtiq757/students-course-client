// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAdaXatlBSTvDcMUj_To9ao-560ZSCg-hM",
  authDomain: "students-course.firebaseapp.com",
  projectId: "students-course",
  storageBucket: "students-course.appspot.com",
  messagingSenderId: "87846354467",
  appId: "1:87846354467:web:27e157464f7eb0a45efb96",
  measurementId: "G-LL8EEN6LK6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;