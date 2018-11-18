function Person(vorname,nachname) {
    this.vorname = vorname;
    this.nachname = nachname;
}
Person.prototype.getName = function (){
    return this.vorname + " " + this.nachname
};

let hans = new Person("Hans", "Müller");
let p = {
    vorname: "Erik",
    nachname:"Müller"
};

console.log(p);