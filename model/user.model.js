const Mongoose = require('mongoose')

const UserSchema = Mongoose.Schema = {
    first_name: String,
    last_name: String,
    email: String,
    password: String
}

module.exports = Mongoose.model('User', UserSchema)