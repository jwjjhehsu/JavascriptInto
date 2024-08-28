// first lets leran about all the  basic loops

let arr = [122,23,232,3222]
// While loop
let i = 0
while(i < 5)
{
    console.log(arr[i])
    i++;
}



// for loop
for(i = 0 ;i<5;i++)
{
    console.log(arr[i]);``
}

// lets find the sum of all the element using for loop

let sum = 0;

for (let i = 0; i < 5; i++) {
  sum += arr[i];
}

console.log(sum);



const arrme =[12,233,242,324222,2];
for(const num of arrme)

  {
    console.log(num);

  }


  const greeting = "hello world";
  for(const greet of greeting)
  {
    console.log("each char is " + greet);
   
  }

  // Maps 
const map  = new Map()
map.set("IN ", "india");
map.set("USA","united sattes");
map.set("FR","france");
//  As it memorize the key value pair and insertion order of them so if we want to insert a new entry with same key value pairs it is going to not include it

map.set("IN","india");


console.log(map);


// Applying loops to the map 
for(const [key,value] of map)

  {
    console.log(key,"=>",value);
  }




  // lets try it on objects
  const myObject = 
  {
    'game 1 ': "NFS",
    'game 2': "Spiderman"
  }

  for(const [key,value] of myObject)
  {
    console.log(key, " => ",value);

  }

  //showing object is not iterable


  