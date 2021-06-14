'use strict'
//metodologia
const dataModels = require('../models/Proyecto.model')
const connection = require('../../config/connection')

function AgregarProyecto (req, res) {
    const {nombre_proyecto,fecha_inicio,fecha_termino,descripcion,estado,metodologiaId,usuariojefeId,porcentaje,ListaFases} =  req.body   
    dataModels.AgregarProyecto({nombre_proyecto,fecha_inicio,fecha_termino,descripcion,estado,metodologiaId,usuariojefeId,porcentaje,ListaFases}, (data, error) => {
        res.json(data)
    })
}
async function Listar(req, res) {
    dataModels.Listar((data, error) => {    
        res.json(data)
    })
}

function ListarFasesProyecto(req, res) {   
    const { id } = req.params
    dataModels.ListarFasesProyecto(id, (data, error) => {
        res.json(data)
    })
}
module.exports = {
    Listar, 
    AgregarProyecto,
    ListarFasesProyecto
}