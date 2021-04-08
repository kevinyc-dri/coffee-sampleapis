const coffees = require('./data/coffee.json')

// console.log('this is my list of coffees', coffees)
exports.getCoffees = function () {
  coffees.forEach((recipe) => {
    if (
      recipe.ingredients.includes('Milk') ||
      recipe.ingredients.includes('Cream') ||
      recipe.ingredients.includes('Steamed Milk') ||
      recipe.ingredients.includes('1oz Steamed Milk')
    ) {
      console.log(recipe.id, recipe.title)
    }
  })
}

exports.getBeer = () => {
  beer.forEach(recipe => {
    console.log(recipe)
  })
}