import express from "express";
import cors from "cors";
import router from "./src/routes/index.js";
import connectDatabase from "./src/database/db.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use(router);

// conectar ao banco ANTES de exportar o app
connectDatabase();

export default app;
