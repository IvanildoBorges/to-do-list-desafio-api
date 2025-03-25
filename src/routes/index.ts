import { Router } from "express";
import { homeController } from "../controllers/home.controller";
import tarefaRoutes from "./tarefa.routes";

const router = Router();

// Rota inicial
router.get('/', homeController);

// Demais rotas abaixo
router.use("/tarefas", tarefaRoutes);

export default router;