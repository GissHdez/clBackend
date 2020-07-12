const express = require('express');
var cors = require('cors')
const app =  express();

const {config} = require('./config/index');
const worksApi = require('./routes/works');

app.use(cors())
app.use(express.json())

worksApi(app);

app.listen(config.port, function(){
    console.log(`Escuchando en http://localhost:${config.port}`)
})