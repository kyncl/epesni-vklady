import type { Bank } from "../../objects/Bank";

export const getMonthsSupportedByBanks = (banks: Bank[]): number[] => {
    let knownMonths: number[] = [];
    banks.forEach((bank) => {
        bank.rates.forEach((rate) => {
            const foundMonth = knownMonths.find((knownMonth) => knownMonth == rate.months);
            if (!foundMonth)
                knownMonths.push(rate.months);
        });
    });
    return knownMonths
}
