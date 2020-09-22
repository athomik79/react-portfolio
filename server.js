// const sslRedirect = require('heroku-ssl-redirect');
const express = require('express');
const http = require('http');
const enforce = require('express-sslify');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
// const { google } = require('googleapis');
// const OAuth2 = google.auth.OAuth2;

const PORT = process.env.PORT || 5000;
const app = express();

// app.use(sslRedirect());
app.use(enforce.HTTPS());
app.use(bodyParser.json());

app.get('/', function (req, res) {
  res.send({
    message: 'Default route for email',
  });
});

http.createServer(app).listen(PORT, function (req, res) {
  console.log(`Listening on port ${PORT}`);
});
