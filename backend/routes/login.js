const express = require('express');
const router = express.Router();
const db = require('../config/db');

router.post('/', (req, res) => {
    const { email, senha } = req.body;
    const sql = 'SELECT * FROM usuarios WHERE email = ? AND senha = ?';
    db.query(sql, [email, senha], (err, result) => {
        if (err) return res.status(500).json({ erro: err });
        if (result.length === 0) {
            return res.status(401).json({ mensagem: 'Credenciais inválidas' });
        }
        res.json(result[0]);
    });
});

module.exports = router;
