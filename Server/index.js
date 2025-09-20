// index.js
const express = require("express");
const session = require("express-session");
const axios = require("axios");
const open = require("open");

const app = express();
app.use(express.json());
app.use(session({ secret: "dragon-secret", resave: false, saveUninitialized: true }));

// --- Config OAuth GitHub ---
const CLIENT_ID = process.env.GITHUB_CLIENT_ID;
const CLIENT_SECRET = process.env.GITHUB_CLIENT_SECRET;
const REDIRECT_URI = "http://localhost:9999/callback";

// Démarrer login OAuth
app.get("/login", (req, res) => {
  const githubAuthURL = `https://github.com/login/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&scope=repo,user`;
  open(githubAuthURL); // ouvre dans le navigateur
  res.send("🐉 Redirection vers GitHub OAuth...");
});

// Callback après GitHub
app.get("/callback", async (req, res) => {
  const code = req.query.code;
  try {
    const response = await axios.post(
      "https://github.com/login/oauth/access_token",
      {
        client_id: CLIENT_ID,
        client_secret: CLIENT_SECRET,
        code,
        redirect_uri: REDIRECT_URI,
      },
      { headers: { Accept: "application/json" } }
    );

    const accessToken = response.data.access_token;
    req.session.token = accessToken;

    res.send(`✅ Auth réussi. Token: ${accessToken}`);
  } catch (err) {
    res.status(500).send("Erreur OAuth: " + err.message);
  }
});

// Exemple API sécurisée
app.get("/me", async (req, res) => {
  if (!req.session.token) return res.status(401).send("Non authentifié");

  const user = await axios.get("https://api.github.com/user", {
    headers: { Authorization: `token ${req.session.token}` },
  });

  res.json(user.data);
});

// --- Lancer serveur ---
const PORT = process.env.PORT || 9999;
app.listen(PORT, () => console.log(`🚀 Env-Guardian Server running on http://localhost:${PORT}`));
