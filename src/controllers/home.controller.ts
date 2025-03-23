import { Request, Response } from "express";
import asyncHandler from "../middlewares/chamadaAssicrona.middleware";
import { gerarRespostaDeErro } from "../utils/geraRespostasDeErro";

const Elemento = () => {
    return (
        `<main>
            <style>
                * {
                    margin: 0;
                    padding: 0;
                    box-sizing: border-box;
                }
                main {
                    height: 100dvh; 
                    background-color: #191025;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    gap: 2rem;
                    color: white;
                    font-size: 32px;
                }
            </style>
            <h1>Hello World!</h1>
            <h2>Welcome everyone!!!</h2>
        </main>`
    );
}

// Saudações aos usuários
const saudacao = async (req: Request, res: Response): Promise<Response> => {
    try {
        return res.status(200).send(Elemento());
    } catch (error: any) {
        return gerarRespostaDeErro(res, 500, `Erro interno no servidor! ${error.message}`);
    }
};

export const homeController = asyncHandler(saudacao);