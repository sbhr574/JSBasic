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