// Name of any constructor should be pascal notation: OneTwoThree

function ConsFunction(name, age)
{
    this.name = name;
    this.age = age;

    this.fun = function fun()//this keyword is mandatory
    {
        console.log('This is an function');
    }

    this.fun1 = function()
    {
        console.log('This is an function one');
    }
}

const obj1 = new ConsFunction('Subhajit', 32);
const obj2 = new ConsFunction("Moni", 30);

console.log(obj1);
console.log(obj2);

//both obj is not same
obj1.age = 40;

console.log(obj1);

//Calling the method
obj1.fun();
obj1.fun1();