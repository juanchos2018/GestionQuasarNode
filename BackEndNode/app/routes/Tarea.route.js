'use strict'

const route = require('express').Router()
const { Listar,AgregarTarea,editar,ObtenerTarea,ListaTotalTarea} = require('../controllers/Tarea.controller')

route.route('/Tarea/Listar/:id').get(Listar)
route.route('/Tarea/AgregarTarea').post(AgregarTarea)
route.route('/Tarea/editar/:id_tarea').put(editar)
route.route('/Tarea/ObtenerTarea/:id').get(ObtenerTarea)
route.route('/Tarea/ListaTotalTarea').get(ListaTotalTarea)

module.exports = route