import dotenv from "dotenv";
import env from "env-var";

dotenv.config();

export const envs = {
  PORT: env.get("PORT").required().default("3000").asPortNumber(),
  PUBLIC_PATH: env.get("PUBLIC_PATH").default("public").asString(),
};