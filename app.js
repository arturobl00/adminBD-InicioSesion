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

  observador();


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

function observador(){
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      var uid = user.uid;
      var email = user.email;
      console.log("Login de idUsuario: ",uid, ", email: ",email);
      // ...
    } else {
      // User is signed out
      // ...
      console.log("Usuario sin iniciar sesion");
    }
  });
}

function ingresar(){
  console.log("Click en Ingresar");

  var email = document.getElementById('emailI').value;
  var password = document.getElementById('passwordI').value;

  firebase.auth().signInWithEmailAndPassword(email, password)
  .then((user) => {
    // Signed in
    // ...
    console.log("El usuario inicio sesion");
    mostrar();
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(errorCode);
    console.log(errorMessage);
  });
}

function cerrar(){
  firebase.auth().signOut().then(() => {
    // Sign-out successful.
    window.location.reload();
    console.log("Sesion Cerrada");
  }).catch((error) => {
    // An error happened.
    console.log(error);
  });
}

function mostrar(){
  var mostrar = document.getElementById('mostrar');
  mostrar.innerHTML = `
  <br/>
  <button class="btn btn-danger" onclick="cerrar()">Cerrar Sesion</button>`
}
