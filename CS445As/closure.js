let Counter = (function () {
    let privateCounter = 0;
    function changeBy(val) {
        privateCounter += val;
    }
    return {
        increament: function () {
            changeBy(1);
        },
        decrement: function () {
            changeBy(-1)
        },
        value: function () {
            return privateCounter;
        }
    };
})();
console.log(Counter.value());
Counter.increament();
Counter.increament();
console.log(Counter.value());
console.log(Counter.value());
Counter.decrement()
console.log(Counter.value());
