import express from "express";
import route from "../Routes/product";
import routeUser from "../Routes/User";
import mongoose from "mongoose";
import cors from "cors";
import Category from "../Routes/Category";

const app = express();
app.use(express.json());
app.use(cors());

const { API } = process.env;

app.use(cors());
app.use("/api", route);
app.use("/api", routeUser);
app.use("/api", Category);

mongoose.connect(API);

export const viteNodeApp = app;
