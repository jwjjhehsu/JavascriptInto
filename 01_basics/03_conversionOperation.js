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

console.log("/////////////////////test///////////////");


let check = "Hello";
let valueinnmber = Number(check);
console.log(valueinnmber);//NaN
console.log(typeof valueinnmber);//number

 check = "";
valueinnmber = Number(check);
console.log(valueinnmber);// 0 
console.log(typeof valueinnmber);//number


console.log("-----------------Boolean to others Conversion-----------------------")

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


console.log("=-------------------------------------=")
// Similarly we can convert a number to string also

let somenumber = 444;
let stringNumber = String(somenumber);
console.log(stringNumber);
console.log(typeof stringNumber);



//  ********************OPERATIONS IN JAVASCRIPT **************************************//
let value = 3;
let negValue = -(value);
console.log(negValue);
// Arithematic ooperations
console.log(2+2);
console.log(2-2);
console.log(2*2);
console.group(2/2);
console.log(10%2);
console.log(2**4);  //power


let str1 = "hello";
let str2 = "priyaraj";
console.log(str1+ str2);


// Special Cases
console.log(2+ "4");24
console.log("2" + 4);24
console.log(2+2+ "7");47
console.log("2"+ 4+4);244






console.log("+++++++++++++++++++++++some special condition .+++++++++++++++++++++++++++++++++ ")

console.log(+true) //1;
// console.log(true+) //error
console.log("error");

console.log("=================================================================");




// other assignment operators
let num1,num2,num3;

num1 = num2 = num3 = 3+2;
console.log(num1);
console.log(num2);
console.log(num3);


// Increment and Decrement operators
let gameCount = 100;
gameCount++; //post increment -> first use then increment
gameCount--; //post decrement -> first use then decrement

++gameCount; //pre increment -> first increement then use
--gameCount; //pre-decrement -> first decrement and the use

// some more operations ;
console.log(gameCount); //current value
let result = gameCount++ + ++gameCount + 7 + --gameCount - gameCount--;
console.log(result);//209




