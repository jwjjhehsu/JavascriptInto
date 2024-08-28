const myArray  = [0,1,2,3,4,2];
const heros = ["iron man","black widow"];

console.log(myArray);
console.log(heros);


// To access the array elements we have go through the index

console.log(myArray[0]);
console.log(myArray[2]);



// Array methods
myArray.push(22);
myArray.push(33);

console.log(myArray);

// to remove the last values
myArray.pop();


myArray.unshift(0); //add at the start of the array
myArray.shift();  //remove the first element and returns it


console.log(myArray.includes(4));
console.log(myArray.indexOf(2));



const newArray = myArray.join();  //convert it into string comma separated

console.log(myArray);
console.log( newArray);

console.log( typeof newArray);



// slice and splice method

console.log("A", myArray);

const myn1= myArray.slice(1,3);
console.log("B", myArray);
console.log(myn1);


const myn2= myArray.splice(1,3);

console.log("c", myArray); //array was changed
console.log(myn2);


