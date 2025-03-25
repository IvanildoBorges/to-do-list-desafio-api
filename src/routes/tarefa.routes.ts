import { Router } from "express";
import {
    cria,
    deleta,
    deletaTudo,
    lista,
    listaCompletas,
    listaUma
} from "../controllers/tarefa.controller";

const router = Router();

// CRUD
router.get("/", lista);
router.get("/tarefa/:id", listaUma);
router.get("/concluidas", listaCompletas);
router.post("/", cria);
router.delete("/:id", deleta);
router.delete("/", deletaTudo);

export default router;