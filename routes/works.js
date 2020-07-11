const express = require('express')
const WorksService = require('../services/works')

function worksApi(app){
    const router = express.Router();
    app.use('/api/works', router);

    const worksService = new WorksService();
    
    router.get('/', async function(req, res, next){
        const {tags} = req.query;
        try{
            const works = await worksService.getWorks({tags});
            res.status(200).json({
                message: 'Las tareas se listaron correctamente',
                data: works
            })
        }catch{
            next(err)
        }        
    })

    router.get('/:workId', async function(req, res, next){
        const {workId} = req.params
        try{
            const getWork = await worksService.getWork({workId});
            res.status(200).json({
                message: 'La tarea se listó correctamente',
                data: getWork
            })
        }catch{
            next(err)
        }        
    })

    router.post('/', async function(req, res, next){
        const {body: work} = req
        try{
            const createWork = await worksService.createWork({work});
            res.status(201).json({
                message: 'La tarea se creó correctamente',
                data: createWork
            })
        }catch{
            next(err)
        }        
    })

    router.put('/:workId', async function(req, res, next){
        const {workId} = req.params
        const {body: work} = req
        try{
            const updateWork = await worksService.updateWork({workId, work});
            res.status(200).json({
                message: 'La tarea se actualizó correctamente',
                data: updateWork
            })
        }catch{
            next(err)
        }        
    })

    router.delete('/:workId', async function(req, res, next){
        const {workId} = req.params
        try{
            const deleteWork = await worksService.deleteWork({workId});
            res.status(200).json({
                message: 'La tarea se eliminó correctamente',
                data: deleteWork
            })
        }catch{
            next(err)
        }        
    })
}

module.exports = worksApi;