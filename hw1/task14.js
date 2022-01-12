var n = 1000;
let num = 0;

while (true) {
    n /= 2;
    num++;
    if (n < 50) {
        break;
    }
}

console.log(`результат: ${n}, итераций: ${num}`);