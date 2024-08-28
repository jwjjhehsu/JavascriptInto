const marvel_heros = ["ironman","thor","spiderman"];
const dc_heros = ["batman","superman","aquaman"];

marvel_heros.push(dc_heros);
// as array push taking anything as a single element of it is goung to take the second array as its next element 

// we can also access them
console.log(marvel_heros[3][1]);

// Concate
let new_heros = marvel_heros.concat(dc_heros);
console.log(new_heros);


//Spread operator

const all_heros = [...marvel_heros,...dc_heros];
console.log(all_heros);
 //basically it's going to spread all the array elements to single elements and merge them into a single array

const another_Array = [1,2,3,[4,5,6], 7,[33,442,4,[3,4]]];
const real_Array = another_Array.flat(3);
// const real_Array = another_Array.flat(Infinity);    //also we have to give the depth we can also pass "infinity " here but always recommended to use precise value
console.log(real_Array);

console.log(Array.isArray("Hitesh"));
// to make it array 
console.log(Array.from("Hitesh"));
//lets convert an object to an array
console.log(Array.from({name: "priyaraj"})); //remind later

let score1 = 33;
let score2 = 333;
let score3 = 66;

console.log(Array.of(score1,score2,score3));







// array of objects
let myobj = {
    name : "liku",
    id : 33
}
console.log(Array.of(myobj));

