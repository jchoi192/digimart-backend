var Listing = require('../models/listing');

module.exports = {
    create,
    index,
    update,
    delete: deleteListing
};

function index(req, res) {
    Listing.find({}, function (err, listings) {
        res.status(200).json(listings);
    });
}

function create(req, res) {
    Listing.create(req.body, function (err, listing) {
        res.status(201).json(listing);
    });
}

function update(req, res) {
    Listing.findByIdAndUpdate(req.params.id, req.body, function () {
        index(req, res);
    });
}

function deleteListing(req, res) {
    Listing.findByIdAndDelete(req.params.id, function() {
        index(req, res);
    });
}