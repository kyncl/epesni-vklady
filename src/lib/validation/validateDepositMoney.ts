export const validDepositMoney = (value: any): number => {
    // yes halire too >:(
    const possibleValue = parseFloat(value);
    if (!isNaN(possibleValue))
        return possibleValue;
    return 0;
};

