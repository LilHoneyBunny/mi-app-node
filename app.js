const express = require("express");
const app = express();

// Ruta principal
app.get("/", (req, res) => {
  res.send("Holi desde mi app Node.js corriendo en AWS con Docker!");
});

// Puerto (AWS usará este)
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
