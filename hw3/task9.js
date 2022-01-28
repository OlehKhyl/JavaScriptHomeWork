function arrayFill(fill, count) {
    if (typeof fill !== 'number' && typeof fill !== 'string' && typeof fill !== 'object' && !Array.isArray(fill)) {
        throw new Error('param should be a number, string, object, or array');
    }

    if (typeof count !== 'number') {
        throw new Error('param should be a number');
    }

    let array = new Array(count);
    for (let i = 0; i < count; i++) {
        array[i] = fill;
    }

    return array;
}

let arr = new Array();

arr = arrayFill('x', 5);

console.log(arr);