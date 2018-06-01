var mongoose = require('mongoose');
var Schema = mongoose.Schema;
/*
var UserSchema = new Schema({
    makes: { type: Array },
    created: {
        type: Date,
        default: Date.now
    }
})

var User = mongoose.model('makedetails', UserSchema);
module.exports.user = User;

var modelSchema = new Schema({
    modelData: { type: Array },
    created: {
        type: Date,
        default: Date.now
    }
})

var Model = mongoose.model('modeldetails', modelSchema);
module.exports.model = Model;

*/


var UserSchemaother = new Schema({
    name: { type: String },
    models: { type: Array },
    created: {
        type: Date,
        default: Date.now
    }
})
var Userother = mongoose.model('makedetailsothers', UserSchemaother);
module.exports.userother = Userother;

var modelSchemaother = new Schema({
    make: { type: String },
    model: { type: String },
    description: { type: String },
    imgbase64: { type: String },
    created: {
        type: Date,
        default: Date.now
    }
})
var Modelother = mongoose.model('modeldetailsother', modelSchemaother);
module.exports.modelother = Modelother;