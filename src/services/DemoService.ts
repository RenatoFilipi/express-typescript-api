import { IDemoRepository } from "../interfaces/IDemoInterface";
import { HttpException } from "../exceptions/HttpExcepetion";

export class DemoService {
  constructor(private demoRepository: IDemoRepository) {}

  async starwars(data: any) {
    if (Object.keys(data).length === 0) {
      throw new HttpException(400, "Invalid request");
    }
    if (!data.name.trim().length) {
      throw new HttpException(400, "Name is empty");
    }
    const response = await this.demoRepository.getPeople(data);

    if (response.length === 0) {
      throw new HttpException(200, "No result found");
    }

    const character = {
      name: response[0].name,
      gender: response[0].gender,
      hairColor: response[0].hair_color,
      eyeColor: response[0].eye_color,
    };
    return character;
  }
}
