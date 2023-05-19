let age = 30;

if(age>30 && age<35)
{
    console.log("My age");
}
else
{
    console.log("Not My age");
}

switch(age){
    case (30): 
    console.log("I am 30"); 
    break;
    case (31): 
    console.log("I am 31");
    break;
    case (32): 
    console.log("I am 32");
    break;
    case (33): 
    console.log("I am 33");
    break;
    case (34): 
    console.log("I am 34");
    break;
    default: 
    console.log("not in the list");
}

//  convertig string to number
let num = "30";
num = Number.parseInt(num);
console.log(num/2);

//tarnari operatot
let a = num>40?"above my age": "under my age";
console.log(a);

//loops

let marks = {
    harry: 40,
    moumi: 45,
    moni: 50,
    roy: 90
}

//  simple for loop
for(let i=0;i<Object.keys(marks).length;i++)
{
    console.log("The marks of "+ Object.keys(marks)[i] + " with marks "+ marks[Object.keys(marks)[i]]);
}
console.log("_____________________________________________________________________")

//  for in loop
for(let key in marks)
{
    console.log("The marks of "+ key + " with marks "+ marks[key]);
}