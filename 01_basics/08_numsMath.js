const score = 99;
console.log(score);


// TO explicitly declare that the variable to be number we can use the Number object
const balance = new Number(90000);
console.log(balance);


// Lets do some examples of this 
console.log(balance.toString());
// console.log(typeof balance);  //Remember it is now converted into the string data type but at the time of checking the data type we got object as string is also a object type

// and we are able to apply the methods of string to access and manipulate the data


// 2)
// toFixed()
console.log(balance.toFixed(2));

// 3)
// toPrecision
let otherNumber = 18123.33323;
console.log(otherNumber.toPrecision(5));

// 4) toLocaleString
const hundreds= 1000000000;
console.log(hundreds.toLocaleString('en-IN'));


console.log(" =========================Maths =========================")

console.log(Math.abs(-33));
// sign changes

console.log(Math.round(4.5));
// below or equals 4.5 returns 4 and above returns 5


console.log(Math.ceil(77.9));
console.log(Math.floor(33.9));


console.log(Math.min(33,3,99,7));
console.log(Math.max(33,3,99,7));

console.log(Math.random()); //Always returns a value in between the 0 and 1
console.log(Math.round(Math.random()*10)+1);


// Suppose for a ludo app
const min = 10
const max = 20
// remember
console.log(Math.floor(Math.random()*(max-min +1 )+min));





