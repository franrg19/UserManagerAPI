# Día 9: Crear usuarios en memoria

## Qué he hecho

- He actualizado el endpoint `POST /api/users`.
- He leído datos desde `req.body`.
- He validado campos obligatorios.
- He validado longitud mínima de contraseña.
- He comprobado email duplicado.
- He generado un nuevo ID.
- He creado un objeto `User`.
- He añadido el usuario al array con `push`.
- He devuelto `201 Created` cuando el usuario se crea correctamente.

## Endpoint trabajado

```http
POST /api/users
```

## Body de ejemplo

```json
{
  "name": "María López",
  "email": "maria@email.com",
  "password": "123456"
}
```

## Casos probados

| Caso | Código esperado | Resultado |
| --- | ---: | --- |
| Usuario correcto | 201 | |
| Faltan campos | 400 | |
| Password corta | 400 | |
| Email duplicado | 409 | |

## Explicación personal

Para crear un usuario se leen los datos desde `req.body`, se validan, se
comprueba que el email no esté repetido, se genera un nuevo id y se añade el
usuario al array con `push`.