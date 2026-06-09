# Día 2: Preparación del proyecto

## Qué he hecho

- He inicializado el proyecto Node.js.
- He instalado Express.
- He configurado TypeScript.
- He creado la carpeta src.
- He creado el archivo src/server.ts.
- He arrancado el servidor en local.
- He probado la respuesta desde navegador o Thunder Client.

## Comando para arrancar el proyecto

```bash
npm run dev
```

## URL de prueba

```text
http://localhost:3000
```

## Respuesta obtenida

```json
{
  "name": "User Manager API",
  "version": "1.0.0",
  "status": "running",
  "description": "API para gestionar usuarios",
  "author": "Fran Rebollo"
}
```
![Ejemplo en Postman](./prueba%20respuesta%20API%20dia%202.png)

## Ruta de información
```text
http://localhost:3000/api/info
```

```json
{
    "name": "Proyecto UserManagerAPI",
    "Día": 2,
    "technologías": [
        "Node.js",
        "Express",
        "TypeScript"
    ],
    "descripción": "API para gestionar usuarios con Node.js, Express y TypeScript"
}
```

## Explicación personal
### **¿Qué hace el archivo `src/server.ts`?**

Imagina que tu API es una tienda.

El archivo `server.ts` es la persona que abre la tienda cada mañana.

Cuando ejecutas:

```bash
npm run dev
```

se pone en marcha `server.ts`.

Este archivo se encarga de:

1. Crear el servidor de Express.
2. Configurar cómo se comporta la API.
3. Registrar las rutas (las puertas de entrada a la API).
4. Escuchar las peticiones de los usuarios.
5. Mantener la API funcionando.

### **¿Qué hace `app.listen()`?**

El método `app.listen()` pone en marcha el servidor y lo deja escuchando peticiones de los usuarios.

### Ejemplo

```typescript
app.listen(3000, () => {
    console.log("Servidor iniciado");
});
```

En este caso:

- `3000` es el puerto por el que escuchará la aplicación.
- La función `() => {}` se ejecuta cuando el servidor se inicia correctamente.

### ¿Qué hace `app.get()`?

El método `app.get()` crea una ruta que responde a las peticiones **GET**.

Las peticiones GET se utilizan para **obtener información**.

### Ejemplo

```typescript
app.get("/", (req, res) => {
    res.json({
        message: "UserManager API"
    });
});
```

En este caso:

- `"/"` es la ruta.
- `req` contiene la información de la petición.
- `res` se utiliza para enviar la respuesta.
- `res.json()` devuelve datos en formato JSON.

### ¿Por qué usamos `express.json()`?

`express.json()` es un middleware que permite a Express entender datos JSON enviados por los clientes.

Normalmente se utiliza al principio de la aplicación:

```typescript
app.use(express.json());
```