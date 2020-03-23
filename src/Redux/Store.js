import { createStore, applyMiddleware } from "redux";
import reducers from "./reducer";
import thunk from "redux-thunk";
import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import FireBaseAPIInfo from "./firebaseInfo";
firebase.initializeApp(FireBaseAPIInfo);
export const store = createStore(reducers, applyMiddleware(thunk));
