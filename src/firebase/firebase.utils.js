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

/**
 * If the userAuth object exists, then create a userRef object that references the user's document in
 * the database. If the user's document doesn't exist, then create it.
 * @param userAuth - The user object that we get from the authentication library.
 * @param additionalData - This is an object that contains any additional data that you want to store
 * in your database.
 * @returns The userRef is being returned.
 */
export const creatUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({ displayName, email, createdAt, ...additionalData });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};
 
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
