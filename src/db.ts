import { Client, config } from "../deps.ts";

const DOTENV = await config();

export const cockroachDB = new Client(`
    postgresql://marshell:${DOTENV.COCKROACHDB_PASS}@free-tier8.aws-ap-southeast-1.cockroachlabs.cloud:26257/defaultdb?sslmode=verify-full&options=--cluster%3Daccountable-2178
`);