var JSONFileReader = require('./json-file-reader'),
    ourArgument = process.argv[2];

JSONFileReader.readFile('countries.json', function(error, data) {
  var country;

  if (error) {
    throw error;
  }

  data.forEach(function(element) {
    if (element.name === ourArgument) {
      country = element;
    }
  });

  if (country) {
    console.log(country);
  } else {
    console.log(ourArgument + ' that you put in is not found in countries.json');
  }
});
