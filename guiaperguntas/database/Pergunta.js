const Sequelize = require('sequelize');
const connection = require('./database');

const Pergunta = connection.define('perguntas', {
  titulo: {
    type: Sequelize.STRING,
    allowedNull: false,
  },
  descricao: {
    type: Sequelize.TEXT,
    allowedNull: false,
  },
});

Pergunta.sync({ force: false }).then(() => {});
