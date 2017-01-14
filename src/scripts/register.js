
$('.reg-form').on('submit', function(e) {
  firebase.auth().createUserWithEmailAndPassword($('#email').val(), $('#password').val()).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // ...
  })


});


console.log('#email').val());
console.log(password);
