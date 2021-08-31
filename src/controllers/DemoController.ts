import { Request, Response, NextFunction } from "express";
import { HttpException } from "../exceptions/HttpExcepetion";
import { DemoService } from "../services/DemoService";

export class DemoController {
  constructor(private demoService: DemoService) {}

  async index(request: Request, response: Response, next: NextFunction) {
    const value = await this.demoService.handle();
    return response.json({ message: value });
  }

  async post(request: Request, response: Response, next: NextFunction) {
    try {
      const value = await this.demoService.Insert(request.body);
      return response.json({ message: value });
    } catch (err: unknown) {
      return next(err);
    }
  }

  async error(request: Request, response: Response, next: NextFunction) {
    try {
      throw new HttpException(400, "Custom Controller Error!");
    } catch (err: unknown) {
      next(err);
    }
  }
}
