'use strict'
//metodologia
const route = require('express').Router()
const { Listar,FasesMetodologia} = require('../controllers/metodologia.controller')

route.route('/metodologia/Listar').get(Listar)
route.route('/metodologia/Fases/:id').get(FasesMetodologia)



module.exports = route