const express = require('express');
const app = express();

// estou dizendo para o express usar o ejs  como view engine
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index');
});
app.get('/home', (req, res) => {
  res.render('home');
});
app.get('/perfil', (req, res) => {
  res.render('principal/perfil');
});

app.listen(8080, () => {
  console.log('App rodando!');
});
