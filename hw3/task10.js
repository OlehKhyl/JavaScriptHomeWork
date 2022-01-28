function reverse(array) {
    if (!Array.isArray(array)) {
        throw new Error('param should be an array');
    } else if (array.length === 0){
        throw new Error('array must not be empty');
    }

    let len = array.length;
    let reverseArray = new Array(len);

    for (let i = 0, j = len - 1; i < len; i++, j--) {
        reverseArray[i] = array[j];
    }

    return reverseArray;
}

const arr = [3,2,1];
let reverseArray = reverse(arr);
console.log(reverseArray);