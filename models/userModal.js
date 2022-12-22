const mongoose = require("mongoose");
const bcrypt = require('bcrypt')


const userSchema = mongoose.Schema({
    fullNames: String,
    username: String,
    password: String
})

module.exports = mongoose.model('User', userSchema)