const mongoose = require('mongoose');
const crypto = require('crypto');

const PuzzleSchema = mongoose.Schema({
    puzzleId: {
        type: String,
        required: true,
        unique: true
    },
    puzzleName: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true,
    }
});

module.exports = mongoose.model('puzzles', PuzzleSchema);