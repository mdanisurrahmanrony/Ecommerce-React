import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDoRIp_mz30HAT6Yp6GC5wOm7lgBp3TPas",
    authDomain: "crown-db-51c62.firebaseapp.com",
    databaseURL: "https://crown-db-51c62.firebaseio.com",
    projectId: "crown-db-51c62",
    storageBucket: "crown-db-51c62.appspot.com",
    messagingSenderId: "788540898139",
    appId: "1:788540898139:web:0a69a6864bcd176976f87e",
};

firebase.initializeApp(firebaseConfig);

export const createUserProfileDocument = async (
    userAuth,
    additionalDocument
) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();

    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalDocument,
            });
        } catch (err) {
            console.log("error creating user", err.message);
        }
    }
    return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
