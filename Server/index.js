// Server/index.js
require('dotenv').config();
const express = require('express');
const mysql = require('mysql');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');
const path = require('path');

// Charger ton fichier env-guardian.js
const guardianPath = path.join(__dirname, '../bin/env-guardian.js');
const Guardian = require(guardianPath);

const app = express();
app.use(bodyParser.json());

const PORT = process.env.PORT || 3000;
const JWT_SECRET = process.env.JWT_SECRET;

// --------------------
// Connexion MySQL
// --------------------
const db = mysql.createConnection(process.env.DB_URL);

db.connect(err => {
    if(err) {
        console.error('❌ MySQL connection error:', err);
        process.exit(1);
    }
    console.log('✅ Connected to MySQL');

    // Création automatique de la table users si elle n'existe pas
    const createTable = `
    CREATE TABLE IF NOT EXISTS users (
        id INT AUTO_INCREMENT PRIMARY KEY,
        username VARCHAR(255) NOT NULL UNIQUE,
        password VARCHAR(255) NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );`;
    db.query(createTable, (err) => {
        if(err) {
            console.error('❌ Error creating users table:', err);
            process.exit(1);
        }
        console.log('✅ Users table ready');
    });
});

// --------------------
// Middleware auth JWT
// --------------------
function authenticateToken(req, res, next) {
    const token = req.headers['authorization']?.split(' ')[1];
    if(!token) return res.status(401).json({ error: 'Token manquant' });

    jwt.verify(token, JWT_SECRET, (err, user) => {
        if(err) return res.status(403).json({ error: 'Token invalide' });
        req.user = user;
        next();
    });
}

// --------------------
// Routes
// --------------------

// Ping server
app.get('/', (req, res) => res.json({ status: 'env-guardian-server online 🐉' }));

// Créer utilisateur
app.post('/register', (req, res) => {
    const { username, password } = req.body;
    if(!username || !password) return res.status(400).json({ error: 'Champs manquants' });

    db.query(
        'INSERT INTO users (username, password) VALUES (?, ?)',
        [username, password],
        (err, result) => {
            if(err) return res.status(500).json({ error: err });
            res.json({ message: 'Utilisateur créé', id: result.insertId });
        }
    );
});

// Login utilisateur -> retourne token
app.post('/login', (req, res) => {
    const { username, password } = req.body;
    if(!username || !password) return res.status(400).json({ error: 'Champs manquants' });

    db.query(
        'SELECT * FROM users WHERE username = ? AND password = ?',
        [username, password],
        (err, results) => {
            if(err) return res.status(500).json({ error: err });
            if(results.length === 0) return res.status(401).json({ error: 'Utilisateur ou mot de passe invalide' });

            const token = jwt.sign({ id: results[0].id, username: results[0].username }, JWT_SECRET, { expiresIn: '24h' });
            res.json({ token });
        }
    );
});

// Endpoint pour chiffrer via env-guardian
app.post('/encrypt', authenticateToken, async (req, res) => {
    const { content } = req.body;
    if(!content) return res.status(400).json({ error: 'Aucun contenu fourni' });

    try {
        const encrypted = await Guardian.encrypt(content);
        res.json({ encrypted });
    } catch(err) {
        res.status(500).json({ error: err.message });
    }
});

// Endpoint pour déchiffrer via env-guardian
app.post('/decrypt', authenticateToken, async (req, res) => {
    const { content } = req.body;
    if(!content) return res.status(400).json({ error: 'Aucun contenu fourni' });

    try {
        const decrypted = await Guardian.decrypt(content);
        res.json({ decrypted });
    } catch(err) {
        res.status(500).json({ error: err.message });
    }
});

// --------------------
// Start server
// --------------------
app.listen(PORT, () => {
    console.log(`🚀 env-guardian-server running on port ${PORT}`);
});
