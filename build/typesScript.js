//implicit and Exlpicit type assigning
var firstName = "Eliyas";
var age = 26;
var married = false;
var lastName = "Mohamed";
console.log(typeof firstName);
//Typescript types any type for the implicit types
var json = JSON.parse("55");
console.log(json);
var json1 = JSON.parse('{"name": "Eliyas"}'); // js needs a json object to parse it out the value
console.log(json1);
console.log(typeof json);
// Typescript understanding special types ANY and UNKNOWN
var u = true;
u = "ELiyas";
console.log(Math.round(u));
//Typescript unkown type instead of using any for understanding
//as keyword is used to cast the types after we know it is unkown and need to give a types for the further use
var w = {
    runANonExistentMethod: function () {
        console.log("Hi i am Cristiano");
    }
};
// w.runANonExistentMethod();
//Doing the edge cases for the function to define a variable
console.log(typeof w);
if (typeof w === 'object' && w !== null) {
    w.runANonExistentMethod();
}
//examples of assigning a type to its variable after it declared
var obj = { name: "Eliyas", age: 26 };
console.log(obj);
var unkownValue = "Hello World";
console.log(typeof unkownValue);
// API hit will return the value with type safe if it is not assigned
// const externalData = fetchData() as {id: number, name: string };
// TypeScript never type will throw error
// let x: never = true;
//Typescript Arrays
// specifiying the types which needs to use in a array
var names = [];
names.push("Mohamed");
names.push("Eliyas");
// names.push(26); //gives a error so it will not return the desired expectations
console.log(names);
//making the array as Readonly so that it can't be changed
var marks = [98, 99, 100];
// marks.push(76); // dosen't allow to change the size of the array either it throws an error
console.log(marks);
//TypeScript type inference can infer the type of an array if it has the values
var numbers = [1, 2, 3, 4];
numbers.push(5);
// numbers.push("6"); thorws error for the string push in an number[] array 
console.log(numbers);
var head = numbers[0];
console.log(head);
//Typed Array
//Tuple in a typescript allows to define the each element in an array as a different types
//defining tuple
var ourTuple;
//initializing tuple
ourTuple = ["ELiyas", 26, true];
console.log(ourTuple);
// Readonly Tuple is a good practice for type safety
var ourReadonlyTuple;
ourReadonlyTuple = [16, "ELiyas", false];
// ourReadonlyTuple.push(35); // throws error as it is only readable
console.log(ourReadonlyTuple);
// Named Tuple can give a name to the element of an array
var graph = [55.4, true];
console.log(graph);
//Destructuring Tuple 
var movie = ["Irudhisutru", 2020];
var moviename = movie[0], releaseYear = movie[1]; // assigning in a destructure way
console.log(moviename);
console.log(releaseYear);
// TypeScript Object Types
var car = {
    type: "mercedez Benz",
    model: "S-class",
    year: 2024,
};
console.log(car);
// Type Inference
var maruti = {
    type: "m-800",
};
maruti.type = "Fortuner";
// maruti.type = 800// automatic type inference without declaring
console.log(maruti);
//Optional Properties either it will have the value or not
var swift = {
    type: "dezire"
};
swift.year = 2024; // later assiginig by not expecting the variable to be present immediate effect
console.log(swift);
// Index Signatures for the object assiginig
var nameAgeMap = {
    mohamedELiyas: 26
};
nameAgeMap.Mohamed = 26;
nameAgeMap.ELiyas = 27;
// nameAgeMap.sab = "Eliyas";// string will not be assigned 
console.log(nameAgeMap);
// TypeScripts enum is a special class that represents a group of constants
//Numeric Enums - Defualt
// enum will initialize the first value to 0 and increments as per the additional values
var CardinalDirections;
(function (CardinalDirections) {
    CardinalDirections[CardinalDirections["North"] = 1] = "North";
    CardinalDirections[CardinalDirections["south"] = 2] = "south";
    CardinalDirections[CardinalDirections["east"] = 3] = "east";
    CardinalDirections[CardinalDirections["west"] = 4] = "west";
})(CardinalDirections || (CardinalDirections = {}));
var currentDirection = CardinalDirections.North;
console.log(currentDirection); // logs only 0
console.log(CardinalDirections.south);
console.log(CardinalDirections.west);
//Numeric enums fully initialized then the values will not be incremented automatically
var StatusCodes;
(function (StatusCodes) {
    StatusCodes[StatusCodes["Badrequest"] = 400] = "Badrequest";
    StatusCodes[StatusCodes["Success"] = 200] = "Success";
    StatusCodes[StatusCodes["Created"] = 201] = "Created";
    StatusCodes[StatusCodes["notFound"] = 404] = "notFound";
})(StatusCodes || (StatusCodes = {}));
console.log(StatusCodes.notFound);
console.log(StatusCodes.Success);
//String enums will have the values based on we are giving as like numeric enums
var Directions;
(function (Directions) {
    Directions["North"] = "Nor";
    Directions["South"] = "sou";
    Directions["East"] = "eas";
    Directions["West"] = "wes";
})(Directions || (Directions = {}));
console.log(Directions.North);
console.log(Directions.West);
var carYear = 2010;
var carType = "Benz";
var carModel = "Mercedez";
var luxuryCar = {
    year: carYear,
    type: carType,
    model: carModel
};
console.log(luxuryCar);
var rectangle = {
    height: 20,
    width: 20
};
console.log(rectangle);
var coloredRectangle = {
    height: 20,
    width: 10,
    color: "Red"
};
console.log(coloredRectangle);
//TypeScript Union
// Used when a value can be more than one type using `|` symbol
function printStatusCode(code) {
    console.log("My Status Code is ".concat(code));
}
printStatusCode(201);
printStatusCode('200');
//Typescript Functions
// it can be used to declare the output of the functions
// return Type declaring 
function getTime() {
    return new Date().getTime();
}
console.log(getTime());
//Void Return type
function sample() {
    console.log("Hello World");
}
sample();
//parameters variable declaring
function multiply(a, b) {
    return a * b;
}
console.log(multiply(2, 3));
// Optional Parameters
function add(a, b, c) {
    return a + b + (c || 0);
}
console.log(add(1, 2));
