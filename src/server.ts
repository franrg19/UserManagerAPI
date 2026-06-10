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

//Endpoint para obtener la lista de usuarios (simulado con datos vacíos por ahora)
app.get("/api/users", (req, res) => {
  res.status(200).json({
    message: "Lista de usuarios",
    data: []
  });
});

// Endpoint para obtener la información del usuario actual (simulado con datos de ejemplo por ahora)
app.get("/api/users/me", (req, res) => {
  res.status(200).json({
    message: "Información del usuario actual",
    data: {
      name: "Usuario de ejemplo",
      email: "demo@email.com",
      role: "admin",
      isActive: true
    }
  });
});


// Endpoint para obtener el detalle de un usuario por su ID (simulado con datos vacíos por ahora)
app.get("/api/users/:id", (req, res) => {
  const {id} = req.params;

  res.status(200).json({
    message: "Detalle del usuario",
    id: id
  });
});


// Endpoint para crear un nuevo usuario (simulado, no se guarda realmente)
app.post("/api/users", (req, res) => {
  const userData = req.body;

  res.status(201).json({
    message:"Usuario recibido para crear",
    data: userData
  });
});


// Endpoint para actualizar un usuario existente por su ID (simulado, no se actualiza realmente)
app.patch("/api/users/:id", (req, res) => {
  const {id} = req.params;
  const changes = req.body;

  res.status(200).json({
    message:"usuario recibido para actualizar",
    id:id,
    changes: changes
  });
});


app.patch("/api/users/:id/status", (req, res) => {
  const {id} = req.params;
  const {isActive} = req.body;

  res.status(200).json({
    message:"Estado del usuario actualizado",
    id:id,
    isActive: isActive
  });
});

// Endpoint para eliminar un usuario por su ID (simulado, no se elimina realmente)
app.delete("/api/users/:id", (req, res) => {
  const {id} = req.params;

  res.status(200).json({
    message:"usuario recibido para eliminar",
    id:id
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