'use strict'

const route = require('express').Router()
const { Listar,ListaProyectoMiembro} = require('../controllers/usuario.controller')

route.route('/Usuario/Listar').get(Listar)
route.route('/Usuario/Proyectos/:id').get(ListaProyectoMiembro)


module.exports = route