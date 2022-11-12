let express = require('express');
let app = express();

app.set('view engine', 'ejs')
app.use(express.static('public'))


app.get('/', (req, res) => {
  res.render('pages/login');
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
