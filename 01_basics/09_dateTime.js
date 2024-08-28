// JavaScript Date objects represent a single moment in time in a platform-independent format. Date objects encapsulate an integral number that represents milliseconds since the midnight at the beginning of January 1, 1970, UTC (the epoch).

// Dates
let myDate = new Date();
console.log(myDate);

console.log(myDate.toString());

console.log(myDate.toLocaleDateString());
console.log(myDate.toISOString());
console.log(myDate.toLocaleTimeString());
console.log(myDate.toLocaleString());


console.log(typeof myDate); //Object


// let mycreatedDate = new Date(2023,0,23,6,20);


let mycreatedDate = new Date("2023-01-26");
let mycreatedinddate = new Date("11-09-2024"); //11 month 09 days of 2024

console.log(mycreatedDate.toDateString());
console.log(mycreatedDate.toLocaleDateString());

console.log(mycreatedinddate.toLocaleString());


// timestamp
let mytimeStamp = Date.now();
console.log(mytimeStamp);
console.log(mycreatedDate.getTime());


console.log(Math.floor(Date.now()/1000))

let newDate = new Date();
console.log(newDate.getDay());
console.log(newDate.getTime().toLocaleString());
console.log(newDate.getMonth());



console.log(newDate.toLocaleString('default', {
    weekday: "long",
    timeZone: "timeZone"
}));



