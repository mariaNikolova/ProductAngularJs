'use strict';

// The AddCtrl holds the presentation logic for the Add screen
app.controller('AddCtrl',
  function ($scope, $rootScope, $location, $routeParams, productSrvc, notifySrvc, authSrvc) {
  	//$rootScope.pageTitle = "Add Phone";
      $scope.productData = {};
      $scope.add = function(productData) {
        productData.ACL = { };
        productData.ACL[authSrvc.getCurrentUser().objectId] = { write:true, read:true };
        productSrvc.add(productData)
        .$promise
        .then(function (data) {
            notifySrvc.showInfo("Add Phone successful!");
            $location.path("/listProduct");
          }, function (err) {
            notifySrvc.showError("Add Phone failed", err);
          });
      };
  });