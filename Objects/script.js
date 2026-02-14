// const obj_name = {
//     key_1 : Value_1,
//     Key_2 : Value_2
// }

// const person = {
//     firstName : "Aryan",
//     lastName : "Keshri",
//     age : 20
// }
// console.log(person);

// Object_name.key

// const person = {
//     firstName : "Aryan",
//     lastName : "Keshri",
//     age : 20
// }
// console.log(person.firstName);

// const person = {
//     firstName : "Aryan",
//     lastName : "Keshri",
//     age : 20
// }
// person.firstName = "AARYAN";

// console.log(person.firstName);

// const person = {
//     firstName : "Aryan",
//     lastName : "Keshri",
//     age : 20
// }

// person.comp = "JS";
// console.log(person);

// const person = {
//     firstName : "Aryan",
//     lastName : "Keshri",
//     age : 20
// }

// delete person.age;
// console.log(person);

// const person = {
//     firstName : "Aryan",
//     lastName : "Keshri",
//     age : 20,
//     add:{
//         asdf:"asdf",
//         lkj:"lkj"
//     }

// }
// console.log(person.add.asdf);

// const person = {
//     firstName : "Aryan",
//     lastName : "Keshri",
//     age : 20
// }

// console.log("aryan" in person);

// const person = {
//     firstName : "Aryan",
//     lastName : "Keshri",
//     age : 20
// }

// for(let x in person){
//     console.log(x);
// }

// const person = {
//     firstName : "Aryan",
//     lastName : "Keshri",
//     age : 20
// }

// for(let x in person){
//     console.log(person[x]);
// }

// const person = {
//     firstName : "Aryan",
//     lastName : "Keshri",
//     age : 20
// }

// for(let x in person){
//     console.log(x + " : " + person[x]);
// }

// const person = new Object();

// person.firstName = "ARYAN";
// person.lastName = "KESHRI";
// person.Age = 20;

// console.log(person);

// const person = new Object();

// person.firstName = "ARYAN";
// person.lastName = "KESHRI";
// person.Age = 20;

// console.log(person);

// const person = {
//     firstName : "Aryan",
//     lastName : "Keshri",
//     Greet : function Greet(){
//         console.log("Hello ARYAN..!");
//     }
// }

// // console.log(person);
// person.Greet();

// const person = {
//     firstName : "Aryan",
//     lastName : "Keshri",
// }

// function Greet(){
//         console.log("Hello ARYAN..!");
// }

// person.Greeting = Greet;

// // person.Greeting();
// console.log(person);

// const person = {
//     firstName : "Aryan",
//     lastName : "Keshri",
//     Gteet(){
//         console.log("Hello Aryan Bby..!");
//     }
// }

// person.Gteet();

// const person = {
//     firstName : "Aryan",
//     lastName : "Keshri",
//     getFullName : function(){
//         return `${this.firstName} ${this.lastName} `;
//     }
// }
// console.log(person.getFullName());

// const person = {
//     fistName :"Aryan",
//     lastName: "Keshri"
// }

// function Person( fist,secound,third){
//     this.firstName = fist,
//     this.lastName = secound,
//     this.age = third;
// }

// const person_1 = new Person("aryan" ,"kumar" ,20);
// const person_2 = new Person("raj","Singh",21);
// const person_3 = new Person();


// console.log(person_1);
// console.log(person_2);

// function Person( fist,secound,third){
//     this.firstName = fist,
//     this.lastName = secound,
//     this.age = third;
// }

// const person_1 = new Person("aryan" ,"kumar" ,20);
// const person_2 = new Person("raj","Singh",21);

// person_1.Sex = "Male";
// console.log(person_1);

// person_2.Greet = function(){
//     console.log("Hello Aryan..!");
// }
// person_2.Greet();

// function Person( fist,secound,third){
//     this.firstName = fist,
//     this.lastName = secound,
//     this.age = third,
//     this.GetFullName = function(){
//         return `${this.firstName} ${this.lastName} ${this.age}`;
//     }
// }
// const person_1 = new Person("aryan" ,"kumar" ,20);
// const person_2 = new Person("raj","Singh",21);

// console.log(person_2.GetFullName());

// const person = {
//     name : "ARYAN"
// };
// console.log(person);

// function Person(fistName,lastName){
//     this.fistName = fistName,
//     this.lastName = lastName
// }

// Person.prototype.gender = "Male";

// const p1 = new Person("A","B");
// const p2 = new Person("C","D");

// console.log(p1);

// function Person(fistName,lastName){
//     this.fistName = fistName,
//     this.lastName = lastName
// }

// Person.prototype.getFullName = function(){
//     return `${this.fistName} ${this.lastName}`
// };

// const p1 = new Person("A","B");
// const p2 = new Person("C","D");

// console.log(p2.getFullName());

