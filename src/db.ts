import { Client } from "../deps.ts";

export const cockroachDB = new Client(`
    postgresql://marshell:${Deno.env.get("COCKROACHDB_PASS")}@free-tier8.aws-ap-southeast-1.cockroachlabs.cloud:26257/defaultdb?sslmode=verify-full&options=--cluster%3Daccountable-2178
`);