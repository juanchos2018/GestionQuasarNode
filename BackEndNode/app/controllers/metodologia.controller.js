'use strict'
//metodologia
const dataModels = require('../models/metodologia.model')
const connection = require('../../config/connection')

async function Listar(req, res) {
    dataModels.Listar((data, error) => {
        // 404 500
        res.json(data)
    })
}

function FasesMetodologia(req, res) {   
    const { id } = req.params
    dataModels.FasesMetodologia(id, (data, error) => {
        res.json(data)
    })
}
module.exports = {
    Listar,
    FasesMetodologia
 
}