import firebase from 'firebase/app';

import 'firebase/firestore';
  
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBAwsHH7kzcXEEYJlBnEpXAaHdKtXdO0Fo",
    authDomain: "tiendacoco-d758d.firebaseapp.com",
    projectId: "tiendacoco-d758d",
    storageBucket: "tiendacoco-d758d.appspot.com",
    messagingSenderId: "924256894553",
    appId: "1:924256894553:web:38e7b9111b7007d0a63b48"
  };
  // Initialize Firebase
  const fb = firebase.initializeApp(firebaseConfig);

  export const db = fb.firestore();
