function f(n) {
    if (typeof n !== 'number') {
        throw new Error('Не число');
    }
    return n ** 3;
}

console.log(f(3));
console.log(f('3'));