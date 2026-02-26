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

// Obtener usuario por ID
exports.getUserById = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) return res.status(404).json({ mensaje: 'Usuario no encontrado' });
        res.json(user);
    } catch (error) {
        res.status(400).json({ error: 'ID inválido' });
    }
};

// Actualizar usuario
exports.updateUser = async (req, res) => {
    try {
        const user = await User.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        );
        if (!user) return res.status(404).json({ mensaje: 'Usuario no encontrado' });
        res.json(user);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Eliminar usuario
exports.deleteUser = async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id);
        if (!user) return res.status(404).json({ mensaje: 'Usuario no encontrado' });
        res.json({ mensaje: 'Usuario eliminado' });
    } catch (error) {
        res.status(400).json({ error: 'ID inválido' });
    }
};