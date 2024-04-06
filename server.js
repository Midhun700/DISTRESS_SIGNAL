const express = require('express');
const WebSocket = require('ws');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const server = require('http').createServer(app);
const wss = new WebSocket.Server({ server });
const PORT = process.env.PORT || 3000;

// Serve your HTML file and static assets
app.use(express.static(path.join(__dirname, 'public')));

// WebSocket connection handling
wss.on('connection', (ws) => {
    console.log('Client connected');

    // Listen for messages from the client
    ws.on('message', (message) => {
        console.log(`Message sent to Client: ${message}`);

        // Get the current date and time (timestamp)
        const timestamp = new Date().toLocaleString();

        // Send push notification to the client via WebSocket
        ws.send(`Received from server: "Distress Signal sent to Client successfully" with timestamp ${timestamp}`);
    });
});

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
