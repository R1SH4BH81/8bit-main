document.addEventListener('keydown', function(event) {
    if (event.key === 'F8') {
      event.preventDefault(); // Prevent the default browser behavior for F8 key
      copyCode();
     
    }
  });

document.addEventListener('keydown', function(event) {
    if (event.key === 'F9') {
      event.preventDefault();
      saveCode();
      
    }
  });

document.addEventListener('keydown', function(event) {
    if (event.key === 'F12') {
      event.preventDefault();
      clearCode();
    }
  });
  
  
document.addEventListener('keydown', function(event) {
    if (event.key === 'F5') {
      event.preventDefault();
      runCode();
      console.log("executing")
      
    }
  });
  
function isNightTime() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const currentTime = hours * 60 + minutes; // Convert current time to minutes

    // Convert 6 PM IST to minutes (18 hours * 60 minutes)
    const nightTime = 18 * 60;

    return currentTime >= nightTime;
}

// Function to toggle dark mode
function toggleDarkMode() {
    const body = document.body;
    body.classList.toggle("dark-mode");
}

// Check time on page load
if (isNightTime()) {
    toggleDarkMode();
}

  
