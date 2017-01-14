/*
  auth.js - authentication page ... this page handles authenticating users
*/

/*** Authentication ***/
var user = firebase.auth().currentUser;


$('.loginForm').on('submit', function(e) {
  e.preventDefault();
  console.log($('#username').val());
});

if (user == null)
{
  console.log("sigin..\n");
  var email = "hatefkasraei@gmail.com";
  var password = "123456";

  firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // ...
  });
}

var name, email, photoUrl, uid, emailVerified;

if (user != null) {
  name = user.displayName;
  email = user.email;
  photoUrl = user.photoURL;
  emailVerified = user.emailVerified;
  uid = user.uid;  // The user's ID, unique to the Firebase project. Do NOT use
                   // this value to authenticate with your backend server, if
                   // you have one. Use User.getToken() instead.
}

console.log(email);
