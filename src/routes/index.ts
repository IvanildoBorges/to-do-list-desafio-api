import { Router } from "express";
import { homeController } from "../controllers/home.controller";

const router = Router();

// Rota inicial
router.get('/', homeController);

// Demais rotas abaixo

export default router;