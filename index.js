const express = require('express');
const path = require('path');

const PORT = process.env.PORT || 5000;

const app = express();

// Priority serve any static files.
app.use(express.static(path.resolve(__dirname, './client/build')));

app.post('/contact/sendMessage', (req, res) => {
    res.status(200).send('Tadaa!!! Your Message!!!!!!!!');
});

// All remaining requests return the React app, so it can handle routing.
app.get('*', function(request, response) {
    response.sendFile(path.resolve(__dirname, './client/build', 'index.html'));
  });

app.listen(PORT);