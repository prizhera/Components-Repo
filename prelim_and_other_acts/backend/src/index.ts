import express, {Request, Response} from "express";
import cors from "cors";
import dotenv from "dotenv";
import { createClient } from "@supabase/supabase-js";
import employeeRoute from "./routes/employeeRoute";

dotenv.config();

const supabase = createClient(
  process.env.SUPABASE_URL || "",
  process.env.SUPABASE_KEY || ""
);

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("running");
});
app.use("/api", employeeRoute); 

app.listen(PORT, () => {
  console.log(`listening on PORT: ${PORT} \n successfully connected to DB`);
});

