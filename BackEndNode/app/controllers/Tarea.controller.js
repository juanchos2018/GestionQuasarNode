'use strict'
//metodologia
const dataModels = require('../models/Tarea.model')
const connection = require('../../config/connection')

function AgregarTarea (req, res) {
    const {verionID,miembroresponsableID,fecha_inicio,fecha_termino,descripcion, porcentajeavance, urlevidencia, estado, estado1} =  req.body   
    dataModels.AgregarTarea({verionID,miembroresponsableID,fecha_inicio,fecha_termino,descripcion, porcentajeavance, urlevidencia, estado, estado1}, (data, error) => {
        res.json(data)
    })
}
async function Listar(req, res) {
    const { id } = req.params   
    dataModels.Listar(id,(data, error) => {        
        res.json(data)
    })
}
function editar(req, res) {
    const { id_tarea } = req.params
    const { urlevidencia,porcentajeavance,estado,estado1} = req.body
    dataModels.editar({id_tarea,urlevidencia,porcentajeavance,estado,estado1}, (data, error) => {
        res.json(data)
    })
}

function ObtenerTarea (req, res) {
    const {id} =   req.params  
    dataModels.ObtenerTarea(id, (data, error) => {
        res.json(data)
    })
}

function ListaTotalTarea (req, res) {
    dataModels.ListaTotalTarea((data, error) => {
        res.json(data)
    })
}

module.exports = {
    Listar, 
    AgregarTarea,
    editar,
    ObtenerTarea,
    ListaTotalTarea
}