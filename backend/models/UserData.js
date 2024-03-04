const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userDataSchema = new Schema({
    username: { type: String, default: "" },
    password: {type:String, default:""}
})

const userData = mongoose.model('userdata', userDataSchema);

module.exports = userData;