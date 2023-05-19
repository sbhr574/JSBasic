//primitive 
let num = 10;
let num1 = "10";
let str = "String value";
let flag1 = true;
let flag2 = false;
let nul = null;
let nd = undefined;

var er = "yes";
console.log(er);

console.log(str);
console.log(flag1);
console.log(flag2);
console.log(nul);
console.log(nd);

//Object
let user={
    name: "Roy",
    age: 30
}

console.log(user);
console.log(user.name);
console.log(user.age);

function fun(val1){
    console.log(val1);
}

fun("mh");

//Arrays
let ar=[12, 13, 23, 34];

for(let i=0; i<ar.length;i++)
{
    console.log(ar[i]);
}

function fun1()
{
    let ar=[12, 13, 23, 34];

for(let i=0; i<ar.length;i++)
{
    if(ar[i] == 24)
        console.log("Found it");
}
}

fun1();

