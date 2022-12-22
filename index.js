const express = require('express')
const layouts = require('express-ejs-layouts')
const mongoose = require('mongoose')
const path = require('path')
const { authRoutes } = require('./routes/authRoutes')

const app = express()

// basic middlewares
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use(layouts)
app.use(express.static(path.resolve(__dirname, 'public')))
app.set('view engine', 'ejs')
app.use(authRoutes)
// connect to db
mongoose.connect('mongodb://localhost/demo', () => {
    app.listen(3000, _ => console.log('app initialised'))
})