// Ex:1 'let' has a block scope that means it will be new copy/variable of i for every time 
function x(){
    for(let i=0; i<=5; i++){
        setTimeout(function (){
            console.log(i);
        }, 1000);
    }
    console.log("Printed paint");
}

x();

// Ex:2
function x1(){
    for(var i=0; i<=5; i++){
        setTimeout(function (){
            console.log(i);
        }, 3000);
    }
    console.log("Printed paint");
}

x1();

// Ex:3
function x2(){
    for(var i=0; i<=5; i++){
        function close(num)
        {
            setTimeout(function (){
                console.log(num);
            }, 3000);
        }
        close(i);
    }
    console.log("Printed paint");
}

x2();