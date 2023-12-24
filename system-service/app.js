const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const routes = require ("./routes.js");

const app = express();
const PORT = process.env.PORT || 3000;

const uri = 'mongodb://127.0.0.1:27017/system-test';
// Connect to MongoDB
mongoose.connect(uri, { useNewUrlParser: true })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err);
  });

//app.use(bodyParser.json());
app.use(function (req, res, next) {
    express.json();

    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', '*');
    res.setHeader('Access-Control-Allow-Headers', '*');

    // Pass to next layer of middleware
    next();
});

app.use('/api/v1', routes);

app.all("*",(req , res ) => res.send("That route doesn't exist"))

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});