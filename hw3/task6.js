function reduceRight(arr, func, acc) {

    if (!Array.isArray(arr)) {
        throw new Error("param should be array");
    }

    if (typeof func !== 'function') {
        throw new Error("param should be function");
    }

    if ((typeof acc !== 'number') && (typeof acc !== 'string')) {
        throw new Error("param should be number or string");
    }
    
    let n = arr.length;
    let sum = acc;
    for (let j = n-1; j >= 0; j--) {
        sum = func(sum, arr[j]);         
    }
    return sum;
}

let array = [1, 2, 3];

let res = reduceRight(array, function (sum, current) {
    return sum + current;
}, '1');

console.log(res);