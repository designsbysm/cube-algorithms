const express = require('express');
const log = require('fancy-log');
const path = require('path');
const app = express();

// load .env variables
const dotenv = require('dotenv');
dotenv.config();
const config = {
    environment: process.env.SERVER_ENV,
    port: process.env.SERVER_PORT,
};

// setup server
app.use(express.static(path.join(__dirname, 'build')));

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// launch server
app.listen(config.port, (cfg) => {
    console.log(cfg);
    log('%s server listening on %d', config.environment, config.port);
});