/**
 * Syntax of set timeout
 * let timeId = setTimeOut(function, <delay>, arg1, arg2, arg3, so on....)
 * timeId returns timer ID, delay is in mili second
 */

// alert("Hello");

// let a = setTimeout(function() {
//     alert("I am good")
// }, 2000);

// let b = prompt("Do you want to run the settimeout");
// {
//     clearTimeout(a)
// }
// console.log(a);


// // EX 2
// const sum = (a, b) => {
//     console.log("Yes I am running "+ (a+b))
// }

// setTimeout(sum, 1000, 2, 4);

// // EX:3 
// let setInt = setInterval(function()
// {
//     console.log("This is what ");
// }, 200);
// setInt;
// console.log(setInt);

// const mul = (a, b) => {
//     console.log("Yes I Set interval "+ (a*b))
// }

// setInterval(mul, 1000, 2, 2);
// // console.log(clearInterval(setInt));
// clearInterval(setInt);

// Ex:4

let num = 1;
c = prompt('Entre the value for which you want multiplication table');
c = Number.parseInt(c);
var multi = (a) => {
  let q = (a * num);
  if (q == (c * 11)) {
    clearInterval(id);
  }
  else {
    document.write(`Multiple of ${a} * ${num} is :` + q + "<br>")
  }
  num++
}
let id = setInterval(multi, 1000, c)

