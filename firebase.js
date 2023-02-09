import firebase from "firebase";
//import {initializeApp} from 'firebase/app' ;


const firebaseConfig = {
    apiKey: "AIzaSyAB1T9nydurMsG42mCXVwRR2CJsm09tPpY",
    authDomain: "fir-398cb.firebaseapp.com",
    projectId: "fir-398cb",
    storageBucket: "fir-398cb.appspot.com",
    messagingSenderId: "864686784479",
    appId: "1:864686784479:web:2b2d24b3bd02433ddb8e6a"
  };


  

  const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

  const db = app.firestore();

  // const app = !firebase.apps.length 
  // ? firebase.initializeApp(firebaseConfig) 
  // : firebase.app(); 

  // const db =app.firestore();

  export default db;