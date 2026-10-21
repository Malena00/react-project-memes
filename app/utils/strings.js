export function pluralize(number, one, few, many) {
    const n = Math.abs(number);
    const lastTwo = n % 100;
    const last = n % 10;

    if (lastTwo >= 11 && lastTwo <= 14) {
        return many;
    }

    if (last === 1) {
        return one;
    }

    if (last >= 2 && last <= 4) {
        return few;
    }

    return many;
}