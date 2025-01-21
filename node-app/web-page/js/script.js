

const serverURL = 'http://localhost:3000';

    // Function to send a message
    async function sendMessage() {

      let sender = document.getElementById('ipadresse').value;
      let message = document.getElementById('message').value;

      if (!sender || !message) {
        alert('Please enter your name and message.');
        return;
      }

      try {
        await fetch(`${serverURL}/send-message`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ sender: sender, message: message }),
        });

        document.getElementById('message').value = '';
        getMessages(); // Refresh messages after sending
      } catch (err) {
        console.error('Failed to send message:', err);
      }
    }

    // Function to get all messages
    async function getMessages() {
      
      try {
        const response = await fetch('/get-messages');

        const messages = await response.json();
        console.log(messages);

        document.getElementById('fra').innerHTML = 'Fra: '+messages[0].sender;
        document.getElementById('melding').innerHTML = 'Melding: '+messages[0].message;

      } catch (err) {
        console.error('Failed to fetch messages:', err);
      }
    }

    // Poll for new messages every 2 seconds
    setInterval(getMessages, 3000);

