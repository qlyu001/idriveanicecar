/*
  firebase-config.js - configuration for connecting to the firebase
*/

/*** Initialize Firebase ***/

global.firebase = require("firebase"); // need to use thoughout the app

var config = {
  apiKey: "AIzaSyDwstWxZUTUqyhEyvDSSgvgyCmc91mv4us",
  authDomain: "parking-8581d.firebaseapp.com",
  databaseURL: "https://parking-8581d.firebaseio.com",
  storageBucket: "parking-8581d.appspot.com",
};

firebase.initializeApp(config);

console.log("firebase configuration complete.\n");
