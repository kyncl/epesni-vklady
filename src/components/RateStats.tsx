import { getValidCzechMonthformat } from "../lib/formatting/monthsCzech";
import { calculateRateEvaluation } from "../lib/rateEvaluation";
import type { BankRate } from "../lib/selectedRate";
import { tax } from "./App";

interface RateProps {
    selectedRate: BankRate | null,
    depositMoney: number
};

export const RateStats = (
    { selectedRate, depositMoney }
        : RateProps
) => {
    if (!selectedRate)
        return <div></div>;

    const rate = selectedRate.rate;
    const evaluation = calculateRateEvaluation(depositMoney, rate, tax);
    const sum = evaluation.afterTaxes + depositMoney;
    return (
        <div className="bg-black/55 rounded-xl p-5 m-2.5 sm:w-fit">
            <h4 className="text-3xl">Shrnutí informací</h4>
            <ul className="text-left text-lg">
                <li>Vybraná banka: <b>{selectedRate.bank}</b></li>
                <li>Vklad: <b>{depositMoney.toLocaleString()} CZK</b></li>
                <li>Nabídka: <b>{rate.offeredRate.toLocaleString()}% pro {rate.months} {getValidCzechMonthformat(rate.months)}</b></li>
                <li>Bez dane: <b>{evaluation.beforeTaxes.toLocaleString()} CZK</b></li>
                <li>Po danich: <b>{evaluation.afterTaxes.toLocaleString()} CZK ({evaluation.taxesDiff.toLocaleString()} CZK)</b></li>
                <li>Celkem: <b>{sum.toLocaleString()} CZK</b></li>
            </ul>
        </div>
    );
}
