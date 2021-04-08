const beers = require('./data/beer.json')

exports.getBeers = (name) => {
  beers.forEach((beerRecipe) => {
    if (beerRecipe.rating.reviews >= 300)
      console.log(name, 'loves', beerRecipe.id, beerRecipe.name, 'reviews', beerRecipe.rating.reviews)
  })
}