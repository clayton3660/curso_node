const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const connection = require('./database/database');
//Database connection
connection
  .authenticate()
  .then(() => {
    console.log('Conexão feita com o banco de dados!');
  })
  .catch((msgErro) => {
    console.log('Conexão falhou!', msgErro);
  });

// estou dizendo para o express usar o ejs  como view engine
app.set('view engine', 'ejs');
app.use(express.static('public'));
// configuração do bodyParser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
//Rotas
app.get('/', (req, res) => {
  res.render('index');
});
app.get('/perguntar', (req, res) => {
  res.render('perguntar');
});

app.post('/salvarpergunta', (req, res) => {
  var titulo = req.body.titulo;
  var descricao = req.body.descricao;
  res.send(`Formulario recebido! titulo ${titulo} descricao ${descricao}`);
});

app.listen(8080, () => {
  console.log('App rodando!');
});
