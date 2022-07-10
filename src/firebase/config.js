import firebase from 'firebase';
import 'firebase/auth'
import 'firebase/firebase'
import 'firebase/storage'
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD3QOgYB2UR883S_Fv0CNjLQqja2ju4fU0",
    authDomain: "olx-cloneapp-7395a.firebaseapp.com",
    projectId: "olx-cloneapp-7395a",
    storageBucket: "olx-cloneapp-7395a.appspot.com",
    messagingSenderId: "186456769705",
    appId: "1:186456769705:web:0d1121f892bb8d880795b8",
    measurementId: "G-ZC26T55DNF"
};
export default firebase.initializeApp(firebaseConfig);