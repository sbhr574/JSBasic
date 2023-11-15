# JSBasic

RefereceError: Whenever the Java Scripts engine tries to find a variable inside the memory space but if it is not accessible then this error will come.
Example: 
console.log(a); -----> In this line a is in a temporal dead zone.
let a = 100;
![image](https://github.com/sbhr574/JSBasic/assets/34245876/bff2f16a-1489-4fd9-a1e2-d358146b70e4)

If trying to access a random variable that is not defined at all. 
Example : console.log(y);
![image](https://github.com/sbhr574/JSBasic/assets/34245876/96d809ef-aed4-498b-9abf-2ab7463c3abc)

<< Functions >>
Type of functions: - 
1. Function Statement 
![image](https://github.com/sbhr574/JSBasic/assets/34245876/272ebf95-f0ce-49fb-b9b5-c214167bb603)
2. Function Expression
![image](https://github.com/sbhr574/JSBasic/assets/34245876/87d486d2-c75c-4caf-81fe-259cc6ff0322)

Anonymous Function: This doesn't have any name. This type of function can be used as a value. Just like any other value, we are assigning to a variable. 
Ex: var b = function() {
     }

3. Named function expression 
   Ex: var b = function xyz() {
           console.log("logged b");
           console.log(xyz);
     }

   xyz(); ------> This will throw an error. We can only access it inside the function but not from outside.

4. param1 and param2 are called parameters. 10 and 12 are called arguments. 
function xyz(param1, param2) {
           console.log("logged b");
           console.log(xyz);
     }

xyz(10, 12); 
