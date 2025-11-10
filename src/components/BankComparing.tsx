import type { Dispatch } from "react";
import { getBanksRates } from "../lib/banks";
import { RateEvaluation } from "./RateEvaluation";
import { moveAtStart } from "../lib/scrolling";
import type { BankRate } from "../lib/selectedRate";
import { getValidCzechMonthformat } from "../lib/formatting/monthsCzech";

interface bankComparingProps {
    depositMoney: number,
    setCurrentRate: Dispatch<BankRate | null>
}

export const BankComparing = ({ depositMoney, setCurrentRate }: bankComparingProps) => {
    const banks = getBanksRates();
    return (
        <div className="sm:grid sm:grid-cols-3 flex flex-col w-full">
            {banks.map((bank) =>
                <div key={bank.name} className="p-2.5 dark:bg-black/50 m-5 rounded-xl text-center">
                    <h3 className="text-2xl">{bank.name}</h3>
                    <p className="mb-4">(po zdanění)</p>
                    <ul className="w-full">
                        {
                            bank.rates.map((rate) =>
                                <li
                                    key={`${bank.name}-${rate.months}`}
                                    className="text-lg ml-2 mr-2 mb-1.5">
                                    <button
                                        className="w-full"
                                        onClick={(_e) => {
                                            setCurrentRate({ bank: bank.name, rate: rate });
                                            moveAtStart();
                                        }}
                                    >
                                        {rate.months} {getValidCzechMonthformat(rate.months)} ({rate.offeredRate}%)
                                        <RateEvaluation
                                            depositMoney={depositMoney}
                                            offeredRate={rate}
                                        />
                                    </button>
                                </li>
                            )
                        }
                    </ul>
                </div>
            )}
        </div>
    )
};
