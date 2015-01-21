'use strict';

// The HomeCtrl holds the presentation logic for the home screen
app.controller('HomeCtrl',
  function ($scope, $rootScope, $location, authSrvc) {
  	//var user = authSrvc.getCurrentUser();
  	//console.log(user);
  	//$scope.username = user.username;
  	//$scope.password = user.password;
  	//$scope.confirmPassword = user.confirmPassword;
  	//$rootScope.pageTitle = (authSrvc.isAnonymous()) ? "Wellcome" : "Home";
  	if(!authSrvc.isAnonymous()) {
  		var user = authSrvc.getCurrentUser();
      	console.log(user);
  		$scope.confirmPassword = user.confirmPassword;
  		$scope.username = user.username;
  		$scope.password = user.password;
  	}
});