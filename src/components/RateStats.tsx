import { getValidCzechMonthformat } from "../lib/monthsCzech";
import { calculateRateEvaluation } from "../lib/rateEvaluation";
import type { Rate } from "../objects/Rate";
import { tax } from "./App";

interface RateProps {
    rate: Rate | null,
    depositMoney: number
};

export const RateStats = (
    { rate, depositMoney }
        : RateProps
) => {
    if (!rate)
        return <div></div>;

    const evaluation = calculateRateEvaluation(depositMoney, rate.offeredRate, tax);
    const sum = evaluation.afterTaxes + depositMoney;
    return (
        <div className="bg-black/55 rounded-xl p-5 m-2.5 sm:w-fit">
            <h4 className="text-3xl">Shrnutí informací</h4>
            <ul className="text-left text-lg">
                <li>Vklad: <b>{depositMoney.toFixed(2)} CZK</b></li>
                <li>Nabídka: <b>{rate.offeredRate.toFixed(2)}% pro {rate.months} {getValidCzechMonthformat(rate.months)}</b></li>
                <li>Bez dane: <b>{evaluation.beforeTaxes.toFixed(2)} CZK</b></li>
                <li>Po danich: <b>{evaluation.afterTaxes.toFixed(2)} CZK ({evaluation.taxesDiff.toFixed(2)} CZK)</b></li>
                <li>Celkem: <b>{sum.toFixed(2)} CZK</b></li>
            </ul>
        </div>
    );
}
