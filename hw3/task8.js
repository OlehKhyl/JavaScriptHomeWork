function f(array) {
    if (!Array.isArray(array)) {
        throw new Error('param should be an array');
    }
    let arr = array;
    let sum = 0;

    while (arr.some(function (n) {
        if (!Array.isArray(n) && typeof n !== 'number') {
        throw new Error('Array should consist arrays or numbers');
    }
        return Array.isArray(n);
    })) {
        arr = arr.flat();
    }

    for(let item of arr) {
        sum += +item;
    }

    return sum;
}

const arr = [[[[[],3]]]];
let sum = f(arr);
console.log(sum);