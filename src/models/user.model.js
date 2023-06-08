const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        require: true,
        unique: true,
        lowercase: true,
    },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
