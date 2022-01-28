function filter(arr, callback) {
    if (!Array.isArray(arr)) {
        throw new Error("param should be array");
    }

    if (typeof callback !== 'function') {
        throw new Error("param should be function");
    }

    let n = arr.length;
    let newArray = new Array();
    for (let j = 0; j < n; j++) {
        if(callback(arr[j])) {
            newArray.push(arr[j]);
        }
    }
    return newArray;
}


    let array = [1, -1, 2, -2, 3];

    let positiveArray = new Array();

    positiveArray = filter(array, function (item) {
        return item > 0;
    });

    console.log(positiveArray);
