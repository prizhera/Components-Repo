import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import crudRoutes from "./routes/routes";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use("/api", crudRoutes);

app.listen(PORT, () => {
  console.log(`server is running on http://localhost:${PORT}`);
});
