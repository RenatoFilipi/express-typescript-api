import { IDemoRepository } from "../interfaces/IDemoInterface";

export class DemoRepository implements IDemoRepository {
  async RequestData(): Promise<String> {
    return "RequestData func from DemoRepo!";
  }
}
