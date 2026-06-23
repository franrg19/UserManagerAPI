# UserManager API

Reto opcional de construcción de una API REST de gestión de usuarios.

## Descripción

Este proyecto tiene como objetivo construir paso a paso una API REST capaz de
gestionar usuarios, autenticación, roles, seguridad, base de datos e integración
con un frontend.

## Instalación

Instalar dependencias:

```bash
npm install
```

Arrancar en modo desarrollo:

```bash
npm run dev
```

La API se ejecutará inicialmente en:

```text
http://localhost:3000
```

## Endpoints Disponibles

### Root
```http
GET / 
```

Respuesta esperada
```json
{
  "name": "User Manager API",
  "version": "1.0.0",
  "status": "running",
  "description": "API para gestionar usuarios",
  "author": "Fran Rebollo"
}
```

### Info
```http
GET/api/info
```
Respuesta esperada
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

### Health
```http
GET/api/health
```
Respuesta esperada:

```json
{
  "status": "ok",
  "message": "User Manager API funcionandoo",
  "timestamp": "2026-06-10T15:36:44.274Z"
}
```

### Ping
```json
{
  "message": "pong, pong"
}
```

## Endpoints simulados de usuarios

```http
GET /api/users
GET /api/users/:id
POST /api/users
PATCH /api/users/:id
DELETE /api/users/:id
```

Estos endpoints todavía no trabajan con datos reales. De momento sirven para
practicar métodos HTTP, rutas, parámetros y body.


## Crear usuario

```http
POST /api/users
```

Body:

```json
{
  "name": "María López",
  "email": "maria@email.com",
  "password": "123456"
}
```

Respuesta correcta:

```json
{
  "message": "Usuario creado correctamente",
  "data": {
    "id": 4,
    "name": "María López",
    "email": "maria@email.com",
    "role": "USER",
    "isActive": true
  }
}
```

Posibles errores:

```json
{
  "error": "name, email y password son obligatorios"
}
```

```json
{
  "error": "La contraseña debe tener al menos 6 caracteres"
}
```

```json
{
  "error": "El email ya está registrado"
}
```

## Actualizar usuario

```http
PATCH /api/users/:id
```

Permite modificar parcialmente los datos de un usuario.

Campos permitidos:

```text
name
email
isActive
```

Body de ejemplo:

```json
{
  "name": "Ana Martínez"
}
```

Respuesta correcta:

```json
{
  "message": "Usuario actualizado correctamente",
  "data": {
    "id": 1,
    "name": "Ana Martínez",
    "email": "ana@email.com",
    "role": "USER",
    "isActive": true
  }
}
```

Posibles errores:

```json
{
  "error": "El ID debe ser un número",
  "received": "abc"
}
```

```json
{
  "error": "Usuario no encontrado",
  "id": 999
}
```

```json
{
  "error": "Debes enviar al menos un campo para actualizar"
}
```

```json
{
  "error": "El email ya está registrado"
}
```

## Eliminar o desactivar usuario

```http
DELETE /api/users/:id
```

En este proyecto, esta ruta no borra físicamente el usuario. Realiza un borrado
lógico marcando:

```text
isActive = false
```

Respuesta correcta:

```json
{
  "message": "Usuario desactivado correctamente",
  "data": {
    "id": 1,
    "name": "Ana García",
    "email": "ana@email.com",
    "role": "USER",
    "isActive": false
  }
}
```

Posibles errores:

```json
{
  "error": "El ID debe ser un número",
  "received": "abc"
}
```

```json
{
  "error": "Usuario no encontrado",
  "id": 999
}
```

## Endpoints de usuarios

```http
GET /api/users
GET /api/users/:id
```

### GET /api/users/:id

Devuelve un usuario concreto a partir de su ID.

Respuesta correcta:

```json
{
  "message": "Usuario encontrado",
  "data": {
    "id": 1,
    "name": "Ana García",
    "email": "ana@email.com",
    "role": "USER",
    "isActive": true
  }
}
```

Posibles errores:

```json
{
  "error": "El ID debe ser un número"
}
```

```json
{
  "error": "Usuario no encontrado"
}
```

## Rutas temporales de debug

Estas rutas se han creado para practicar cómo leer datos de una petición HTTP.

```http
POST /api/debug/body
GET /api/debug/params/:id
GET /api/debug/query
GET /api/debug/headers
PATCH /api/debug/users/:id
```

Más adelante estas rutas podrán eliminarse, ya que no forman parte de la API final.

## Validaciones básicas

La API realiza validaciones manuales antes de crear o actualizar usuarios.

Validaciones principales:

- `name` debe ser un texto no vacío.
- `email` debe ser un texto no vacío.
- `password` debe ser un texto no vacío.
- `password` debe tener al menos 6 caracteres.
- `email` debe contener `@`.
- `isActive` debe ser boolean.

Ejemplo de error:

```json
{
  "error": "El nombre debe ser un texto no vacío"
}
```

## Documentación del reto

- [Día 1 - Diseño inicial](Docs/dia-01--diseno-inicial-usermanager.md)
- [Día 2 - Preparación del proyecto](Docs/dia-02-dia-2-preparacion-proyecto.md) 
- [Día 3 - Primer Endpoint](Docs/dia-03-primer-endpoint.md)
- [Día 4 - Metodos HTTP](Docs/dia-04-metodos-http.md)
- [Día 5 - JSON, body, params y headers](Docs/dia-05-json-body-params-headers.md)
- [Día 6 - Cliente HTTP y depuracion ](Docs/dia-06-cliente-depuracion.md)
- [Día 7 - Listado de usuarios en memoria ](Docs/dia-07-listado-usuarios.md)
- [Día 8 - Consultar usuario por ID ](Docs/dia-08-consultar-usuario-id.md)
- [Día 9 - Crear usuarios en memoria ](Docs/dia-09-crear-usuarios.md)
- [Día 10 - Actualizar usuarios ](Docs/dia-10-actualizar-usuarios.md)
- [Día 11 - Eliminar o desactivar un usuario ](Docs/dia-11-eliminar-desactivar-usuario.md)
- [Día 12 - Validaciones manuales básicas ](Docs/dia-12-validacion-manual-basica.md)