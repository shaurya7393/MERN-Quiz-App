const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const resultSchema = new Schema({
    username: { type: String, default: "" },
    result: { type: Array, default: [] },
    attempts: { type: Number, default: 0 },
    points: { type: Number, default: 0 },
    achieved: { type: String, default: "" },
    createdAt: { type: Date, default: Date.now }
})

const Result = mongoose.model('result', resultSchema)

module.exports = Result;