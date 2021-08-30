import { Router, Request, Response, request } from "express";
import { demoController } from "../utils/DependecyResolver";

const demoRouter = Router();

demoRouter.get("/demo/index", (request: Request, response: Response) => {
  return demoController.index(request, response);
});

demoRouter.post("/demo/post", (request: Request, response: Response) => {
  return demoController.post(request, response);
});

export { demoRouter };
