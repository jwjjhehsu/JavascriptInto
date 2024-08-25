// We have seen that we have mainly 7 types of primitive data types in js
// Those are
//  1 ) String
//2) Boolean
//3) Number
// 4) undefined
//5)  null
// 6) symbol
// 7) bigint



// similarly we have some non-primitive data types in js
// 1) function
// 2) Object
// 3) Array


// LETS DO SOME FEW EXAMPLES OF EACH
let num  = 33; 
let bigNumber = 333333333333333333333333333n;
console.log(num);
console.log(bigNumber);


let name = "Hello";
console.log(name);

let isLoggedin = true;
console.log(isLoggedin);

let presentTemp = null;
console.log(typeof presentTemp);

let city = undefined;
console.log(city);

let id = Symbol(["123"]);
let newid = Symbol(["123"]);

console.log(id === newid);



// Non primitive types 
// 1) Arrays
let heros  = ["shaktiman", "naagraj", "ironman"];
console.log(heros);

// Object

let myobj = 
{
    name: "liku",
    age : 23,
    city:"talcher"
}

console.log(myobj);

// Function
let myFun  = function ()
{
    console.log("Hello function");
    
}

console.log(myFun);


// REMEMBER
// when we not declare any variable with no value and try to print that it will print the result as "undefined"
let undefnedcity;
console.log(undefnedcity);

