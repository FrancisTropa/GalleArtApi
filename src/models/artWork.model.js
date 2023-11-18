import mongoose from 'mongoose';

const ArtworkSchema = new mongoose.Schema({
    //link de la imagen
    artWork:{
        type: String,
        required: true,
    }
});

const Artwork = mongoose.model('Artwork', ArtworkSchema);

export default Artwork;