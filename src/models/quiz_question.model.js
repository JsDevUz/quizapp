const { Schema, Types, model } = require("mongoose");

const schema = new Schema({
    quizId: {type: Types.ObjectId, ref: 'Quiz'},
    type: {type: String},
    active: {type: Number},
    level: {type: Number},
    score: {type: Number},
    createdAt: {type: Date,default: Date.now },
    updatedAt: {type: Date,default: Date.now },
    content: {type: String}
})

module.exports = {
    QuizQuestionModel: model('QuizQuestion',schema)
}