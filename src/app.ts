import express from "express";
import { demoRouter } from "./routes/DemoRoutes";

const app = express();
app.use(express.json());
app.use(demoRouter);

export { app };
