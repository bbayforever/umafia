import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCH4Rq8ABW5-faPYvkFuz_4B9LxRf-VOnA",
    authDomain: "umafia-db.firebaseapp.com",
    databaseURL: "https://umafia-db.firebaseio.com",
    projectId: "umafia-db",
    storageBucket: "",
    messagingSenderId: "465939180566",
    appId: "1:465939180566:web:0d354cb334c087c3"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;