import { IDemoRepository } from "../interfaces/IDemoRepository";

export class DemoService {
  constructor(private demoRepository: IDemoRepository) {}

  async handle(): Promise<String> {
    const value = await this.demoRepository.RequestData();
    return value;
  }
}
