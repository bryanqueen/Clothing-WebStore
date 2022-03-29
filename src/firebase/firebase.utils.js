import firebase from 'firebase/compat/app';

import 'firebase/compat/firestore';

import 'firebase/compat/auth';

const config = {
  apiKey: 'AIzaSyAvY3915XPBygwgK3u1RMlJ8pT8_06NfrY',
  authDomain: 'otk-db.firebaseapp.com',
  projectId: 'otk-db',
  storageBucket: 'otk-db.appspot.com',
  messagingSenderId: '133016358732',
  appId: '1:133016358732:web:8a71b4a33dc6214b0909e9',
  measurementId: 'G-V0JFRFY4LY',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
 