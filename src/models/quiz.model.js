const { Schema, Types, model } = require("mongoose");

const schema = new Schema({
    hostId : {type: Types.ObjectId},
    title: {type: String},
    metaTitle: {type: String},
    slug: {type: String},
    summary: {type: String},
    type: {type: Number},
    score: {type: Number},
    published: {type: Number},
    createdAt: {type: Date,default: Date.now },
    updatedAt: {type: Date,default: Date.now },
    startsAt: {type: Date,default: Date.now },
    endsAt: {type: Date,default: Date.now },
    content: {type: String}
})

module.exports = {
    Quiz: model('Quiz',schema)
}