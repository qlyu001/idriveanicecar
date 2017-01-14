/*
  auth.js - authentication page ... this page handles authenticating users
*/

/*** Authentication ***/
var user = firebase.auth().currentUser;
var x = 1;
Boolean(x);

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

    console.log(user);
    if(x){
      window.location.href = 'dash.html';
      x = 0;
      Boolean(x);
    }

  } else {
    // force user to re-login ?
  }
});
