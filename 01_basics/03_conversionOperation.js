let score  = "33";
console.log(typeof score)
console.log(typeof (score))


let valueInNumber = Number(score);
console.log(valueInNumber);
console.log(typeof valueInNumber);
// if the value is not convertible to number
// such as 
score = "333abc";
valueInNumber = Number(score)
console.log(typeof valueInNumber);//number
// But when we want to print the value of the converted number we will get
console.log(valueInNumber);//NaN


// Similarly when we want to convert a null value to a number value
score = null;
valueInNumber  = Number(score);
console.log(valueInNumber);  //0
console.log(typeof valueInNumber);// number


// similarly for Undefined
score = undefined;
valueInNumber = Number(score);

console.log(typeof valueInNumber); // number
console.log(valueInNumber); // NaN

// Similarly For Boolean values
score = true;
valueInNumber = Number(score);

console.log(typeof valueInNumber); // number
console.log(valueInNumber); // 1  and for "false" it will return as 0

// Similarly for String 
score = "hello"
valueInNumber = Number(score);

console.log(typeof valueInNumber); //number
console.log("string converted to "+ valueInNumber); //1


let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn); //true
console.log(typeof booleanIsLoggedIn); //boolean

//2) 

isLoggedIn = 0

 booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn); //true
console.log(typeof booleanIsLoggedIn); //boolean

//3) 

isLoggedIn = "hello"

booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn); //true
console.log(typeof booleanIsLoggedIn); //boolean

//4) 
isLoggedIn = ""

 booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn); //true
console.log(typeof booleanIsLoggedIn); //boolean



// Similarly we can convert a number to string also

let somenumber = 444;
let stringNumber = String(somenumber);
console.log(stringNumber);
console.log(typeof stringNumber);




