// for - in,

const colors = ['red', 'green', 'blue'];

for(let index in colors)
{
    console.log(index, colors[index]);
}

const subjects = {
    sub1: 'Math',
    sub2: 'English',
    sub3: 'Physics',
    sub4: 'Biology'
};

for(let sub in subjects)
{
    console.log(sub, subjects[sub]);
}

//for - of

for(let col of colors)
{
    console.log(col);
}

//While
let i = 1;
while(i<10)
{
    console.log(i);
    i++;
}

//for-each loop
let num = [42,34,54,67,78,98];
num.forEach((element) => {
    elem = element + 1;
    console.log(element)
    console.log(elem)
});

//or
num.forEach(element => {
    elem = element - 2;
    console.log(elem)
});

//foreach takes three argument
num.forEach((element, index, wholeArray) => {
    console.log(element, index, wholeArray)
});
