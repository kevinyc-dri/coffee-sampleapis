const fetch = require('node-fetch');

let allCoffees = []

fetch('https://api.sampleapis.com/coffee/hot')
  .then(response => response.json())
  .then(data => {
    console.log(data)
    allCoffees = data
  })
  .catch(err => console.log('Error fetching API: ', err))

// console.log('this is my list of coffees', coffees)
exports.getCoffees = (name) => {
  allCoffees.forEach((recipe) => {
    if (
      recipe.ingredients.includes('Milk') ||
      recipe.ingredients.includes('Cream') ||
      recipe.ingredients.includes('Steamed Milk') ||
      recipe.ingredients.includes('1oz Steamed Milk')
    ) {
      console.log(name, 'cant touch this', recipe.id, recipe.title)
    }
  })
}
// name this function get coffees and export it
exports.getCoffeesTitles = function() {

  // filter all coffees which is an array of objects
  const coffeeTitles = allCoffees.filter(function(item){

    // return each coffee with its title
    return item.title
  })

  // showing new array with just titles
  console.log('here is my new array with just titles', coffeeTitles)
}
