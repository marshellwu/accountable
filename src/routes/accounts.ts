import { Router } from "../../deps.ts";
import { cockroachDB } from "../db.ts";
import { AccountSchema } from "../schemas/account.ts";

const router = new Router();

router
    .post("/", async (context) => {
        const account = await context.request.body().value;

        const validation = AccountSchema.safeParse(account);

        if (!validation.success) return context.response.body = "Invalid data";

        await cockroachDB.connect();
        const result = await cockroachDB.queryObject(`
            INSERT INTO accounts(name)
            VALUES('${account.name}')
        `);
        await cockroachDB.end();

        context.response.body = result;
    })
    .get("/", async (context) => {
        await cockroachDB.connect();
        const accounts = await cockroachDB.queryObject("SELECT name FROM accounts");
        await cockroachDB.end();

        context.response.body = accounts.rows;
    });

export default router;