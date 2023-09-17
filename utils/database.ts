import mongoose, { ConnectOptions } from "mongoose";

let isConnected = false;

export default async function connectToDB()  {
  mongoose.set("strictQuery", true);

  const MONGODB_URI = process.env.MONGODB_URI;

  if (!MONGODB_URI) {
    throw new Error(
      "Please define the MONGODB_URI environment variable inside .env.local"
    );
  }

  if (isConnected) {
    console.log("Mongo DB is already connected");
    return;
  }


  try {
    await mongoose.connect(MONGODB_URI || "", {
      dbName: "Users",
      useNewUrlParser: true,
      useUnifiedTopology: true,
    } as ConnectOptions);

    isConnected = true;

    console.log("MongoDB connected");
    
  } catch (error) {
    console.log(error);
  }
};
