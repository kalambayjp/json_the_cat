const req = require('request');
const url = 'https://api.thecatapi.com/v1/breeds/search?q=';

const fetchBreedDescription = function(breed, callback) {
  let breedDescription;
  req(url + breed, (err, _, desc) => {
    if (err) {
      callback(err, null);
      return;
    } 
    if (!breed) {
      callback("Search term undefined!", null);
      return;
    }
    const data = JSON.parse(desc);
    
    if (data[0]) {
      breedDescription = data[0]["description"];
    }
    // console.log('data[0] -->', data[0]);
    callback(err, breedDescription);

  });
}

module.exports = {
  fetchBreedDescription
}