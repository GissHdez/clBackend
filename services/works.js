const {worksMock} = require('../mocks/works');

class WorksService{
    async getWorks(){
        const works = await Promise.resolve(worksMock);
        return works || [];
    }

    async getWork(){
        const getWork = await Promise.resolve(worksMock[3]);
        return getWork || {};
    }

    async createWork(){
        const createWork = await Promise.resolve(worksMock[3].id);
        return createWork;
    }

    async updateWork(){
        const updateWork = await Promise.resolve(worksMock[3].id);
        return updateWork;
    }

    async deleteWork(){
        const deleteWork = await Promise.resolve(worksMock[3].id);
        return deleteWork;
    }
}

module.exports = WorksService;