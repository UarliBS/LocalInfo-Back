import mongoose from "mongoose";

const connectDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("MongoDB conectado com sucesso!");
  } catch (err) {
    console.error("Erro ao conectar com o MongoDB:", err.message);
  }
};

export default connectDatabase;
