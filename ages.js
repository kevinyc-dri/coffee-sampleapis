const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

// get an array of 21 or older

// const canDrink = []

// with for loop
// for (let i = 0; i < ages.length; i++) {
//   if (ages[i] >= 21) {
//     canDrink.push(ages[i])
//   }
// }

// with filter long way
// const canDrink = ages.filter(function (age) {
//   if (age >= 21) {
//     return true
//   }
// })
// console.log(canDrink)

const canDrink = ages.filter(age => age >= 21)

console.log(canDrink)