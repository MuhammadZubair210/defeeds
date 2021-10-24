import "bootstrap/dist/css/bootstrap.min.css";
import * as firebase from "firebase";
import React from "react";
import ReactDOM from "react-dom";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import "react-notifications/lib/notifications.css";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import Routes from "./solanaconnec";
var firebaseConfig = {
  apiKey: "AIzaSyDemJJcW6zklJGA2nDe5zhdy2S1EpCDKTA",
  authDomain: "bedacchi-bdb6f.firebaseapp.com",
  databaseURL: "https://bedacchi-bdb6f-default-rtdb.firebaseio.com",
  projectId: "bedacchi-bdb6f",
  storageBucket: "bedacchi-bdb6f.appspot.com",
  messagingSenderId: "251911886766",
  appId: "1:251911886766:web:3c1aa2683f59f7aa911a3f",
  measurementId: "G-FEKQYHBHWM",
};
firebase.initializeApp(firebaseConfig);
ReactDOM.render(<Routes />, document.getElementById("root"));
serviceWorker.unregister();
