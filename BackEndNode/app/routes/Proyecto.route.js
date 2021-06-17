'use strict'

const route = require('express').Router()
const { Listar,AgregarProyecto,ListarFasesProyecto,ProyectoDetail,ListaElementosFaseProyecto,UpdatatePorcentaje} = require('../controllers/Proyecto.controller')

route.route('/Proyecto/Listar').get(Listar)
route.route('/Proyecto/Agregar').post(AgregarProyecto)
route.route('/Proyecto/ListarFasesProyecto/:id').get(ListarFasesProyecto)
route.route('/Proyecto/ProyectoDetail/:id').get(ProyectoDetail)
route.route('/Proyecto/ProyectoFasesElemento').post(ListaElementosFaseProyecto)

route.route('/Proyecto/UpdatatePorcentaje/:id').put(UpdatatePorcentaje)

//route.route('/metodologia/Fases/:id').get(FasesMetodologia)
module.exports = route