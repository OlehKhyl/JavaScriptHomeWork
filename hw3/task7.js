var arr = ['abcd', 'abcde', 'ab', 'abc'];

var arrLength = [];
arrLength = arr.map(function(item) {
    return item.length;
});

console.log(arrLength); 