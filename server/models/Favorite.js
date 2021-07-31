const mongoose = require('mongoose');

const favoriteSchema = new mongoose.Schema({
    userFrom: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    movieId: {
        type: String
    },
    movieTitle: {
        type: String
    },
    moviePost: {
        type: String
    },
    movieRunTime: {
        type: String
    }

}, { timestamps: true })



module.exports = mongoose.model('Favorite', favoriteSchema);
