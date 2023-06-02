import express from "express";
import {
  Create_Category,
  Delete_Category,
  Get_All_Category,
  Get_One_Category,
  Put_Category,
} from "../Controllers/Category";

const Category = express.Router();

Category.post("/category", Create_Category);
Category.get("/category", Get_All_Category);
Category.get("/category/:id", Get_One_Category);
Category.put("/category/:id", Put_Category);
Category.delete("/category/:id", Delete_Category);

export default Category;
