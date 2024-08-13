import express from "express";
import cors from "cors";
import { appPort } from "./env/envoriment.js";
const app = express();
import swaggerUi from "swagger-ui-express";
import swaggerDocument from "../swagger.json" assert { type: "json" };
import criptoRouter from "./cripto/cripto.router.js";

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use("/cripto", criptoRouter);

app.listen(appPort, () => {
  console.log(`Server running on port http://localhost:${appPort}/api-docs`);
});
