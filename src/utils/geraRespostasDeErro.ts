import { PrismaClientInitializationError, PrismaClientKnownRequestError, PrismaClientRustPanicError, PrismaClientValidationError } from "@prisma/client/runtime/library";
import { Response } from "express";

// Função auxiliar para respostas padronizadas de erro em controllers
export const gerarRespostaDeErro = (res: Response, status: number, mensagem: string) => {
    return res.status(status).json({ sucesso: false, mensagem });
};

// Função auxiliar para para tratar erros do Prisma
export const gerarRespostaDeErroPrisma = (error: unknown): Error => {
  if (error instanceof PrismaClientKnownRequestError) {
    switch (error.code) {
      case "P2002":
        return new Error("Tarefa já criada com esse id!");
      case "P2003":
        return new Error("Violação de chave estrangeira.");
      default:
        return new Error(error.message);
    }
  } else if (error instanceof PrismaClientValidationError) {
    return new Error("Erro de validação: Dados inválidos para o banco de dados.");
  } else if (error instanceof PrismaClientRustPanicError) {
    return new Error("Erro crítico: Reinicie a aplicação!");
  } else if (error instanceof PrismaClientInitializationError) {
    return new Error("Erro ao inicializar: Verifique a conexão com o banco!");
  } else {
    return new Error(`Erro desconhecido: ${String(error)}`);
  }
};