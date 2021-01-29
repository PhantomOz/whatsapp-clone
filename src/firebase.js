// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBixvZKWCKtZQdB-XV_h3j1Q5gf7laL2-Q",
    authDomain: "whatsapp-clone-a704e.firebaseapp.com",
    projectId: "whatsapp-clone-a704e",
    storageBucket: "whatsapp-clone-a704e.appspot.com",
    messagingSenderId: "726947220571",
    appId: "1:726947220571:web:59c494fc78828421c8c37e",
    measurementId: "G-TL0XH6PHE7"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { provider, auth };
export default db;