import prisma from "../lib/prisma";
import { Tarefa } from "../models/tarefa.model";

const tarefasService = {
  getTarefa: async (id: string): Promise<Tarefa | null> => {
    try {
      return await prisma.tarefa.findUnique({ where: { id } });
    } catch (error) {
      console.error(error);
      process.exit(1);
    }
  },

  getTarefas: async (): Promise<Tarefa[] | null> => {
    try {
      return await prisma.tarefa.findMany(); // Retorna todas as tarefas se `id` não for passado
    } catch (error) {
      console.error(error);
      process.exit(1);
    } finally {
      await prisma.$disconnect();
    }
  },

  getTarefasConcluidas: async (): Promise<Tarefa[]> => {
    try {
      return await prisma.tarefa.findMany({ where: { concluida: true } });
    } catch (error) {
      console.error(error);
      process.exit(1);
    } finally {
      await prisma.$disconnect();
    }
  },

  deleteTarefaById: async (id: string): Promise<Tarefa | null> => {
    try {
      return await prisma.tarefa.delete({ where: { id } });
    } catch (error) {
      console.error(error);
      process.exit(1);
    } finally {
      await prisma.$disconnect();
    }
  },

  deleteAllTarefas: async (): Promise<{ count: number }> => {
    try {
      return await prisma.tarefa.deleteMany();
    } catch (error) {
      console.error(error);
      process.exit(1);
    } finally {
      await prisma.$disconnect();
    }
  },

  createTarefa: async (id: string, descricao: string, concluida: boolean): Promise<Tarefa> => {
    try {
      return await prisma.tarefa.create({
        data: { 
            id,
            descricao, 
            concluida
        },
      });
    } catch (error) {
      console.error(error);
      process.exit(1);
    } finally {
      await prisma.$disconnect();
    }
  }
}

export default tarefasService;