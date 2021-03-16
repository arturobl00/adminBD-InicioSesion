  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyAAlcxX9eitvaJd-HtdYfJKreb4t0OymPs",
    authDomain: "adminbdsesion.firebaseapp.com",
    projectId: "adminbdsesion",
    storageBucket: "adminbdsesion.appspot.com",
    messagingSenderId: "339056676322",
    appId: "1:339056676322:web:e71c14c4240476842ffdbb"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


  function registrar(){
    console.log("Click en Registrar");

    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    firebase.auth().createUserWithEmailAndPassword(email, password)
  .then((user) => {
    // Signed in
    // ...
    verificar();
    console.log("Usuario Registrado...");
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    // ..
    console.log(errorCode);
    console.log(errorMessage);
  });
  }
  
  function verificar(){
    var user = firebase.auth().currentUser;
    user.sendEmailVerification().then(function() {
      // Email sent.
      console.log("Email enviado....");
    }).catch(function(error) {
      // An error happened.
      console.log("Error al mandar Email...");
    });
  }

