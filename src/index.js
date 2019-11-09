import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./store/reducers/index";
import Firebase, { FirebaseContext } from "./firebase/index";
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "./typography.css";

const FirebaseInstance = new Firebase();

serviceWorker.register();

ReactDOM.render(
  <FirebaseContext.Provider value={FirebaseInstance}>
    <App style={{ height: "100%" }} />
  </FirebaseContext.Provider>,
  document.getElementById("root")
);
