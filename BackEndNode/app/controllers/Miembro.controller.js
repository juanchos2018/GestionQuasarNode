'use strict'
//metodologia
const dataModels = require('../models/Miembro.model')
const connection = require('../../config/connection')

async function Listar(req, res) {
    dataModels.Listar((data, error) => {
        // 404 500
        res.json(data)
    })
}


module.exports = {
    Listar, 
 
}