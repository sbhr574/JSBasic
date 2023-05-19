// EX: 1
function x(){
    let a = 10;
    function y(){
        console.log(a);
    }
    y();
}
x();


// // EX: 2
function x1(){
    let b = 11230;
    return function y1(){
        console.log(b);
    }
}

let func = x1();
console.log(func);

func();

// EX: 3 returning the function
function x2(){
    let c = 9878;
    function y2(){
        console.log(c);
    }
    c = 1003;
    return y2;
}

let func1 = x2();
console.log(func1);

func1(); // js is synchronas but still it remembers the closure(functios along with its lexical scope) which is returing

// EX: 4 parent of parent
function q1(){
    let p1 = 900;
    function q2(){
        let p2 = 700;
        function q3(){
            console.log(p2, p1);
        }
        q3();
    }
    q2();
}
q1();


