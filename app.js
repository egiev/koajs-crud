const Koa = require('koa')
const Router = require('koa-router')
const convert = require('koa-convert')
const koares = require('koa-res')
const bodyparser = require('koa-bodyparser')
const logger = require('koa-logger')
const mongoose = require('mongoose')
const cors = require('@koa/cors');

const User = require('./controller/user.controller')

const app = new Koa()
const router = new Router()

// connect to db
mongoose.Promise = require('bluebird')
mongoose.connect('mongodb://127.0.0.1:27017/koadb', { useNewUrlParser: true })
  .then(res => {
    console.log('Mongo connection created.')
  })
  .catch(err => {
    console.log('Error connecting to mongo')
    console.log(err)
  })

app.use(bodyparser())
app.use(logger())
app.use(convert(koares()))
app.use(cors())

router.get('/users', User.list)
router.post('/users', User.create)
router.get('/users/:id', User.detail)
router.put('/users/:id', User.update)
router.delete('/users/:id', User.delete)

app.use(router.routes()).use(router.allowedMethods());

app.listen(3300)