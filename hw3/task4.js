function every(arr, callback) {
    if (!Array.isArray(arr)) {
        throw new Error("param should be array");
    }

    if (typeof callback !== 'function') {
        throw new Error("param should be function");
    }
    
    let n = arr.length;
    let stat = false;
    for (let j = 0; j < n; j++) {
        if(!callback(arr[j])) {
            stat = false;
        } else {
            stat = true;
            break;
        }
    }
    return stat;
}

let array = [-1, -1, 2, -2, -3];

let status = every(array, function (item) {
        return item > 0;
    });

    console.log(status);