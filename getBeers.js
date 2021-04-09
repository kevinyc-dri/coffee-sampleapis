const allBeers = require('./data/allBeers.json')

exports.getBeers = (name) => {
  allBeers.forEach((beerRecipe) => {
    if (beerRecipe.rating.reviews >= 300)
      console.log(name, 'loves', beerRecipe.id, beerRecipe.name, 'reviews', beerRecipe.rating.reviews)
  })
}