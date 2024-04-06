const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// Middleware to parse text/plain request bodies
app.use(bodyParser.text());

// Endpoint to handle POST requests at http://localhost:3000/
app.post('/', (req, res) => {
    // Assuming the body of the POST request contains the distress signal message
    const distressSignal = req.body;

    // You can perform additional processing here based on the distress signal received

    // Send back the distress signal message as the response
    res.send(distressSignal);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});