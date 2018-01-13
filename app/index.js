const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');


const app = express()
  .engine('.hbs', exphbs({
    defaultLayout: 'views/layouts/main',
    extname: '.hbs',
    layoutsDir: path.join(__dirname),
    partialsDir: path.join(__dirname)
  }))
  .set('view engine', '.hbs')
  .set('views', path.join(__dirname))
  .get('/', (req, res) => res.render('views/pages/index'))

module.exports = app;