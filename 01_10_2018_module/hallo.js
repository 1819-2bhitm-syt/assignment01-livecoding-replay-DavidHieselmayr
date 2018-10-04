
// Module ("hallo.js" wird von der Datei "app.js" abgerufen)
//console.log("ich bin die hallo.js - Datei");

let data = {
    name: function (prefix) {
        return prefix + "Welt";
    }
};

module.exports = data;