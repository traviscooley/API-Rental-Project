// Load modules
const express = require('express');
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser');
const router = require('./app/routes/router');

// Database configuration
const database = require('./app/config/dbconfig');

// Init database
database.init();

const port = process.argv[2] || 8000;
app.listen(port, function() {
    console.log('Sever listening on port:' + port);
});

// Express configuration
app.use(cors());
app.use(bodyParser.urlencoded(
    {extended:false}));

// Router configuration
app.use('/api', router);