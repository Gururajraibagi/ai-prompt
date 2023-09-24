import mongoose from "mongoose";

let isconnected = false; //tract conn

export const connectToDb = async () => {
  mongoose.set("strictQuery", true);

  if (isconnected) {
    console.log("mongoDB is already connected");
    return;
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: "share_prompt",
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    isconnected = true;
    console.log("connected");
  } catch (err) {
    console.log("error occured: ", err);
  }
};
