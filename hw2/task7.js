function getDivisors(n) {
    let divisors = new Array();
    let divisor = n;
    if (typeof n !== 'number') {
        throw new Error('parameter type is not a Number');
    } else if (n <= 0) {
        throw new Error('parameter must be greater then 0');
    } else {
        do {
            if (n % divisor === 0) {
                divisors.push(divisor);
            }
            divisor--;
        } while (divisor >= 1);
    }
    return divisors;
}

console.log(getDivisors(12));
console.log(getDivisors(0));