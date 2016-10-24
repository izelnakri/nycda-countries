var fs = require('fs'),
    ourArgument = process.argv[2];

fs.readFile('countries.json', function(error, data) {
  var array = JSON.parse(data.toString()),
      country;

  array.forEach(function(element) {
    if (element.name === ourArgument) {
      country = element;
    }
  });

  if (error) {
    throw error;
  }

  if (country) {
    console.log(country);
  } else {
    console.log(ourArgument + ' that you put in is not found in countries.json');
  }
});
