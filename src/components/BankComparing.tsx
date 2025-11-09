import type { Dispatch } from "react";
import { getBanksRates } from "../lib/banks";
import { RateEvaluation } from "./RateEvaluation";
import type { Rate } from "../objects/Rate";
import { moveAtStart } from "../lib/general";
import { getValidCzechMonthformat } from "../lib/monthsCzech";

interface bankComparingProps {
    depositMoney: number,
    setCurrentRate: Dispatch<Rate | null>
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
                                            setCurrentRate(rate);
                                            moveAtStart();
                                        }}
                                    >
                                        {rate.months} {getValidCzechMonthformat(rate.months)} ({rate.offeredRate}%)
                                        <RateEvaluation
                                            depositMoney={depositMoney}
                                            offeredRate={rate.offeredRate}
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
