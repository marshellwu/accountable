import { Application } from "./deps.ts";

import { router } from "./src/routes/index.ts";

const app = new Application();

await app
    .use(router.routes())
    .listen({ port: 8000 });