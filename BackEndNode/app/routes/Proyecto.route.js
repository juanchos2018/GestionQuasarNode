'use strict'

const route = require('express').Router()
const { Listar,AgregarProyecto,ListarFasesProyecto} = require('../controllers/Proyecto.controller')

route.route('/Proyecto/Listar').get(Listar)
route.route('/Proyecto/Agregar').post(AgregarProyecto)
route.route('/Proyecto/ListarFasesProyecto/:id').get(ListarFasesProyecto)
//route.route('/metodologia/Fases/:id').get(FasesMetodologia)
module.exports = route