const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const passport = require('passport')
const cookieParser = require('cookie-parser')
const session = require('express-session')
const bodyParser = require('body-parser')
const routes = require('./Routes/index')
require('dotenv').config()
const {URL_LOCAL, SECRET_WORD} = process.env;

const app = express()


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(cors({
    origin: `${URL_LOCAL}`,
    credentials: true
}))
app.use(session({
    secret: `${SECRET_WORD}`,
    resave: true,
    saveUninitialized: true
}))
app.use(morgan('dev'))
app.use(cookieParser(`${SECRET_WORD}`))
app.use(passport.initialize())
app.use(passport.session())
require('./strategies/passportStrategy')(passport)
app.use((err, req, res, next) => {
    const status = err.statusCode || 500;
    const message = err.statusMessage || err;
    console.log(err);
    res.status(status).send(message)
})

app.post('/login', async (req, res, next) => {
    passport.authenticate('local', (err, user, info) => {
        if(err) throw err
        if(!user) res.status(200).send(`Ah ah ah, you didn't say the magic word`)
        else {
            req.login(user, err => {
                if(err) throw err
                const datosLocalStorage = {
                    message: `Bienvenido amo ${user.username}`,
                    username: user.username,
                }
                res.status(200).send(datosLocalStorage)
            })
        }
    })(req, res, next)
})

app.get("/", (req, res) => {
    res.status(200).send("Hola")
})


app.use('/', routes)

module.exports = app