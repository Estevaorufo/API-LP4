// importar módulo express
const express = require('express');

// função do express para manipular as rotas
const rotas = express.Router();

// GET
rotas.get('/', (req, res) => {
  res.send('Você acessou a rota professores.');
});

// POST
rotas.post('/cadastro', (req, res) => {
  res.send('Você está na rota para o cadastro de um novo professor.');
});

// PUT
rotas.put('/atualizacao', (req, res) => {
  res.send('Você está na rota para a atualização dos dados de um professor.');
});

// DELETE
rotas.delete('/exclusao', (req, res) => {
  res.send('Você está na rota para a exclusão de um professor.');
});

// exportar toda a configuração das rotas
module.exports = rotas;
