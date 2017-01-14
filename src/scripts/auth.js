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

      });
  }
  // console.log($('#username').val());
});
