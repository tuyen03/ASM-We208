import express from "express";

const route = express.Router();

route.get("/product", () => {
  console.log("SuccessFully");
});

export default route;
