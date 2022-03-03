import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
const firebaseConfig = {
    apiKey: "AIzaSyC4YqTba9eO5aiToiv8LMCqZ9GNnbEuvno",
    authDomain: "e-library-a8afb.firebaseapp.com",
    projectId: "e-library-a8afb",
    storageBucket: "e-library-a8afb.appspot.com",
    messagingSenderId: "653305643364",
    appId: "1:653305643364:web:753a24b49de0e6c2daba71"
  };




firebase.initializeApp(firebaseConfig);

export default firebase.firestore();


