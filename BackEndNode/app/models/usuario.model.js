'use strict'

const connection = require('../../config/connection')

var dataModels = {
   
    Listar : (callback) => {
        if(connection) {
            let sql = `SELECT usu.id_usuario,usu.nombre,usu.apellido,usu.correo,tipo.nombre as tipousuario  FROM  usuario AS usu 
            INNER  JOIN tipousuario AS tipo
            ON usu.tiposusuarioId =tipo.id_tipo`
            connection.query(sql, (error, rows) => {
                if(error) throw error
                callback(rows)
            })
        }
    },   
    ListaProyectoMiembro: (data, callback) => {      
           if(connection) {
               let sql = `SELECT  mi.id ,ro.nombre,pro.id_proyecto, pro.nombre_proyecto,pro.estado, pro.fecha_inicio,pro.fecha_termino FROM miembroproyecto AS mi 
               INNER JOIN rol AS ro
               ON ro.id_rol =mi.rolId 
               INNER JOIN proyecto AS pro
               ON mi.proyectoId=pro.id_proyecto
               WHERE mi.usuario_miembroid= ${connection.escape(data)}`   
               connection.query(sql, (error, rows) => {
                   if(error) throw error
                   callback(rows)
               })
           }
       },    
}

module.exports = dataModels
