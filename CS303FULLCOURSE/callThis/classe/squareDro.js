"use strict";
/*eslint-disable*/
class Square {
    constructor(side) {
        this.side = side;
    }
    area() {
        return this.side * this.side
    }
}
class MorphableSquare extends Square {
    constructor(side, color, className) {
        super(side);
        this.color = color;
        this.className = className;
    }
    morph() {
        this.className = this.color;
    }
}
const morph2blue = new MorphableSquare(3, "blue", "white");
const morph2green = new MorphableSquare(3, "green", "white")