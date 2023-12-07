const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    images: {
        type: Array,
        required: true,
        default: [],
    },
});

const User = new mongoose.model("users", UserSchema);

module.exports = User;
