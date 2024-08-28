var c = 333;
let name = "priayraj"
let val1 = 88
{
    let var1 = 33;
    const var2 = 55;
    c = 12000;
    console.log(c); //it can be accessible 
    console.log(`myname is ${name}`) //accessible because it declared as global

}

 console.log(val1);
// console.log(val2);
console.log(c); // modified inside the block scope


// lets learn something about the functional scopes
function one ()
{
    const username = "liku";

    function two()
    {
        const wesbite = "chai aur code"
        console.log(`hello ${username}`)
    }

    console.log(website)

    two()
}

one()


// lets understand the block scope using the if else block
if(true)
{
    const username = "hitesh"
    if(username == "hitesh")
    {
        const website = "chai aur code"
        console.log(username)
    }

    // console.log(website)
}

console.log(username)
