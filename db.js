// Conveniently import this file anywhere to use db
import firebase from "firebase/app";
import "firebase/database";

const config = {
    apiKey: "AIzaSyDxAeDU5X2inJ_Az_v157TwEX-CeOuMWww",
    authDomain: "project71190465.firebaseapp.com",
    projectId: "project71190465",
    storageBucket: "project71190465.appspot.com",
    messagingSenderId: "492585925338",
    appId: "1:492585925338:web:274bdec42460f98eeb43e3",
    measurementId: "G-V2ZMBGSX74"
}

const db = firebase.initializeApp(config);
export default db;
//const db = firebase.initializeApp(config);
//export default db;
// Export types that exists in Firestore - Uncomment if you need them in your app
// const { Timestamp, GeoPoint } = firebase.firestore
// export { Timestamp, GeoPoint }
