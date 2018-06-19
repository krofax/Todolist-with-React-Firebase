import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBd7wVoQetFGXDJhwhKxK7ubvetl7doVNs",
    authDomain: "krofax-todolist.firebaseapp.com",
    databaseURL: "https://krofax-todolist.firebaseio.com",
  });

const base = Rebase.createClass(firebaseApp.database());

export default base;
