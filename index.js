// Topic learning - Seperation of Concerns
// This is my first JAVA Script code!
// console.log('Hello World');

// Variable
// Before ES6 'var' keyword was used to declare the variables.
// 'let' keyword to declare a variable 

// let name = 'Mosh';
// console.log(name);

// Variable declaration rules - 
// Cannot be reserved key word
// Should be meaningful name
// Cannot start with number
// Cannot contain space or hyphen
// Are case sensitive

// let firstName = 'Mosh';
// let lastName = 'Hamedani';

// Constant 
// let interestRate = 0.3
// interestRate = 1;
// console.log(interestRate);

// Value of a variable can change but value of a constant can not change. 
// const interestRate = 0.3
// interestRate = 1; // This will throw exception. "Uncaught TypeError: Assignment to constant variable."
// console.log(interestRate);

// If we don't need to reassign a varriable constant would be the best choice.

// Primitive/Value Types
// Strings
// Number
// Boolean
// Undefined
// Null
// let name = 'Mosh'; // String Literal
// let age = 30; // Number Literal
// let isApproved = true; // Boolean Literal
// let firstName = undefined; // Undefined Literal
// let selectedColor = null; // Null Literal - When we clear the value of avariable.

// Java Script is Dynamic Language
// Static - When a variable is declared it cannot be changed.
// Dynamic - The type of variable can be changed at run time.

// console.log(typeof name)
// console.log(typeof age)
// console.log(typeof isApproved)
// console.log(typeof firstName)
// console.log(typeof selectedColor)

// Reference Types
// Object e.g. person (name, age are the properties of person object.)
// Array
// Function 
// let name = 'Mosh';
// let age = 30; 

// Declare person object
let person = {
    // Properties
    name: 'Mosh',
    age: '30'
}

console.log(person);

// 2 ways to work with the preperties 

// Dot notation
// Assign a value
person.name = ' John';
// Read the value of the property
console.log(person.name);

// Bracket Notation
person['name'] = ' Mary';
console.log(person['name']);

// Dot notation is bit more concise and shorter. So, is more preferable.

// In case we define variable to update during runtime like below - 
let selection = 'age';
person[selection] = 30.1;
console.log(person.age);
console.log(typeof person[selection]);

// Arrays
// [] --> Empty array
let selectedColors = ['red', 'blue'];
console.log(selectedColors);
console.log(selectedColors[0]);
console.log(selectedColors[1]);
// Dynamically adding elements in an array.
selectedColors[2] = 'green';
console.log(selectedColors);
// Array can have different types of objects. Here with string number object as element. 
selectedColors[2] = 1;
console.log(selectedColors);
// What kind of object is selectedColors?
console.log(typeof selectedColors);
// Accessing the properties of Array Type object e.g. length which is the number og elements in Array type objects.
console.log(selectedColors.length);

// Functions - Set of statements that performs a task or calculate values.
// function greet() {
//     // Body of the function
//     console.log('Hello World From Function');
// } // No need of semicolon in function declaration

// greet();

// Functions ca nhave inputs - parameters in function definition
// Function can have multiple parameters
function greet(name, lastName) {
    // Body of the function
    console.log('Hello ' + name + ' '+ lastName);
} // No need of semicolon in function declaration

greet('John'); // John is an argument of the greet function.

// Parameter = defines at the time of function declaration
// Argument = Is provided at the time of function call.

greet("Mary");

// Default value of variable in JAVA Script is undefined

greet('John', 'Smith');

