export interface EvaluationResult {
    beforeTaxes: number,
    afterTaxes: number,
    taxesDiff: number
}

export const calculateRateEvaluation = (
    depositMoney: number,
    offeredRate: number,
    tax: number
): EvaluationResult => {
    const evaluation = depositMoney * offeredRate / 100;
    const taxes = evaluation * tax / 100;
    const afterTaxes = evaluation - taxes;
    return {
        afterTaxes: afterTaxes,
        beforeTaxes: evaluation,
        taxesDiff: taxes
    }
}
