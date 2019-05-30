import { createStore, compose, combineReducers } from "redux";
// import rootReducer from "../reducers";
import firebase from "firebase";
import "firebase/firestore";
import { reactReduxFirebase, firebaseReducer } from "react-redux-firebase";
import { reduxFirestore, firestoreReducer } from "redux-firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBFaS1g5BIB05EJGvg2UOfLnF4YUpdlJCg",
  authDomain: "splittrip-e3003.firebaseapp.com",
  databaseURL: "https://splittrip-e3003.firebaseio.com",
  projectId: "splittrip-e3003",
  storageBucket: "splittrip-e3003.appspot.com",
  messagingSenderId: "677237565386",
  appId: "1:677237565386:web:51775caa6363d71e"
};

// react-redux-firebase config
const rrfConfig = {
  userProfile: "users",
  useFirestoreForProfile: true // Firestore for Profile instead of Realtime DB
};

// Init firebase instance
firebase.initializeApp(firebaseConfig);
//Init firestore
// const firestore = firebase.firestore();      MAKNI OVAJ KOMENTAR ako bude problema

// Add reactReduxFirebase enhancer when making store creator
const createStoreWithFirebase = compose(
  reactReduxFirebase(firebase, rrfConfig), // firebase instance as first argument
  reduxFirestore(firebase) // <- needed if using firestore
)(createStore);

// Add firebase to reducers
const rootReducer = combineReducers({
  firebase: firebaseReducer,
  firestore: firestoreReducer // <- needed if using firestore
});

// Create init state
const initialState = {};

// create store
const store = createStoreWithFirebase(
  rootReducer,
  initialState,
  compose(
    reactReduxFirebase(firebase)
    // the line bellow causes error on mobile beacuse: compose(here must be functions only)
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
