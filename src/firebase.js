import firebase from 'firebase/app';

import '@firebase/firestore';

// Your web app's Firebase configuration
const app = firebase.initializeApp({
    apiKey: "AIzaSyBAwsHH7kzcXEEYJlBnEpXAaHdKtXdO0Fo",
    authDomain: "tiendacoco-d758d.firebaseapp.com",
    projectId: "tiendacoco-d758d",
    storageBucket: "tiendacoco-d758d.appspot.com",
    messagingSenderId: "924256894553",
    appId: "1:924256894553:web:38e7b9111b7007d0a63b48"
});

export const getFirebase = () => app;

export const getFirestore = () => firebase.firestore(app);