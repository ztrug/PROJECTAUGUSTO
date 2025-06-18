const express = require('express');
const router = express.Router();
const db = require('../config/db');

// Cadastrar usuário
router.post('/', (req, res) => {
    const { nome, email, senha } = req.body;
    if (!nome || !email || !senha) {
        return res.status(400).json({ mensagem: 'Preencha todos os campos' });
    }
    const sql = 'INSERT INTO usuarios (nome, email, senha) VALUES (?, ?, ?)';
    db.query(sql, [nome, email, senha], (err, result) => {
        if (err) return res.status(500).json({ erro: err });
        res.status(201).json({ id: result.insertId, nome, email });
    });
});

// Editar perfil
router.put('/:id', (req, res) => {
    const { nome, email, senha } = req.body;
    const { id } = req.params;
    const sql = 'UPDATE usuarios SET nome = ?, email = ?, senha = ? WHERE id = ?';
    db.query(sql, [nome, email, senha, id], (err) => {
        if (err) return res.status(500).json({ erro: err });
        res.json({ mensagem: 'Perfil atualizado com sucesso' });
    });
});

module.exports = router;
