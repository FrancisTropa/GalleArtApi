import ArtWork from '../models/artWork.model.js';

async function listArtWorks(req, res) {
    try {
        const artworks = await ArtWork.find({}).sort({ _id: -1 });
        return res.status(200).send({ response: artworks });
    } catch (error) {
        return res.status(500).send({ error });
    }
}

async function createArtWork(req, res) {
    try {
        const artwork = await ArtWork.create({
            artwork: req.file.path,
            user: req.user.id,
        });
        return res.status(201).send({ response: artwork });
    } catch (error) {
        if (error.name === 'ValidationError') {
            return res.status(400).send({ message: 'Por favor, suba la obra a publicar' });
        }
        return res.status(500).send({ error: error.message });
    }
}

async function deleteArtWork(req, res) {
    try {
        const artWorkId = req.params.id;
        const artWork = await ArtWork.findByIdAndRemove(artWorkId);
        return res.status(204).send();
    } catch (error) {
        return res.status(500).send({ error: error.message });
    }
}

export { listArtWorks, createArtWork, deleteArtWork };