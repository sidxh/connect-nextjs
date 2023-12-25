// utils/connectDB.ts

import mongoose from 'mongoose';
require('dotenv').config();
const MONGODB_URI = process.env.MONGODB_URI; // Use environment variable for security

if (!MONGODB_URI) {
    throw new Error('MONGODB_URI is not defined in .env file');
  }

const connectDB = async () => {
    try {
        if (mongoose.connection.readyState === 0) {
            await mongoose.connect(MONGODB_URI);
            console.log('Connected to MongoDB');
        } else {
            console.log('MongoDB connection state:', mongoose.connection.readyState);
        }
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }
};

export default connectDB;
