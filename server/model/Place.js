const mongoose = require('mongoose');

const placeSchema = new mongoose.Schema({
    owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    title: String,
    description: String,
    checkIn: Number,
    checkOut: Number,
    address: String,
    photos: [String],
    price: Number,
    maxGuests: Number,
    extroInfo: String,
},
{ timestamps: true }
);

const placeModel = mongoose.model('place', placeSchema);

module.exports = placeModel;