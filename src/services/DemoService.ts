import { IDemoRepository } from "../interfaces/IDemoInterface";
import { HttpException } from "../exceptions/HttpExcepetion";

export class DemoService {
  constructor(private demoRepository: IDemoRepository) {}

  async handle() {
    const value = await this.demoRepository.RequestData();
    return value;
  }

  async Insert(data: any) {
    const { name } = data;
    if (!name.trim().length) {
      throw new HttpException(400, "Invalid name!");
    }
    return "Insert func from DemoService!";
  }
}
