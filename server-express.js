/**
 * Exemplo de servidor que utiliza a biblioteca Express
 */

// importar a biblioteca
// instalar o pacote usando o comando: npm install express
const express = require('express');

// configuração de acesso ao servidor
const localhost = '127.0.0.1';
const port = 5000;

// criação do aplicativo servidor
const app = express();

// importar as configurações de rotas

const professoresRotas = require('./routes/professores');
const alunosRotas = require('./routes/alunos');

// rota raiz do servidor
app.get('/', (req, res) => {
  res.send('Você acessou a raiz do servidor web.');
});

// configurar as rotas para veículo, professores e alunos

app.use('/professores', professoresRotas);
app.use('/alunos', alunosRotas);

// rodar o servidor
// executar o servidor
app.listen(port, localhost, console.log('O servidor está rodando...'));
