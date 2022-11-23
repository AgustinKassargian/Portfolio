
import mongoose from 'mongoose';
require('dotenv').config();

const {USER_DB, PASSWORD_DB, CLUSTER} = process.env
const NEWLINK = `mongodb+srv://${USER_DB}:${PASSWORD_DB}@${CLUSTER}.wknn4vi.mongodb.net/?retryWrites=true&w=majority`
async function databaseConnection() {
    try {
        const connectionToDatabase = await mongoose.connect(NEWLINK)
        console.log('Server is connected. Welcome!')
    } catch (error) {
        console.log(error)
    }
    
}
databaseConnection();
export default databaseConnection;