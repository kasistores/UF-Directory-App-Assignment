/* Fill out these functions using Mongoose queries*/
var mongoose = require('mongoose'),
    Listing = require('./ListingSchema.js'),
    config = require('./config');

mongoose.promise = global.promise;
mongoose.connect(config.db.uri);

var findLibraryWest = function() {
  /* 
    Find the document that contains data corresponding to Library West,
    then log it to the console. 
   */
  Listing.find({ code: 'LBW' }, function(err, list) {
    if (err) throw err;
  
    // object of the user
    else{
      console.log(list);
    }
  });
};

var removeCable = function() {
  /*
    Find the document with the code 'CABL'. This cooresponds with courses that can only be viewed 
    on cable TV. Since we live in the 21st century and most courses are now web based, go ahead
    and remove this listing from your database and log the document to the console. 
   */
  Listing.findOneAndRemove({ code: 'CABL' }, function(err) {
    if (err) throw err;
  
    // we have deleted the user
    console.log('User deleted!');
  });

};
var updatePhelpsLab = function() {
  /*
    Phelps Laboratory's address is incorrect. Find the listing, update it, and then 
    log the updated document to the console. 
   */
  Listing.findOneAndUpdate({ code: 'PHL' }, { address: '1884-1900 Gale Lemerand Dr, Gainesville, FL 32603' }, function(err, list) {
    if (err) throw err;
  
    // we have the updated user returned to us
    console.log(list);
  });
};

var retrieveAllListings = function() {
  /* 
    Retrieve all listings in the database, and log them to the console. 
   */
  Listing.find({}, function(err, list) {
    if (err) throw err;
  
    // object of all the users
    console.log(list);
  });
};

findLibraryWest();
removeCable();
updatePhelpsLab();
retrieveAllListings();
