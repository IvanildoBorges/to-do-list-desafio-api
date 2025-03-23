import { Router } from "express";
import { homeController } from "../controllers/home.controller";

const router = Router();

// Rota inicial da API
router.get('/', homeController);

export default router;