import { z } from 'zod';
import * as dotenv from 'dotenv';
dotenv.config();

const Env = z.object({
  PORT: z.string().default('4000'),
  MONGO_URI: z.string().url().or(z.string().startsWith('mongodb://')),
  ES_NODE: z.string().url(),
  ES_USERNAME: z.string().optional(),
  ES_PASSWORD: z.string().optional(),
  NODE_ENV: z.string().default('development'),
});

export const env = Env.parse(process.env);
