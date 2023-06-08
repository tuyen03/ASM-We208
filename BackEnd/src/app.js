import express from "express";
import route from "../Routes/product";
import mongoose from "mongoose";
import Category from "../Routes/Category";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());

const { API } = process.env;

app.use("/api", route);
app.use("/api", Category);

mongoose.connect(API);

export const viteNodeApp = app;
