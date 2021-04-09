const { getCoffees, getCoffeesTitles } = require('./getCoffees')
const { getBeers } = require('./getBeers')
const { getResources } = require('./education')

let taster = 'Kevin'
let student = 'Kevin'


// getCoffees(taster)
// getBeers(taster)
getResources(student)
getCoffeesTitles(taster)