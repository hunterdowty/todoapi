// prisma.config.ts
import { defineConfig } from "@prisma/config";
import { env } from "process";

export default defineConfig({
  schema: "./prisma/schema.prisma",           // adjust path if needed

  datasource: {
    url: env.DATABASE_URL,                    // ← Prisma CLI uses this for migrate / push / studio
  },

  // Optional but useful: customize migrations location
  migrations: {
    path: "./prisma/migrations",
  },
});