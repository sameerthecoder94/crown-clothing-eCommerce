import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyAT7ykwJg_eGYAqXh-9ywn0yMKQMCYLXNk',
  authDomain: 'crown-clothing-ztm.firebaseapp.com',
  projectId: 'crown-clothing-ztm',
  storageBucket: 'crown-clothing-ztm.appspot.com',
  messagingSenderId: '699879770789',
  appId: '1:699879770789:web:5df80103534ac1606d5b4c',
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, 'users', userAuth.uid);
  console.log(userDocRef);

  const userSnapshot = await getDoc(userDocRef);
  console.log(userSnapshot);
  console.log(userSnapshot.exists());
};
