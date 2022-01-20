function f() {
    let sum = 0;
    for (item of arguments) {
        if (typeof item !== 'number') {
            throw new Error(`${item} не число`);
        }
        sum += item;
    }
    return sum;
}


console.log(f(2, 8, 10, 20));
console.log(f(4,12,'A'));