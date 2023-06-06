import express from "express";
import {
  Create_Product,
  Delete_Product,
  Get_All_Product,
  Get_one_Product,
  Put_Product,
} from "../Controllers/Product";

const route = express.Router();

route.post("/product", Create_Product);
route.get("/product", Get_All_Product);
route.get("/product/:id", Get_one_Product);
route.put("/product/:id", Put_Product);
route.delete("/product/:id", Delete_Product);

export default route;
