import * as z from "zod";
import { Rate } from "./Rate";

export const Bank = z.object({
    name: z.string(),
    rates: z.array(Rate),
});
export type Bank = z.infer<typeof Bank>;
