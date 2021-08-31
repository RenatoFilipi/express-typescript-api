import { IDemoRepository } from "../interfaces/IDemoInterface";
import axios from "axios";

export class DemoRepository implements IDemoRepository {
  async getPeople(data: any) {
    const response = await axios.get(`https://swapi.dev/api/people/?search=${data.name}`);
    return response.data.results;
  }
}
