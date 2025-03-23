import { z } from "zod";

const envSchema = z.object({
    NODE_ENV: z.enum(["dev", "production", "test"]).default("dev"),
    PORT: z.string().regex(/^\d+$/).default("3000"),
    DATABASE_URL: z.string().url(),
});

export default envSchema;