'use strict'

const route = require('express').Router()
const { AgregarSolicitud,ListarSolicitud} = require('../controllers/Solicitud.controller')


route.route('/Solicitud/AgregarSolicitud').post(AgregarSolicitud)
route.route('/Solicitud/ListarSolicitud').get(ListarSolicitud)

module.exports = route