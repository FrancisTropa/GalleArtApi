# GalleArtApi

## Francisco Tropa

## cambios destacables:
  - endpoint Put /users/{userId} de "Editar perfil de usuario" se decidio cambiar por /users/{userId}/edit

## Get
  - Obtener Usuarios.
  - Obtener usuario con sesión iniciada
  - Listar Obras.
  - Listar Comentarios.
  - Obtener Reacciones.

## Post
  - Login.
  - Registro de usuario.
  - Subir Obra.
  - Calificar Obra.
  - Comentar Obra.

## Delete
  - Eliminar Obra.

## Put
  - Editar Perfil de Usuario.

## En principio todos los endpoints fuera de los Get requieren de autenticación, pero por practicidad y que no estan creados los endpoints de inicio de sesión y registro, no tienen lógica para comprobar autenticaión de usuario.
