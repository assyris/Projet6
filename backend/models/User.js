const mongoose = require('mongoose');

const uniqueValidator = require('mongoose-unique-validator');
var sanitizerPlugin = require('mongoose-sanitizer');

const userSchema = mongoose.Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }
});

userSchema.plugin(uniqueValidator);
userSchema.plugin(sanitizerPlugin);

module.exports = mongoose.model('User', userSchema);