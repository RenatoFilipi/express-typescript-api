import { Request, Response } from "express";
import { DemoService } from "../services/DemoService";

export class DemoController {
  constructor(private demoService: DemoService) {}

  async index(request: Request, response: Response): Promise<Response> {
    const value = await this.demoService.handle();
    return response.json({ message: value });
  }
}
