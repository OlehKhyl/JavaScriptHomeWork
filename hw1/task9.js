var arr = [1, 2, 3, 4, 5, 6];

let buf = 0;
for (let i = 0; i <= 5; i++) {
    for (let j = 0; j <= 5; j++) {
        if (arr[j] < arr[j+1]) {
            buf = arr[j + 1];
            arr[j + 1] = arr[j];
            arr[j] = buf;
        }
    }
}

console.log(arr);