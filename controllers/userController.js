const User = require("../models/userModal")

const controller = {
    index: function (req, res) {
        res.render('auth/login')
    },

    login: async function (req, res) {
        const users = await User.findOne({
            username: req.body.username,
            password: req.body.password,
        })

        if (users) return res.redirect('/admin')
        res.send({ error: 'inavalid credentials' })
    },

    createAccountForm: function (req, res) {
        res.render('auth/createAccount')
    },
    createAccount: async function (req, res) {
        const user = await User(req.body).save()
        res.redirect('/login')
    },
    update: function (req, res) { },
    single: function (req, res) { },
    delete: function (req, res) { }
}


module.exports = controller