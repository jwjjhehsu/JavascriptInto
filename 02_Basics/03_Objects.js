// singleton 
//Object.create();  ///using constructor where the concept of singleton come to picture
// Object literals
const jsUser = 
{
    name : "hitesh",
    "full name" :"priyaraj mohnaty", //cannot be accessed by . operator
    age:24,
    location:"jaipur",
    email:"google@gmail.com",
    isLoggedin:true,
    lastLoggedInDays: ["monday","tuesday","thursday"]

} 


console.log(jsUser.email);
console.log(jsUser["email"]);
// console.log(jsUser.full name);
console.log(jsUser["full name"])


// similarly to access a symbol inside a object 
// we have some Rules 
let mysym = Symbol("mykey");


// let new_Obj = 
// {
//     name : "liku",
//     mysym: "mynewkey", //although we are thinking that its the previous symbol we have used but no it is a new string inside the object  
//     age :17,
//     city:"bhubneswar"
// }

let new_Obj = 
{
    name : "liku",
    //to make the symbol to be used here we have to add the square brackets
    [mysym]: "mynewkey", 
    age :17,
    city:"bhubneswar"
}
// Accessing the symbol
console.log(new_Obj[mysym]);


// to override the values present inside an object 
jsUser.email= "liku123@gmail.com";
console.log(jsUser.email);

// to freeze the value of the object so that it cannot be modified we use freeze method

// Object.freeze(jsUser);
jsUser.age =33;
console.log(jsUser.age);

console.log(new_Obj);

// to add and declare with initialize a new object value
new_Obj.greeting =function ()
{
    console.log("hello hitesh")
}
console.log(jsUser.greeting);
console.log(new_Obj.greeting())

// similarly to refer to the objects values we use this keyword
jsUser.greeting2 = function ()
{
    console.log(`Hello jsUser ${this["full name"]}`);

}

console.log(jsUser.greeting2);
console.log(jsUser.greeting2());

