import { MongoClient } from 'mongodb'
import { DATABASE_NAME, mongodb_uri } from './config'

let connectedClient;  

export const connectClient = async () => {
    if(connectedClient){
        return connectedClient.db(DATABASE_NAME)
    }
    const client = new MongoClient(mongodb_uri)
    await client.connect();
    await client.db(DATABASE_NAME).command({ping:1})

    console.info("connected to db")
    connectedClient = client;
    return connectedClient.db(DATABASE_NAME)
}

export const stopClient = async () => { 
    await connectedClient?.close()
}

