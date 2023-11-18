import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    urlProfileImg: {
        type: String,
        required: false,
    },
    urlCoverImg: {
        type: String,
        required: false,
    },
    email: {
        type: String,
        required: false,
    },
    description: {
        type: String,
        required: false,
    },
    facebook: {
        type: String,
        required: false,
    },
    instagram: {
        type: String,
        required: false,
    },
    twitter: {
        type: String,
        required: false,
    },
});

const User = mongoose.model('User', UserSchema);

export default User;
