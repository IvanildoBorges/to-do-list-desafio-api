import { Tarefa } from "../models/tarefa.model";
import { idTarefaSchema, tarefaSchema } from "../schemas/tarefa.schema";

export const validaTarefa = (tarefa: Tarefa) => {
    const result = tarefaSchema.safeParse(tarefa);
    if (!result.success) {
        throw new Error(
            `Erro ao validar tarefa: ${result.error.errors.map((x) => x.message).join(", ")}`
        );
    }
};

export const validaId = (id: string) => {
    const result = idTarefaSchema.safeParse(id);
    if (!result.success) {
        throw new Error(
            `Erro ao validar id: ${result.error.errors.map((x) => x.message).join(", ")}`
        );
    }
}