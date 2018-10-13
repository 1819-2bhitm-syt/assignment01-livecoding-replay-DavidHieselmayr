let hallo = function (str) {
    str = "Hallo" + str;
};

let welt = "Welt";
hallo(welt);
console.log(welt);

let halloObject = function (obj) {
    obj.name = "Hallo" + obj.name;
};
let o ={
    name:"Welt"
};

halloObject(o);
console.log(o);