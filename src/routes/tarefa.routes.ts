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
router.post("/nova", cria);
router.delete("/excluir/", deleta);
router.delete("/excluir/tudo", deletaTudo);

export default router;