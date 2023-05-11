// let text = document.getElementsByClassName("container")[0];
// text.onclick = () => {
//     let b = document.getElementsByClassName("container")[0];
//     b.innerHTML = "Will run from js";
// };

// Ex:2
let x = function(e){
    console.log(e);
    alert("From x");
}

let y = function(e){
    console.log(e);
    alert("From y");
}

btn.addEventListener('click', x);

btn.addEventListener('click', y);

let prmt = prompt("Enter 1 or 2 to see the alert");

if(prmt == "2")
{
    btn.removeEventListener('click', x);
}
else
{
    btn.removeEventListener('click', y);
}
