// Create a script element for SweetAlert library
var sweetAlertScript = document.createElement('script');
sweetAlertScript.src = 'https://cdn.jsdelivr.net/npm/sweetalert2@11.0.19/dist/sweetalert2.min.js';
document.head.appendChild(sweetAlertScript);

// Create a link element for SweetAlert CSS file
var sweetAlertStylesheet = document.createElement('link');
sweetAlertStylesheet.rel = 'stylesheet';
sweetAlertStylesheet.href = 'https://cdn.jsdelivr.net/npm/sweetalert2@11.0.19/dist/sweetalert2.min.css';
document.head.appendChild(sweetAlertStylesheet);

// Rest of your code in fire.js
// ...

// Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyD29HcmBr1uCZCswiIUoJuo9XVJ3lVRxFs",
    authDomain: "login-dedaa.firebaseapp.com",
    databaseURL: "YOUR_DATABASE_URL",
    projectId: "login-dedaa",
    storageBucket: "login-dedaa.appspot.com",
    messagingSenderId: "804295345267",
    appId: "1:804295345267:web:d6b9a884763ddaa54dd606",
    measurementId: "G-7J4798GMRC"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Get elements
var loginForm = document.getElementById("loginForm");
var errorMsg = document.getElementById("errorMsg");

// Add login event
loginForm.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form from submitting

    var email = loginForm.email.value;
    var password = loginForm.password.value;

    // Sign in with email and password
    firebase.auth().signInWithEmailAndPassword(email, password)
        .then(function(user) {
            // Login successful, redirect to index.html
            Swal.fire({
                icon: 'success',
                title: 'Logged in Successfully',
                text: 'Press "OK" to continue.',
                confirmButtonColor: '#3085d6',
                confirmButtonText: 'OK'
            }).then((result) => {
                if (result.isConfirmed) {
                    window.open('', '_self', '');
                    window.close(); 
                }
            });
        })
        .catch(function(error) {
            // Handle errors here
            var errorCode = error.code;
            var errorMessage = error.message;
            errorMsg.textContent = "Error: " + errorCode + " - " + errorMessage;
        });
});
firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      var user_email = user.email;
      var isNewUser = user.metadata.creationTime === user.metadata.lastSignInTime;

      if (!isNewUser) {
        var messageContainer = document.getElementById('messageContainer');
        messageContainer.innerHTML = `
          <div>
            <h1>Logged in as ${user_email}</h1>
           
          </div>
        `;

        var logoutButton = document.getElementById('logoutButton');
          logoutButton.style.display = 'inline-block'; // Show the logout button

          logoutButton.addEventListener('click', function() {
            logout(); // Call the logout function when the logout button is clicked
          });

          var loginForm = document.getElementById('loginForm');
          loginForm.style.display = 'none';

          
        }
      }
    });
  

 function logout() {
      firebase.auth().signOut().then(function() {
        Swal.fire({
          icon: 'info',
          title: 'Logged Out',
          text: 'You have been successfully logged out.',
          confirmButtonColor: '#3085d6',
          confirmButtonText: 'OK'
        }).then(function(result) {
          if (result.isConfirmed) {
            window.location.reload(); 
            window.open('', '_self', '');
            window.close(); 
          }
        });
      }).catch(function(error) {
        console.log("Error occurred during sign out:", error);
      });
    }
    
  
