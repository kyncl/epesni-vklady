import type { Bank } from "../objects/Bank";

export const getBanksRates = (): Bank[] => {
    const kb: Bank = {
        name: "Komerční banka",
        rates: [
            {
                months: 3,
                offeredRate: 2.5
            },
            {
                months: 6,
                offeredRate: 2.5
            },
            {
                months: 12,
                offeredRate: 3
            },
        ]
    }

    const moneta: Bank = {
        name: "Moneta bank",
        rates: [
            {
                months: 1,
                offeredRate: 3.4
            },
            {
                months: 3,
                offeredRate: 3.2
            },
            {
                months: 6,
                offeredRate: 3.2
            },
            {
                months: 12,
                offeredRate: 3.2
            },
        ]
    }

    return [kb, moneta];
}
