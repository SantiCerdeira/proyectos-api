import express from "express";
import * as projectsController from "../controllers/projects-controller.js";

const router = express.Router() 

router.get('/', projectsController.projectHomePage)
router.get('/mobile', projectsController.mobilePage)
router.get('/landing', projectsController.landingPage)
router.get('/webapp', projectsController.webPage)
router.get('/ecommerce', projectsController.ecommercePage)
router.get('/game', projectsController.gamesPage)


export default router