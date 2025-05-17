const express = require('express');
const fs = require('fs');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.post('/webhook', (req, res) => {
  const mensaje = req.body;
  console.log('📩 Mensaje recibido:', mensaje);

  fs.appendFile('mensajes.txt', JSON.stringify(mensaje) + '\n', (err) => {
    if (err) console.error('❌ Error al guardar mensaje:', err);
  });

  res.sendStatus(200);
});

app.get('/', (req, res) => {
  res.send('Servidor funcionando ✅');
});

app.listen(port, () => {
  console.log(`Servidor activo en el puerto ${port}`);
});
