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
        required: true,
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
    password: {
        type: String,
        required: true,
        lowercase: true,
    },
});

const User = mongoose.model('User', UserSchema);

export default User;
