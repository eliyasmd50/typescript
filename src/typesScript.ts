//implicit and Exlpicit type assigning
let firstName: String = "Eliyas";
let age: number = 26;
let married: boolean = false;
let lastName = "Mohamed"; // implicit type assigning by infer itself

console.log(typeof firstName);

//Typescript types any type for the implicit types
const json = JSON.parse("55");// js will parse number directly
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
console.log(typeof (unkownValue as string));

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
// maruti.type = 800//throws an error for automatic type inference without declaring
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

console.log(CardinalDirections.south); // 2
console.log(CardinalDirections.west); // 4

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

console.log(Directions.North); // nor
console.log(Directions.West); // wes


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

// Default Parameter in a function arguments and it will be taken as an optional parameter
function pow(value: number, exponent: number = 10): number {
    return value ** exponent;
}

console.log(pow(2)); // 1024
console.log(pow(2, 10)); // 1024

// Named Parameter if same as like typing the normal parameter, we can change the parameter as we can based on the names
function divide({dividend, divider} : { dividend: number, divider: number}): number {
    return dividend / divider;
}

console.log(divide({ divider : 6, dividend : 12}));//2
console.log(divide({ dividend : 6, divider : 2}));// 3

// Rest Parameters type should always be array and it can be like a normal parameter
function addit(a: number, b: number, ...rest: number[]): number {
    return a + b + rest.reduce((i, c) => i + c, 0)
}
console.log(addit(10,10,10,10,10));// 50
console.log(addit(5,5,5,5,5));// 25

// Type Aliases for an arrow function for the parameters and output declaration
type negate = (value: number) => number;  // type declaration
const negateFunction : negate = (value) => value * -1; // function declaratiom
console.log(negateFunction(2));// -2 (output)


//TypeScript Casting

// casting with as
let x : unknown = "Hellow";
console.log((x as string).length);// 6

// casting <>
let m : unknown = "Hellow";
console.log(typeof (<string>m)); //unkown converted to string type while doing this execution
console.log((<string>m).length); // checking with a valid length

// Force Casting
let n = "Hellow";
// console.log(((x as unknown) as number).length); //undefined because length will not defined for number


// Typescript Classes
// Adds types and visibility modifiers to javascript classes

// Members Types 
// Member of a class (properties and methods) are typed in type annotations
class Person {
    name: string;
}
const person = new Person();
person.name = "ELiyas";
console.log(person);

// Access Modifiers
// Public - (Default) allow access to the class members from anywhere
// private- only allow access to the class memebers from within the class
// protected - allow access to the class memebers within itself and the class that inherit it

class Person1 {
    private name: string;

    public constructor(name: string) {
        this.name = name
    }
    public getName(): string {
        return this.name;
    }
 }

 const person1 = new Person1("Eliyas Mohamed");
 console.log(person1.getName());//Eliyas Mohamed // it is a public method so it will be called outside the class
 // console.log(person1.name); //will thorow error it is a private property it cannot be called


 // Parameter properties
 // adding visibility modifiers to the class mebers for the constructor definition
 class Person2 {
    // name is a private member variable
    public constructor(private name: string) {}

    public getName(): string {
        return this.name;
    }
 }
const person2 = new Person2("EliSab");
console.log(person2.getName());// EliSab

// Readonly same as like arrays we can't change the properties after definition
class Person3 {
    private readonly name: string;

    public constructor (name: string) {
        this.name = name
    }

    public getName(): string {
        return this.name;
    }
}
const person3 = new Person3("sabEli");
console.log(person3.getName());
// person3.name = "ELiyas"; // it cannot be reassign because it is readonly and Private modifiers


//Inheritance : implements
// class can implements multiple inheritance one after other like below
// class Rectangle implements Shape, Colored {}
interface Shape {
    getArea: () => number;
}
class Rectangle1 implements Shape {
    public constructor (protected readonly width: number, protected readonly height: number) {}

    public getArea() {
        return this.width * this.height;
    }

    public info() : string {
        return `Rectangle[width= ${this.width}, height= ${this.height}]`;
    }
}
const myRectangle = new Rectangle1(10, 20);
console.log(myRectangle.getArea());
console.log(myRectangle.info());

// inheritance : extends
// class can extends only one other class
class Square extends Rectangle1 {
    public constructor (width: number) {
        super(width, width); // in this place we are initiating the parent class and giving values to the parent class constructor
    }
    // getArea gets inherited from the 
}
const mySquare = new Square(20);
console.log(mySquare.getArea());// 400

// override in class will change a method with the same name in the class that extends
class Square1 extends Rectangle1 {
    public constructor(width: number) {
        super(width, width);
    }
    public override info(): string {
        return `Square[length=${this.width}, width=${this.width}]`
    }
}
const square1 = new Square1(30);
console.log(square1.getArea());
console.log(square1.info()); 

// Abstract class 
// we can make this as a base class for other class without implemeting all its mebers
// we cannot make a instance of an abstract class since it is not initiated fully

abstract class Polygon {
    public abstract getArea(): number;

    public info() : string {
        return `Polygon[${this.getArea()}]`;
    }
}

class Reactangle2 extends Polygon {
    public constructor(protected readonly width: number, protected readonly height: number) {
        super();
    }

    public getArea(): number {
        return this.width * this.height;
    }
}
const reactangle2 = new Reactangle2(20, 40);
console.log(reactangle2.getArea());
console.log(reactangle2.info());  // we can call the polygon class function here without fully implemented members