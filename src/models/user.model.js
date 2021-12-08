const { Schema, TYpes, model } = require("mongoose");

const schema = new Schema({
    firstName: {type: String},
    middleName: {type: String},
    lastName: {type: String},
    mobile: {type: String},
    email: {type: String},
    passwordHash: {type: String},
    host: {type: Number},
    registredAt : {type: Date,default: Date.now },
    lastLogin: {type: Date},
    intro: {type: Number},
    profile: {type: String}
})

module.exports = {
    UserModel: model('User',schema)
}