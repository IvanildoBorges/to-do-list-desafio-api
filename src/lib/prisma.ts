import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient({
    // log: ["query"], // para ver as consultas no console
});

export default prisma;