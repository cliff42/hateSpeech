const { kStringMaxLength } = require('buffer');
const mongoose = require('mongoose');


const BotSchema = mongoose.Schema({
    fakeNews: Boolean,
    hateSpeech: Boolean,
    subreddit: {
        type: String,
        unique: true,
    },
    name: {
        type: String,
        unique: true,
    },
    dateCreated: {
        type: Date,
        default: Date.now,
    },
    comments: [{
        type: mongoose.SchemaTypes.ObjectId,
        ref: "Comment",
        default: [],
      }]




});




const Bot = mongoose.model("bot", BotSchema);
module.exports = Bot;