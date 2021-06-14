'use strict'

const connection = require('../../config/connection')

var dataModels = {
    AgregarCronogramaFase : (data, callback) => {
        if(connection) {
            let sql = `insert into cronogramafase(coronogramaId,nombre,id_fase,porcentaje,porcentaje_avance) values 
            (${connection.escape(data.coronogramaId)}, ${connection.escape(data.nombre)},${connection.escape(data.id_fase)},${connection.escape(data.porcentaje)},${connection.escape(data.porcentaje_avance)})`
            connection.query(sql, (error,result, rows) => {
                if(error) throw error             
                callback({idCronograma_fase : result.insertId})
            })
        }
    }
}

module.exports = dataModels
