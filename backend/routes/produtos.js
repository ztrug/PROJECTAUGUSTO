const express = require('express');
const router = express.Router();
const db = require('../config/db');

router.get('/', (req, res) => {
    db.query('SELECT * FROM produtos', (err, result) => {
        if (err) return res.status(500).json({ erro: err });
        res.json(result);
    });
});

module.exports = router;
