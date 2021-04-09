const resources = require('./data/ed-resources.json')

exports.getResources = (name) => {
  resources.forEach((edResources) => {
    if(edResources.levels.includes('beginner')) {
      console.log(name, 'can start with', edResources.levels[0], edResources.description )
    }
  });
}