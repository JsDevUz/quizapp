const { Schema, Types, model } = require("mongoose");

const schema = new Schema({
    takeId: {type: Types.ObjectId, ref: 'Quiz'},
    questionId: {type: Types.ObjectId, ref: 'Quiz'},
    answerId: {type: Types.ObjectId, ref: 'Quiz'},
    active: {type: Number},
    createdAt: {type: Date,default: Date.now },
    updatedAt: {type: Date,default: Date.now },
    content: {type: String}
})

module.exports = {
    TakeAnswerModel: model('TakeAnswer',schema)
}