const User = require('../models/User');

// Crear usuario
exports.createUser = async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Listar usuarios
exports.getUsers = async (req, res) => {
  const users = await User.find();
  res.json(users);
};