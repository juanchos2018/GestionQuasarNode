'use strict'
//metodologia
const dataModels = require('../models/usuario.model')
const connection = require('../../config/connection')

async function Listar(req, res) {
    dataModels.Listar((data, error) => {        
        res.json(data)
    })
}


function ListaProyectoMiembro(req, res) {   
    const { id } = req.params
    dataModels.ListaProyectoMiembro(id, (data, error) => {
        res.json(data)
    })
}

module.exports = {
    Listar, 
    ListaProyectoMiembro
}