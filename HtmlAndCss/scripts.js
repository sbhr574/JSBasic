let num = 10;
let str = "Subhajit";
let flag = true;
// document.body.style.background = "yellow";
document.getElementById('js').innerHTML = str;

function fun()
{
    console.log("This is it");
}

// document.getElementById('js').addEventListener('click', function(){
//     alert('Please close it');
// });

let btn = document.querySelector('button');
btn.addEventListener('click', function()
{
    let name = prompt('Enter name');
    btn.textContent = 'Roll No.' +name;
    console.log("Test");
});

