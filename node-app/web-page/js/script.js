function handleButtonClick() {
  // URLen du vil sende data til
  const url = 'http://localhost:3000/send-message';

  let param1 = document.getElementById('ipadresse').value;
  let param2 = document.getElementById('message').value;

  // Data som skal sendes i forespørselen
  const requestBody = {
    param1: param1, // Bytt ut med ønsket verdi
    param2: param2  // Bytt ut med ønsket verdi
  };

  // Gjøre en POST-forespørsel
  fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(requestBody)
  })
    .then(response => {
      // Sjekk om responsen er vellykket
      if (!response.ok) {
        throw new Error(`HTTP-feil! Status: ${response.status}`);
      }
      return response.json(); // Konverterer responsen til JSON
    })
    .then(data => {
      // Behandler dataen her
      console.log('Data mottatt:', data);
    })
    .catch(error => {
      // Håndterer eventuelle feil
      console.error('Noe gikk galt:', error);
    });
}