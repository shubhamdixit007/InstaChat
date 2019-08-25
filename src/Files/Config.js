import * as firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyAmhDbgpGQBuSoiaN7uux2NSMWXMfidXQY",
    authDomain: "awesomeproject-af49a.firebaseapp.com",
    databaseURL: "https://awesomeproject-af49a.firebaseio.com",
    projectId: "awesomeproject-af49a",
    storageBucket: "",
    messagingSenderId: "221661532108",
    appId: "1:221661532108:web:efd1ff5ae27d9ec4"
  };
  // Initialize Firebase
  const fire = firebase.initializeApp(firebaseConfig);

  export default fire 