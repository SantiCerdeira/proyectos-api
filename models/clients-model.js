import { MongoClient, ObjectId } from 'mongodb'

const clientDB = new MongoClient('mongodb://127.0.0.1:27017')
const db = clientDB.db('AH20231CP1')

async function getClients() {

    await clientDB.connect()

    return db.collection('Clients').find().toArray()
}

async function createClient(client){
    await clientDB.connect()
  
    const clients = db.collection('Clients')
  
    await clients.insertOne(client)
  
    return client
}

export {
    getClients,
    createClient
}