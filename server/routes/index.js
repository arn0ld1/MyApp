import express from "express";
import userRoutes from "./userRoutes.js";
import taskRoutes from "./taskRoutes.js";
import lawyer from './Lawyers.js';


const router = express.Router();

router.use("/user", userRoutes); 
router.use("/task", taskRoutes);
router.use("/lawyer", lawyer);


export default router;