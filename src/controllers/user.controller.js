import User from '../models/user.model.js';

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

export { listUsers, editProfile };
