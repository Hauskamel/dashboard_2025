const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
// app.use(bodyParser.json());

// API route
app.get('/api/message', (req, res) => {
    res.json({
        message: 'Hello from Express.'
    })
})

// Serve react app from the build folder
app.use(express.static(path.join(__dirname, '../client/build')));

// Handle react routing (serve index.html for unknown routes)
app.get('', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
})

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
})