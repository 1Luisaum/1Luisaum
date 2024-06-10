// Importa o módulo express
const express = require('express');

// Cria uma aplicação express
const app = express();

// Lista de alunos
const alunos = [
    { RA: '12345', nome: 'João', email: 'joao@example.com' },
    { RA: '54321', nome: 'Maria', email: 'maria@example.com' },
    { RA: '98765', nome: 'Pedro', email: 'pedro@example.com' }
];

// Rota para obter a lista de alunos
app.get('/alunos', (req, res) => {
    // Retorna a lista de alunos como resposta em formato JSON
    res.json(alunos);
});

// Inicia o servidor na porta 3000 (ou em uma porta definida pelo ambiente)
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    // Exibe uma mensagem no console quando o servidor é iniciado
    console.log(`Servidor rodando na porta ${PORT}`);
});
