function sum(a) {
    return function (b) {
        return a + b;
    }
}
console.log(sum(1)(2));
console.log(sum(4)(-2));