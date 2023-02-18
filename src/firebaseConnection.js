import { initializeApp} from 'firebase/app'
import { getFirestore} from 'firebase/firestore'
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBvQRdpH3uRQGU6egdn-gbQp9uYov78J2Y",
    authDomain: "curso-93739.firebaseapp.com",
    projectId: "curso-93739",
    storageBucket: "curso-93739.appspot.com",
    messagingSenderId: "300576936592",
    appId: "1:300576936592:web:7f680ef1b88c2fe8193e15",
    measurementId: "G-QB3X3XDH7E"
  };

  const firebaseApp = initializeApp(firebaseConfig);

  const db = getFirestore(firebaseApp);
  const auth = getAuth(firebaseApp);

  export { db, auth }; 

