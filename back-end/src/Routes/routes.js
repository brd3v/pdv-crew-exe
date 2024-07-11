const express = require('express')
const routes = express.Router()
const crudUser = require('../Controller/crudUser')

routes.post('/addUser', crudUser.addUser)
routes.get('/allUser', crudUser.allUser)

module.exports = routes