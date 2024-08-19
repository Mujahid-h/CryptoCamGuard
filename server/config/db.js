import mongoose from "mongoose";

const connectDb = async () => {
  try {
    const conn = await mongoose.connect(process.env.Mongo_URL);
    console.log(`Database connected: ${conn.connection.host}`.bgGreen.white);
  } catch (error) {
    console.log(`Error in database connection: ${error}`.bgRed.white);
  }
};

export default connectDb;