require('rootpath')();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const htmlDocx = require('html-docx-js');
const fs = require('fs');
const puppeteer = require('puppeteer');

const jwt = require('_helpers/jwt');
const errorHandler = require('_helpers/error-handler');

const moment = require('moment');
const ortakFuncs = require('./_helpers/ortakFuncs');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(jwt());
app.use(errorHandler);
app.use(cors());

app.use('/users', require('./users.controller'));
app.use('/tanim', require('./tanim.controller').router);

const port = 2222;
const server = app.listen(port, function () {
    console.log('Server listening on port ' + port);
});
