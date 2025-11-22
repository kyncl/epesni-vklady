export interface TestingEvaluationData {
    months: number,
    depositMoney: number,
    offeredRate: number
    expecting: number,
}

export const testingEvaluationData: TestingEvaluationData[] = [
    {
        expecting: 306,
        depositMoney: 12000,
        months: 12,
        offeredRate: 3
    },
    {
        expecting: 2448,
        depositMoney: 90000,
        months: 12,
        offeredRate: 3.2
    },
    {
        expecting: 402.56,
        depositMoney: 25600,
        months: 12,
        offeredRate: 1.85
    },
]

export const aiTests: TestingEvaluationData[] = [
    {
        months: 12,
        depositMoney: 100000,
        offeredRate: 5,
        expecting: 4250,
    },
    {
        months: 6,
        depositMoney: 50000,
        offeredRate: 4,
        expecting: 850,
    },
    {
        months: 24,
        depositMoney: 200000,
        offeredRate: 3.5,
        expecting: 11900,
    },
    {
        months: 3,
        depositMoney: 10000,
        offeredRate: 2,
        expecting: 42.5,
    },
    {
        months: 12,
        depositMoney: 50000,
        offeredRate: 0,
        expecting: 0,
    },
    {
        months: 12,
        depositMoney: 0,
        offeredRate: 5,
        expecting: 0,
    },
    {
        months: 12,
        depositMoney: 100000,
        offeredRate: 4.25,
        expecting: 3612.5,
    },
    {
        months: 1,
        depositMoney: 100000,
        offeredRate: 5,
        expecting: 354.17,
    },
];
