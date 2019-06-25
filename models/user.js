var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
    userId:{type: Number, required: true},
    userName: {type: String, required: true, max: 100},
    password: {type: String, required: true},
    emailId:{type: String, required: true}
});


// Export the model
module.exports = mongoose.model('Users', UserSchema);