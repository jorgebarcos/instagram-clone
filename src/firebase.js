import firebase from 'firebase'

const firebaseApp = firebase.initializeApp( {
    apiKey: "AIzaSyDd0kgdFQ_I7_L5cnl7nrJHkGifZdHBQyM",
    authDomain: "instagram-clone-react-ca7c8.firebaseapp.com",
    databaseURL: "https://instagram-clone-react-ca7c8.firebaseio.com",
    projectId: "instagram-clone-react-ca7c8",
    storageBucket: "instagram-clone-react-ca7c8.appspot.com",
    messagingSenderId: "768098411844",
    appId: "1:768098411844:web:1a6fd7334c2823b62d2311",
    measurementId: "G-XVQPWKHGT8"
  });
  

  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const storage = firebase.storage();

  export {db, auth, storage};
//   export default db;