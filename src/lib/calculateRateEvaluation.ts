import type { Rate } from "../objects/Rate";

export interface EvaluationResult {
    beforeTaxes: number,
    afterTaxes: number,
    taxesDiff: number
}

export const calculateRateEvaluation = (
    depositMoney: number,
    offeredRate: Rate,
    taxRate: number,
): EvaluationResult => {
    const evaluation = depositMoney * offeredRate.offeredRate / 100;
    const evaluationWithPA = evaluation * (offeredRate.months / 12);
    const taxes = evaluationWithPA * taxRate / 100;
    const afterTaxes = evaluationWithPA - taxes;
    return {
        afterTaxes: afterTaxes,
        beforeTaxes: evaluationWithPA,
        taxesDiff: taxes
    }
}
