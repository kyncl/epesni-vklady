export const getValidCzechMonthformat = (month: number): String => {
    if (month == 1)
        return "měsíc";
    else if (month < 5)
        return "měsíce";
    else {
        return "měsíců"
    }
}
