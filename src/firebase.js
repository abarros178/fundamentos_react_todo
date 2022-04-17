import firebase from "firebase/app";
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyD8lDflXaTLF-FC39j1p7YwfrYIZ7O6AJo",
  authDomain: "fundamentosreact.firebaseapp.com",
  projectId: "fundamentosreact",
  storageBucket: "fundamentosreact.appspot.com",
  messagingSenderId: "21637739178",
  appId: "1:21637739178:web:f870e2e1d6ce1a23f216d3",
  measurementId: "G-92QJLJDNTG"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export {firebase}