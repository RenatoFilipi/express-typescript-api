import { IDemoRepository } from "../interfaces/IDemoRepository";

export class DemoRepository implements IDemoRepository {
  async RequestData(): Promise<String> {
    return "RequestData function from DemoRepository!";
  }
}
