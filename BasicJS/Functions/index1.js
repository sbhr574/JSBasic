//What is callback function in javascripts
setTimeout(function () {
    console.log("timer");
}, 5000);

function x(y){
    console.log("called x");
    y();
}

x(function y(){
    console.log("called y");
});
