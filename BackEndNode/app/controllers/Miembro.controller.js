'use strict'
//metodologia
const dataModels = require('../models/Miembro.model')
const connection = require('../../config/connection')

async function Listar(req, res) {
    dataModels.Listar((data, error) => {   
        res.json(data)
    })
}
function ListaMiembrosProyecto(req, res) {    
    const { id } = req.params
    dataModels.ListaMiembrosProyecto(id, (data, error) => {
        res.json(data)       
    })
}

function AgregarMiembro (req, res) {
    const {usuario_miembroid, rolId,proyectoId} =  req.body   
    dataModels.AgregarMiembro({usuario_miembroid, rolId,proyectoId}, (data, error) => {
        res.json(data)
    })
}

function ListaTareasMiembro(req,res){
    const { id } = req.params
    dataModels.ListaTareasMiembro(id, (data, error) => {
        res.json(data)       
    })
}

module.exports = {
    Listar, 
    ListaMiembrosProyecto,
    AgregarMiembro,
    ListaTareasMiembro
}