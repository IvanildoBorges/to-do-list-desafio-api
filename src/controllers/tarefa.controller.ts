// src/controllers/tarefasController.ts
import { Request, Response } from "express";
import asyncHandler from "../middlewares/chamadaAssicrona.middleware";
import { Tarefa } from "../models/tarefa.model";
import tarefasService from "../services/tarefa.service";
import { gerarRespostaDeErro } from "../utils/geraRespostasDeErro";
import { validaId, validaTarefa } from "../utils/validaTarefas";

const listarTarefas = async (req: Request, res: Response) => {
    try {
        // Verifica se existem tarefas
        const tarefas = await tarefasService.getTarefas();
        if (!tarefas || tarefas.length < 1) return gerarRespostaDeErro(res, 404, "Nenhuma tarefa encontrada!");

        return res.status(200).json({ sucesso: true, dados: tarefas });
    } catch (error: any) {
        return gerarRespostaDeErro(res, 500, `Erro ao listar todas as tarefas! ${error.message}`);
    }
};

const listarUmaTarefa = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        // Validando a tipagem dos dados antes de prosseguir
        validaId(id);

        // Verifica se a tarefa existe
        const tarefa = await tarefasService.getTarefa(id);
        if (!tarefa) return gerarRespostaDeErro(res, 404, "Tarefa não encontrada!");

        return res.status(200).json({ sucesso: true, dados: tarefa });
    } catch (error: any) {
        return gerarRespostaDeErro(res, 500, `Erro ao listar tarefa! ${error.message}`);
    }
};

const listarTarefasConcluidas = async (req: Request, res: Response) => {
    try {
        // Verifica se existem tarefas
        const tarefasConcluidas = await tarefasService.getTarefasConcluidas();
        if (tarefasConcluidas.length < 1) return gerarRespostaDeErro(res, 404, "Nenhuma tarefa concluída encontrada!");
        
        return res.status(200).json({ sucesso: true, dados: tarefasConcluidas });
    } catch (error: any) {
        return gerarRespostaDeErro(res, 500, `Erro ao obter tarefas concluídas! ${error.message}`);
    }
};
  
const excluirTarefa = async (req: Request, res: Response) => {
    try {
        const id = req.query.id as string;
        // Validando a tipagem dos dados antes de prosseguir
        validaId(id);

        // Verifica se a tarefa foi excluída
        const tarefas = await tarefasService.getTarefa(id);
        if (!tarefas) return gerarRespostaDeErro(res, 404, "Tarefa não encontrada para exclusão!");
        
        const tarefaExcluida = await tarefasService.deleteTarefaById(id);
        return res.status(200).json({ sucesso: true, dados: "Tarefa excluída com sucesso!" });
    } catch (error: any) {
        return gerarRespostaDeErro(res, 500, `Erro ao excluir a tarefa! ${error.message}`);
    }
};
  
const excluirTodasTarefas = async (req: Request, res: Response) => {
    try {
        // Verifica se as tarefas foram excluídas
        const tarefasExcluidas = await tarefasService.deleteAllTarefas();
        if (!tarefasExcluidas || tarefasExcluidas.count < 1) return gerarRespostaDeErro(res, 404, "Tarefas não encontradas para exclusão!");

        return res.status(200).json({ sucesso: true, dados: "Tarefas excluídas com sucesso!" });
    } catch (error: any) {
        return gerarRespostaDeErro(res, 500, `Erro ao excluir todas as tarefas! ${error.message}`);
    }
};
  
const createTarefa = async (req: Request, res: Response) => {
    try {
        const tarefa: Tarefa = req.body.tarefa;
        // Validando a tipagem dos dados antes de prosseguir
        validaTarefa(tarefa);
        
        const novaTarefa = await tarefasService.createTarefa(tarefa);
        return res.status(201).json({ sucesso: true, dados: novaTarefa });
    } catch (error: any) {
        return gerarRespostaDeErro(res, 500, `Erro ao criar tarefa! ${error.message}`);
    }
};

export const lista = asyncHandler(listarTarefas);
export const listaUma = asyncHandler(listarUmaTarefa);
export const listaCompletas = asyncHandler(listarTarefasConcluidas);
export const deleta = asyncHandler(excluirTarefa);
export const deletaTudo = asyncHandler(excluirTodasTarefas);
export const cria = asyncHandler(createTarefa);