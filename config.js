//npm install firebase@8.2.3

import firebase from "firebase";
require("@firebase/firestore");
// import firebase from "firebase/app";
// import "firebase/auth";
// import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDD3y_E-5tPHyikksIbFscbGM6BhBKbrvg",
  authDomain: "sonic-newszone.firebaseapp.com",
  projectId: "sonic-newszone",
  storageBucket: "sonic-newszone.appspot.com",
  messagingSenderId: "224643876798",
  appId: "1:224643876798:web:6b30d83d32701819119bef"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
