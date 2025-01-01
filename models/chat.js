const mongoose = require("mongoose")

const chatSchema = new mongoose.Schema({
   from: {
      type: String,
      required: true
   },
   to: {
      type: String,
      required: true
   },
    message: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    edited: {
        type: Boolean,
        default: false
    }
})

const Chat= mongoose.model('Chat', chatSchema);
module.exports = Chat;
