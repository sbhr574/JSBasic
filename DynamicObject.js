//dynamic nature of object in javascripts
const object1 = 
{
    val: 12,
    sum(){}
}

console.log(object1);

//adding properties to this object

object1.price = 100;
object1.mul = function(){
    console.log('price is ', this.price);
};
object1.isFlag = true;
console.log(object1);

//deleting or removing properties from the object
delete object1.sum;
delete object1.val;
console.log(object1);

//printing the value
console.log(object1.mul());

