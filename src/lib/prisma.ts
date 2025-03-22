import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient({
    log: ["query"], // para ver as consultas no console
});

export default prisma;


/* TESTANDO - função para demonstrar uso do prisma */
async function exemplo() {
    try {
        const tarefa = await prisma.tarefa.create({
            data: {
                id: "h123-nmb1-123v-do8I",
                descricao: 'Arroz',
                concluida: false
            },
        });

        return tarefa;
    } catch (error) {
        console.error(error);
        process.exit(1);
    } finally {
        await prisma.$disconnect();
    }
}