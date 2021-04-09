const { getCoffees } = require('./coffee')
const { getBeers } = require('./beers')
const { getResources } = require('./education')

const taster = 'Kevin'

getCoffees(taster)
getBeers(taster)
getResources(taster)