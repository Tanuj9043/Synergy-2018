var mongoose = require('mongoose');
var  bcrypt = require("bcryptjs");
var trainer = require('trainer');
// define the schema for our user model

var UserSchema = mongoose.Schema({
    name:String,
    trainer:{type: Schema.Types.ObjectId,ref:'trainer'},
        email        : String,
        password     : String
    });


// methods ======================
// generating a hash
UserSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

// checking if password is valid
UserSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
};

module.exports = mongoose.model("user",UserSchema);
