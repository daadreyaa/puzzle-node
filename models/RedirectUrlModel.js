const mongoose = require('mongoose')

const RedirectUrlSchema = mongoose.Schema({
    devId: {
        type: String,
        required: true
    },
    signUpRedirectUrl: {
        type: String,
        required: true
    },
    loginSuccessUrl: {
        type: String,
        required: true
    },
    loginFailureUrl: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('redirectUrls', RedirectUrlSchema);