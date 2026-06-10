import express from "express";

const app = express();
const PORT = 3000;

app.use(express.json());

// Endpoint raíz para mostrar información básica de la API
app.get("/", (req, res) => {
  res.json({
    "name": "User Manager API",
    "version": "1.0.0",
    "status": "running",
    "description": "API para gestionar usuarios",
    "author": "Fran Rebollo"
  });
});

// Endpoint para comprobar que la API está funcionando
app.get("/api/health", (req, res) => {
  res.status(200).json({
    status: "ok",
    message: "User Manager API funcionandoo",
    timestamp: new Date().toISOString()

  });
});


// Endpoint para ver la información de la API
app.get("/api/info", (req, res) => {
  res.json({
    "name": "Proyecto UserManagerAPI",
    "Día": 2,
    "technologías": ["Node.js", "Express", "TypeScript"],
    "descripción": "API para gestionar usuarios con Node.js, Express y TypeScript"
  });  
});

//Endpoint Ping para comprobar que la API está funcionando
app.get("/api/ping", (req, res) => {
  res.json({
    message: "pong, pong",});
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});