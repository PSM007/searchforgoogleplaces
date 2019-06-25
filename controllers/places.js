var places = require('../models/places');

//Simple version, without validation or sanitation
exports.test = function (req, res) {
    res.send('Greetings from the Test controller!');
};

exports.places_create = function (req, res) {
    var places = new places(
        {
            name: req.body.name,
            price: req.body.price
        }
    );

    places.save(function (err) {
        if (err) {
            return next(err);
        }
        res.send('places Created successfully')
    })
};

exports.places_details = function (req, res) {
    places.findById(req.params.id, function (err, places) {
        if (err) return next(err);
        res.send(places);
    })
};

exports.places_update = function (req, res) {
    places.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, places) {
        if (err) return next(err);
        res.send('places udpated.');
    });
};

exports.places_delete = function (req, res) {
    places.findByIdAndRemove(req.params.id, function (err) {
        if (err) return next(err);
        res.send('Deleted successfully!');
    })
};