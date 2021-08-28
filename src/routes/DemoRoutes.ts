import { Router, Request, Response } from "express";
import { demoController } from "../utils/DependecyResolver";

const demoRouter = Router();

demoRouter.get("/demo/index", (request: Request, response: Response) => {
  return demoController.index(request, response);
});

export { demoRouter };
