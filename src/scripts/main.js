
/*** Initialize Firebase ***/

var firebase = require("firebase");

// console.log("firebase imported ... \n");

var config = {
  apiKey: "AIzaSyDwstWxZUTUqyhEyvDSSgvgyCmc91mv4us",
  authDomain: "parking-8581d.firebaseapp.com",
  databaseURL: "https://parking-8581d.firebaseio.com",
  storageBucket: "parking-8581d.appspot.com",
};

firebase.initializeApp(config);

console.log("firebase configuration complete.\n");
console.log(firebase);


/*** Authentication ***/
