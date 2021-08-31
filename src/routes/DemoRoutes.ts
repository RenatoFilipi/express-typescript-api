import { Router, Request, Response, NextFunction } from "express";
import { demoController } from "../utils/DependecyResolver";

const demoRouter = Router();

demoRouter.get("/demo/index", (request: Request, response: Response, next: NextFunction) => {
  return demoController.index(request, response, next);
});

demoRouter.post("/demo/post", (request: Request, response: Response, next: NextFunction) => {
  return demoController.post(request, response, next);
});

demoRouter.get("/error", (request: Request, response: Response, next: NextFunction) => {
  return demoController.error(request, response, next);
});

export { demoRouter };
