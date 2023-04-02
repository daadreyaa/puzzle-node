const mongoose = require('mongoose');
const crypto = require('crypto');

const DomainUserSchema = mongoose.Schema({
    devId: {
        type: String,
        required: true
    },
    email: {
        type: String,
        // required: true,
        // unique: true
    },
    domainName: {
        type: String,
        required: true,
    }
});

module.exports = mongoose.model('domainUser', DomainUserSchema);