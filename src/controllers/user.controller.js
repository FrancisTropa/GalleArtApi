import User from '../models/user.model.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { SECRET_KEY } from "../configs/environments.js"

async function register(req, res) {
    try {
        const { name, email, password } = req.body;
        const user = await User.create({
            name,
            email,
            password,
        });
        return res.status(201).send({ response: user });
    } catch (error) {
        if (error.name === 'ValidationError') {
            return res.status(400).send({ message: 'Por favor, completa todos los campos' });
        }
        return res.status(500).send({ error: error.message });
    }
}

async function login(req, res) {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).send({ message: 'Usuario no encontrado' });
        }
        if (password !== user.password) {
            return res.status(401).send({ message: 'Contraseña incorrecta' });
        }
        const token = generateAccessToken(user);
        return res.status(200).send({ token });
    } catch (error) {
        return res.status(500).send({ error: error.message });
    }
}

async function getUser(req, res) {
    try {
        const token = req.headers.authorization.split(' ')[1];
        const decoded = jwt.verify(token, SECRET_KEY);
        const user = await User.findById(decoded._id);
        if (!user) {
            return res.status(404).send({ message: 'Usuario no encontrado' });
        }
        return res.status(200).send({ user });
    } catch (error) {
        return res.status(500).send({ error: error.message });
    }
}

function generateAccessToken(user) {
    return jwt.sign({ _id: user._id, name: user.name }, SECRET_KEY, { expiresIn: '30d' });
}

async function listUsers(req, res) {
    try {
        const users = await User.find({});
        return res.status(200).send({ response: users });
    } catch (error) {
        return res.status(500).send({ error });
    }
}

async function editProfile(req, res) {
    try {
        const userId = req.params.id;
        const updates = req.body;
        const user = await User.findByIdAndUpdate(userId, updates, { new: true });
        return res.status(200).send({ response: user });
    } catch (error) {
        return res.status(500).send({ error: error.message });
    }
}

export { register, login, getUser, listUsers, editProfile };
