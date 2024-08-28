// IIFE ->  Immediately Invoked function expressions(IIFE)
// An IIFE (Immediately Invoked Function Expression) is a JavaScript function that runs as soon as it is defined. The name IIFE is promoted by Ben Alman in his blog.

// lets understand its syntax

// (function cchai()
//     {
//         console.log("DB CONNECTED ");

//     }()
// )


// Remember :
// where to use iife 
// so there is some scenariio when we get some global scope pollution inside the block scope so to immediately invoed the function after invoking it we use iife (immnediately invoked function expressionns )



//Whenever we use multiple iife we use ";" to separate them because because iife has problem to find where to stop
(function chai()   //Remember it is called "Named IIFE"
{
    console.log("your chai is ready .");

} )();
// we have to use the ; to identify the stopping of the first iife



  // AS here we dont have any function name we cllaed it as a normal or unnamed IIFE
(()=>                
{
    console.log("your chai is ready .");

} )();


// NOW LETS PASS AN ARGUMENT  TO THE IIFE 
((name)=>
{
    console.log(`Hello ${name}`);
})("hitesh");

