import { Router } from "../../deps.ts";

import author from "./author.ts";
import accounts from "./accounts.ts";

export const router = new Router()
    .get("/", (context) => context.response.body = "pls wrk")
    .use("/author", author.routes(), author.allowedMethods())
    .use("/accounts", accounts.routes(), accounts.allowedMethods());