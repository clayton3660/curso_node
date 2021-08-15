const Sequelize = require('sequelize');
const connection = require('./database');

const Resposta = connection.define('respostas', {
  corpo: {
    type: Sequelize.TEXT,
    allowedNull: false,
  },
  perguntaId: {
    type: Sequelize.INTEGER,
    allowedNull: false,
  },
});

Resposta.sync({ force: false });

module.exports = Resposta;

// criando tabelas
