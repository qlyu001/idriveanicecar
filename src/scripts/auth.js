/*
  auth.js - authentication page ... this page handles authenticating users
*/

/*** Authentication ***/
var user = firebase.auth().currentUser;

$('.loginForm').on('submit', function(e) {
  e.preventDefault();
  if (user == null)
  {
    firebase.auth().signInWithEmailAndPassword($('#username').val(), $('#password').val())
      .then(function(usr){
        user = usr;
        console.log("logged in!");
        console.log(user.email);
      })
      .catch(function(error) {
        console.log(error);
      });
  }
});

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // maybe redirect page now ?
    //window.location.href = '/path/dash.html';
    console.log(user);
  } else {
    // force user to re-login ?
  }
});
