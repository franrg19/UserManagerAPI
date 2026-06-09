import express from "express";

const app = express();
const PORT = 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    "name": "User Manager API",
    "version": "1.0.0",
    "status": "running",
    "description": "API para gestionar usuarios",
    "author": "Fran Rebollo"
  });
});

// Endpoint temporal para ver la información de la API
app.get("/api/info", (req, res) => {
  res.json({
    "name": "Proyecto UserManagerAPI",
    "Día": 2,
    "technologías": ["Node.js", "Express", "TypeScript"],
    "descripción": "API para gestionar usuarios con Node.js, Express y TypeScript"
  });  
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});