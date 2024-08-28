const coding = ["js","ruby","java","c++","rust"];

console.log(coding);
coding.forEach(  function (lang)
{
    console.log(lang);
    console.log(lang + " " + "helllo");

}   );

// we can also use the arrow function

coding.forEach((lang)=>
{
    console.log(lang)
})






// Similarly lets pass a function as for each loop call back function parameter
function printMe(item)
{
    console.log(item);

}

// lets pass it 
coding.forEach(printMe);


//Always remember we dont need to always pass the array elements inside the callback functions
//   we are also able to pass the index and also the entire array

coding.forEach( ( item, index, arr)=> {
    console.log(`${index} => ${item} => ${arr}`)

})



const myCoding = 
[ 
    {
        langName : " javascript",
        langFile: " .js",
            
            
    },

    {
        langName : " java",
        langFile: " .java",
            
            
    },

    {
        langName : " python",
        langFile: " .py",
            
            
    }
]



myCoding.forEach(  (item)=>{
    console.log(item.langName);

})


// But there is a catch that forEach loop doesnot return anything

const result = coding.forEach(( item) =>
{
    return item;
})

console.log(result); // undefined

//  so we need filter instread of for each loop

