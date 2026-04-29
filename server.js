import "dotenv/config";
import app from "./app.js";
import connectDatabase from "./src/database/db.js";

const port = process.env.PORT || 3010;

try {
  await connectDatabase();
  app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
  });
} catch (error) {
  console.error("Falha ao iniciar a aplicação:", error.message);
  process.exit(1);
}
