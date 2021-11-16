import { Request, Response, NextFunction } from "express";
import { DemoService } from "../services/DemoService";

export class DemoController {
  constructor(private demoService: DemoService) {}

  async starwars(request: Request, response: Response, next: NextFunction) {
    try {
      const character = await this.demoService.starwars(request.body);
      return response.json({ character });
    } catch (error: unknown) {
      return next(error);
    }
  }

  async health(request: Request, response: Response, next: NextFunction) {
    try {
      const date = new Date();
      return response.json({ msg: "OK", timestamp: date });
    } catch (error: unknown) {
      return next(error);
    }
  }
}
