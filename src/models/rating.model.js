import mongoose from 'mongoose';

const RatingSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    artWorkId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Artwork',
        required: true,
    },
    rating: {
        type: Number,
        required: true,
        min: 1,
        max: 5,
    },
    date: {
        type: Date,
        default: Date.now,
    },
});

const Rating = mongoose.model('Rating', RatingSchema);

export default Rating;