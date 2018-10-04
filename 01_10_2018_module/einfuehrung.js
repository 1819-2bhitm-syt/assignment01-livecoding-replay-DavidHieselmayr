/*
function hallo(who) {
    console.log("Hallo "+ who);
}

function getName() {
    return "Welt";
}

console.log(getName());
*/



/* 1.(First-Class-Citizens)

function hallo(who) {
    console.log("Hallo "+who());
}
function getName() {
    return "Welt";
};
hallo(getName);
*/
/* 2.(First-Class-Citizens) (

let hallo= function(who) {
    console.log("Hallo "+who())
};
let getName = function () {
    return "Welt";
};
hallo(getName);
*/


/*
// Anonymous Functions
let hallo = function (who) {
    console.log("Hallo "+who());
};

let getName = function () {
    return "Welt";
}

hallo(getName);
hallo(function () {
    return "node.js";
});

// Erweiterung
let hi = function (w) {
    w("Hallo Welt!");
};

hi(function (xyz) {
    console.log(xyz);
});
*/