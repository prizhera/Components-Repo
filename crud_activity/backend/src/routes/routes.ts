import { Router } from "express";
import { getData, createData, updateData, deleteData } from "../controllers/controller";

const router = Router();

router.get("/data", getData);
router.post("/data", createData);
router.put("/data/:id", updateData);
router.delete("/data/:id", deleteData);

export default router;