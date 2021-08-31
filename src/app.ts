import express, { Request, Response, NextFunction } from "express";
import { HttpException } from "./exceptions/HttpExcepetion";
import { demoRouter } from "./routes/DemoRoutes";
require("express-async-errors");

const app = express();
app.use(express.json());
app.use(demoRouter);

app.use((error: unknown, request: Request, response: Response, next: NextFunction) => {
  if (error instanceof HttpException) {
    return response.status(error.status).json({ message: error.message });
  } else {
    return response.status(500).json({ message: "Unknown error" });
  }
});

app.use((request, response) => {
  return response.status(404).json({ Error: 404 });
});

export { app };
