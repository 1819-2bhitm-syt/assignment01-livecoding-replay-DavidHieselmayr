function Circle(radius) {
    console.log('this', this);
    this.radius = radius;
    this.draw = function () {
        console.log('draw');
    };
}
var another = new Circle(1);

