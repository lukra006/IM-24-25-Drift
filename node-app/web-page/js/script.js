



    // Function to send a message
    async function sendMessage() {

      let til = document.getElementById('til-ipadresse').value;
      let fra = document.getElementById('fra-ipadresse').value;
      let message = document.getElementById('message').value;

      let serverURL = 'http://'+til+':3000';

      if (!til || !message) {
        alert('Please enter your name and message.');
        return;
      }

      try {
        await fetch(`${serverURL}/send-message`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ til: til, fra: fra, message: message }),
        });

        document.getElementById('message').value = '';
        document.getElementById('fra-ipadresse').value = '';
        document.getElementById('til-ipadresse').value = '';
        getMessages(); // Refresh messages after sending
      } catch (err) {
        console.log('Failed to send message:');
      }
    }

    // Function to get all messages
    async function getMessages() {
      
      try {
        const response = await fetch('/get-messages');

        const messages = await response.json();
        console.log(messages);

        document.getElementById('fra').innerHTML = 'Fra: '+messages['fra'];
        document.getElementById('melding').innerHTML = 'Melding: '+messages['message'];

      } catch (err) {
        console.log('Failed to fetch any message');
      }
    }

    // Poll for new messages every 2 seconds
    setInterval(getMessages, 2000);

