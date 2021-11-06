import firebase from 'firebase'
require("@firebase/firestore")

const firebaseConfig = {
  apiKey: "AIzaSyCeYO0ridIz1CPvTNKZv3s2PoN5wGLpQNg",
  authDomain: "project71-eae43.firebaseapp.com",
  projectId: "project71-eae43",
  storageBucket: "project71-eae43.appspot.com",
  messagingSenderId: "132080596746",
  appId: "1:132080596746:web:f0d5230252b381558becf3"
};
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()