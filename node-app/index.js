const express = require('express')
var cors = require('cors')
const path = require('path');
var bodyParser = require('body-parser')
const app = express()
const port = 3000

// Allow all CORS conflicts
app.use(cors())

// Parse application/json
app.use(bodyParser.json())

// Serve static files (CSS, JS, images)
app.use(express.static(path.join(__dirname, 'web-page')));

app.post('/send-message', (req, res) => {
  const message = req.body;
  console.log(message);

  res.json('Hello World!')
})

app.use('/web-page', express.static('css'));

// Serve the HTML file
app.get('/', async (req, res) => {
  res.sendFile(path.join(__dirname, 'web-page', 'index.html'));
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})