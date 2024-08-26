// SO basically we have two types of memories 
// 1) Stack memory (stores all the primitive data types )
// Heap memory(stored all the non-primitive data types)


let username  = "priyarajmohanty";
let newusername = username;

username = "swetapadam samal"


console.log(username); 
console.log(newusername); 

// Explanation: as both of these variables are primitive data types they both were stored inside the stack memory and when we assign the values  of username to newusername then it gets an copy of the value of the username not the original value so if we further chnage the value of newusername then its changes doesnot reflect to the username value..



// Similarly lets understand an example of non-primitive data types
let userOne = 
{
    email : "user@gmail.com",
    upi:"user@ybl"

}

let userTwo = userOne;

userTwo.email  = "changeemail@gmail.com";

console.log(userOne);
console.log(userTwo);

// Explanation: as these two variables are declared as object they both are stored inside the heap memeory and as we pass the value of userOne to userTwo then it will take the whole reference value of user one so any changes made to the userTwo will reflect to the userONE also


