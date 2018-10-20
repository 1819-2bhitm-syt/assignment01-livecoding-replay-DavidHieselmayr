// The simplest way to create an object is using an object literal
const circle = {
    radius: 1,
    draw:function () {}
};

// To create multiple object with the same structure and behaviour (methods),
// use a factory or a constructor 

// Factory function 
function createCircle(radius) {
    return{
        radius,
        draw:function () {
            
        }
    }
}

// Constructor Function 
function Circle(radius) {
    this.radius = radius;
    this.draw = function () {
        
    }
}