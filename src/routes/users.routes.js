const express = require('express');
const router = express.Router();

// Conectar Controlador con Rutas:
const { createUser, getUsers } = require('../controllers/users.controller');
router.get('/', getUsers);
router.post('/', createUser);
module.exports = router;

// GET /users
router.get('/', (req, res) => {
  res.json({ mensaje: 'Listar usuarios' });
});

// POST /users
router.post('/', (req, res) => {
  res.json({ mensaje: 'Crear usuario' });
});

// GET /users/:id
router.get('/:id', (req, res) => {
  res.json({ mensaje: `Obtener usuario ${req.params.id}` });
});

// PUT /users/:id
router.put('/:id', (req, res) => {
  res.json({ mensaje: `Actualizar usuario ${req.params.id}` });
});

// DELETE /users/:id
router.delete('/:id', (req, res) => {
  res.json({ mensaje: `Eliminar usuario ${req.params.id}` });
});

module.exports = router;