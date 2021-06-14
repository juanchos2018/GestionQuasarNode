'use strict'

const express = require('express')
const port = (process.env.PORT || 3050)
var cors =require('cors');
// Inizializations

const app = express()

// settings

app.set('port', port)

// middlewares

app.use(express.urlencoded({extended: false}))
app.use(express.json())
app.use(cors());
// Routes

app.use(require('./routes/cars.route'))
app.use(require('./routes/metodologia.route'))
app.use(require('./routes/PlantillaElemento.route'))
app.use(require('./routes/elemento.route'))
app.use(require('./routes/Proyecto.route'))
app.use(require('./routes/Miembro.route'))
app.use(require('./routes/Fases.route'))
app.use(require('./routes/CronogramaElemento.route'))
module.exports = app