const {worksMock} = require('../mocks/works');
const MongoLib = require('../lib/mongo');

class WorksService{    
    constructor(){
        this.collection = 'works';
        this.mongoDb = new MongoLib();
    }
    async getWorks({tags}){
        const query = tags && {tags: {$in: tags}}
        const works = await this.mongoDb.getAll(this.collection, query);
        return works || [];
    }

    async getWork({workId}){
        const getWork = await this.mongoDb.get(this.collection, workId);
        return getWork || {};
    }

    async createWork({work}){
        const createWork = await this.mongoDb.create(this.collection, work);
        return createWork;
    }

    async updateWork({workId, work}){
        const updateWork = await this.mongoDb.update(this.collection,workId, work);
        return updateWork;
    }

    async deleteWork({workId}){
        const deleteWork = await this.mongoDb.delete(this.collection,workId);
        return deleteWork;
    }
}

module.exports = WorksService;