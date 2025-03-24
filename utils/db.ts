import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGO_URI!;

const connectDB = async () => {
  try {
    if (mongoose.connection.readyState >= 1) {
      console.log('✅ Already connected to MongoDB');
      return;
    }
    await mongoose.connect(MONGODB_URI);
    console.log('✅ Connected to MongoDB');
  } catch (error) {
    console.error('❌ MongoDB connection error:', error);
    throw new Error('Database connection failed');
  }
};

export default connectDB;
