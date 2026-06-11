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

## Documentación del reto

- [Día 1 - Diseño inicial](Docs/dia-01--diseno-inicial-usermanager.md)
- [Día 2 - Preparación del proyecto](Docs/dia-02-dia-2-preparacion-proyecto.md) 
- [Día 3 - Primer Endpoint](Docs/dia-03-primer-endpoint.md)
- [Día 4 - Metodos HTTP](Docs/dia-04-metodos-http.md)
- [Día 5 - Metodos HTTP](Docs/dia-05-json-body-params-headers.md)