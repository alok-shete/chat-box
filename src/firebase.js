import * as firebase from "firebase";

const config = {
  apiKey: "AIzaSyArXpOHoxD74IrHGIWRt1gMuynYoXo7Xng",
  authDomain: "chat-box-68581.firebaseapp.com",
  databaseURL: "https://chat-box-68581.firebaseio.com",
  projectId: "chat-box-68581",
  storageBucket: "chat-box-68581.appspot.com",
  messagingSenderId: "147318437927",
  appId: "1:147318437927:web:4b2988ab687f4f4556f602",
};

firebase.initializeApp(config);

const database = firebase.database();

export { database };
