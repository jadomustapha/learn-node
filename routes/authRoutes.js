const { Router } = require("express");

const userController = require('../controllers/userController')

route = Router()

route.get('/', userController.index)
route.get('/admin', (req,res)=>res.render('auth/dash'))

route.get('/login', userController.index)
route.post('/login', userController.login)

route.get('/register', userController.createAccountForm)

route.post('/register', userController.createAccount)

module.exports.authRoutes = route