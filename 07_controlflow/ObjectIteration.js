const myObj = 
{
    "js" : "javascript",
    "cpp": "c++",
    "rb" : "ruby",
    "swift": "swift  by apple"
}


for(const key in myObj)
{
    // console.log(myObj[key]); //to print the key as well as the value
    console.log(`${key} is shortcut  for ${myObj[key]}`);
}

// Applying the for in loop inside an array
const arr_New = [12,2232,322232,232];
for(const key in arr_New)
{
    console.log(key); // it will returns the key of that is the index of the elements
    console.log(arr_New[key]); //returns the index values 
}





 

