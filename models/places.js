var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PlacesSchema = new Schema({
    placeType: {type: String, required: true, max: 100},
    placeName: {type: Number, required: true},
    userId:{type: Number, required: true}
});


// Export the model
module.exports = mongoose.model('Places', PlacesSchema);