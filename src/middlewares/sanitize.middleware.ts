import { NextFunction, Request, Response } from 'express';
import xss from 'xss';

const sanitizeInput = (input: any): any => {
    if (typeof input === 'string') {
        return xss(input); // Sanitiza strings
    }
    if (typeof input === 'object' && input !== null) {
        const sanitizedObj: Record<string, any> = {};
        for (const key in input) {
            sanitizedObj[key] = sanitizeInput(input[key]); // Recursão para objetos
        }
        return sanitizedObj;
    }
    return input; // Retorna valores não-string/não-objeto sem alterações
};

const sanitizeMiddleware = (req: Request, res: Response, next: NextFunction) => {
    req.body = sanitizeInput(req.body); // Sanitiza corpo da requisição
    req.query = sanitizeInput(req.query); // Sanitiza parâmetros de consulta
    req.params = sanitizeInput(req.params); // Sanitiza parâmetros de URL
    next();
};

export default sanitizeMiddleware;