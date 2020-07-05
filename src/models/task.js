const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
    title: String, 
    description: String,
    date: { type : Date, default: Date.now },
    completed: Boolean
}, 
{
    timestamps: true,
})

module.exports = mongoose.model('Task', TaskSchema);