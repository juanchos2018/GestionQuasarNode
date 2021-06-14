'use strict'

const connection = require('../../config/connection')

var dataModels = { 
    AgregarFase : (data, callback) => {
        if(connection) {
            let sql = `insert into fase(nombre_fase, metodologiaId) values (${connection.escape(data.nombre_fase)}, ${connection.escape(data.metodologiaId)})`

            connection.query(sql, (error, rows) => {
                if(error) throw error
                callback({message : ' insertado fase'})
            })
        }
    },
   
   
}

module.exports = dataModels
