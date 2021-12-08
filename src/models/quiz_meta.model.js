const { Schema, Types, model } = require("mongoose");

const schema = new Schema({
    quizId: {type: Types.ObjectId, ref: 'Quiz'},
    key: {type: String},
    content: {type: String}
})

module.exports = {
    QuizMetaModel: model('QuizMeta',schema)
}