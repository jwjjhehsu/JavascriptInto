const myName = "priyaraj";

//in modern web developement it is not recommended to use this instead of this we can use
const repoCount = 50;
console.log(myName + repoCount + "values");  

// STRING INTERPOLATION
// String interpolation is a programming technique that allows you to insert variable values directly into a string by using placeholders. This makes it easier to create dynamic strings without needing to concatenate multiple parts manually.
console.log(`Hello my name is ${myName.toUpperCase()} and i have ${repoCount}many reositories in git hub`)


// Mastering the string and string methods is all about the strings understading

// we can also create string by calling the new keyword with the constructor calling 
let newName = new String("likudas");
console.log(newName);
console.log(myName);


// 2_ 
// we can also able to use the string methods without declaring  them using any variable
console.log("hitesh".charAt(2));
console.log("hitesh"[4]);



// Methods
console.log(newName[0]);
console.log(newName.__proto__);  //it also not required
console.log(newName.length);
console.log(newName.toLowerCase());
console.log(newName.toUpperCase());


// to know the character at a particular index
console.log(newName.charAt(2));
// to know the index of a particular character inside a string
console.log(newName.indexOf("l"));


// Another important method
// Substring
let anotherString = "priyaraj-mohnaty";
console.log(anotherString.substring(0,5));
                        // (starting,numberofcharacters)


// 2) Slice
// The slice() method of String values extracts a section of this string and returns it as a new string, without modifying the original string.
let strunique = "the quick brown fox jumps over the lazy dog.";
console.log(strunique.length);

console.log(strunique.slice(41));
//Basically it will skip the first 41 character and then prints the remaining
console.log("the answer is "  +strunique.slice(4,10));


console.log(strunique.slice(-4));
// Expected output: "dog."

console.log(strunique.slice(-9, 5));
// Expected output: "lazy"


// Trim()
// The trim() method of String values removes whitespace from both ends of this string and returns a new string, without modifying the original string.
const newStringone = "   hitesh   ";
console.log(newStringone.trim());
console.log(newStringone);

// Replace
// The replace() method of String values returns a new string with one, some, or all matches of a pattern replaced by a replacement. The pattern can be a string or a RegExp, and the replacement can be a string or a function called for each match. If pattern is a string, only the first occurrence will be replaced. The original string is left unchanged.

const url = "https://hitesh.com/hitesh%20chaoudhry";
console.log(url.replace("%20", "-"));

// to check the availability of a particualr word or letter we use 
console.log(url.includes("hitesh")) ;//always returns a boolean value


// String.prototype.repeat()

// The repeat() method of String values constructs and returns a new string which contains the specified number of copies of this string, concatenated together.

const myMood = "happy";
console.log(`I feel very  ${myMood.repeat(5)} now`);


// Split
// The split() method of String values takes a pattern and divides this string into an ordered list of substrings by searching for the pattern, puts these substrings into an array, and returns the array.

const new_Name = "Hitesh";
console.log(typeof new_Name);

console.log(new_Name.split('-'));
console.log( new_Name.split(""));
console.log(typeof new_Name.split(""));




