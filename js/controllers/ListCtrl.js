'use strict';

// The AddCtrl holds the presentation logic for the Add screen
app.controller('ListCtrl',
  function ($scope, $rootScope, $location, $routeParams, productSrvc, notifySrvc, authSrvc) {
//rootScope.pageTitle = "List PhoneBook" ;
    $scope.products = [];
    $scope.list = function() {
      productSrvc.getProduct($routeParams.objectId)
      .$promise
      .then(function (data) {
        $scope.products = data.results ;
          }, function (err) {
          notifySrvc.showError("Add Product failed", err);
        });
    };
    $scope.list();
  }
);