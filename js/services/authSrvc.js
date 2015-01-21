'use strict';
app.factory('authSrvc',
  function ($http, $resource, $parse,baseSrvcUrl, parseAppId, parseRestApiKey) {
  	return{
      getCurrentUser : function() {
        if (sessionStorage['currentUser']) {
          return JSON.parse(sessionStorage['currentUser']);
        } else {
          return undefined;
        }
      }
  	  , getAuthHeaders : function() {
        var result = {
          'X-Parse-Application-Id': parseAppId,
          'X-Parse-REST-API-Key': parseRestApiKey
        };
        if (sessionStorage['currentUser']) {
          result['X-Parse-Session-Token'] = this.getCurrentUser()['sessionToken'];

        }
        return result;
      }
      , setAuthHeaders: function () {
        var headers = this.getAuthHeaders();
        Object.keys(headers).forEach(function (key) {
          $http.defaults.headers.common[key] = headers[key];
        });
      }
      ,register: function(userData, success, error) {
      	console.log(userData);
      	this.setAuthHeaders();
        return $resource(baseSrvcUrl + 'users', {
            username: "@username" 
            ,password:"@password"
            ,confirmPassword:"@confirmPassword"
          }).save(userData);
      }
      , login: function(userData, success, error) {
          this.setAuthHeaders();
          return $resource(baseSrvcUrl + 'login', {
            username:"@username"
            , password:"@password"
        }).get(userData)
        .$promise
        .then(function (data) {
          sessionStorage['currentUser'] = JSON.stringify(data);
          success();
        }, function (err) {
          error();
        });

      }
      ,isAnonymous : function() {
        return sessionStorage['currentUser'] == undefined;
      }
    }
  });