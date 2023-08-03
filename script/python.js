const settings = {
  async: true,
  crossDomain: true,
  url: 'https://online-code-compiler.p.rapidapi.com/v1/',
  method: 'POST',
  headers: {
    'content-type': 'application/json',
    'X-RapidAPI-Key': '34b8fc6556mshc043bf40395e607p1311abjsn05b3ac8c2948',
    'X-RapidAPI-Host': 'online-code-compiler.p.rapidapi.com'
  },
  processData: false,
  data: JSON.stringify({
    "language": "python3",
    "version": "latest",
    "code": "",
    "input": null
  })
};

function runCode() {
  const code = editor.getValue();
  const input = document.getElementById('myTextarea').value;

  settings.data = JSON.stringify({
    "language": "python3",
    "version": "latest",
    "code": code,
    "input": input
  });

   // Make the AJAX request
   $.ajax(settings).done(function (response) {
    // Assuming you have an output textarea with id "outputTextarea"
    delete response.cpuTime;
    delete response.memory;
    delete response.language;
    let output = JSON.stringify(response);
    
    // Remove specified string from output
    const searchString = '{"output":"';
    const searchStringEnd = '\\n"}';
    
     if (output.includes(searchString) && output.includes(searchStringEnd)) {
     output = output.replace(searchString, '').replace(searchStringEnd, '');
     output = output.replace(/\\n/g, '\n'); // Replace newline command with actual newline
     }

    
    document.getElementById('outputTextarea').value = output;
});

}
