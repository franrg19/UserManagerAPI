# Día 10: Actualizar usuarios en memoria

## Qué he hecho

- He actualizado el endpoint `PATCH /api/users/:id`.
- He leído el ID desde `req.params`.
- He leído los cambios desde `req.body`.
- He validado que el ID sea numérico.
- He comprobado si el usuario existe.
- He validado que el body no esté vacío.
- He validado `name`, `email` e `isActive`.
- He comprobado email duplicado al actualizar.
- He actualizado `updatedAt`.
- He sustituido el usuario dentro del array.

## Endpoint trabajado

```http
PATCH /api/users/:id
```

## Body de ejemplo

```json
{
  "name": "Ana Martínez"
}
```

## Casos probados

| Caso | Código esperado | Resultado |
| --- | ---: | --- |
| Actualización correcta | 200 | |
| ID no válido | 400 | |
| Usuario inexistente | 404 | |
| Body vacío | 400 | |
| Nombre vacío | 400 | |
| Email inválido | 400 | |
| Email duplicado | 409 | |
| `isActive` incorrecto | 400 | |

## Explicación personal

Para actualizar un usuario se lee el ID desde `req.params`, se busca el usuario
en el array, se leen los cambios desde `req.body` y se sustituyen solo los
campos que han llegado en la petición.

## Explicacion personal PATCH
### ¿Que significa actualizar parcialmente?
Actualizar parcialmente significa modificar solo los datos que queremos cambiar, 
sin tener que enviar toda la información del objeto

### ¿Qué diferencia hay entre enviar solo `name` y enviar todo el usuario?
Si enviamos solo name, únicamente se actualiza el nombre del usuario y el resto de 
los campos (como el correo, la contraseña o el rol) no se modifican.

### ¿Por qué no permitimos modificar campos como id o role desde esta ruta?
Porque son campos sensibles. El id identifica de forma única al usuario y no debe cambiarse,
ya que podría provocar problemas en la base de datos. El role determina los permisos del usuario