// call mongoose
const mongoose = require("mongoose");
// create Schema
const noteSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true
    },
    isCompleted: {
        type: Boolean,
        default: false
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    }
}, {timestamps: true});
// Create Model
const Note = mongoose.model("Note", noteSchema);
// export module
module.exports = Note;
