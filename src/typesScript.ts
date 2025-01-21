//implicit and Exlpicit type assigning
let firstName: String = "Eliyas";
let age: number = 26;
let married: boolean = false;
let lastName = "Mohamed";

console.log(typeof firstName);

//Typescript types any type for the implicit types
const json = JSON.parse("55");
console.log(json);
const json1 = JSON.parse('{"name": "Eliyas"}');// js needs a json object to parse it out the value
console.log(json1);
console.log(typeof json);


// Typescript understanding special types ANY and UNKNOWN
let u:any = true;
u = "ELiyas";
console.log(Math.round(u));

//Typescript unkown type instead of using any for understanding
//as keyword is used to cast the types after we know it is unkown and need to give a types for the further use
let w = {
    runANonExistentMethod: () => {
        console.log("Hi i am Cristiano");
    } 
} as { runANonExistentMethod: () => void }

// w.runANonExistentMethod();
//Doing the edge cases for the function to define a variable
console.log(typeof w);
if (typeof w === 'object' && w !== null) {
    (w as { runANonExistentMethod: Function } ).runANonExistentMethod();
}

//examples of assigning a type to its variable after it declared
const obj = { name: "Eliyas", age: 26} as { name: string, age: number};
console.log(obj);

const unkownValue: unknown = "Hello World";
console.log(typeof (unkownValue as string))

// API hit will return the value with type safe if it is not assigned
// const externalData = fetchData() as {id: number, name: string };

// TypeScript never type will throw error
// let x: never = true;

//Typescript Arrays
// specifiying the types which needs to use in a array
const names: string[] = [];
names.push("Mohamed");
names.push("Eliyas");
// names.push(26); //gives a error so it will not return the desired expectations
console.log(names);

//making the array as Readonly so that it can't be changed

const marks: readonly number[] = [98, 99, 100];
// marks.push(76); // dosen't allow to change the size of the array either it throws an error
console.log(marks);

//TypeScript type inference can infer the type of an array if it has the values
const numbers = [1,2,3,4];
numbers.push(5);
// numbers.push("6"); thorws error for the string push in an number[] array 
console.log(numbers);

const head: number = numbers[0];
console.log(head);

//Typed Array
//Tuple in a typescript allows to define the each element in an array as a different types

//defining tuple
let ourTuple : [string, number, boolean];
//initializing tuple
ourTuple = ["ELiyas", 26, true];
console.log(ourTuple);

// Readonly Tuple is a good practice for type safety
let ourReadonlyTuple: readonly [number, string, boolean];
ourReadonlyTuple = [16, "ELiyas", false];
// ourReadonlyTuple.push(35); // throws error as it is only readable
console.log(ourReadonlyTuple);

// Named Tuple can give a name to the element of an array
const graph : [x: number, y: boolean] = [55.4, true];
console.log(graph);

//Destructuring Tuple 
const movie : [string, number] = ["Irudhisutru", 2020];
const [ moviename, releaseYear ] = movie;// assigning in a destructure way
console.log(moviename);
console.log(releaseYear);

// TypeScript Object Types
const car : { type: string, model: string, year: number} = {
    type: "mercedez Benz",
    model : "S-class",
    year: 2024,
}

console.log(car);

// Type Inference
let maruti = {
    type: "m-800",
}
maruti.type = "Fortuner";
// maruti.type = 800// automatic type inference without declaring
console.log(maruti);

//Optional Properties either it will have the value or not
let swift : { type: string, year?: number } = {
    type: "dezire"
}
swift.year = 2024;// later assiginig by not expecting the variable to be present immediate effect
console.log(swift);

// Index Signatures for the object assiginig
const nameAgeMap : { [index: string]: number } = {
    mohamedELiyas: 26
};
nameAgeMap.Mohamed = 26;
nameAgeMap.ELiyas = 27;
// nameAgeMap.sab = "Eliyas";// string will not be assigned 
console.log(nameAgeMap);

// TypeScripts enum is a special class that represents a group of constants

//Numeric Enums - Defualt
// enum will initialize the first value to 0 and increments as per the additional values

enum CardinalDirections {
    North = 1,
    south,
    east,
    west
}
let currentDirection = CardinalDirections.North;
console.log(currentDirection); // logs only 0

console.log(CardinalDirections.south);
console.log(CardinalDirections.west);

//Numeric enums fully initialized then the values will not be incremented automatically
enum StatusCodes {
    Badrequest = 400,
    Success = 200,
    Created = 201,
    notFound = 404
}

console.log(StatusCodes.notFound);
console.log(StatusCodes.Success);

//String enums will have the values based on we are giving as like numeric enums
enum Directions {
    North = "Nor",
    South = "sou",
    East = "eas",
    West = "wes"
}

console.log(Directions.North);
console.log(Directions.West);


// Typescripts type aliases
// type Defining
type CarYear = number;
type CarType = string;
type CarModel = string;
type Car = {
    year: CarYear,
    type: CarType,
    model: CarModel
}

const carYear: CarYear = 2010;
const carType: CarType = "Benz";
const carModel: CarModel = "Mercedez";
const luxuryCar: Car = {
    year: carYear,
    type: carType,
    model: carModel
}

console.log(luxuryCar);

//TypeScript Interface
//It is same as like type declaration except this only apply to objects 

interface Rectangle {
    height: number,
    width: number
}

const rectangle: Rectangle = {
    height: 20,
    width: 20
}
console.log(rectangle);

// Extending an interfaces with some additional properties
interface ColouredRectangle extends Rectangle {
    color: string
}

const coloredRectangle : ColouredRectangle = {
    height: 20,
    width: 10,
    color: "Red"
}

console.log(coloredRectangle);

//TypeScript Union
// Used when a value can be more than one type using `|` symbol

function printStatusCode(code: string | number) {
    console.log(`My Status Code is ${code}`);
}

printStatusCode(201);
printStatusCode('200');


//Typescript Functions
// it can be used to declare the output of the functions

// return Type declaring 
function getTime(): number {
    return new Date().getTime();
}
console.log(getTime());

//Void Return type
function sample(): void {
    console.log("Hello World");
}
sample();

//parameters variable declaring
function multiply(a: number, b: number): number {
    return a * b;
}
console.log(multiply(2, 3));

// Optional Parameters
function add (a:number, b: number, c?: number) {
    return a + b +  (c || 0);
}
console.log(add(1, 2));

