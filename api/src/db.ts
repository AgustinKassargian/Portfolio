
import mongoose from 'mongoose';
require('dotenv').config();
//const { MongoClient, ServerApiVersion } = require('mongodb');

const {USER_DB, PASSWORD_DB, CLUSTER} = process.env
//const LINK = `mongodb+srv://${USER_DB}:${PASSWORD_DB}@${CLUSTER}.xrmvdvc.mongodb.net/?retryWrites=true&w=majority`;
const NEWLINK = `mongodb+srv://${USER_DB}:${PASSWORD_DB}@${CLUSTER}.wknn4vi.mongodb.net/?retryWrites=true&w=majority`
//mongodb+srv://${USER_DB}:${PASSWORD_DB}@${CLUSTER}.wknn4vi.mongodb.net/?retryWrites=true&w=majority
async function databaseConnection() {
    try {
        console.log(USER_DB)
        const connectionToDatabase = await mongoose.connect(NEWLINK)
        console.log('Server is connected. Welcome!')
    } catch (error) {
        console.log(error)
    }
    
}
databaseConnection();
export default databaseConnection;