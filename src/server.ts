import express from "express";

const app = express();
const PORT = 3000;

type User = {
  id: number;
  name: string;
  email: string;
  role: "USER" | "ADMIN";
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
};

// Datos temporales en memoria. Más adelante se sustituirán por una base de datos.
const users: User[] = [
  {
    id: 1,
    name: "Ana García",
    email: "ana@email.com",
    role: "USER",
    isActive: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
  {
    id: 2,
    name: "Carlos Pérez",
    email: "carlos@email.com",
    role: "ADMIN",
    isActive: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
  {
    id: 3,
    name: "Laura Martínez",
    email: "laura@email.com",
    role: "USER",
    isActive: false,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
  {
    id: 4,
    name: "fran rebollo",
    email: "fran@email.com",
    role: "USER",
    isActive: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
  {
    id: 5,
    name: "Laura Granados",
    email: "laura@email.com",
    role: "USER",
    isActive: false,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  }
];

app.use(express.json());


// funciones auxiliares para validar datos de usuario
function isNonEmptyString(value: unknown): value is string {
  return typeof value === "string" && value.trim().length > 0;
}

function isBoolean(value: unknown): value is boolean {
  return typeof value === "boolean";
}

function normalizeEmail(email: string): string {
  return email.trim().toLowerCase();
}

function isValidBasicEmail(value: string): boolean {
  return value.includes("@") && value.includes(".");
}

function isEmailTaken(email: string, userIdToIgnore?: number): boolean {
  const normalizedEmail = normalizeEmail(email);

  return users.some(
    (user) => user.email === normalizedEmail && user.id !== userIdToIgnore
  );
}


//**RUTAS DEBUG */

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
    total: users.length,
    data: users
  });
});

app.get("/api/users/count", (req, res) => {
  res.status(200).json({
    message: "Recuento de usuarios",
    total: users.length
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

app.get("/api/users/active", (req, res) => {
  const activeUsers = users.filter((user) => user.isActive);
  res.status(200).json({
    message: "Lista de usuarios activos",
    total: activeUsers.length,
    data: activeUsers
  });
});





// Endpoint para obtener la información de un usuario por su ID (simulado con datos de ejemplo por ahora)
app.get("/api/users/:id", (req, res) => {
  const id = Number(req.params.id);

  if(Number.isNaN(id)) {
    return res.status(400).json({
      error: "El Id debe ser un numero",
      receivedId: req.params.id
    });
  }
  const user= users.find((user) => user.id === id);
  if(!user) {
    return res.status(404).json({
      error: "Usuario no encontrado",
      id:id
    });
  }
  res.status(200).json({
    message:"Usuario encontrado",
    data: user
  });
  
});


// Endpoint para crear un nuevo usuario (simulado, no se guarda realmente)
app.post("/api/users", (req, res) => {
  const { name, email, password } = req.body;

  if (!isNonEmptyString(name)) {
  return res.status(400).json({
    error: "El nombre debe ser un texto no vacío"
  });
}

if (!isNonEmptyString(email)) {
  return res.status(400).json({
    error: "El email debe ser un texto no vacío"
  });
}

if (!isNonEmptyString(password)) {
  return res.status(400).json({
    error: "La contraseña debe ser un texto no vacío"
  });
}

const cleanName = name.trim();
const cleanEmail = normalizeEmail(email);
const cleanPassword = password.trim();

  if (cleanPassword.length < 6) {
  return res.status(400).json({
    error: "La contraseña debe tener al menos 6 caracteres"
  });
}
if (!isValidBasicEmail(cleanEmail)) {
  return res.status(400).json({
    error: "El email no tiene un formato válido"
  });
}

  if (isEmailTaken(cleanEmail)) {
  return res.status(409).json({
    error: "El email ya está registrado"
  });
}

  const newId = users.length > 0
    ? Math.max(...users.map((user) => user.id)) + 1
    : 1;

  const newUser: User = {
  id: newId,
  name: cleanName,
  email: cleanEmail,
  role: "USER",
  isActive: true,
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString()
};

  users.push(newUser);

  return res.status(201).json({
    message: "Usuario creado correctamente",
    data: newUser
  });
});


// Endpoint para actualizar un usuario existente por su ID (simulado, no se actualiza realmente)
app.patch("/api/users/:id", (req, res) => {
  const idParam = req.params.id;
  const id = Number(idParam);

  if (Number.isNaN(id)) {
    return res.status(400).json({
      error: "El ID debe ser un número",
      received: idParam
    });
  }

  const userIndex = users.findIndex((user) => user.id === id);

  if (userIndex === -1) {
    return res.status(404).json({
      error: "Usuario no encontrado",
      id
    });
  }

  const { name, email, isActive } = req.body;

  const hasChanges =
    name !== undefined ||
    email !== undefined ||
    isActive !== undefined;

  if (!hasChanges) {
    return res.status(400).json({
      error: "Debes enviar al menos un campo para actualizar"
    });
  }

  let cleanName: string | undefined;

if (name !== undefined) {
  if (!isNonEmptyString(name)) {
    return res.status(400).json({
      error: "El nombre debe ser un texto no vacío"
    });
  }

  cleanName = name.trim();
}

  let cleanEmail: string | undefined;

if (email !== undefined) {
  if (!isNonEmptyString(email)) {
    return res.status(400).json({
      error: "El email debe ser un texto no vacío"
    });
  }

  cleanEmail = normalizeEmail(email);

  if (!isValidBasicEmail(cleanEmail)) {
  return res.status(400).json({
    error: "El email no tiene un formato válido"
  });
}

  const emailAlreadyExists = users.some(
  (user) => user.email === cleanEmail && user.id !== id
);

if (emailAlreadyExists) {
  return res.status(409).json({
    error: "El email ya está registrado"
  });
}
}

  if (isActive !== undefined && !isBoolean(isActive)) {
  return res.status(400).json({
    error: "isActive debe ser true o false"
  });
}

  const currentUser = users[userIndex];

  const updatedUser: User = {
    ...currentUser,
    name: cleanName ?? currentUser.name,
    email: cleanEmail ?? currentUser.email,
    isActive: isActive ?? currentUser.isActive,
    updatedAt: new Date().toISOString()
  };

  users[userIndex] = updatedUser;

  return res.status(200).json({
    message: "Usuario actualizado correctamente",
    data: updatedUser
  });
});



// Endpoint para actualizar el estado de un usuario por su ID (simulado, no se actualiza realmente)
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
  const idParam = req.params.id;
  const id = Number(idParam);

  if (Number.isNaN(id)) {
    return res.status(400).json({
      error: "El ID debe ser un número",
      received: idParam
    });
  }

  const userIndex = users.findIndex((user) => user.id === id);

  if (userIndex === -1) {
    return res.status(404).json({
      error: "Usuario no encontrado",
      id
    });
  }

  const currentUser = users[userIndex];

  const updatedUser: User = {
    ...currentUser,
    isActive: false,
    updatedAt: new Date().toISOString()
  };

  users[userIndex] = updatedUser;

  return res.status(200).json({
  message: "Usuario desactivado correctamente",
  data: updatedUser
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