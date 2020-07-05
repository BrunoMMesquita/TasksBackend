const Task = require('../models/task');

module.exports = {
    async index(req, res) {
        const tasks = await Task.find().sort('-date');

        return res.json({tasks})
    }, 
    async find (req, res) {
        const task = await Task.findById(req.params.id)

        return res.json({task})
    },

    async Store(req, res) {
        console.log(req.body)
        const task = await Task.create(req.body);

        return res.json({ task })
    },
    async Update(req, res) {
        const task = await Task.findByIdAndUpdate(req.params.id, req.body)

        return res.json({task})
    },
    async Delete(req, res) {
        const task = await Task.findByIdAndDelete(req.params.id)

        return res.json({task})
    }
}