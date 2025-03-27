import { Router } from "express";
import {
    atualiza,
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
router.put("/tarefa/atualizar/", atualiza);
router.delete("/excluir/", deleta);
router.delete("/excluir/tudo", deletaTudo);

export default router;