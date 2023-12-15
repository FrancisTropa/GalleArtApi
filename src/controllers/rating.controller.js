import Rating from '../models/rating.model.js';

async function rateArtWork(req, res) {
    try {
        const { artWorkId, rating } = req.body;
        const userId = req.user._id;
        const existingRating = await Rating.findOne({ userId, artWorkId });
        if (existingRating) {
            existingRating.rating = rating;
            await existingRating.save();
        } else {
            await Rating.create({ userId, artWorkId, rating });
        }
        return res.status(201).send({ message: 'Calificación guardada exitosamente' });
    } catch (error) {
        return res.status(500).send({ error: error.message });
    }
}

async function getRatings(req, res) {
    try {
        const { artWorkId } = req.params;
        const ratings = await Rating.find({ artWorkId });
        return res.status(200).send({ ratings });
    } catch (error) {
        return res.status(500).send({ error: error.message });
    }
}

export { rateArtWork, getRatings };