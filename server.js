const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.text()); // Parse text/plain request bodies

// Endpoint to handle POST requests
app.post('/', (req, res) => {
    console.log('Received POST request:', req.body);
    res.send('Distress Signal received');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
