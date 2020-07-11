const express = require('express');
const app =  express();

const {config} = require('./config/index');
const worksApi = require('./routes/works');

worksApi(app);

app.listen(config.port, function(){
    console.log(`Escuchando en http://localhost:${config.port}`)
})