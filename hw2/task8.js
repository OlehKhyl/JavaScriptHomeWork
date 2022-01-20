function f(array) {
    if (!Array.isArray(array)) {
        throw new Error('parameter type should be an array');
    } else if (array.length === 0) {
        throw new Error('parameter can\'t be an empty');
    } else {
        console.log(array.shift());
        if (array.length >= 1) {
            f(array);
        }
    }
}

f([2,6,4,8]);