const req = require('request');
const arg = process.argv[2];
const fs = require('fs');
const url = 'https://api.thecatapi.com/v1/breeds/search?q=';

req(url + arg, (err, response, body) => {
  if (err) {
    console.log('Error requiring data! -->', err);
    return;
  } ;
  if (!arg) {
    console.log('Search is undefined');
    return
  };
  if (body.length === 2) {
    console.log('Breed was not found :(');
    return;
  };

  console.log('Status code -->', response && response.statusCode);

  const data = JSON.parse(body);
  console.log(data[0]["description"]);

});





