// Import the functions you need from the SDKs you need
import {
    initializeApp
} from "firebase/app";
import {
    getFirestore
} from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDzuXY0k-dDtfz0JyQ3JQPOVAjtdKcYF7o",
    authDomain: "dukousers.firebaseapp.com",
    projectId: "dukousers",
    storageBucket: "dukousers.appspot.com",
    messagingSenderId: "322511573687",
    appId: "1:322511573687:web:e05da30167177726aeb332"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {
    db
}