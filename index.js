const express = require('express');
const bodyParser = require("body-parser");
const app = express();
const ejs = require('ejs');

const port = 3000;

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/about', (req, res) => {
  res.render("about");
});

app.get('/appointment', (req, res) => {
  res.render("appointment");
});

app.get('/departments', (req, res) => {
  res.render("departments");
});


app.listen(port, (req, res) => {
  console.log(`Server is up and running on port ${port}`);
});
