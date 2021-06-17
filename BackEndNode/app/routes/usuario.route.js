'use strict'

const route = require('express').Router()
const { Listar,ListaProyectoMiembro,ListaProyectoJefe} = require('../controllers/usuario.controller')
route.route('/Usuario/ListaProyectoJefe/:id').get(ListaProyectoJefe)
route.route('/Usuario/Listar').get(Listar)
route.route('/Usuario/Proyectos/:id').get(ListaProyectoMiembro)


module.exports = route