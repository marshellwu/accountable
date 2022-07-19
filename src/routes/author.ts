import { Router } from "../../deps.ts";

const router = new Router();

router.get("/", (context) => {
    const author = {
        name: "Marshell Wu"
    };

    context.response.body = author;
});

export default router;