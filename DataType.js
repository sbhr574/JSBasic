let name = "SUbhajit";
let age = 25;
let color = 'Red';
console.log(name +' '+ color);

const range = 4; //not possible to change the value of range because its constant
//range = 5;          //This will show an error.
console.log(range);

let num = 56;
num = 09;
console.log('num value - ' + num);


/**
 * 1. Primitive data type
 * - String
 * - Number
 * - Boolean
 * - Undefined
 * - Null 
 * 
 * can be check using 'typeof'
 * 
 */

let str = 'This is String';
let num1 = 30;
let salary = 27.55;
let flag = true;
let price;
let model = null;
let fun = undefined;

//dynamic typing means value can be changed to any kind of data type
let d = 'Roy'
d = 35;


/**
 * 2. Referace types
 * - Object
 * - Array
 * - Functions
 * 
 */

//Object - Creating obj of an user
let user ={
    name: 'Tom',
    age: 30
}

console.log(user)
//How to call or user the variable- using dot notation
console.log(user.age);
console.log(user.name);
user.age = 35;
console.log(user.age);
console.log(user.name + " Example")

//using bracket notation
user['name'] = 'Jon';
console.log(user.name);

//Arrays:
//List of objects
let language = ['java', 'javascripts'];
console.log(language);
console.log(language.length);

language[2] = "CSharpe"
console.log(language);

//**************** Functions *************
function getName()
{
    console.log('hello!!!');
}

//how to call the function
getName();

function getUser(val)
{
    console.log('hello this is '+val);
}

getUser('SUbhajit');