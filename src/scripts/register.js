
$('.registerForm').on('submit', function(e) {
  e.preventDefault();
  console.log($('#email'));

  firebase.auth().createUserWithEmailAndPassword($('#username').val(), $('#password').val())
  .then(function(){
    console.log("User Created! Login now!");
    window.location.href = '/';
  })
  .catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(errorCode);
    console.log(errorMessage);
    // ...
  })


});
