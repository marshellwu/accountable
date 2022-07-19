import { z } from "../../deps.ts";

export const AccountSchema = z.object({
    name: z.string()
});