function showConsoleMessagesAndFloat() {
    // Get the console viewer toggle and console viewer elements
    var consoleViewerToggle = document.getElementById('console-viewer-toggle');
    var consoleViewer = document.getElementById('console-viewer');
  
    // Set the initial position
    var posX = 0;
    var posY = 0;
  
    // Function to handle the start of dragging
    function dragStart(event) {
      posX = event.clientX - consoleViewer.offsetLeft;
      posY = event.clientY - consoleViewer.offsetTop;
      document.addEventListener('mousemove', dragMove);
      document.addEventListener('mouseup', dragEnd);
    }
  
    // Function to handle the dragging
    function dragMove(event) {
      consoleViewer.style.left = (event.clientX - posX) + 'px';
      consoleViewer.style.top = (event.clientY - posY) + 'px';
    }
  
    // Function to handle the end of dragging
    function dragEnd() {
      document.removeEventListener('mousemove', dragMove);
      document.removeEventListener('mouseup', dragEnd);
    }
  
    // Add event listener to the console viewer for dragging
    consoleViewer.addEventListener('mousedown', dragStart);
  
    // Function to toggle the console viewer visibility
    function toggleConsoleViewer() {
      if (consoleViewer.style.display === 'none') {
        consoleViewer.style.display = 'block';
      } else {
        consoleViewer.style.display = 'none';
      }
    }
  
    // Override the console.log function to capture messages
    console.log = function(message) {
      // Create a new paragraph element for each console message
      var messageElement = document.createElement('p');
      messageElement.textContent = message;
  
      // Append the message to the console output div
      consoleViewer.querySelector('#console-output').appendChild(messageElement);
    };
  
    // Attach the toggleConsoleViewer function to the toggle button's click event
    consoleViewerToggle.addEventListener('click', toggleConsoleViewer);
  }
  var consoleViewerToggle = document.getElementById('console-viewer-toggle');
  var consoleViewer = document.getElementById('console-viewer');

  // Set the initial visibility of the console viewer
  consoleViewer.style.display = 'none';

  // Function to toggle the console viewer visibility
  function toggleConsoleViewer() {
    if (consoleViewer.style.display === 'none') {
      consoleViewer.style.display = 'block';
    } else {
      consoleViewer.style.display = 'none';
    }
  }

  // Attach the toggleConsoleViewer function to the toggle button's click event
  consoleViewerToggle.addEventListener('click', toggleConsoleViewer);

  // Override the console.log function to capture messages
  console.log = function(message) {
    var consoleOutput = document.getElementById('console-output');
    var messageElement = document.createElement('p');
    messageElement.textContent = message;
    consoleOutput.appendChild(messageElement);
  };  
console.log("hi from 8bit")
 const states = {
    idle: '<i class="fas fa-play"></i>',
    sending: '<img aria-hidden="true" width="24" height="24" src="https://assets.codepen.io/2585/ring-resize.svg" alt="Executing" />',
    done: 'Done !',
  }
  
  demo.onclick = () => {
    setState('sending')
    setTimeout(() => setState('done'), 3000)
    setTimeout(() => setState('idle'), 5000)
  }
  
  function setState(state) {
    if (!document.startViewTransition)
      demo.innerHTML = states[state]
    else
      document.startViewTransition(() => 
        demo.innerHTML = states[state])
  }  

