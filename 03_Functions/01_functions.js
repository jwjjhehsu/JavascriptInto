let myfun = function()
{
    console.log("Hello function ");

}

myfun();



let addTwoNumbers = function (n1, n2)
{
    console.log(n1+n2)
}

console.log(addTwoNumbers(33,33));


let findSum = function(num1, num2)
{
    return num1+num2 /2;
}

console.log(findSum(44,444));


let userloginmessage = function (username =" sam") //it is the default value even if the user doesnot pass any arguments

{

    if(!username )
    {
        console.log("please enter a username")
        return
    }
    return `${username} is just loggedin `


}

console.log(userloginmessage("liku"));
console.log(userloginmessage(""));//empty is just loggedin
console.log(userloginmessage()); //undefined just logged in

// Rest operator
const addCartPrice = function(val1, val2,...num1)
{
    return num1;
}
console.log(addCartPrice(12,332,4242,4,222));


// Pass an object to the function
// const user = 
// {
//     name:"priyaraj",
//     id:222
// }
function handleObject(anyObject)
{
    console.log(`username is ${anyObject.name} and id is ${anyObject.id}`)
}

// console.log(handleObject(user)) 
// /we can also pass the objects directly

console.log(handleObject ( 
    {
        name : "ritu",
        id : 333
    }
))

// Pass an array to the functions
const mynewArray = [122,32,432,432];
function returnSecondValue(getArray)
{
    return getArray[1];
}

console.log(returnSecondValue(mynewArray))
console.log(returnSecondValue([12,223,243,234,2]))



// Remember
 console.log("ALWAYS REMEMBER ... ")
 
 addOne(3); 

 console.log("we can always a use a function before of its declaration which is a normal function declaration")
 function addOne(val)
//  Normal function declaration
{                                
    return val+1;
 }


 addOne(3);


 /////////////////////////////////////////
console.log("but we can not use the use the expressional function before its declaration ")
//  addTwo(33);
 const  addTwo = function(val)         //function declaratio as an expression
 {
     return val+2;
 }
 addTwo(33);
