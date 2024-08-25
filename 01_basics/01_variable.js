// Javascript is a dynamically typed language meas we dont have to declare the type of the variable, function the data type is decided by the value assigned to that variable

// In javascript we have three ways to declare a variable
// 1) Const ->  once any variable is declared as const it can not be reinitilaized further 
const user_id = 334444;
// user_id = 898080;
// console.log(user_id);   //TypeError: Assignment to constant variable.


// 2) Var -> It is also a type to declare a varibale in javascript but it has some issues in block scope and functional scope
//   EXAMPLE:
var user_password = "liku1234";

{
    user_password = "lima33333";

}

console.log(user_password);   //Output: lima3333 because it will updated inside the block scope so that it was affected to the global  declaration


// let - > it is also an another type to declare a variable and always prefer to use to declare a variable in javascript

let user_address = "angul"
console.log(user_address);


let user_isloggedin;   //undefined



// To print all the data in a tabular format we can also use an another way
console.table([user_address,user_address,user_password,user_isloggedin]);
