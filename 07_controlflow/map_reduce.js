const myNumbers = [12,44,553,24,234,22];
const newNums = myNumbers.map ( ( nums)=> nums+10)
console.log(newNums);

// Chaining in maps
const myNums = myNumbers.map( (num)=> (num*10)).filter((nums)=> 
{
     return nums >=40;
});
console.log(myNums);




console.log(".....................Reduce method  . ..................................")
const prices = [122,44,33,433,4333];
const intial = 0;
const total = prices.reduce((acc,cur)=>
{
    return acc + cur
},intial)



console.log(total);


// Last practice on reduce method

const Myshopping = [
    {
        coursename : "java",
        price : 5677
    },
    {
        coursename : "python",
        price : 2999
    },
    {
        coursename : "c++",
        price : 2677
    }
]


// Again not always used in our projects we have to do some other checks before calculating ...
const total_cart = Myshopping.reduce( (acc, item)=> (acc + item.price), 0);

console.log(`i have toally ourchased ${total_cart} rupees amount of paid courses`);
