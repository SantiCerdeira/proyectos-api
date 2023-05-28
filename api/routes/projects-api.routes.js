import { Router } from "express";
import * as projectsController from "../controllers/projects-api-controller.js";

const router = Router();

router.get('/projects', projectsController.getProjects)
router.post('/projects', projectsController.createProject)
router.patch('/projects/:_id', projectsController.updateProject)
router.delete('/projects/:_id', projectsController.deleteProject)
router.get('/projects/:clientId', projectsController.getProjectsByCliente)



export default router;
