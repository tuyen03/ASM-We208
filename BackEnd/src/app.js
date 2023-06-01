import express from "express";
import route from "../Routes/product";
import mongoose from "mongoose";

const app = express();
app.use(express.json());

const { API } = process.env;

app.use("/api", route);
mongoose.connect(API);

export const viteNodeApp = app;
