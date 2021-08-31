import { Router, Request, Response, NextFunction } from "express";
import { demoController } from "../utils/DependecyResolver";

const demoRouter = Router();

demoRouter.post("/demo/starwars", (request: Request, response: Response, next: NextFunction) => {
  return demoController.starwars(request, response, next);
});

export { demoRouter };
