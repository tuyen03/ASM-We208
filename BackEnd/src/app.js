import express from "express";
import route from "../Routes/product";
import routeUser from "../Routes/User";
import mongoose from "mongoose";
import Category from "../Routes/Category";
import RouterOrder from "../Routes/Order";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());

const { API } = process.env;

app.use(cors());
app.use("/api", route);
app.use("/api", routeUser);
app.use("/api", Category);
app.use("/api", RouterOrder);

mongoose.connect(API);
export const viteNodeApp = app;
