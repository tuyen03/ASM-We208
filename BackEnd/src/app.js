import express from "express";
import route from "../Routes/product";
import mongoose from "mongoose";
import Category from "../Routes/Category";

const app = express();
app.use(express.json());

const { API } = process.env;

app.use("/api", route);
app.use("/api", Category);

mongoose.connect(API);

export const viteNodeApp = app;
