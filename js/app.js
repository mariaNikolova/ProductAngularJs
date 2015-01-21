'use strict';

var app = angular.module('app', [
  'ngRoute'
  , 'ngResource'
  , 'ui.bootstrap.pagination'
]);

app
.constant('baseSrvcUrl', 'https://api.parse.com/1/')
.constant('pageSize', 2)
.constant('parseAppId', 'PJ23o3kax8LaRSfbslSrkxF1VdMHshRvM52622TB')
.constant('parseRestApiKey', 'xevclGLfrpb01brFAzpMVNbJXVFfimYarqUSdq9H');

app.config(function ($routeProvider) {
  $routeProvider
  .when('/home', {
    templateUrl: 'templates/home.html'
    , controller: 'HomeCtrl'
  })
  .when('/login', {
    templateUrl: 'templates/login.html'
    , controller: 'LoginCtrl'
	})
  .when('/register', {
    templateUrl: 'templates/register.html'
    , controller: 'RegisterCtrl'
  })
  .when('/logout', {
    templateUrl: 'templates/home.html'
    , controller: 'AppCtrl'
  })
  .when('/welcomeUser', {
    templateUrl: 'templates/partial/welcomeUser.html'
    , controller: 'HomeCtrl'
  });
 });