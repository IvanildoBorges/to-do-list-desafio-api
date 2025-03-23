import { NextFunction, Request, Response } from 'express';

// Função para lidar com a chamada assíncrona
const asyncHandler = (fn: Function) => (req: Request, res: Response, next: NextFunction) => {
    return fn(req, res, next).catch(next);
};

export default asyncHandler;