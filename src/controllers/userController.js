const User = require('../models/user');
const md5 = require('md5');

module.exports = {
    async index(req, res) {
        const user = await User.find();

        return res.json({user})
    }, 
    async find (req, res) {
        const user = await User.findById(req.params.id)

        return res.json({user})
    },
    async isValid (req, res){
        const userData = req.body;
        const user = await User.findOne().where({
            email: userData.email.trim().toLowerCase(),
            password: md5(userData.password.trim().toLowerCase())
        })

        return res.json({ isValid: user !== null, data: user })
    }, 
    async Store(req, res) {
        const { name, email, password } = req.body
        const verifyEmailRegistered = await User.findOne({
            email: email.trim().toLowerCase()
        })

        if (verifyEmailRegistered)
            return res.json({ user: [], emailRegitered: true })

        const user = {
            name: name.trim().toLowerCase(), 
            email: email.trim().toLowerCase(), 
            password: md5(password.trim().toLowerCase())
        }
        const userCreated = await User.create(user);

        return res.json({ userCreated })
    },
    async Update(req, res) {
        const user = await User.findByIdAndUpdate(req.params.id, req.body)

        return res.json({user})
    },
    async Delete(req, res) {
        const user = await User.findByIdAndDelete(req.params.id)

        return res.json({user})
    }
}