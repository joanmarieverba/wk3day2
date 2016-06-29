//take map, filter, and reduce and come up with a use case
//pluck, find, where  -- copy and paste those in

var usedCarLot = [
    {make: "Chevrolet", model: "Cavalier", year: 1999},
    {make: "Pontiac", model: "Grand Am", year: 2003},
    {make: "Ford", model: "Focus", year: 2002},
    {make: "Subaru", model: "Legacy", year: 2006},
    {make: "Toyota", model: "Camry", year: 2009},
];
//pluck takes a string and takes the value of the string matching the property
//pluck returns an array
var specificMake = pluck (usedCarLot, "model") ;
console.assert(pluck(usedCarLot, 'model')[0] === 'Cavalier');
//where returns the entire object
var specificModel = where(usedCarLot,{model: "Grand Am"});
console.assert(specificModel[0].model === "Grand Am");

var newCarLot = [];
newCarLot = usedCarLot.filter(function (array){
    if (array.year  >  2005) {return true;} else {return false;}
});
console.log(newCarLot);

var makesInCarLot = "";
makesInCarLot = usedCarLot.reduce (function(acc, v){
  var a = acc;
  console.log("first :" + a);
  //return an object that has a make property
  //v is the next value
  return {make: a.make + " " + v.make};
});
console.log(makesInCarLot.make);
