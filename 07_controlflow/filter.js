const myNums = [12,223,2332,42,232,3,4444,5,22];
const res = myNums.filter( (nms)=>
{
    return nms + 2
})


console.log(res);


// if we want to do this using forEach loop we can also do that
const new_Nums = [];

myNums.forEach(  ( nums)=> 
{
    if(nums > 44)
    {
        new_Nums.push(nums);
    }
})

console.log(new_Nums);



// lets do an one more hands on on filter
const myLab = [{title: "hello world",genre : "coding", publish: 2003,edition : 2014 },
    {title: "History of India",genre : "History", publish: 2002,edition : 2013 },
    {title: "Gegraphic manu",genre : "Geography", publish: 2004,edition : 2018 },
    {title: "hello coders",genre : "History", publish: 2007,edition : 2019 },
    {title: "Non sychsitist",genre : "Holding", publish: 2003,edition : 2014 }
   
]

console.log(myLab);

// Lets apply a filter to get the specified datas and lets manipulates them
const mybooks = myLab.filter( ( bk) => 
{
    return (bk.genre === "History" && bk.publish >= 2000);

})

console.log(mybooks);
