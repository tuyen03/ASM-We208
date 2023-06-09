import express from "express";
import { Create_order, Delete_order, Get_All_order, Get_one_order, Put_order } from "../Controllers/order";

const router = express.Router();

router.post("/order", Create_order);
router.get("/order", Get_All_order);
router.get("/order/:id", Get_one_order);
router.put("/order/:id", Put_order);
router.delete("/order/:id", Delete_order);

export default router;
