function forEach(arr, func) {

    if (!Array.isArray(arr)) {
        throw new Error("param should be array");
    }

    if (typeof func !== 'function') {
        throw new Error("param should be function");
    }
    
    let n = arr.length;

    for (let j = 0; j < n; j++) {
        func(arr[j], j, arr);
    }
}

let array = [1, 2, 3];

forEach(array, function (item, i, array) {
    console.log(`#${i} = ${item} in [${array}]`);
});