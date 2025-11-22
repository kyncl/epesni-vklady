import { expect, test } from 'vitest'
import { tax } from '../components/App';
import type { Rate } from '../objects/Rate';
import { aiTests, testingEvaluationData, type TestingEvaluationData } from './data/testingData';
import { calculateRateEvaluation } from '../lib/calculateRateEvaluation';

test("[Rate evaluation after taxes] Manual set", () => {
    testingEvaluationData.forEach((test) => {
        checkTest(test);
    });
});


test("[Rate evaluation after taxes] AI set cuz I'm too dump", () => {
    aiTests.forEach((test) => {
        checkTest(test);
    });
});

const checkTest = (test: TestingEvaluationData) => {
    const rate: Rate = { offeredRate: test.offeredRate, months: test.months };
    expect(calculateRateEvaluation(test.depositMoney, rate, tax).afterTaxes.toFixed(2)).toBe(test.expecting.toFixed(2));
}
