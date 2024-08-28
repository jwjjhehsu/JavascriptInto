// Befoe knowing about the arrow functions lets revise the concewpt of this keyword with an example

// so basically this keyword use to access the current context related data 


// example 


const user_data = 
{
    username : "priyaraj",
    age:44,
    salary: 4500,
    writeMessage:function()
    // 
    {
    //     console.log(`Hello js user ${username}welcome to the website`)   //not able to access here 
    // to make it related to the current object context we have to use the this keyword
    console.log(`Hello js user ${this.username} welcome to the website`);  //  in case of any modification for the new username it will also modified 
    // console.log(this);  //so its return the current context available inside the current object

     
    }
  
}


// user_data.writeMessage();
// user_data.username = "sam";
// user_data.writeMessage();



// to show the current context of the entire file
// console.log(this);  //as we are now in the node environment the current context will return as empty but in the same when we are trying to access in the nrowser it is returing some value because at that time we are in the window object 

// if we want to use the this keyword inside a function we use
// function chai()
// {

//   const username = "hello "
//     console.log(this.username); //it cannnot be accessed inside a function
// }

// chai()


// Lets learn about the arrow functions
console.log(" -----------------------ARROW FUNCTION ==============================");
// const chai = function()
// {
//     console.log("Your tea is ready to take ")
// }

// chai()   //its a normal function


//Arrow function

const chai = ()=>
{
    const udername = "liku"
    console.log(this)//undefined
}

chai() 



// lets deep dive into the arrow functions
// const addTwo = (num1, num2)=>
// {
//     return  num1+num2;

// }

const addTwo = (num1, num2)=>   (num1+num2);//when we use implicit return and whenever using round brackets we dont need to declare return keyword but in case of curly braces we have to use thr return keyword
console.log(addTwo(33,44));


const addRandom = (num1, num2) =>  ({username: "priyaraj mohanty"});
console.log(addRandom(22,33));









