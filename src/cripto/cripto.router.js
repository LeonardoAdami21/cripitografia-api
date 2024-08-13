import express from "express";
import { criptoController } from "./cripto.controller.js";
const criptoRouter = express.Router();

criptoRouter.post("/", criptoController.create);

export default criptoRouter;
