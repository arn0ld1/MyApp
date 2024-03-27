
// routes/Lawyers.js
import  Lawyer  from "../models/lawyer.js";
import { Router } from 'express';
import { addLawyer } from '../controllers/lawyer-controller.js';
import { isAdminRoute, protectRoute } from "../middlewares/authMiddlewave.js";

const router = Router();

router.get("/", async (req, res) => {
    try {
      const lawyers = await Lawyer.find({});
      res.status(200).json(lawyers);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });

router.post('/add-lawyer', protectRoute, isAdminRoute, addLawyer);

export default router;