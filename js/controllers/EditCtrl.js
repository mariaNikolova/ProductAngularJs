'use strict';

// The AddCtrl holds the presentation logic for the Add screen
app.controller('EditCtrl',
  function ($scope, $rootScope, $location, $routeParams, productSrvc, notifySrvc, authSrvc) {
  	
      //console.log($routeParams.objectId);
      //console.log(productData);
  	$scope.editProduct = function(productData){

	productSrvc.getProduct($routeParams.objectId)
  	.$promise
      .then(function (data) {
        $scope.productData = data;
      }, function (err) {
        notifySrvc.showError("Get product failed", err);
        $location.path('/listProducts');
      });


          productSrvc.editProduct($routeParams.objectId, productData)
          .$promise
          .then(function(data){
            notifySrvc.showInfo("Edit successful!");
            $location.path('/listProducts');
          }, function(err){
            notifySrvc.showError("Edit failed",err);
          })
        }; 
  });