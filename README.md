# API REST CRUD con Node.js, Express, MongoDB y Docker

---

## Autor

**Rodrigo [Tu Apellido]**

- GitHub: https://github.com/RodrigoFernandezM/Desarrollo_API_Rest_Dockerizado

## Descripción del proyecto

Este proyecto consiste en el desarrollo de una **API REST** que permite
realizar operaciones **CRUD (Crear, Leer, Actualizar y Eliminar)** sobre
una colección de usuarios.\
La API está desarrollada utilizando **Node.js y Express**, y utiliza
**MongoDB** como base de datos.

Además, todo el sistema está **dockerizado**, lo que permite ejecutar la
aplicación completa mediante contenedores usando **Docker Compose**,
incluyendo tanto la API como la base de datos.

El objetivo del proyecto es demostrar cómo crear una API backend
funcional y desplegarla de forma sencilla utilizando contenedores.

------------------------------------------------------------------------

# Tecnologías utilizadas

Las tecnologías empleadas en este proyecto son:

-   Node.js
-   Express
-   MongoDB
-   Mongoose
-   Docker
-   Docker Compose

------------------------------------------------------------------------

# Estructura del proyecto

    src/
     ├── controllers/
     │    users.controller.js
     │
     ├── models/
     │    User.js
     │
     ├── routes/
     │    users.routes.js
     │
     ├── db.js
     └── server.js

    Dockerfile
    docker-compose.yml
    package.json
    package-lock.json
    .env.example
    .gitignore
    README.md

### Explicación

**server.js**\
Punto de entrada de la aplicación. Aquí se configura Express, se
conectan las rutas y se inicia el servidor.

**db.js**\
Se encarga de establecer la conexión con MongoDB mediante Mongoose.

**models/User.js**\
Define el esquema de usuario que se guarda en la base de datos.

**controllers/users.controller.js**\
Contiene la lógica de cada operación CRUD.

**routes/users.routes.js**\
Define las rutas de la API y las conecta con los controladores.

------------------------------------------------------------------------

# Modelo de usuario

Cada usuario almacenado en la base de datos contiene los siguientes
campos:

-   nombre
-   email
-   edad

MongoDB añade automáticamente el campo `_id` para identificar cada
documento.

------------------------------------------------------------------------

# Endpoints de la API

## Crear usuario

POST /users

Ejemplo:

    curl -X POST http://localhost:3000/users -H "Content-Type: application/json" -d '{"nombre":"Juan","email":"juan@test.com","edad":30}'

------------------------------------------------------------------------

## Obtener todos los usuarios

GET /users

------------------------------------------------------------------------

## Obtener usuario por ID

GET /users/:id

------------------------------------------------------------------------

## Actualizar usuario

PUT /users/:id

Ejemplo:

    curl -X PUT http://localhost:3000/users/ID -H "Content-Type: application/json" -d '{"nombre":"Juan Actualizado","edad":31}'

------------------------------------------------------------------------

## Eliminar usuario

DELETE /users/:id

------------------------------------------------------------------------

# Dockerización del proyecto

La aplicación está preparada para ejecutarse utilizando contenedores
Docker.

El proyecto incluye:

-   Dockerfile → crea la imagen de la API
-   docker-compose.yml → levanta la API y MongoDB
-   volumen Docker → mantiene los datos de la base de datos

Esto permite ejecutar todo el sistema con un solo comando.

------------------------------------------------------------------------

# Ejecución del proyecto

## 1. Clonar el repositorio

    git clone <REPOSITORIO>
    cd Desarrollo_API_Rest_Dockerizado

------------------------------------------------------------------------

## 2. Ejecutar con Docker

    docker-compose up -d --build

Esto levantará:

-   el contenedor de MongoDB
-   el contenedor de la API

------------------------------------------------------------------------

## 3. Probar la API

    curl http://localhost:3000

Respuesta esperada:

    {"mensaje":"API funcionando"}

------------------------------------------------------------------------

# Persistencia de datos

El proyecto utiliza un volumen de Docker para almacenar los datos de
MongoDB.

Esto significa que los datos no se pierden aunque los contenedores se
detengan o reinicien.

Para comprobarlo:

    docker-compose down
    docker-compose up -d

Los usuarios creados anteriormente seguirán existiendo.

------------------------------------------------------------------------

# Conclusión

En este proyecto se ha desarrollado una API REST funcional utilizando
Node.js y Express, conectada a una base de datos MongoDB y desplegada
mediante contenedores Docker.

La dockerización permite ejecutar todo el sistema de forma sencilla y
reproducible, facilitando el despliegue y la portabilidad de la
aplicación.
