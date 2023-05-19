let btn = document.querySelector('button');
btn.addEventListener('click', function()
{
    let name = prompt('Enter name');
    btn.textContent = 'Roll No.' +name;
    console.log("Test");
});

document.getElementById('sign up').addEventListener('click', function(){
    alert('Page Creation under progress');
});