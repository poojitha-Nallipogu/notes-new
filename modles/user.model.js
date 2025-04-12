const mongoose = require('mongoose');

const userShecma = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password:{
        type: String,
        required: true,
        minlength: 6,
    }
},{timestamps: true});

const User = mongoose.model('User', userShecma);
module.exports = User;