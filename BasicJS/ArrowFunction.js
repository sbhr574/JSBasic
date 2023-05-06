let val = function()
{
    console.log('val');
    return 1;
}

console.log(val());


//Optimize the above function
//EX1: 
let val1 = () =>
{
    console.log('After optimization');
    return 1;
}

val1();

//EX2:
let val2 = (user) =>
{
    console.log('After optimization '+user);
    return 1;
}

val2('Subhajit');

//EX3:
let sum = (num1, num2) => num1 + num2;

console.log(sum(5,4));


//EX4: 
// function cs()
// {
//     // this.num1 = num1;
//     // this.num2 = num2;
//     const s = (num1, num2) => num1 + num2;
//     return s;
// }

// const sm = cs();
// console.log(sm.s(10, 20))


