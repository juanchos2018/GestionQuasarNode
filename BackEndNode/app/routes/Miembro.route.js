'use strict'

const route = require('express').Router()
const { Listar} = require('../controllers/Miembro.controller')

route.route('/Miembro/Listar').get(Listar)

module.exports = route