angular.module('listings').controller('ListingsController', ['$scope', 'Listings', 
  function($scope, Listings) {
    $scope.listings = Listings;
    $scope.detailedInfo = {};
    $scope.searchResult = "";
    $scope.newName = "";
    $scope.newCode = "";
    $scope.newAddress = "";

    /* 
      Implement these functions in the controller to make your application function 
      as described in the assignment spec. 
     */

    //Add to the list
    $scope.addListing = function() {
      console.log("Worked?");
      $scope.listings.push({
            "code": $scope.newCode, 
            "name": $scope.newName,
            "address": $scope.newAddress}
      );
      alert("You've submitted the following information:\ncode: " + $scope.newCode + "\nname: " + $scope.newName + "\naddress: " + $scope.newAddress + "\n");
      $scope.newName = "";
      $scope.newCode = "";
      $scope.newAddress = "";
      };




    //delete off the list
    $scope.deleteListing = function(index) {
      console.log("test test");
      var location = $scope.listings.indexOf(index);
      if (location !== -1) {
        $scope.listings.splice(location, 1);
      }
    };



    //show the details
    $scope.showDetails = function(index) {
      console.log("Did this work?")
      $scope.detailedInfo = index
    };

  }
]);