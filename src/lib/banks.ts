import type { Bank } from "../objects/Bank";
import type { BankRate } from "./selectedRate";

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

    const sporitelna: Bank = {
        name: "Česká spořitelna",
        rates: [
            {
                months: 1,
                offeredRate: 1.95
            },
            {
                months: 3,
                offeredRate: 2.25
            },
            {
                months: 6,
                offeredRate: 2.2
            },
            {
                months: 12,
                offeredRate: 1.85
            }
        ]
    }

    const airbank: Bank = {
        name: "Air bank",
        rates: [
            {
                months: 1,
                offeredRate: 2.7
            },
            {
                months: 3,
                offeredRate: 3.2
            },
            {
                months: 6,
                offeredRate: 3
            },
            {
                months: 12,
                offeredRate: 3
            }
        ]
    };

    return [kb, moneta, sporitelna, airbank];
}

export const getBanksSupportingMonth = (month: number, banks: Bank[]): BankRate[] => {
    let supportedRates: BankRate[] = [];
    banks.forEach((bank) => {
        bank.rates.forEach((rate) => {
            if (rate.months === month) {
                supportedRates.push({ bank: bank.name, rate: rate });
            }
        });
    });
    return supportedRates;
}

export const getBestBankOffer = (banksRate: BankRate[]): BankRate | null => {
    let bestRate: BankRate | null = null;
    banksRate.forEach((rate) => {
        if (!bestRate || rate.rate.offeredRate > bestRate.rate.offeredRate) {
            bestRate = rate;
        }
    });
    return bestRate;
}
