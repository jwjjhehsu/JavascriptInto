// const tinderuser = new Object(); //sigleton user
const tinderUser = {};// using object literals(non-singleton object)
console.log(tinderUser);

tinderUser.id = "123abc";
tinderUser.name = "sammy";
tinderUser.isLoggedin = true;

console.log(tinderUser);



const regularUser = {
    email : "some@gmail.com",
    username: 
    {
        fullname : 
        {
            firstname : "hitesh",
            lastname : "das"

        }
    }
}


console.log(regularUser.username.fullname.firstname);


//Optional chaining

console.log(regularUser.username?.fullname.firstname);  //checks that is that there any value returns which we are try to acces


// Object operations
const obj1 = {1 : "a",2:"b"}
const obj2 = {3 : "a",4:"b"}

// const obj3 = {obj1, obj2};
const obj3 = Object.assign({},obj1, obj2);
console.log(obj3);

// instead of this we can also use
const objj3 = {...obj1,...obj2};
console.log(obj3);



// Remember :
  //whenever we are fetchig the data fro a database we will get the array objects format 

//   like it 
let data_obj = 
[
    {
        name :"priyaraj",
        id: 90,

    },


    
    {
        name :"priyaraj",
        id: 90,

    },

    
    {
        name :"priyaraj",
        id: 90,

    },

    
    {
        name :"priyaraj",
        id: 90,

    },
    
    {
        name :"priyaraj",
        id: 90,

    }
];


//  as it is an array we can also access it using index values
console.log(data_obj[2]);


// we can access the objects keys and values indivisually to perform some operations also

// Remember always
console.log(tinderUser);
console.log( Object.keys(tinderUser)); //returns an array 
console.log( Object.values(tinderUser));
console.log( Object.entries(tinderUser)); //returns array of key value pair arrays


// to check any keys available or not
console.log(tinderUser.hasOwnProperty('isLoggedin'));


