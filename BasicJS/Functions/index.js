// Function statement aka function declaration
function a() {
    console.log("a called");
}

// Function expression
var b = function () {
    console.log("b called");
}

a();
b();

// but
var xx = function xyz(){
    console.log("xyz called");
}

xx();
// xyz(); // will throw an error

//Diff bet parameters and argument
var c = function (param1, param2) { //Here param1 and param2 is parameter
    console.log("c called");
}

c(10, 20);// here 10 & 20 is argument

// Anonymous Function
// function (){

// }

// First class function:- Ability to use functions as a value called first class function.

//Ex:1 using function as a variable
var d = function (param1) {
    console.log(param1);
}

d(function (){

});

//Ex:2 returniung function
let e = function () {
    return function xyz(){

    }
}

console.log(e());

//Ex:3 passing another function inside another function as a variable
function xy (){
    console.log("xy called");
}

d(xy);
