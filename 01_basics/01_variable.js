const accountId = 144553;
let accountEmail = "hitesh@google.com"
//  it is always pereferable to use the let instead of var eywod because the var has block scope and functional scope issues
var accountPassword = "12345"
accountCity = "jaipur"

let accountState;



// accountId= 12;    // can not be re-initialized


accountEmail = "liku@mail.com"
accountPassword = " 4444"
accountCity = "delhi"

console.log(accountId)
console.log(accountEmail)
console.log(accountPassword);
console.log(accountCity);
console.log(accountState);


//  to print all the value we use 
console.table([accountEmail,accountId,accountPassword,accountState,accountCity])




