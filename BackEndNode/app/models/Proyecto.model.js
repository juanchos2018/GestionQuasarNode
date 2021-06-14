'use strict'

const connection = require('../../config/connection')
const dataCronograma = require('./Cronograma.model')
const dataCronogramaFase=require('./CronogramaFase.model')
var dataModels = {

    AgregarProyecto  :  (data, callback) => {
        if(connection) {
            let sql = `insert  into proyecto (nombre_proyecto,fecha_inicio,fecha_termino,descripcion,estado,metodologiaId,usuariojefeId,porcentaje) 
            values (${connection.escape(data.nombre_proyecto)}, ${connection.escape(data.fecha_inicio)}, ${connection.escape(data.fecha_termino)},${connection.escape(data.descripcion)},
            ${connection.escape(data.estado)}, ${connection.escape(data.metodologiaId)},${connection.escape(data.usuariojefeId)},"0")`
            connection.query(sql, (error,result, rows) => {
                if(error) throw error
            
               let coronogramaId;
               var dataCrono={fecha_inicio:data.fecha_inicio,fecha_termino:data.fecha_termino,id_proyecto:result.insertId}
               dataCronograma.AgregarCronograma(dataCrono, (dato, error)=>{                 
                    coronogramaId=dato.idCronograma;
                    let size=data.ListaFases.length;           
                    let vector=[];
                    data.ListaFases.forEach((row) => {    
                        var datacrono1={coronogramaId:coronogramaId,nombre:row.nombre,id_fase:row.id_fase,porcentaje:data.porcentaje,porcentaje_avance:'0'}
                        dataCronogramaFase.AgregarCronogramaFase(datacrono1,(data,error)=>{  
                            vector.push({
                                id_cronograma_fase:   data.idCronograma_fase,
                                nombre:               row.nombre,
                                id_fase:              row.id_fase,
                                });                          
                           if (size==vector.length){
                             callback(vector)
                            } 
                      });                    
                  })
              })             
           })
        }
    },
    Listar : (callback) => {
        if(connection) {
            var series=[];
            var data=[];
            var listaMiembro=[];
            var contador=0;
            var datos= [];       
            var charOptions={
                labels:datos
            }         
            let sql = `SELECT p.id_proyecto,p.codigo_proyecto,p.nombre_proyecto,p.fecha_inicio,p.fecha_termino,p.descripcion,p.estado ,
            m.nombre FROM proyecto AS p
            INNER JOIN metodologia AS m
            ON p.metodologiaId=m.id_metodologia`
            connection.query(sql, (error, rows) => {
                if(error) throw error              
                 rows.forEach( (row) => {                                     
                            data.push({
                                id_proyecto:       row.id_proyecto,
                                codigo_proyecto:   row.codigo_proyecto,
                                nombre_proyecto:   row.nombre_proyecto,
                                fecha_inicio:      row.fecha_inicio,
                                fecha_termino:     row.fecha_termino,
                                descripcion:       row.descripcion,
                                estado:            row.estado,
                                nombre_metodologia:row.nombre,
                                listaMiembro:      listaMiembro,
                                series:            series,
                                index:             contador,
                                charOptions:       charOptions });
                            contador++;    
                        });                                 
                  callback(data)
            })
        }
    },
    ListarFasesProyecto:(data,callback) =>{
        if(connection) {
            var series=[];
            var data1=[];
            var listaMiembro=[];
            var contador=0;
            var datos= [];       
            var charOptions={
                labels:datos
            }         
            let sql = `SELECT  crono.id_cronograma_fase,pro.id_proyecto,crono.id_fase,crono.nombre , crono.porcentaje,crono.porcentaje_avance FROM  cronogramafase AS crono 
            INNER JOIN cronograma AS cr
            ON crono.coronogramaId  =cr.id_cronograma
            INNER JOIN proyecto AS pro
            ON pro.id_proyecto=cr.id_proyecto   
            WHERE pro.id_proyecto=${connection.escape(data)}`
            connection.query(sql, (error, rows) => {
                if(error) throw error              
                 rows.forEach( (row) => {                                     
                        datos.push({
                                id_cronograma_fase:   row.id_cronograma_fase,
                                id_fase:              row.id_fase,
                                nombre_fase:          row.nombre,
                                title:                row.nombre,
                                index:                contador,
                                porcentaje:           row.porcentaje,
                                porcentaje_avance:    row.porcentaje_avance
                                   });
                            contador++;    
                        });                                 
                  callback(datos)
            })
        }
    }
    
  
}

module.exports = dataModels
