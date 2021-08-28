import { DemoService } from "../services/DemoService";
import { DemoController } from "../controllers/DemosController";

const demoService = new DemoService();
const demoController = new DemoController(demoService);

export { demoController };
