const express = require('express');
const cors = require('cors');
const path = require('path');
const db = require('./db');

// Inicializa o app Express
const app = express();

// Configurações do middleware
app.use(cors());
app.use(express.json());

// Servir arquivos estáticos da pasta frontendHTML
app.use(express.static(path.join(__dirname, '../frontendHTML')));

// Rota principal
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontendHTML', 'index.html'));
});

// Rotas adicionais (exemplo)
// app.use('/api', require('./routes/algumaRota'));

// Inicia o servidor
// No seu server.js, substitua a parte do listen por:
const server = app.listen(0, () => {
    const port = server.address().port;
    console.log(`Servidor rodando em http://localhost:${port}`);
});