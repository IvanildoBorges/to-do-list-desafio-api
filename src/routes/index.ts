import { Request, Response, Router } from "express";

const router = Router();

router.get('/', (req: Request, res: Response) => {
  res.status(200).send("<h1>Hello World!</h1>");
});

// Demais rotas abaixo

export default router;