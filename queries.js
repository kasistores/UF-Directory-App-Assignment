/* Fill out these functions using Mongoose queries*/
var mongoose = require('mongoose');
var Listings = require('./ListingSchema.js');
var config = require('./config');
mongoose.connect(config.db.uri);

var findLibraryWest = function() {
  /* 
    Find the document that contains data corresponding to Library West,
    then log it to the console. 
   */
  Listings.find({ code: 'LBW' }, function(err, listing) {
    if (err) throw err;
  
    // object of the user
    console.log(listing);
  });
};

var removeCable = function() {
  /*
    Find the document with the code 'CABL'. This cooresponds with courses that can only be viewed 
    on cable TV. Since we live in the 21st century and most courses are now web based, go ahead
    and remove this listing from your database and log the document to the console. 
   */
  Listings.find({ code: 'CBL' }, function(err, listing) {
    if (err) throw err;
  
    // delete him
    user.remove(function(err) {
      if (err) throw err;
  
      console.log('cable successfully deleted!');
    });
  });

};
var updatePhelpsLab = function() {
  /*
    Phelps Laboratory's address is incorrect. Find the listing, update it, and then 
    log the updated document to the console. 
   */
  Listings.find({ code: 'PHL' }, function(err, listing) {
    if (err) throw err;
    listing.address = '1884-1900 Gale Lemerand Dr, Gainesville, FL 32603';
    // we have the updated user returned to us
    console.log(listing);
  });
};
var retrieveAllListings = function() {
  /* 
    Retrieve all listings in the database, and log them to the console. 
   */
  Listings.find({}, function(err, listings) {
    if (err) throw err;
  
    // object of all the users
    console.log(listings);
  });
};

findLibraryWest();
removeCable();
updatePhelpsLab();
retrieveAllListings();
