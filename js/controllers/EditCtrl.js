'use strict';

// The AddCtrl holds the presentation logic for the Add screen
app.controller('EditCtrl',
  function ($scope, $rootScope, $location, $routeParams, productSrvc, notifySrvc, authSrvc) {
  	
      //
      //console.log(productData);
  	$scope.editProduct = function(productData){
console.log($routeParams.objectId);
	productSrvc.getProductById($routeParams.objectId)
  	.$promise
      .then(function (data) {
        $scope.productData = data;
        productSrvc.editProduct($routeParams.objectId, productData)
          .$promise
          .then(function(data){
            notifySrvc.showInfo("Edit successful!");
            $location.path('/listProducts');
          }, function(err){
            notifySrvc.showError("Edit failed",err);
          })
      }, function (err) {
        notifySrvc.showError("Get product failed", err);
        $location.path('/listProducts');
      });
//console.log({id:$routeParams.objectId});

          
        }; 
  });