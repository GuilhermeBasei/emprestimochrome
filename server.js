const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Configurar para servir arquivos estáticos da pasta "public"
app.use(express.static(path.join(__dirname, 'public')));

// Para qualquer outra rota, servir o arquivo "index.html"
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
