'use strict';
app.controller("RegisterCtrl", 
	function($scope, $location, $rootScope,authSrvc, notifySrvc) {
	$scope.isRegister = $location.$$path.indexOf("/register") != -1;
	if($scope.isRegister)
	{
		$rootScope.pageTitle = "Register"
    $scope.userData = {};
	 $scope.register = function(userData) {
  	 console.debug(userData);
        authSrvc.register(userData)
        .$promise
        .then(function (data) {
            notifySrvc.showInfo("Register successful!");
            $location.path("/login");
          }, function (err) {
            notifySrvc.showError("User registration failed", err);
          });
      };
	}
});