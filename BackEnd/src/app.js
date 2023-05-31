import express from "express";
import route from "../Routes/product";

const app = express();
app.use(express.json());

app.use("/api", route);

export const viteNodeApp = app;
