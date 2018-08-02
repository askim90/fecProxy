const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const router = require('./router.js');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, '../')));

app.use('/api', router);

app.listen(8008, function() {
  console.log(
    '       A..A      \"Excuse meow,\n',
    '\\    ( ^x^)        proxy server is up and running.\"\n',
    ' \\(      )                              -polite cat\n',
    '   VV  VV');
});