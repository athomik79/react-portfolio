const sslRedirect = require('heroku-ssl-redirect');
const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
// const { google } = require('googleapis');
// const OAuth2 = google.auth.OAuth2;

const PORT = process.env.PORT || 5000;
const app = express();

app.use(sslRedirect());
app.use(bodyParser.json());

app.get('/', function (req, res) {
  res.send({
    message: 'Default route for email',
  });
});

app.listen(PORT, function (req, res) {
  console.log(`Listening on port ${PORT}`);
});
