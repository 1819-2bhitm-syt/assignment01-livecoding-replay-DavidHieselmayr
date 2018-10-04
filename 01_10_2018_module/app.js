/*
// Module (andere Datei abrufen "hallo.js")
console.log("Hallo Welt");
require("./hallo");
*/



// Module (Daten übergeben)
const data = require("./hallo.js");

console.log(data.name("Hallo "));

//require("./unterordner/unterordnerApp");

// Eine index.js Datei wird automatisch eingebunden, auch wenn der Pfad
require("./unterordner");