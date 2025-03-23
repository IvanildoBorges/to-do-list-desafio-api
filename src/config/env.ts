import dotenv from "dotenv";
import envSchema from "../validators/env.validator";

dotenv.config();

const parsedEnv = envSchema.safeParse(process.env);

if (!parsedEnv.success) {
    console.error("⚠️ Erro nas variáveis de ambiente:", parsedEnv.error.format());
    process.exit(1);
}

export const env = parsedEnv.data;