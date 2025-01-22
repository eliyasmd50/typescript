var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//implicit and Exlpicit type assigning
var firstName = "Eliyas";
var age = 26;
var married = false;
var lastName = "Mohamed"; // implicit type assigning by infer itself
console.log(typeof firstName);
//Typescript types any type for the implicit types
var json = JSON.parse("55"); // js will parse number directly
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
// maruti.type = 800//throws an error for automatic type inference without declaring
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
console.log(CardinalDirections.south); // 2
console.log(CardinalDirections.west); // 4
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
console.log(Directions.North); // nor
console.log(Directions.West); // wes
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
// Default Parameter in a function arguments and it will be taken as an optional parameter
function pow(value, exponent) {
    if (exponent === void 0) { exponent = 10; }
    return Math.pow(value, exponent);
}
console.log(pow(2)); // 1024
console.log(pow(2, 10)); // 1024
// Named Parameter if same as like typing the normal parameter, we can change the parameter as we can based on the names
function divide(_a) {
    var dividend = _a.dividend, divider = _a.divider;
    return dividend / divider;
}
console.log(divide({ divider: 6, dividend: 12 })); //2
console.log(divide({ dividend: 6, divider: 2 })); // 3
// Rest Parameters type should always be array and it can be like a normal parameter
function addit(a, b) {
    var rest = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        rest[_i - 2] = arguments[_i];
    }
    return a + b + rest.reduce(function (i, c) { return i + c; }, 0);
}
console.log(addit(10, 10, 10, 10, 10)); // 50
console.log(addit(5, 5, 5, 5, 5)); // 25
var negateFunction = function (value) { return value * -1; }; // function declaratiom
console.log(negateFunction(2)); // -2 (output)
//TypeScript Casting
// casting with as
var x = "Hellow";
console.log(x.length); // 6
// casting <>
var m = "Hellow";
console.log(typeof m); //unkown converted to string type while doing this execution
console.log(m.length); // checking with a valid length
// Force Casting
var n = "Hellow";
// console.log(((x as unknown) as number).length); //undefined because length will not defined for number
// Typescript Classes
// Adds types and visibility modifiers to javascript classes
// Members Types 
// Member of a class (properties and methods) are typed in type annotations
var Person = /** @class */ (function () {
    function Person() {
    }
    return Person;
}());
var person = new Person();
person.name = "ELiyas";
console.log(person);
// Access Modifiers
// Public - (Default) allow access to the class members from anywhere
// private- only allow access to the class memebers from within the class
// protected - allow access to the class memebers within itself and the class that inherit it
var Person1 = /** @class */ (function () {
    function Person1(name) {
        this.name = name;
    }
    Person1.prototype.getName = function () {
        return this.name;
    };
    return Person1;
}());
var person1 = new Person1("Eliyas Mohamed");
console.log(person1.getName()); //Eliyas Mohamed // it is a public method so it will be called outside the class
// console.log(person1.name); //will thorow error it is a private property it cannot be called
// Parameter properties
// adding visibility modifiers to the class mebers for the constructor definition
var Person2 = /** @class */ (function () {
    // name is a private member variable
    function Person2(name) {
        this.name = name;
    }
    Person2.prototype.getName = function () {
        return this.name;
    };
    return Person2;
}());
var person2 = new Person2("EliSab");
console.log(person2.getName()); // EliSab
// Readonly same as like arrays we can't change the properties after definition
var Person3 = /** @class */ (function () {
    function Person3(name) {
        this.name = name;
    }
    Person3.prototype.getName = function () {
        return this.name;
    };
    return Person3;
}());
var person3 = new Person3("sabEli");
console.log(person3.getName());
var Rectangle1 = /** @class */ (function () {
    function Rectangle1(width, height) {
        this.width = width;
        this.height = height;
    }
    Rectangle1.prototype.getArea = function () {
        return this.width * this.height;
    };
    Rectangle1.prototype.info = function () {
        return "Rectangle[width= ".concat(this.width, ", height= ").concat(this.height, "]");
    };
    return Rectangle1;
}());
var myRectangle = new Rectangle1(10, 20);
console.log(myRectangle.getArea());
console.log(myRectangle.info());
// inheritance : extends
// class can extends only one other class
var Square = /** @class */ (function (_super) {
    __extends(Square, _super);
    function Square(width) {
        return _super.call(this, width, width) || this; // in this place we are initiating the parent class and giving values to the parent class constructor
    }
    return Square;
}(Rectangle1));
var mySquare = new Square(20);
console.log(mySquare.getArea()); // 400
// override in class will change a method with the same name in the class that extends
var Square1 = /** @class */ (function (_super) {
    __extends(Square1, _super);
    function Square1(width) {
        return _super.call(this, width, width) || this;
    }
    Square1.prototype.info = function () {
        return "Square[length=".concat(this.width, ", width=").concat(this.width, "]");
    };
    return Square1;
}(Rectangle1));
var square1 = new Square1(30);
console.log(square1.getArea());
console.log(square1.info());
// Abstract class 
// we can make this as a base class for other class without implemeting all its mebers
// we cannot make a instance of an abstract class since it is not initiated fully
var Polygon = /** @class */ (function () {
    function Polygon() {
    }
    Polygon.prototype.info = function () {
        return "Polygon[".concat(this.getArea(), "]");
    };
    return Polygon;
}());
var Reactangle2 = /** @class */ (function (_super) {
    __extends(Reactangle2, _super);
    function Reactangle2(width, height) {
        var _this = _super.call(this) || this;
        _this.width = width;
        _this.height = height;
        return _this;
    }
    Reactangle2.prototype.getArea = function () {
        return this.width * this.height;
    };
    return Reactangle2;
}(Polygon));
var reactangle2 = new Reactangle2(20, 40);
console.log(reactangle2.getArea());
console.log(reactangle2.info()); // we can call the polygon class function here without fully implemented members
