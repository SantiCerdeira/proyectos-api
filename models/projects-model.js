import { MongoClient, ObjectId } from 'mongodb'

const client = new MongoClient('mongodb://127.0.0.1:27017')
const db = client.db('AH20231CP1')

async function  getProjects( filter = {}) {
    const filterMongo = { deleted: { $ne: true }}
    

    if(filter?.section) {
        filterMongo.$text = {$search: filter.section}
    }

    if(filter?.tech) {
        filterMongo.technologies = { $in: [filter.tech] };
    }

    if (filter?.clientId) {
        filterMongo.clientId = filter.clientId;
    }

    await client.connect()

    return db.collection('Projects').find(filterMongo).toArray()
}

async function createProject(project){
    await client.connect()
  
    const projects = db.collection('Projects')
  
    await projects.insertOne(project)
  
    return project
  }

async function editProject(id, project) {
    await client.connect()

    await db.collection('Projects').updateOne({_id : new ObjectId(id)} ,{$set: project})

    return project
}

async function deleteProject(id) {
    await client.connect()
  
    await db.collection('Projects').findOneAndUpdate({_id : new ObjectId(id)}, { $set: { deleted: true } })
  
    return {
      _id: id,
    }
}

export {
    getProjects,
    createProject,
    editProject,
    deleteProject
}