

import "bootstrap/dist/css/bootstrap.min.css";
import * as firebase from "firebase";
import React from "react";
import ReactDOM from "react-dom";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import "react-notifications/lib/notifications.css";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import SolanaConnect from "./solanaconnec";
// import Routes from "./Routes";
import Routes from "./solanaconnec";
var firebaseConfig = {
  // apiKey: "AIzaSyCT10HZ5mDIrMhQrXQbJnkVR3ZJEEm4pYg",
  // authDomain: "sloothapp.firebaseapp.com",
  // databaseURL: "https://sloothapp.firebaseio.com",
  // projectId: "sloothapp",
  // storageBucket: "sloothapp.appspot.com",
  // messagingSenderId: "267405612148",
  // appId: "1:267405612148:web:cc69e76f0b820248",
  // measurementId: "G-8LV54VRC1L",
  apiKey: "AIzaSyDemJJcW6zklJGA2nDe5zhdy2S1EpCDKTA",
  authDomain: "bedacchi-bdb6f.firebaseapp.com",
  databaseURL: "https://bedacchi-bdb6f-default-rtdb.firebaseio.com",
  projectId: "bedacchi-bdb6f",
  storageBucket: "bedacchi-bdb6f.appspot.com",
  messagingSenderId: "251911886766",
  appId: "1:251911886766:web:3c1aa2683f59f7aa911a3f",
  measurementId: "G-FEKQYHBHWM",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
ReactDOM.render(
  // <SolanaConnect>
  <Routes />,
  // </SolanaConnect>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
