const { Schema, Types, model } = require("mongoose");

const schema = new Schema({
    quizId: {type: Types.ObjectId, ref: 'Quiz'},
    questionId: {type: Types.ObjectId, ref: 'Quiz'},
    active: {type: Number},
    correct: {type: Number},
    createdAt: {type: Date,default: Date.now },
    updatedAt: {type: Date,default: Date.now },
    content: {type: String}
})

module.exports = {
    QuizAnswerModel: model('QuizAnswer',schema)
}