"use strict";
/*eslint-disable*/
const me = {
    first: 'Adonay',
    last: 'Kassa',
    getFullName: function () {
        return this.first + ' ' + this.last;
    }
}
const logMeasurements = function (height, weight) { // ‘this’ refers to the invoker
    console.log(this.getFullName() + height + ' ' + weight);
}
const logMe = logMeasurements.bind(me);
logMe('180cm', '70kg'); // Adonay Kassa 180cm 70kg
logMeasurements.call(me, '180cm', '70kg'); // Adonay Kassa 180cm 70kg
logMeasurements.apply(me, ['180cm', '70kg']); // Adonay Kassa 180cm 70kg
logMeasurements.bind(me, '180cm', '70kg')(); // Adonay Kassa 180cm 70kg
(function (height, weight) {
    console.log(this.getFullName() + height + ' ' + weight);
}).apply(me, ['180cm', '70kg']); // Adonay Kassa 180cm 70kg
