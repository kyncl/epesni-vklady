import type { Dispatch } from "react";
import { getBanksRates, getBanksSupportingMonth, getBestBankOffer } from "../lib/banks";
import { getMonthsSupportedByBanks } from "../lib/validation/validateMonths";
import type { BankRate } from "../lib/selectedRate";
import { getValidCzechMonthformat } from "../lib/formatting/monthsCzech";

interface BestBankSelectionProps {
    depositMoney: number,
    setCurrentRate: Dispatch<BankRate | null>
}

export const BestBankSelection = (
    { depositMoney, setCurrentRate }: BestBankSelectionProps) => {
    const banks = getBanksRates();
    const months = getMonthsSupportedByBanks(banks).sort((a, b) => a - b);

    const setNewRate = (month: number) => {
        if (depositMoney === 0)
            return;
        const supportedRatesByBanks = getBanksSupportingMonth(month, banks);
        const bestRate = getBestBankOffer(supportedRatesByBanks);
        setCurrentRate(bestRate);
    };

    return (<div className="flex flex-wrap justify-center">
        {months.map((month =>
            <button
                key={month}
                className="m-2 mb-1 mt-1 w-full sm:w-fit"
                onClick={(_e) => setNewRate(month)}
            >
                Nejlepší vklad pro {month} {getValidCzechMonthformat(month)}
            </button>
        ))}
    </div>);
};

