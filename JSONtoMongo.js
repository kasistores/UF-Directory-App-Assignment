'use strict';
/* 
  Import modules/files you may need to correctly run the script. 
  Make sure to save your DB's uri in the config file, then import it with a require statement!
 */
var fs = require('fs'),
    mongoose = require('mongoose'), 
    Schema = mongoose.Schema, 
    Listing = require('./ListingSchema.js'), 
    config = require('./config'),
    input = require('./listings.json');

/* Connect to your database */
mongoose.connect(config.db.uri);

/* 
  Instantiate a mongoose model for each listing object in the JSON file, 
  and then save it to your Mongo database 
 */
for (var i = 0; i < input.entries.length; i++){
  var newListing;
  if(input.entries[i].coordinates != null){
    newListing = Listing ({
      code: input.entries[i].code,
      name: input.entries[i].name,
      coordinates: input.entries[i].coordinates,
      address: input.entries[i].address
    });
  }
  else{
    newListing = Listing ({
      code: input.entries[i].code,
      name: input.entries[i].name
    });
  }

  newListing.save(function(err){

    if (err) throw err;
    console.log('#' + i + ' User created!');

  });

}




// var myData = fs.readFile('listings.json', 'utf8', function(err, data){
//     if (err) throw err;
//     var parsedData = JSON.parse(data);
//   //look up insertMany
//     Listing.insertMany(parsedData.entries, function(err, docs){
//       if(err) throw err;
//     });
// });

/* 
  Once you've written + run the script, check out your MongoLab database to ensure that 
  it saved everything correctly. 
 */