function f(a, b, c) {
    for (item of arguments) {
        if (typeof item !== 'number') {
            throw new Error(`тип ${item} не число`);
        }
    }
    return (a - b) / c;
}

console.log(f(9, 3, 2));
console.log(f('s', 9, 3));
