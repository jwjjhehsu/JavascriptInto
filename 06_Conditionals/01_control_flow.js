let score  = 200;
if(score > 100)

{


    // let power = "fly"   //when the variable is declared as let it can not be accessed outside of the block scope

    
   var power = "fly"   // as it declared as var it has some issues in case of block scope and functional scope risseus therefore it can also access outsideo of its block also


    console.log(power)
}


console.log(`Your power is ${power}`)


const balance  =  100000
if(balance  > 500) console.log("test", console.log("test2"));



// lets first unserstand about the swithc statement in js 
let day = "monday"

switch(day)
{
   case "monday":
       console.log("its the week begin ..");
       break;

       case "saturday":
          console.log("its the weekend")
          break

          default :
          console.log("its not a week day")
}




// ternary operator

let result = (2>4)? "yes" : "no";
console.log(result);



// lets find the greatest number among three numbers
let  num1 = 12;
let  num2 = 22;
let num3 = 44;

let result2 = (num1>num2)? num1 :(num2>num3)?num2:num3;
console.log(result2 + " is the greateest among all the three numbers");

