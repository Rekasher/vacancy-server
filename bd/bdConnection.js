import mongoose from "mongoose";
import {config} from "dotenv";

config();

const DB_URI = process.env.DB_CONNECTION_URL

export async function connectToDB() {
    try {
        await mongoose.connect(DB_URI)
        console.log('Connected successfully to DB')
    } catch (error) {
        console.error('Error connecting to DB', error);
        throw error;
    }
}

export async function closeConnection() {
    try {
        await mongoose.connection.close()
    } catch (error) {
        console.error('Error disconnecting DB');
    }
}