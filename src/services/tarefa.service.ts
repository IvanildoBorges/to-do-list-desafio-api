import prisma from "../lib/prisma";
import { Tarefa } from "../models/tarefa.model";
import { gerarRespostaDeErroPrisma } from "../utils/geraRespostasDeErro";

const tarefasService = {
  getTarefa: async (id: string): Promise<Tarefa | null> => {
    try {
      return await prisma.tarefa.findUnique({ where: { id } });
    } catch (error: unknown) {
      throw gerarRespostaDeErroPrisma(error);
    }
  },

  getTarefas: async (): Promise<Tarefa[] | null> => {
    try {
      return await prisma.tarefa.findMany(
        {
          orderBy: {
            criadoEm: "asc", // Ordena da mais nova para a mais antiga
          },
        }
      );
    } catch (error) {
      throw gerarRespostaDeErroPrisma(error);
    }
  },

  getTarefasConcluidas: async (): Promise<Tarefa[]> => {
    try {
      return await prisma.tarefa.findMany({ where: { concluida: true } });
    } catch (error) {
      throw gerarRespostaDeErroPrisma(error);
    }
  },

  deleteTarefaById: async (id: string): Promise<Tarefa | null> => {
    try {
      return await prisma.tarefa.delete({ where: { id } });
    } catch (error) {
      throw gerarRespostaDeErroPrisma(error);
    }
  },

  deleteAllTarefas: async (): Promise<{ count: number }> => {
    try {
      return await prisma.tarefa.deleteMany();
    } catch (error) {
      throw gerarRespostaDeErroPrisma(error);
    }
  },

  createTarefa: async (tarefaDaRequisicao: Tarefa): Promise<Tarefa> => {
    try {
      return await prisma.tarefa.create({ data: tarefaDaRequisicao });
    } catch (error: unknown) {
      throw gerarRespostaDeErroPrisma(error);
    }
  },

  updateTarefa: async (tarefa: Tarefa): Promise<Tarefa | null> => {
    try {
      return await prisma.tarefa.update({ data:  tarefa, where: { id: tarefa.id }, });
    } catch (error: unknown) {
      throw gerarRespostaDeErroPrisma(error);
    }
  }
}

export default tarefasService;