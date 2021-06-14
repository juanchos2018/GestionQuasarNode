'use strict'

const connection = require('../../config/connection')

var dataModels = {
    Listar : (callback) => {
        if(connection) {
            let sql = `SELECT  pro.id_proyecto,  usu.nombre  FROM  miembroproyecto AS mi 
            INNER  JOIN  proyecto AS pro
            ON pro.id_proyecto=mi.proyectoId
            INNER JOIN usuario AS usu
            ON  usu.id_usuario=mi.usuario_miembroid`
            connection.query(sql, (error, rows) => {
                if(error) throw error
                callback(rows)
            })
        }
    },
   
    
    
  
}

module.exports = dataModels
