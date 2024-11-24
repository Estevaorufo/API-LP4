// importar módulo express
const express = require('express');

// função do express para manipular as rotas
const rotas = express.Router();

// GET
rotas.get('/', (req, res) => {
  res.send('Você acessou a rota alunos.');
});

// POST
rotas.post('/cadastro', (req, res) => {
  res.send('Você está na rota para o cadastro de um novo aluno.');
});

// PUT
rotas.put('/atualizacao', (req, res) => {
  res.send('Você está na rota para a atualização dos dados de um aluno.');
});

// DELETE
rotas.delete('/exclusao', (req, res) => {
  res.send('Você está na rota para a exclusão de um aluno.');
});

// exportar toda a configuração das rotas
module.exports = rotas;
