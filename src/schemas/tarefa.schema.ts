// src/utils/zodSchemas.ts
import { z } from "zod";

export const tarefaSchema = z.object({
  id: z.string().uuid("O identificador deve ser igual a 32 caracteres!"),
  descricao: z.string().min(1, "A descrição da tarefa não pode ser vazia!"),
  concluida: z.boolean(),
  criadoEm: z.date().optional(),
  atualizadoEm: z.date().optional()
});

export const idTarefaSchema = z.string().uuid().min(32, "O identificador deve ser igual a 32 caracteres!");