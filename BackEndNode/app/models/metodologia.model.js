'use strict'

const connection = require('../../config/connection')

var dataModels = {
    Listar : (callback) => {
        if(connection) {
            let sql = `select * from metodologia`
            connection.query(sql, (error, rows) => {
                if(error) throw error
                callback(rows)
            })
        }
    },
    FasesMetodologia : (data, callback) => {
    //    console.log("el id : ", data)
        var tabla=[];
        var Lista=[];
        var contador=0;
        if(connection) {
            let sql = `SELECT f.id_fase,f.nombre_fase,me.nombre,me.id_metodologia FROM fase AS f
            INNER JOIN metodologia AS me
            ON f.metodologiaId=me.id_metodologia
            WHERE me.id_metodologia= ${connection.escape(data)}`
            connection.query(sql, (error, rows) => {
                if(error) throw error
                rows.forEach( (row) => {                                     
                    Lista.push({
                        id_fase:           row.id_fase,
                        nombre_fase:       row.nombre_fase,
                        nombre:            row.nombre,
                        id_metodologia:    row.id_metodologia,                        
                        index:             contador,
                        tabla :            tabla
                      });
                    contador++;    
                }); 
                callback(Lista)
            })
        }
    },
    
    
  
}

module.exports = dataModels
