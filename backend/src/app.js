const express = require('express');
const router = require('./router');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(router);

app.use(express.json());

app.use(bodyParser.urlencoded({extended: false}));

app.use(bodyParser.json());

app.use(cors());

module.exports = app;