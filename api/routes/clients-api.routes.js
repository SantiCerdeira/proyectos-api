import { Router } from "express";
import * as clientsController from "../controllers/clients-api-controller.js";

const router = Router();

router.get('/clients', clientsController.getClients)
router.post('/clients', clientsController.createClient)

export default router;