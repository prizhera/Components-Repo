import { Request, Response } from "express";
import { createClient } from "@supabase/supabase-js";
import dotenv from "dotenv";

dotenv.config();

const supabase = createClient(
  process.env.SUPABASE_URL || "",
  process.env.SUPABASE_KEY || ""
);

export const getEmployees = async (req: Request, res: Response): Promise<void> => {
  try {
    const { data, error } = await supabase.from("Employee").select("*");

    if (error) {
      console.error("error fetching employees:", error.message);
      res.status(500).json({ message: "failed to fetch emloyees" }); ]
      return;
    }

    res.json(data); 
  } catch (err) {
    console.error("unexpected server error:", err);
  }
};
