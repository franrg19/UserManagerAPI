import express from "express";

const app = express();
const PORT = 3000;

app.use(express.json());

// Endpoint para probar la recepción de body en la API
app.post("/api/debug/body", (req, res) => {
  res.status(200).json({
    message: "Body recibido correctamente",
    body: req.body
  });
});

// Endpoint para probar la recepción de params en la API
app.get("/api/debug/params/:id", (req, res) => {
  res.status(200).json({
    message: "Params recibidos correctamente",
    params: req.params
  });
});

// Endpoint para probar la recepción de query params en la API
app.get("/api/debug/query", (req, res) => {
  res.status(200).json({
    message: "Query params recibidos correctamente",
    query: req.query
  });
});

// Endpoint para probar la recepción de headers en la API
app.get("/api/debug/headers", (req, res) => {
  res.status(200).json({
    message: "Headers recibidos correctamente",
    headers: req.headers
  });
});


// Endpoint para probar la recepción de body, params, query y headers en la API
app.patch("/api/debug/users/:id", (req, res) => { 
  const { id } = req.params;
  const { notify } = req.query;
  const authorization = req.headers.authorization;
  const changes = req.body;

  res.status(200).json({
    message: "Datos combinados recibidos",
    id,
    notify,
    authorization,
    changes
  });
});

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