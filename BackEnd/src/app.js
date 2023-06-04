import express from "express";
import route from "../Routes/product";
import routeUser from "../Routes/User";
import mongoose from "mongoose";
import cors from 'cors'

const app = express();
app.use(express.json());


const { API } = process.env;

app.use(cors())
app.use("/api", route);
app.use("/api", routeUser);
mongoose.connect(API);

export const viteNodeApp = app;
