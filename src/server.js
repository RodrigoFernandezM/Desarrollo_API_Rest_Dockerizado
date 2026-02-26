// Importamos la librería Express
const express = require('express');

// MongoDB / env
require('dotenv').config();
const connectDB = require('./db');

// Creamos la aplicación Express
const app = express();

// Middleware para poder leer JSON en el body de las peticiones
app.use(express.json());

// Rutas:
// Ruta GET básica en la raíz del servidor
app.get('/', (req, res) => {
    res.json({ mensaje: 'API funcionando' });
});

// Importas las rutas
const usersRoutes = require('./routes/users.routes.js');
// Las montas en /users
app.use('/users', usersRoutes);

const PORT = process.env.PORT || 3000;

// Conecta DB y luego levanta servidor
connectDB()
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Servidor escuchando en puerto ${PORT}`);
        });
    })
    .catch((err) => {
        console.error('Error conectando a MongoDB:', err.message);
        process.exit(1);
    });