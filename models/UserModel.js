const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    userId: {
        type: String,
        required: true
    },
    // devId: {
    //     type: String,
    //     required: true
    // },
    password: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('userData', UserSchema);