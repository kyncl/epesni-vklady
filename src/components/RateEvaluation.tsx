import { calculateRateEvaluation } from "../lib/calculateRateEvaluation";
import type { Rate } from "../objects/Rate";
import { tax } from "./App";

interface rateEvaluationProps {
    depositMoney: number, offeredRate: Rate
}

export const RateEvaluation = ({ depositMoney, offeredRate }: rateEvaluationProps) => {
    if (depositMoney === 0)
        return <></>;
    const evaluation = calculateRateEvaluation(depositMoney, offeredRate, tax);
    const afterTaxes = evaluation.afterTaxes;
    return <span>: {afterTaxes.toFixed(2).toLocaleString()} CZK</span>;
};

