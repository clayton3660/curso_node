const express = require('express'); //Importando o express
const app = express(); //Iniciando o expressjs

app.get('/', function (req, res) {
  res.send('<h1>Bem vindo!</h1>');
});

app.get('/blog/:artigo?', function (req, res) {
  //PARAMENTRO NÃO OBRIGATORIO
  var artigo = req.params.artigo;
  if (artigo) {
    res.send('Bem vindo ao meu blog ' + artigo + ' !');
  } else {
    res.send('Bem vindo ao meu blog! ');
  }
});
app.get('/canal/youtube', function (req, res) {
  // QUERY PARAMS
  var canal = req.query['canal'];
  if (canal) {
    res.send(canal);
  } else [res.send('Nenhum canal fornecido!')];
});

app.get('/ola/:nome/:empresa', function (req, res) {
  //REQ SÃO OS DADOS ENVIADOS PELO USUARIO
  //RES É A RESPOSTA QUE SERÁ ENVIADA PARA O USUÁRIO
  var nome = req.params.nome;
  var empresa = req.params.empresa;
  res.send('<h1>olá ' + nome + ' da ' + empresa + ' </h1>');
});

app.listen(4000, function (erro) {
  if (erro) {
    console.log('Ocorreu um erro!');
  } else {
    console.log('Servidor iniciado com sucesso!');
  }
});
