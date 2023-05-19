document.getElementsByClassName("google").addEventListener("click", function(){
    window.location = "https://google.com";
    window.focus();
})


const fetchContent = async (url) =>{
    con = await fetch(url);
    let a = await con.json()
    return a;
}

setInterval(async function(){
    let url = "https://jsonplaceholder.typicode.com/todos/1"
    console.log(await fetchContent(url))
}, 3000);


setInterval(async function(){
    document.querySelector("bulb").classList.toggle("bulbCon bulb");
}, 300);