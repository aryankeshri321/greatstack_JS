// operators in JavaScript

// Operators in Javascript are symbols

// They are used to perform Operations on operands.

// Operands are the value and variable.

// 10 + 20;

// Arithmetic operators
// Assignment operators
// Comparison operators
// Logical operators
// String operators

//Arithmetic operators :-

// Arithmetic operators are used to perform mathematical Operations on operands.

// Addition
// let sum = 5 + 3;
// console.log(sum); // 8

// Subtraction
// let difference = 10 - 4;
// console.log(difference); // 6

// Multiplication
// let product = 2 * 6;
// console.log(product); // 12

// Division
// let quotient = 15 / 3;
// console.log(quotient); // 5

// Remainder (Modulus)
// let remainder = 17 % 4;
// console.log(remainder); // 1

// Exponentiation
// let result = 2 ** 4;
// console.log(result); // 16

// Assignment Operator:-

// Assignment operators are used to assign values to variables. We use (=) sign for assignment
// operator.

//  Example:

// let x = 5;
// We have multiple assignment operator like:
// Addition assignment
// x += 3;
// console.log("x:", x); // x: 8
// // Subtraction assignment
// x -= 2;
// console.log("x:", x); // x: 6
// // Multiplication assignment
// x *= 4;
// console.log("x:", x); // x: 24
// // Division assignment
// x /= 3;
// console.log("x:", x); // x: 8
// // Remainder (Modulus) assignment
// x %= 5;
// console.log("x:", x); // x: 3
// // Exponentiation assignment
// x **= 2;
// console.log("x:", x); // x: 9


// Increment / Decrement:-

// The increment and decrement operators are used to increase or decrease the value of a variable by 1. 

// The increment operator is (++) and, the decrement operator is (--).

// The increment and decrement operators can be used in two ways:

// Prefix and Postfix. 

// Let’s learn Prefix increment and decrement operators:

// let a = 10;
// console.log(++a);
// console.log(a);

// In this example operator is placed before the variable, and the value of the variable is incremented before it is used.

// let a = 10;
// console.log(--a);
// console.log(a);

// Let’s learn Postfix increment and decrement operators:

// let a = 10;
// console.log(a++);
// console.log(a);

// In this example operator is placed after the variable, and the value of the variable is used before it is incremented.

// let a = 10;
// console.log(a--);
// console.log(a);


// Comparison operators:-

// Comparison operators compare two values and give back a boolean value: either true or false.

//  Comparison operators are useful in decision-making and loop programs in JavaScript. 

// Let’s see some examples:

// < (less than)
// > (greater than)
// <= (less than or equal to)
// >= (greater than or equal to) == (Equal checks )
// != (inequality) (not equal) (flipped value of equal checks) ===(strict equality checks ) (checks the Data type)
// !==(strict inequality (!==) (flipped value strict equality checks)


// Comparison operators :-

// const a = 10;
// const b = 20;
// console.log(a < b); // true
// console.log(a > b); // false
// console.log(a <= b); // true
// console.log(a >= b); // false
// console.log(a == b); // false
// console.log(a != b); // true
// console.log(a === b); // false
// console.log(a !== b); // true

// const a = "10";
// const b = 10;
// console.log(a == b); // true
// console.log(a === b); // false


// Logical Operator:-

// Logical operators perform logical operations like:

// AND (&&), OR (||), NOT (!). Logical AND (&&):

// Evaluates operands and return true only if all are true.

// true && true; // true
// true && false; // false
// false && true; // false
// false && false; // false

// let x = 5;
// let y = 10;

// console.log(x > 0 && y > 0); // true
// console.log(x > 0 && y < 0); // false
// console.log(x < 0 && y > 0); // false
// console.log(x < 0 && y < 0); // false

// Logical OR (||):-

// Returns true even if one of the multiple operands is true

// true && true; // true
// true && false; // true
// false && true; // true
// false && false; // false

// let a = 5;
// let b = 10;

// console.log(a > 0 || b > 0); // true
// console.log(a > 0 || b < 0); // true
// console.log(a < 0 || b > 0); // true
// console.log(a < 0 || b < 0); // false

// Logical NOT (!):-

// Converts operator to boolean and returns flipped value

// let Yes = true;
// let No = false;

// console.log(!Yes); // false
// console.log(!No); // true