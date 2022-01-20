function isPositive(n) {
    if (typeof n !== 'number') {
        throw new Error('parameter type is not a Number');
    } else if (n > 0) {
        return true;
    } else {
        return false;
    }
}

function f(array) {
    let positiveArray = new Array();
    for (let i = 0; i < array.length; i++) {
        if (isPositive(array[i])) {
            positiveArray.push(array[i]);
        }
    }
    return positiveArray;
}

let array = [1, 2, -4, 3, -9, -1, 7];
let newArr = f(array);

console.log(newArr);
