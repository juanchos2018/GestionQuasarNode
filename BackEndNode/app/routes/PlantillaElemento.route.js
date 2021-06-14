'use strict'

const route = require('express').Router()
const { ListarPlantillaElemento,ListaElementosFase,AgregarPlantillaElemento} = require('../controllers/PlantillaElemento.controller')

route.route('/PlantillaElemento/ListarPlantilla').get(ListarPlantillaElemento)

route.route('/PlantillaElemento/:id').get(ListaElementosFase)
route.route('/PlantillaElemento/Agregar').post(AgregarPlantillaElemento)


module.exports = route