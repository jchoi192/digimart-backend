const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const listingSchema = new Schema ({
    title: String,
    url: String,
    description: String;
    category: String,
    price: number
}, {timestamps: true});

module.exports = mongoose.model('Listing, listingSchema')