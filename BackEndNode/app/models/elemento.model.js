'use strict'

const connection = require('../../config/connection')

var dataModels = {
    AgregarElemento : (data, callback) => {
        if(connection) {
            let sql = `insert into elementoconfiguracion(codigo_elemento, nombre) values (${connection.escape(data.codigo_elemento)}, ${connection.escape(data.nombre)})`
            connection.query(sql, (error,result, rows) => {
                if(error) throw error
               // console.log(result.insertId);
                callback({message : ' insertado elemento, :'})
            })
        }
    },
    Listar : (callback) => {
        if(connection) {
            let sql = `select * from elementoconfiguracion`
            connection.query(sql, (error, rows) => {
                if(error) throw error
                callback(rows)
            })
        }
    },
   
    
    
  
}

module.exports = dataModels
