// Create a script element for SweetAlert library
var sweetAlertScript = document.createElement('script');
sweetAlertScript.src = 'https://cdn.jsdelivr.net/npm/sweetalert2@11.0.19/dist/sweetalert2.min.js';
document.head.appendChild(sweetAlertScript);

// Create a link element for SweetAlert CSS file
var sweetAlertStylesheet = document.createElement('link');
sweetAlertStylesheet.rel = 'stylesheet';
sweetAlertStylesheet.href = 'https://cdn.jsdelivr.net/npm/sweetalert2@11.0.19/dist/sweetalert2.min.css';
document.head.appendChild(sweetAlertStylesheet);
// Set the session expiration time (in minutes)
const sessionExpiration = 25;

// Function to check if the session has expired
function checkSessionExpiration() {
  // Get the session start time from local storage
  const sessionStartTime = localStorage.getItem('sessionStartTime');

  if (sessionStartTime) {
    const currentTime = new Date().getTime();
    const elapsedTime = (currentTime - sessionStartTime) / (1000 * 60); // Elapsed time in minutes

    if (elapsedTime >= sessionExpiration) {
      // Session has expired, perform logout or any other required action
      logoutS();
      showSessionExpiredMessage();
      
    }
  }
}
// Function to handle user logout
function logoutS() {
  firebase.auth().signOut()
    .then(function() {
      // Perform additional logout actions or redirect to another page
      console.log('User logged out');
      // Example: Redirect to the login page
      
    })
    .catch(function(error) {
      // Handle any errors that occur during logout
      console.error('Logout error:', error);
    });
}

// Function to start the session timer
function startSessionTimer() {
  // Set the session start time in local storage
  localStorage.setItem('sessionStartTime', new Date().getTime());
}

// Function to reset the session timer
function resetSessionTimer() {
  // Remove the session start time from local storage
  localStorage.removeItem('sessionStartTime');

  // Start the session timer again
  startSessionTimer();
}

// Start the session timer when the page loads or is refreshed
document.addEventListener('DOMContentLoaded', startSessionTimer);

// Check the session expiration periodically
setInterval(checkSessionExpiration, 1000 * 60); // Check every minute

// Function to show a Swal message for session expiration
function showSessionExpiredMessage() {
  Swal.fire({
    icon: 'info',
    title: 'Session Expired',
    text: 'Your session has expired. Please log in again.',
    confirmButtonColor: '#3085d6',
    confirmButtonText: 'OK'
  });
}
