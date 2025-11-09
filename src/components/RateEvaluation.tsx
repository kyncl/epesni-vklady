import { calculateRateEvaluation } from "../lib/rateEvaluation";
import { tax } from "./App";

interface rateEvaluationProps {
    depositMoney: number, offeredRate: number
}

export const RateEvaluation = ({ depositMoney, offeredRate }: rateEvaluationProps) => {
    if (depositMoney === 0)
        return <></>;
    const evaluation = calculateRateEvaluation(depositMoney, offeredRate, tax);
    const afterTaxes = evaluation.afterTaxes;
    return <span>: {afterTaxes.toFixed(2)} CZK</span>;
};

