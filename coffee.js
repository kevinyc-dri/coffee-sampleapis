const coffees = require('./data/coffee.json')

// console.log('this is my list of coffees', coffees)
exports.getCoffees = (name) => {
  coffees.forEach((recipe) => {
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
