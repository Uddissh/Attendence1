import  firebase  from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyBujtvEQdvIkuq1DsAS5IUdT7Bm1KcksNY",
    authDomain: "p-60-86ac3.firebaseapp.com",
    databaseURL: "https://p-60-86ac3-default-rtdb.firebaseio.com",
    projectId: "p-60-86ac3",
    storageBucket: "p-60-86ac3.appspot.com",
    messagingSenderId: "101824404195",
    appId: "1:101824404195:web:5aba68409df46f1c5b43d6"
  };
  
  
  firebase.initializeApp(firebaseConfig);

export default firebase.database();
