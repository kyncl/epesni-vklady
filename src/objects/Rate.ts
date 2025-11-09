import * as z from "zod";

// Also it would be wise to add the limit, but too lazy and too many gimicks
export const Rate = z.object({
    /* (usually for 3, 6 and 12 months) */
    months: z.number(),
    /* In percentages */
    offeredRate: z.number(),
});
export type Rate = z.infer<typeof Rate>;
