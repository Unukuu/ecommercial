import mongoose from "mongoose";
export const connectDB = async (uri: string) => {
  try {
    const con = await mongoose.connect(uri);
    console.log("database connected", con.connection.host);
  } catch (error) {
    console.log("database aldaa garlaa", error);
  }
};
