import Comment from '../models/comment.model.js';

async function postComment(req, res) {
    try {
        const { artWorkId, comment } = req.body;
        const userId = req.user._id;
        await Comment.create({ userId, artWorkId, comment });
        return res.status(201).send({ message: 'Comentario publicado exitosamente' });
    } catch (error) {
        return res.status(500).send({ error: error.message });
    }
}

async function listComments(req, res) {
    try {
        const { artWorkId } = req.params;
        const comments = await Comment.find({ artWorkId }).populate('userId', 'name');
        return res.status(200).send({ comments });
    } catch (error) {
        return res.status(500).send({ error: error.message });
    }
}

export { postComment, listComments };