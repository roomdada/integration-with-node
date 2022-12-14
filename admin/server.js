let express = require('express');
let app = express();

app.set('view engine', 'ejs')
app.use(express.static('public'))


app.get('/', (req, res) => {
  res.render('pages/login');
});

app.get('/dashboard', (req, res) => {
  res.render('pages/index');
});

app.get('/proprietaires', (req, res) => {
  res.render('pages/list-house-owner');
});

app.get('/utilisateurs', (req, res) => {
  res.render('pages/users');
});

app.get('/parametres', (req, res) => {
  res.render('pages/settings');
});


app.get('/home', (req, res) => {
  res.render('pages/home');
});

app.get('/residences', (req, res) => {
  res.render('pages/houses');
});


app.get('/transactions', (req, res) => {
  res.render('pages/transaction');
});

app.get('/owner-users', (req, res) => {
  res.render('pages/owner-users');
});

app.get('/bookings', (req, res) => {
  res.render('pages/booking');
});

app.listen(3000);
