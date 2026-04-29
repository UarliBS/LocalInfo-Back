import mongoose from "mongoose";

const connectDatabase = async () => {
  if (!process.env.MONGODB_URI) {
    throw new Error("MONGODB_URI não configurada");
  }

  await mongoose.connect(process.env.MONGODB_URI);
  console.log("MongoDB conectado com sucesso!");
};

export default connectDatabase;
