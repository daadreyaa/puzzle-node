const mongoose = require('mongoose');
const crypto = require('crypto');

const DomainSchema = mongoose.Schema({
    devId: {
        type: String,
        required: true,
    },
    domainName: {
        type: String,
        required: true,
        unique: true,
    },
    secretKey: {
        type: String,
        required: true,
    },
    puzzles: {
        type: Object,
        required: true,
    }

});

module.exports = mongoose.model('developerDomains', DomainSchema);