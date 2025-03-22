import express from "express"
import { getEmployees } from "../controllers/employeeController"
const router = express.Router()

router.route("/employees").get(getEmployees);


export default router