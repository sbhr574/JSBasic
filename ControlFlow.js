//****************if else
let str = 'I am good';
let len = str.length;
if(len == 5)
{
    console.log('Size is 5');
}
else
{
    if(len > 5)
    {
        console.log('Size is more then 5');
    }
}

//*********************Switch case

const d = new Date();
let day = d.getDay();

console.log(day);

switch(day)
{
    case 0:
        console.log("Today is sunday");
        break;

    case 1:
        console.log("Today is monday");
        break;

    case 2:
        console.log("Today is Tuesday");
        break;

    case 3:
        console.log("Today is Wednesday");
        break;

    default:
        console.log("Default one ");
}