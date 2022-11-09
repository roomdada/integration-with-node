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

app.listen(3000);
