import mongoose from 'mongoose';

let isConnected: boolean = false; // variable to check if mongoose is connected

export const connectToDB = async () => {
  mongoose.set('strictQuery', true);
  if(!process.env.MONGODB_URL) return console.log('No MONGO_URI provided');
  if (isConnected) return console.log('=> Already connected to database');

  try {
    await mongoose.connect(process.env.MONGODB_URL);
    isConnected = true;
    console.log('=> Connected to database');
  }
  catch (error) {
    console.log('=> Error connecting to database:', error);
  }
}