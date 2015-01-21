'use strict';

var app = angular.module('app', [
  'ngRoute'
  , 'ngResource'
  , 'ui.bootstrap.pagination'
]);

app
.constant('baseSrvcUrl', 'https://api.parse.com/')
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
  });
 });