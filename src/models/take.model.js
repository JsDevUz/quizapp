const { Schema, Types, model } = require("mongoose");

const schema = new Schema({
    userId: {type: Types.ObjectId, ref: 'Quiz'},
    quizId: {type: Types.ObjectId, ref: 'Quiz'},
    score: {type: Number},
    status: {type: Number},
    published: {type: Number},
    createdAt: {type: Date,default: Date.now },
    updatedAt: {type: Date,default: Date.now },
    startsAt: {type: Date,default: Date.now },
    finishedAt: {type: Date,default: Date.now },
    content: {type: String}
})

module.exports = {
    TakeModel: model('Take',schema)
}