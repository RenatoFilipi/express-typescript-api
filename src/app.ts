import express from "express";
import { demoRouter } from "./routes/DemoRoutes";

const app = express();
app.use(express.json());
app.use(demoRouter);

app.use((request, response) => {
  return response.status(404).json({ Error: 404 });
});

export { app };
