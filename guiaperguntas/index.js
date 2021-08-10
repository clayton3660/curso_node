const express = require('express');
const app = express();

// estou dizendo para o express usar o ejs  como view engine
app.set('view engine', 'ejs');

app.get('/:nome/:lang', (req, res) => {
  var nome = req.params.nome;
  var lang = req.params.lang;
  var exibirMsg = true;
  res.render('index', {
    nome: nome,
    lang: lang,
    empresa: 'GateSix',
    inscritos: 8000,
    msg: exibirMsg,
  });
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
