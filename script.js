//complete this code
class Rectangle {
    constructor(width, height) {
        this._width = width;
        this._height = height;
    }

    // getters
    get width() {
        return this._width;
    }

    get height() {
        return this._height;
    }

    // method to calculate area
    getArea() {
        return this.width * this.height;
    }
}

class Square extends Rectangle {
    constructor(side) {
        // call parent constructor
        super(side, side);
    }

    // method to calculate perimeter
    getPerimeter() {
        return this.width * 4;
    }
}

// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;