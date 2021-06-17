'use strict'

const route = require('express').Router()
const { Listar,ListaMiembrosProyecto,AgregarMiembro,ListaTareasMiembro} = require('../controllers/Miembro.controller')

route.route('/Miembro/Listar').get(Listar)
route.route('/Miembro/MiembroProyecto/:id').get(ListaMiembrosProyecto)
route.route('/Miembro/Registrar').post(AgregarMiembro)
route.route('/Miembro/TareasMiembro/:id').get(ListaTareasMiembro)
module.exports = route