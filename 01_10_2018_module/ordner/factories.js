function createCircle(radius) {
    return{
        radius:radius,
        draw:function () {
            console.log('draw');
        }
    };
}
var circle = createCircle(1);
circle.draw();