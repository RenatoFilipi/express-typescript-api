import { DemoService } from "../services/DemoService";
import { DemoController } from "../controllers/DemosController";
import { DemoRepository } from "../repositories/DemoRepository";

const demoRepository = new DemoRepository();
const demoService = new DemoService(demoRepository);
const demoController = new DemoController(demoService);

export { demoController };
