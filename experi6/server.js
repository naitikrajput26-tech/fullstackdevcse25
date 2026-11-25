const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();

// Home Route
app.get('/', (req, res) => {
    fs.readFile(path.join(__dirname, 'index.html'), (err, data) => {
        if (err) {
            res.status(500).send('Error loading file');
        } else {
            res.send(data.toString());
        }
    });
});

// About Route
app.get('/about', (req, res) => {
    fs.readFile(path.join(__dirname, 'about.html'), (err, data) => {
        if (err) {
            res.status(500).send('Error loading file');
        } else {
            res.send(data.toString());
        }
    });
});

// Contact Route
app.get('/contact', (req, res) => {
    fs.readFile(path.join(__dirname, 'contact.html'), (err, data) => {
        if (err) {
            res.status(500).send('Error loading file');
        } else {
            res.send(data.toString());
        }
    });
});

// Start Server
app.listen(3000, () => {
    console.log('Server running at http://localhost:3000');
});