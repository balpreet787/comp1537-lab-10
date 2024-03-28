
let unicorns = require('./data.js')


// Use `filter`, `map`, `reduce`, and `sort` JS functions to solve each the following independently.

// 1. Find the male unicorns weigh more than 700 pounds

// result = unicorns.filter(
//   (aUnicorn) => aUnicorn.gender == 'm' && aUnicorn.weight > 700
// )
// console.log(result);
// console.log(result.length);


// 2. Find the unicorns that have no vampire field

// result = unicorns.filter(
//   (aUnicorn) => aUnicorn.vampires == undefined
// )
// console.log(result);
// console.log(result.length);

// 3. Find the unicorns that like apples or carrots

// result = unicorns.filter(
//   (aUnicorn) =>  aUnicorn.loves.includes("apple") || aUnicorn.loves.includes("carrot")
// )
// console.log(result);
// console.log(result.length);


// 4. Find the female unicorns that either love apples or weigh less than 500 pounds
// result = unicorns.filter(
//   (aUnicorn) => aUnicorn.gender == 'f' && (aUnicorn.weight < 500 || aUnicorn.loves.includes("apple")))
// console.log(result);
// console.log(result.length);

// 5. Decrease unicorn Pilot’s number of vampires by 2
// unicorns =  unicorns.map((aUnicorn)=>{
//   if(aUnicorn.name == "Pilot"){
//     aUnicorn.vampires -= aUnicorn.vampires
//   }
//   return aUnicorn
// })
// console.log(result)

// 6. Add “sugar” to the list of food unicorn Aurora loves to eat
// unicorns =  unicorns.map((aUnicorn)=>{
//   if(aUnicorn.name == "Aurora"){
//     aUnicorn.loves.push("sugar")
//   }
//   return aUnicorn
// })
// console.log(result)


// 7. Give all of the unicorns vaccine (set vaccinated to be true)
// unicorns = unicorns.map((aUnicorn)=>{
//   aUnicorn["vaccinated"] = true;
//   return aUnicorn
// })
// console.log(result)


// 8. Sort the unicorns based on weights decreasingly
// unicorns = unicorns.sort(function (a, b) { return b.weight - a.weight })
// console.log(unicorns)

// 9. Sort the unicorns based on the names increasingly, then the number of vampires decreasingly
// unicorns = unicorns.sort((a, b)=>{
//   if (a.name == b.name){
//     if (a.vampires > b.vampires)
// {
//   return  -1
// }
// else
// { return +1 }
//   }
// if (a.name < b.name)
// {
//   return  -1
// }
// else
// { return +1 }
// })
// console.log(unicorns)
// 10. Get the second and third heaviest unicorns
// unicorns = unicorns.sort(
//   (a, b) => {
//     if (a.weight > b.weight)
//       return -1
//     else
//       return +1
//   } 
// )

// console.log( unicorns.slice(1, 3))

// 11. Count the number of unicorns who have more than 50 vampires
// const result = unicorns.filter((u)=> u.vampires > 50)
// console.log(result.length)

// 12. Find the average weight of unicorns that love apples
// const loves_apples_arr = unicorns.filter(u=> u.loves.includes('apple'))
// sum = 0
// for(x of loves_apples_arr){
//   sum += x.weight
// }
// console.log(sum/loves_apples_arr.length)




